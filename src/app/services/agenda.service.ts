import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../models/agenda';
import {tap} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  baseUrl = environment.baseUrl;

constructor(
  private http: HttpClient,
  private snack: MatSnackBar
) { }

findById(id: any): Observable<Agenda>{
  return this.http.get<Agenda>(`${this.baseUrl}/${id}`);
}
findAll(): Observable<Agenda[]>{
  return this.http.get<Agenda[]>(this.baseUrl).pipe(
    tap(console.log)
  );
}

findAllClose(): Observable<Agenda[]>{
  return this.http.get<Agenda[]>(`${this.baseUrl}/close`)
}
update(agenda: Agenda): Observable<Agenda>{
  return this.http.put<Agenda>(`${this.baseUrl}/${agenda.id}`, agenda);
}
delete(id: any): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}
create(agenda: Agenda): Observable<Agenda>{
  return this.http.post<Agenda>(this.baseUrl, agenda);
}

message(msg: String): void{
  this.snack.open(`${msg}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 4000
  } );
}

}
