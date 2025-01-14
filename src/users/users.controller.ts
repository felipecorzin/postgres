import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('getAllUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('getById/:id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
  
  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
  
  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
