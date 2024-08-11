import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
