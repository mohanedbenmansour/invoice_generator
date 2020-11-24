import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import {UserService} from "../services/user.service";
import {InvoiceService} from "../services/invoice.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

n1="";
inputData:any={}
//societe
nomSociete=true;
email=true;
numero=false;
releve=false;
matricule=false;
adresse=false;
//client
nomSocieteC=true;
contact=true;
emailC=true;
numeroC=false;
rib=false;
matriculeC=false;
adresseC=false;
//autre information
numeroA=true;
date=true;
dateEchange=true;
dateLivraison=false;
note=false;
//-------------------------------------------------------//
items = [{name: '',price:0,quantity:1}];
shipping=0;
subtotal=0;
total=0;

  constructor(private modalService: NgbModal,
    private userService:UserService,
    private invoiceService:InvoiceService,
    private router:Router
    ) { }
  closeResult: string;

  ngOnInit(): void {
    this.calculate();

  }


  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //client
  removeNomScoviete(){
    this.nomSociete=false;
  }
  removeEmail(){    this.email=false;
  }
  removeReleve(){    this.releve=false;
  }
  removeMatricule(){     this.matricule=false;
  }
  removeNumero(){     this.numero=false;
  }
  removeAdresse(){    this.adresse=false;
  }
  //societe
  removenomSocieteC(){    this.nomSocieteC=false;
  }
  removecontact(){    this.contact=false;
  }
  removeemailC(){    this.emailC=false;
  }
  removenumeroC(){    this.numeroC=false;
  }
  removerib(){    this.rib=false;
  }
  removematricule(){    this.matriculeC=false;
  }
  removeadresseC(){    this.adresseC=false;
  }
  //autre
  removenumeroA(){    this.numeroA=false;
  }
  removedate(){    this.date=false;
  }
  removedateEchange(){    this.dateEchange=false;
  }
  removedateLivraison(){    this.dateLivraison=false;
  }
  removenote(){    this.note=false;
  }

  addInput()  {
    this.items.push({name: '',price:0,quantity:1});
  }
calculate(){

  this.subtotal=0;
  this.items.forEach(item=>{
    this.subtotal+=item.quantity * item.price
  })



}


save(){

//  this.inputData.add(this.items)
this.inputData["Items"]=this.items
this.inputData["user"]=localStorage.getItem('userid');

console.log(this.inputData)
this.invoiceService.createPost(this.inputData).subscribe(
(data)=>{
this.router.navigateByUrl('/home/invoicepreview/' + data["invoice"]._id);
console.log(data)
  },
(err)=>{
console.log(err)}
)
  
}


}
