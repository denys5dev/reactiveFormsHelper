import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterContentInit {

  public myForm: FormGroup;
  flag: boolean = false;
  public selectFirst;
  public selectSecond;

  constructor(private fb: FormBuilder) {
      this.selectFirst = "1";
      this.selectSecond = '2';
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      array: this.fb.array([])
    });
   
  
  }

  ngAfterContentInit() {
      this.addAddress();
  }

  initAddress() {
    return this.fb.group({
      first: ['sd', Validators.required],
      second: ['sd']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['array'];
    const addrCtrl = this.initAddress();

    control.push(addrCtrl);

    /* subscribe to individual address value changes */
    addrCtrl.valueChanges.subscribe(x => {
      console.log(x);
    })
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['array'];
    control.removeAt(i);
  }

  update(form) {
    console.log(form)
  }

}
