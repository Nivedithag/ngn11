import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registered = false;
	submitted = false;
	userForm: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {

  }
  invalidName()
  {
  	return (this.submitted && this.userForm.controls.name.errors != null);
  }
  invalidDept()
  {
  	return (this.submitted && this.userForm.controls.dept.errors != null);
  }
  invalidProject()
  {
  	return (this.submitted && this.userForm.controls.project.errors != null);
  }
  invalidDateFrom()
  {
  	return (this.submitted && this.userForm.controls.datefrom.errors != null);
  }
  invalidDateTo()
  {
  	return (this.submitted && this.userForm.controls.dateto.errors != null);
  }
  invalidWip()
  {
  	return (this.submitted && this.userForm.controls.wip.errors != null);
  }
  invalidKa()
  {
  	return (this.submitted && this.userForm.controls.ka.errors != null);
  }
  invalidNexts()
  {
  	return (this.submitted && this.userForm.controls.nexts.errors != null);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
  		name: ['', Validators.required],
      dept: ['', Validators.required],
      project: ['', Validators.required],
      datefrom: ['', Validators.required],
      dateto: ['', Validators.required],
      wip: ['', Validators.required],
      ka: ['', Validators.required],
  		nexts: ['', Validators.required],
  })
}
onSubmit()
  {
  	this.submitted = true;

  	if(this.userForm.invalid == true)
  	{
  		return;
  	}
  	else
  	{
  		this.registered = true;
  	}
  }

}
