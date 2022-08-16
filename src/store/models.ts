import { ProductItem } from "../shared/models/models";

export interface ProductsState {
  products: ProductItem[];
  isLoading: boolean;
  error: string;
}
