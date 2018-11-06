import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from '../../services/currency.service';

@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) {

    }

    @Get()
    findAll() {
        return this.currencyService.findAll();
    }
}
