import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BirthdayManagerService {
  private urlBirthday = "https://bday-alert-api.herokuapp.com/birthday";

  constructor(private http: HttpClient) { }

  getBirthdaysData(): Observable<object[]>{
    return this.http.get<object[]>(this.urlBirthday)
  }
}
