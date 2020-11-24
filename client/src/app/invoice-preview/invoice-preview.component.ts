import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InvoiceService} from "../services/invoice.service"
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas"
@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent implements OnInit {
postId:string;
data:any;
total=0;
  constructor(private invoiceService:InvoiceService,    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {this.activatedRoute.params.subscribe(
    (params) => (this.postId = params['postId'])
  );

    this.getInvoice(localStorage.getItem('userid'),this.postId);
    //this.SavePDF();
  }
getInvoice(user:string,post:string){
this.invoiceService.getPost(user,post).subscribe(
  (data)=>{
  this.data=data;
  this.total=0;
  this.data[0].Items.forEach(item=>{
    this.total+=item.quantity * item.price
  })


  },
  (err)=>{
    console.log(err)
  }
)
}

  
public SavePDF(): void {  

  let element=document.getElementById("content");
html2canvas(element).then((canvas)=>{
let imgData=canvas.toDataURL("image/png");
let doc=new jsPDF();
doc.addImage(imgData,0,0);
doc.save('test.pdf');
})
}  

}
