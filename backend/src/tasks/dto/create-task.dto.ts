import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty({ message: 'Título não pode estar vazio' })
    @IsString()
    title: string;
}