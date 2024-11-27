// src/location/location.listener.ts
import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller()
export class LocationListener {
    constructor(private readonly locationService: LocationService) { }

    @MessagePattern('create_location')
    async handleCreateLocation(data: { userId: number; latitude: number; longitude: number }) {
        return this.locationService.createLocation(data.userId, data.latitude, data.longitude);
    }

    @Post('/location')
    async createLocation(@Body() createLocationDto: CreateLocationDto) {
        return this.locationService.create(createLocationDto);
    }
}
