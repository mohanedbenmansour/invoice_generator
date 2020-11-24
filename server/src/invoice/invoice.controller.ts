import { Body, Controller, Get, Param, Post, Req, UploadedFile,UseInterceptors } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { InvoiceDTO } from './invoice.dto';


export const storage = {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        let filename: string=""
        if(file==undefined){
        filename = '';

        }else {
         filename = file.originalname;
        }
       
  
        cb(null, `${filename}`);
      },
    }),
  };
@Controller('invoice')
export class InvoiceController {

    constructor(private postService: InvoiceService) {}
    @Get('getinvoice/:userid/:invoiceid')
    async readAllPosts(@Param("userid") userid:string,@Param("invoiceid") invoiceid:string) {
    
  
      return this.postService.readInvoice(userid,invoiceid);
    }
    
  @Post('create')
 
  async createPost(@Body() invoiceDto: InvoiceDTO) {
   

    const invoice = await this.postService.createInvoice(invoiceDto);

    return { invoice };
  }


}
