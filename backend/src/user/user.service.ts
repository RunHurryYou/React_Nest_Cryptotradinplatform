import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>,
    private readonly jwtService:JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUserEmail = await this.userRepository.findOne({
      where:{
        email: createUserDto.email,
      }
    })

    if(existUserEmail) throw new BadRequestException("this email is taken!")

    const existUserPhone = await this.userRepository.findOne({
      where:{
        phone: createUserDto.phone
      }
    })
    
    if(existUserPhone) throw new BadRequestException("this phone is taken!")

    const user = await this.userRepository.save({
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      phone: createUserDto.phone,
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password)
    })

    const token=this.jwtService.sign({email: createUserDto.email})

    return {user, token};
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(email_or_phone: string) {
    return await this.userRepository.findOne({
      where:
        [
          {email:email_or_phone},
          {phone:email_or_phone}
        ]
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
