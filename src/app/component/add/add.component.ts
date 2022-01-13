import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  employee: Employee = new Employee();


  employeeForm!: FormGroup;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  date: any
  Department: Array<any> = [
    {
      name: 'HR',
      value: 'HR'
    },
    {
      name: 'Sales',
      value: 'Sales'
    },
    {
      name: 'Finance',
      value: 'Finance'
    },
    {
      name: 'Engineer',
      value: 'Engineer'
    },
    {
      name: 'Others',
      value: 'Others'
    },

  ]

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      profilePic: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      note: ['', [Validators.required]],
      isArray: this.formBuilder.array([], [Validators.required]),
      service: ['advance']
    });
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSubmit() {
    console.log(this.employeeForm.value);
    let reqData={
      name:this.employeeForm.value.fullName,
      imagePath:this.employeeForm.value.profilePic,
      gender:this.employeeForm.value.gender,
      salary:this.employeeForm.value.salary,
      //date:this.employeeForm.value.date,
      notes:this.employeeForm.value.note,
      departments:this.employeeForm.value.isArraythis,
    }

    this.employeeService.addEmployee(reqData).subscribe((response:any)=>{
      console.log(response);
    })

  }
  onChange(event:any) {
    const isArray: FormArray = this.employeeForm.get('isArray') as FormArray

    if (event.target.checked) {
      isArray.push(new FormControl(event.target.value));
    }
    else{
      let i:number=0;
      isArray.controls.forEach((item:any)=>{
        if(item.value==event.target.value){
          isArray.removeAt(i);
          return;
        }
        i++;
      })
    }
  }

  
}
