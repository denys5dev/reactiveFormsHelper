import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
@Component({
    selector: 'child',
    templateUrl: 'childForm.component.html'
})

export class ChildFormComponent {

    @Input('group')
    public childForm: FormGroup;
}
