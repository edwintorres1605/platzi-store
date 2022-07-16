import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit: number,
    @Query('offset') offset = 5,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Lista de productos: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `Producto con id ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `acción de crear`,
      payload,
    };
  }
}
