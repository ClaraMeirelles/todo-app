import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsDefined({ message: 'Título é obrigatório' })
    @IsNotEmpty({ message: 'Título não pode estar vazio' })
    @IsString()
    title: string;
}