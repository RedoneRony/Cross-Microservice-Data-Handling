// src/location/location.listener.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LocationService } from './location.service';

@Controller()
export class LocationListener {
    constructor(private readonly locationService: LocationService) { }

    @MessagePattern('create_location')
    async handleCreateLocation(data: { userId: number; latitude: number; longitude: number }) {
        return this.locationService.createLocation(data.userId, data.latitude, data.longitude);
    }
}
