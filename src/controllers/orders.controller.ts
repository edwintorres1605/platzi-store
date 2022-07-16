import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll() {
    return {
      message: `Soy el controlador para orders`,
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
