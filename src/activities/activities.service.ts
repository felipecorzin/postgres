import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { Role } from 'src/common/enums/rol.enum';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto, user: UserActiveInterface) {
    return await this.activityRepository.save({
      ...createActivityDto,
      userEmail: user.email,
    });
  }

  async findAll(user: UserActiveInterface) {
    if(user.role === Role.ADMIN) {
      return await this.activityRepository.find();
    }
    return await this.activityRepository.find({
      where: { userEmail: user.email },
    });
  }

  async findOne(id: number, user: UserActiveInterface) {
    const activity = await this.activityRepository.findOneBy({ id });
    if (!activity) {
      throw new BadRequestException('Activity not found');
    }
    this.validateOwnership(activity, user);
    return activity;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto, user: UserActiveInterface) {
    await this.findOne(id, user );
    return await this.activityRepository.update(id, {
      ...updateActivityDto,
      userEmail: user.email,
    })
  }

  async remove(id: number, user: UserActiveInterface) {
    await this.findOne(id, user );
    return await this.activityRepository.softDelete({ id }); // se le pasa el id
  }
  
  private validateOwnership(activity: Activity, user: UserActiveInterface) {
    if (user.role !== Role.ADMIN && activity.userEmail !== user.email) {
      throw new UnauthorizedException();
    }
  }
}
