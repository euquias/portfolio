import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  enviaform: FormGroup;
  submitted = false;

  constructor(private Fb: FormBuilder) { }

  ngOnInit(): void {
    this.enviaform = this.Fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10),]],
      assunto: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    })
  }

  hasError(field: string) {
    return this.enviaform.get(field).errors;
  }



  enviar(): void {
    this.submitted = true;
    console.log(this.enviaform.value)
    if (this.enviaform.valid) {
      console.log('submit')
    }
  }

}
