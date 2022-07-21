<!-- Install -->
npm i -g @nestjs/cli

<!-- Create and Run Project -->
nest new platzi-store
cd platzi-store
npm run start

<!-- Crear archivo de configuración de VSC con editorconfig -->
<!-- Crear archivo .editorconfig y agregar el código: -->
# ./editorconfig
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

<!-- Procedimiento para corregir error de Puerto en uso 
si se llega a desconectar mal el servidor -->
EL SERVIDOR SE DETIENE CON CTRL+C de manera correcta

Check the PID i.e. id of process running on port 3000 with below command :

lsof -i tcp:3000
It would output something like following:

COMMAND  PID   USER   FD   TYPE  DEVICE  SIZE/OFF NODE NAME
node     5805  xyz    12u  IPv6  63135    0t0     TCP  *:3000 (LISTEN)
Now kill the process using :

kill -9 5805

<!-- Crear nuevo endpoint -->
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('tasks')
  getTasks(): string {
    return 'Soy un nuevo endpoint de tareas';
  }
}


<!-- Recibir parámetros -->
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  <!-- Forma 1 -->
  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `Producto con id ${params.id}`;
  }

  <!-- Forma 2 -->
  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Producto con id ${id}`;
  }

  <!-- Múltiples parámetros -->
  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Producto con id ${productId} de la categoría ${id}`;
  }

  <!-- Parámetros Query -->
  @Get('products')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset = 5,
    @Query('brand') brand: string,
  ) {
    return `Lista de productos: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}

<!-- Crear controladores con el cli en la terminal -->
nest generate controller controllers/products --flat
<!-- o en la forma compacta: -->
nest g co controllers/brands --flat


<!-- Al tener cada controlador únicamente con sus propios métodos, 
ya no hace falta específicar el mismo nombre en las rutas -->
<!-- Así queda entonces el controlador de products -->
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset = 5,
    @Query('brand') brand: string,
  ) {
    return `Lista de productos: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Producto con id ${id}`;
  }
}

<!-- Así queda el controlador de categories -->
import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Producto con id ${productId} de la categoría ${id}`;
  }
}

<!-- Ahora crear los controladores para:
orders, users, customers, brands -->

<!-- Método POST -->
<!-- Adicional, se mofican los nombres de los métodos por algo más genérico
y en lugar de mostrar un string se cambian los returns a JSON.
Por ejemplo, así se ve hasta ahora el controlador de products -->
import { Controller, Get, Param, Post, Query } from '@nestjs/common';

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
  create() {
    return {
      message: `acción de crear`,
    };
  }
}

<!-- Instalar INSMONIA para ir probando las diferentes acciones y allá
crear cada request -->

<!-- Ahora modificar el método create() para que pueda enviar datos -->
<!-- De la siguiente forma se puede enviar cualquier dato -->
  @Post()
  create(@Body() payload: any) {
    return {
      message: `acción de crear`,
      payload,
    };
  }

  <!-- Pero, también puedo específicar qué enviar -->
  (@Body('name') name: string, @Body('price') price: number)

<!-- Ahora crear el método POST para los demás controladores -->

<!-- A continuación los métodos PUT y DELETE -->
@Put(':id')
update(@Param('id') id: number, @Body() payload: any) {
  return {
    id,
    payload,
  };
}

@Delete(':id')
delete(@Param('id') id: number) {
  return {
    id,
  };
}

<!-- SERVICIOS -->
nest g s services/users --flat

<!-- Antes de continuar vamos a crear una carpeta de entidades y ahí la entidad Products -> product.entity.ts -->


<!-- Para usar los validadores en los pipelines, vamos a instalar unas dependencias con el servidor detenido -->
npm i class-validator class-transformer

y luego se ejecuta el servidor nuevamente para continuar.

