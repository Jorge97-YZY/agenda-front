import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../models/agenda';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  baseUrl = environment.baseUrl;

constructor(
  private http: HttpClient
) { }

findAll(): Observable<Agenda[]>{
  return this.http.get<Agenda[]>(this.baseUrl).pipe(
    tap(console.log)
  );
}

findAllClose(): Observable<Agenda[]>{
  return this.http.get<Agenda[]>(`${this.baseUrl}/close`)
}

}
