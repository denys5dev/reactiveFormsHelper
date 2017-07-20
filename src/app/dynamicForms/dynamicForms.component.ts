import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormGroup, FormBuilder } from '@angular/forms'

@Component({
    selector: 'app-dynamic',
    templateUrl: 'dynamicForms.component.html'
})

export class DynamicComponent implements OnInit {

    form: FormGroup;
    flag: boolean = false;

    constructor(private _fb: FormBuilder) { }
    get arrays(): FormArray {
        return <FormArray>this.form.get('arrays')
    }
    
    ngOnInit() {
        this.form = this._fb.group({
            test: '',
            arrays: this._fb.array([ this.buildArrays() ])
        });

        
        this.flag = true;

     }

     buildArrays(): FormGroup {
        return  this._fb.group({
              array: ''
            })
     }

     addArrays() {
         this.arrays.push(this.buildArrays())
     }

     onSubmit() {
         console.log(this.form.value)
     }
}
