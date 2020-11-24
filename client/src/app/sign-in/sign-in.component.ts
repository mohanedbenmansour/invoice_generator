import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service"
import {Router} from '@angular/router'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginUserData:any={}

  constructor(private userService:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.loginUser(this.loginUserData).subscribe(
      (res)=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        localStorage.setItem('userid',res.user._id);

        this._router.navigateByUrl("/home/invoices")
        console.log(res._id)
      },
      (err)=>console.log(err)
    )
    }

}
