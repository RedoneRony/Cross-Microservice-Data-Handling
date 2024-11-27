// src/location/location.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>,
    ) { }

    async createLocation(userId: number, latitude: number, longitude: number): Promise<Location> {
        const location = new Location();
        location.userId = userId;
        location.latitude = latitude;
        location.longitude = longitude;
        return this.locationRepository.save(location);
    }

    async create(createLocationDto: CreateLocationDto): Promise<Location> {
        // Create a new Location entity instance from the DTO
        const location = this.locationRepository.create(createLocationDto);

        // Save the new Location entity to the database
        return this.locationRepository.save(location);
    }
}
