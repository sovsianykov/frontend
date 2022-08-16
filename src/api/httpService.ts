
import {request} from "./http-common";
import { ProductItem } from "../shared/models/models";


class HttpService {

  getAll(url:string) {
    return request.get<ProductItem[]>(url)
  }
  postProduct(url:string) {
    return request.get<ProductItem[]>(url)
  }
}

export default new HttpService()
