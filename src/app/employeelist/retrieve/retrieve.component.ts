import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeelistService } from '../employeelist.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{

  public employees: Employee[] = [];
  constructor(private employeeService : EmployeelistService,
    private router:Router){

  }
  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees() {
    console.log("Testtt")
     this.employeeService.findAll().subscribe({
     next: employees =>{
         this.employees=employees
     }
    });
  }
}
