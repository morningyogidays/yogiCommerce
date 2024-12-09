import { CreateProductDTO } from './model/create-product.dto';
import { Product } from './model/product.interface';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDTO): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async getAll(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> {
    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Id is not valid!');

    const product = await this.productService.getById(id);
    if (!product) {
      throw new NotFoundException('Product does not exist!');
    } else {
      return product;
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<any> {
    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Id is not valid!');

    const productValid = await this.productService.getById(id);
    if (productValid) {
      await this.productService.update(id, product);
      return {
        product: await this.productService.getById(id),
        message: 'Product updated successfully',
      };
    } else throw new NotFoundException('Product does not exist!');
  }
}
