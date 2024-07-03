export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
  totalPrice: number;
}

export interface GetProductsResponse {
  products: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    quantity: number;
    totalPrice: number;
  }[];
}