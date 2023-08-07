import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      campo1: ['', Validators.required],
    });
  }
  get campo1() {
    return this.form.controls['campo1'] as FormControl;
  }
}
