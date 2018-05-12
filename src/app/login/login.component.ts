import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  email = '';
  password: string = '';
  visible: boolean = false;
  
  loginUser() {
    if (this.email === 'admin@admin' && this.password == 'admin') {
      this.router.navigate(['admin']);
    }
    else {
      alert("Error on your inputs");
    }
  }
  toggleDiv() {
    this.visible = !this.visible;
  }

}
