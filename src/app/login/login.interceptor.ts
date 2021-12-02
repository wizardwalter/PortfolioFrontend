import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserService } from "../shared/user.service";

@Injectable()
export class LoginInterceptor implements HttpInterceptor{

  constructor(private userService:UserService){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const authToken = this.userService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
