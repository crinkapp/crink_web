import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(environment.API_URL)) {
      req = req.clone({
        withCredentials: true,
      });
    }
    return next.handle(req).pipe(catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        // this happens if the user was logged in but his session expired,
        // in which case we delete the stored user and redirect to the login page
        switch (err.status) {
          case 401:
            if (req.url !== `${environment.API_URL}/user`) {
              this.auth.onSignOut();
            }
            break;
          default:
          // do nothing (should be caught by each component)
        }
      }
      return throwError(err);
    }));
  }
}
