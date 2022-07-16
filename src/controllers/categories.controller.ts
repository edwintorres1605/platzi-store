import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getOne(@Param('id') id: string, @Param('productId') productId: string) {
    return {
      message: `Producto con id ${productId} de la categoría ${id}`,
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
