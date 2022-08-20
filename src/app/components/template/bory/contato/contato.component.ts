import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  enviaform: FormGroup;
  submitted = false;


  constructor(
    private Fb: FormBuilder,
    private httpclient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.enviaform = this.Fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', Validators.required]
    })

  }
  showmessage(msg: string): void {
    this.snackbar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top"
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.enviaform.valid) {
      this.httpclient.post('https://httpbin.org/post',
        JSON.stringify(this.enviaform.value))
        .subscribe(dados => {
          console.log(dados);
          this.enviaform.reset();
          this.showmessage('E-mail enviado com sucesso...');
          this.submitted = false;
        })
    }
  }

  hasError(field: string) {
    return this.enviaform.get(field).errors;
  }

}
