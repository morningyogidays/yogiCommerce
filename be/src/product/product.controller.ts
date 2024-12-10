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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { join } from 'path';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDTO): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Directory where files will be stored
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}-${file.originalname}`);
        },
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProductDto: CreateProductDTO,
  ): Promise<Product> {
    const imageUrl = `/uploads/${file.filename}`; // Construct URL for uploaded file
    createProductDto.img = imageUrl; // Assign URL to DTO
    return this.productService.create(createProductDto); // Save product with image URL
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
