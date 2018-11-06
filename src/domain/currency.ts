import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Currency {
    @IsNotEmpty()
    id: string;
    @IsString()
    symbol: string;
    @IsString()
    name: string;
    @IsString()
    symbolNative: string;
    @IsString()
    decimalDigits: string;
    @IsNumber()
    rounding: number;
    @IsString()
    @IsNotEmpty()
    code: string;
    @IsString()
    namePlural: string;
}