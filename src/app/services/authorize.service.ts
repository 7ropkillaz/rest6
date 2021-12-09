import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {observable, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private httpService: HttpService) { }

  public login(username: string, password: string): Observable<boolean> {
    let event: Subject<boolean> = new Subject<boolean>();
    this.httpService.login(username, password).subscribe(
      (data: string) => {
        console.log(data);
        if (data != null) {
          sessionStorage.setItem("authorization", "true");
        }
        event.next(true);
      },
      error => {
        event.next(false);

      }
    )
    return event;

  }

  public logout() {
    sessionStorage.removeItem("authorization");
    window.location.href="/";


   /* this.httpService.logout().subscribe(
      next => {
        this.eventUpdateAuth.next('chained');
        window.location.href = '/';
      },
      error => {
        alert("Some error");
      }
    );
    this.user = undefined;
    localStorage.removeItem(USER_KEY);
    this.tokenStorage.clearTokenInfo();
    this.eventUpdateAuth.next("logout");*/
  }
  public isAuthorize(): boolean {
    return sessionStorage.getItem("authorization") != null;
  }
}
