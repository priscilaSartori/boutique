import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IProduct } from 'src/app/interfaces/IProduct';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteItems: IProduct[] = [];
  products: IProduct[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private favoritesService: FavoritesService,
  ) {}

  ngOnInit() {
    this.favoritesService.favoriteItems
      .pipe(takeUntil(this.destroy$))
      .subscribe(favorites => {
        this.favoriteItems = favorites;
      });
  }

  adicionarItem(item: any): void {
    this.favoritesService.addToCart(item.product);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
