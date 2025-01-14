import { IsInt, IsOptional, IsString,MinLength } from 'class-validator';

export class UpdateActivityDto {

    @IsString()
    @MinLength(1)
    @IsOptional()
    title?: string;
    
    @IsString()
    @MinLength(1)
    @IsOptional()
    desc?: string;

    @IsInt()
    @IsOptional()
    price?: string;

    @IsString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    time?: string;

    @IsString()
    @IsOptional()
    img?: string;
}
