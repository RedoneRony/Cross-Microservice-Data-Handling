import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create the microservice
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379,
      },
    },
  );

  // Start the microservice
  microservice.listen();

  // Create the HTTP server
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Optional: Enable CORS if needed
  await app.listen(3003); // REST API will be served on port 3000
}
bootstrap();
