import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service"
import {Router} from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
registerUserData:any={}
  constructor(private userService:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

registerUser(){
this.userService.registerUser(this.registerUserData).subscribe(
  (res)=>{
    localStorage.setItem('token',res.token);
        this._router.navigateByUrl("/home/invoices")
  },
  (err)=>console.log(err)
)
}
}
