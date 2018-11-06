import { Injectable } from '@nestjs/common';
import { Currency } from '../domain/currency';
import * as fs from 'fs';

@Injectable()
export class CurrencyService {
    private _currencies: Array<Currency>;

    constructor() {
        this._currencies = [];
        const data = fs.readFileSync('src/resources/data/currencies.json', 'utf8');
        const allCurrencies = JSON.parse(data);
        Object.keys(allCurrencies).forEach((key: string) => {
            this._currencies.push({
                id: key,
                symbol: allCurrencies[key].symbol,
                name: allCurrencies[key].name,
                symbolNative: allCurrencies[key]['symbol_native'],
                decimalDigits: allCurrencies[key]['decimal_digits'],
                rounding: allCurrencies[key].rounding,
                code: allCurrencies[key].code,
                namePlural: allCurrencies[key]['name_plural']
            })
        });
    }

    findAll() {
        return this._currencies;
    }
}
