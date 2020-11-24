import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from 'src/models/invoice.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Invoice', schema: InvoiceSchema }])],

  providers: [InvoiceService],
  controllers: [InvoiceController]
})
export class InvoiceModule {}
