
import {request} from "./http-common";
import { ProductItem } from "../shared/models/models";


class HttpService {

  getAll(url:string) {
    return request.get<ProductItem[]>(url)
  }
  postProduct(url:string,product: ProductItem) {
    return request.post<ProductItem>(url,product)
  }
  deleteProduct(url:string) {
    return request.delete(url)
  }
}

export default new HttpService()
