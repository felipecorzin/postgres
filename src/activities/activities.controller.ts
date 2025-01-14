import { Controller, Get, Post, Body,  Param, Patch, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { UpdateActivityDto } from './dto/update-activity.dto';


@Auth(Role.ADMIN)
@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}
  
  @Post('create')
  create(@Body() createActivityDto: CreateActivityDto, @ActiveUser() user: UserActiveInterface) {
    return this.activitiesService.create(createActivityDto,user);
  }

  @Get('getAll')
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.activitiesService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.activitiesService.findOne(id, user);
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateActivityDto: UpdateActivityDto, @ActiveUser() user: UserActiveInterface) {
    return this.activitiesService.update(id, updateActivityDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.activitiesService.remove(id, user);
  }
}
