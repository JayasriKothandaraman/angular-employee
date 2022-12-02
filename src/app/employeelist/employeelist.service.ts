import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {

  private employee = [];
  private apiUrl = 'http://localhost:8080/api/employees';
  constructor(private httpClient: HttpClient) {
   }
  findAll(): Observable<Employee[]> {
   return this.httpClient
   .get<Employee[]>(this.apiUrl);
  }
}
