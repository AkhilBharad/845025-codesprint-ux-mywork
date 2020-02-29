import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactusService } from '../contactus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  registerContactUs:FormGroup  ;

  constructor(private formBuilder:FormBuilder,private contactusService:ContactusService,private router:Router) { }

  ngOnInit() {

    this.registerContactUs=this.formBuilder.group({

      id: [],
      name: ['', Validators.required],
     email:['', Validators.required],
     feedback:['', Validators.required],
     message:['', Validators.required],
     
    });

  }



    addCard(){
      this.contactusService.saveContact(this.registerContactUs.value).subscribe(data =>
        {
          this.router.navigate([''])
        });
  
    }
  
    onSubmit(){
      console.log(this.registerContactUs.value);
    }

}
