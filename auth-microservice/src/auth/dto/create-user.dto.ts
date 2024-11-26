import { IsEmail, IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class LocationDto {
    @IsNotEmpty()
    @IsString()
    latitude: string;

    @IsNotEmpty()
    @IsString()
    longitude: string;
}

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => LocationDto)
    location: LocationDto;
}
