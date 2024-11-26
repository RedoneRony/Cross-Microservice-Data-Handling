import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @Inject('LOCATION_SERVICE') // Inject the ClientProxy from ClientsModule
        private readonly client: ClientProxy,
    ) { }

    /**
     * Create a user and send location data to the Location Microservice.
     * @param createUserDto - Data for the user and their location.
     */
    async createUserWithLocation(createUserDto: CreateUserDto): Promise<User> {
        const { name, email, location } = createUserDto;

        // Save user data in the database
        const newUser = this.userRepository.create({ name, email });
        const savedUser = await this.userRepository.save(newUser);

        // Send location data to the Location Microservice
        await this.client.send('create_location', {
            userId: savedUser.id,
            latitude: location.latitude,
            longitude: location.longitude,
        }).toPromise();

        return savedUser;
    }
}
