import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  handleSubmitForm(form: any) {
    localStorage.setItem('name', "done");
   
    // console.log(form)
    //  localStorage.setItem("email", "aa@dddd.com");  

    //send email and password 
    //json.stringfy{} object bb3t feh

  }
}
