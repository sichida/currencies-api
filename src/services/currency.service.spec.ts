import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
    let service: CurrencyService;
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CurrencyService],
        }).compile();
        service = module.get<CurrencyService>(CurrencyService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it('should find all currencies', () => {
        expect(service.findAll()).not.toBeNull();
        expect(service.findAll().length).toBeGreaterThan(0);
    });
});
