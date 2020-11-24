import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from 'src/types/invoice';
import { InvoiceDTO } from './invoice.dto';
@Injectable()
export class InvoiceService {

    constructor(@InjectModel('Invoice') private invoiceModel: Model<Invoice>) {}

    async readInvoice(userId:string,invoiceId:string) {

        let invoice = await this.invoiceModel
        .find({ user: userId,_id:invoiceId })
        .populate('user');
      return invoice;

      }
    
      async createInvoice(invoiceDto: InvoiceDTO) {
        const invoice = new this.invoiceModel(invoiceDto);
        return await invoice.save();
      }


}
