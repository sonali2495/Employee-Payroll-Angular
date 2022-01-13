import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // updateEmployee() {
  //   console.log(this.employee);
  //   this.empService.updateEmployee(this.employee).subscribe();
  //   this.router.navigate(['update'])
  // }

}
