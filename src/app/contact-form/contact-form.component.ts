import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: `./contact-form.component.html`,
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit  {
  constructor() {}
 ngOnInit(){

 }

 log(firstName){
   console.log("first Name", firstName);
 }
}
