import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:8080/employeepayrollservice/create"
  constructor(private httpClient: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  addEmployee(employee?: Employee){
    return this.httpClient.post(`${this.baseUrl}`, employee)
  }

  // updateEmployee(employee?: Employee): Observable<Object>{
  //   return this.httpClient.put<Object>(`${this.baseUrl}/${this.id}`, employee)
  // }
}
