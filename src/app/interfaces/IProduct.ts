export interface IProduct {
  id: number;
  name: string;
  description: string;
  gender: string,
  category: string;
  // color: string;
  // tamanho: string;
  price: number;
  imageUrl: string;
  isfavorite: boolean;
  toCart: boolean;
  isLaunch: boolean,
  promotion: boolean,
}