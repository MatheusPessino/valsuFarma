import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private toastr: HotToastService, private auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.formLogin = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login(){
    if(this.formLogin.valid){
      let cred: Credentials = this.formLogin.value;
      this.auth.authenticate(cred).subscribe({
        next: response =>{
          let token: string | undefined = response.headers.get('Authorization')?.substring(7);
          if(this.auth.setToken(token)){
            this.router.navigate(['/home']);
          } else {
            this.toastr.error("Acesso negado!");
          }
        },
          error: error =>{
            this.toastr.error("Email e/ou senha incorreto.");
          }
      });
    }
    else {
      this.toastr.error("E-mail e/ou senha inválido");
    }
  }
}
