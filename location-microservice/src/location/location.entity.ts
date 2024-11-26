// src/location/location.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('location')
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;
}
