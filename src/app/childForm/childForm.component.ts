import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormGroupName } from '@angular/forms'
@Component({
    selector: 'app-child',
    templateUrl: 'childForm.component.html'
})

export class ChildFormComponent implements OnInit {
    @Input() parentGroup;
    flag: boolean;
    constructor(private cf: ChangeDetectorRef, private formGroupName: FormGroupName) {
     }

    ngOnInit() { }

    update() {
        this.flag = true;
        console.log("call child")
    }
}
