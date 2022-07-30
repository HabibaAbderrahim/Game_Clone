import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {


  intercept(
    requeqt:HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    requeqt = requeqt.clone(
      {
        setHeaders: {
          'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },

      });
    return next.handle(requeqt);
  }


}
