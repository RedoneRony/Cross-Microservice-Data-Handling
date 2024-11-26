// src/auth/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/users-with-location')
    async createUserWithLocation(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUserWithLocation(createUserDto);
    }
}
