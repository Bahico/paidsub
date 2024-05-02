import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { API_URL } from '../app.constans';

@Injectable()
export class RequestHandlerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        authorization: "qwerty",
      },
    });

    if (false && !request.params.has('skipFake') && !request.url.includes("uploadVideo")) {
      const prefix = request.url.substring(26, request.url.length);
      const extension = request.params.get('extension') || 'json';
      request = request.clone({
        method: 'GET',
        url: `${window.location.origin}/assets/fake/${prefix}.${extension}`,
        params: new HttpParams()
      })
    }

    return next.handle(request);
  }

  private static getErrorMessage(response: HttpErrorResponse): string {
    if (!response.error) {
      return response.statusText;
    }

    if (typeof response.error.error === 'string') {
      return response.error.error;
    }

    if (response.error.hasOwnProperty('exception')) {
      return response.error.exception.detail;
    }

    return response.error.title;
  }
}
