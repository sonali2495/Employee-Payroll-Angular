import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  employee?: Employee[];


  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    // this.employee = [
    //   {
    //     id: 1,
    //     name: "Sonali G",
    //     imagePath: "../../../assets/profile-images/Ellipse -4.png",
    //     gender: "female",
    //     departments: "Marketting",
    //     salary: "97000",
    //     notes: "demo1"
    //   },
    //   {
    //     id: 2,
    //     name: "Chris E",
    //     imagePath: "../../../assets/profile-images/Ellipse -4.png",
    //     gender: "male",
    //     departments: "It",
    //     salary: "87000",
    //     notes:"demo2"
    //   }
    // ];
    this.getAllEMployees();
  }

  onAdd() {
    this.router.navigateByUrl('/add')
  }

  getAllEMployees() {
    this.employeeService.getAllEmployee().subscribe((response:any)=>{
      console.log(response);
      this.employee = response;
      //   this.bookService.deleteWishlistService(book.product_id._id).subscribe((response:any)=>{
      // console.log(response);
    })
  }
}


