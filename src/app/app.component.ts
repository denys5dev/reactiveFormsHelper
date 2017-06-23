import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, FormGroupName } from '@angular/forms';
import { ChildFormComponent } from './childForm/childForm.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild(ChildFormComponent) childForm: ChildFormComponent;
  private myForm: FormGroup;

  private disabled: boolean = true;
    constructor(private fb: FormBuilder, private formGroupName: FormGroupName) {
        this.myForm = new FormGroup({
            parentGroup: new FormGroup({
              first:  new FormControl(),
              second: new FormControl()
            })
        })
     }

     ngOnInit() {
       this.myForm = this.fb.group({
         parentGroup: this.fb.group({
           first: [{value: 'first', disabled: this.disabled}],
           second: [{value: 'second', disabled: this.disabled}]
         })
       })
       console.log(this.myForm  )
     }

     Update() {
        setTimeout(() => {
         this.myForm.get('parentGroup.first').enable()
        }, 1000)
        console.log(this.disabled)
     }
    ngAfterContentInit() {}
}
