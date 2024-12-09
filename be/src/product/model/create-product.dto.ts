import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsPositive,
    IsUrl,
    Length,
  } from 'class-validator';
  
  export class CreateProductDTO {
    @IsNotEmpty({ message: 'Product name is required' })
    @IsString({ message: 'Product name must be a string' })
    @Length(3, 100, {
      message: 'Product name must be between 3 and 100 characters',
    })
    readonly name: string;
  
    @IsNotEmpty({ message: 'Product price is required' })
    @IsNumber({}, { message: 'Price must be a valid number' })
    @IsPositive({ message: 'Price must be a positive number' })
    readonly price: number;
  
    @IsNotEmpty({ message: 'Product quantity is required' })
    @IsNumber({}, { message: 'Quantity must be a valid number' })
    @IsPositive({ message: 'Quantity must be a positive number' })
    readonly quantity: number;
  
    @IsNotEmpty({ message: 'Product description is required' })
    @IsString({ message: 'Description must be a string' })
    @Length(10, 500, {
      message: 'Description must be between 10 and 500 characters',
    })
    readonly describe: string;
  
    @IsNotEmpty({ message: 'Product image URL is required' })
    @IsUrl({}, { message: 'Image URL must be a valid URL' })
    readonly img: string;
  }