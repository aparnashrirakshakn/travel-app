import { onCancelButtonClick, onPlanButtonClick, onSaveButtonClick } from '../client/js/app';
import 'babel-polyfill';

describe('Given onCancelButtonClick(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(onCancelButtonClick).toBeDefined();
    });
});

describe('Given onPlanButtonClick(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(onPlanButtonClick).toBeDefined();
    });
});

describe('Given onSaveButtonClick(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(onSaveButtonClick).toBeDefined();
    });
});
