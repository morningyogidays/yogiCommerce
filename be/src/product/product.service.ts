import { CreateProductDTO } from './model/create-product.dto';
import { Product } from './model/product.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
    const createdProduct = new this.productModel(createProductDTO);
    return createdProduct.save();
  }

  async getAll(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async getById(id: string): Promise<Product | undefined> {
    return await this.productModel.findById(id).exec();
  }

  async getByName(name: string): Promise<Product | undefined> {
    return await this.productModel.findOne({ name }).exec();
  }

  async getByPriceRange(
    minPrice: number,
    maxPrice: number,
  ): Promise<Product[]> {
    return await this.productModel
      .find({
        price: { $gte: minPrice, $lte: maxPrice },
      })
      .exec();
  }

  async update(id: string, product: Product): Promise<Product | undefined> {
    return await this.productModel
      .findByIdAndUpdate(id, product, { new: true })
      .exec();
  }
}