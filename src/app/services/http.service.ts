import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GoldenShot} from '../goldenShot';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private goldenShotUrl = 'http://localhost:4221/goldenShot';
  // private goldenShotUrl = ' https://golden-shot-server.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getGoldenShots(): Observable<GoldenShot[]> {
    return this.http.get<GoldenShot[]>(this.goldenShotUrl);
  }
}
