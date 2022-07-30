import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {


  intercept(
    requeqt:HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    requeqt = requeqt.clone(
      {


        setParams: {
          key: '8661b3e86bfb40e2bba9340c2c5e7681',
        }
      });
    return next.handle(requeqt);
  }


}
