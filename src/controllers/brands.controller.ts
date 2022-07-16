import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll() {
    return {
      message: `Soy el controlador para brands`,
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
