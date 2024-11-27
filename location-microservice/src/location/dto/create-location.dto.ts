import { IsNumber } from 'class-validator';

export class CreateLocationDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;
}
