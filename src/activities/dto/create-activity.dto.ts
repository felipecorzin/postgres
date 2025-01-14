import { IsInt,IsString,MinLength } from 'class-validator';

export class CreateActivityDto {

    @IsString()
    @MinLength(1)
    title?: string;
    
    @IsString()
    @MinLength(1)
    desc?: string;

    @IsInt()
    price?: string;

    @IsString()
    date?: string;

    @IsString()
    time?: string;

    @IsString()
    img?: string;
}
