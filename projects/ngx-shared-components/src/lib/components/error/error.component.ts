import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'fb-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() input!: FormControl;
  @Input() form!: FormGroupDirective | FormGroup;

  errorType: string = '';
  errorTypeForm: string = '';

  maxLength!: number;
  minLength!: number;
  max!: number;
  min!: number;

  constructor() {}

  ngOnInit(): void {
    this.input.valueChanges.subscribe((_) => {
      // if (this.input.errors?.minlength) {
      //   this.minLength = this.input.errors.minlength.requiredLength;
      // } else if (this.input.errors?.maxlength) {
      //   this.maxLength = this.input.errors.maxlength.requiredLength;
      // }

      // if (this.input.errors?.min) {
      //   this.min = this.input.errors.min.min;
      // } else if (this.input.errors?.max) {
      //   this.max = this.input.errors.max.max;
      // }

      if (this.input.invalid && (this.input.touched || this.input.dirty)) {
        if (this.input.errors) {
          this.errorType = Object.keys(this.input.errors)[0];
        }
      }
      if (this.form.errors) {
        this.errorTypeForm = Object.keys(this.form.errors)[0];
      }
    });
  }

  getCustomValidationLabel(errorType: string): string {
    return errorType === '' ? errorType : `FORM_ERRORS.${errorType}`;
  }
}
