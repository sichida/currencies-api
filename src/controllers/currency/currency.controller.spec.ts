import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from '../../services/currency.service';

describe('Currency Controller', () => {
    let module: TestingModule;
    beforeAll(async () => {
        module = await Test.createTestingModule({
            controllers: [CurrencyController],
            providers: [CurrencyService]
        }).compile();
    });
    it('should be defined', () => {
        const controller: CurrencyController = module.get<CurrencyController>(CurrencyController);
        expect(controller).toBeDefined();
    });
    it('should provide all currencies', () => {
        const controller: CurrencyController = module.get<CurrencyController>(CurrencyController);
        expect(controller.findAll()).not.toBeNull();
        expect(controller.findAll().length).toBeGreaterThan(0);
    });
});
