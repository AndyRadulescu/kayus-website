import {describe, expect, it} from 'vitest';
import {
    filterAvailabilityCategory,
    filterAvailabilityDrinks,
    filterAvailabilityFood,
    filterAvailabilityPromotions,
    getTypesPhoneNumber,
    isResolved
} from './utils';

describe('utils', () => {
    describe('isResolved', () => {
        it('should return true if entry is resolved (has fields)', () => {
            const entry = {fields: {title: 'Test'}};
            expect(isResolved(entry)).toBe(true);
        });

        it('should return false if entry is null', () => {
            expect(isResolved(null)).toBe(false);
        });

        it('should return false if entry is not an object', () => {
            expect(isResolved('string')).toBe(false);
        });

        it('should return false if entry does not have fields', () => {
            const entry = {sys: {id: '1'}};
            expect(isResolved(entry)).toBe(false);
        });
    });

    describe('filterAvailability functions', () => {
        const mockItems = [
            {fields: {availability: 'lounge'}},
            {fields: {availability: 'hotel'}},
            {fields: {availability: 'lounge,hotel'}},
            {fields: {availability: null}},
        ] as any[];

        it('filterAvailabilityDrinks should filter items by type or null availability', () => {
            const result = filterAvailabilityDrinks('lounge', mockItems);
            expect(result).toHaveLength(3);
            expect(result.some(i => i.fields.availability === 'hotel')).toBe(false);
        });

        it('filterAvailabilityFood should filter items by type or null availability', () => {
            const result = filterAvailabilityFood('hotel', mockItems);
            expect(result).toHaveLength(3);
            expect(result.some(i => i.fields.availability === 'lounge' && !i.fields.availability.includes('hotel'))).toBe(false);
        });

        it('filterAvailabilityPromotions should filter items by type or null availability', () => {
            const result = filterAvailabilityPromotions('lounge', mockItems);
            expect(result).toHaveLength(3);
        });

        it('filterAvailabilityCategory should filter items by type or null availability', () => {
            const result = filterAvailabilityCategory('hotel', mockItems);
            expect(result).toHaveLength(3);
        });

        it('should return all items if type is included in comma-separated availability', () => {
            const items = [{fields: {availability: 'lounge,hotel'}}] as never[];
            expect(filterAvailabilityDrinks('lounge', items)).toHaveLength(1);
            expect(filterAvailabilityDrinks('hotel', items)).toHaveLength(1);
        });
    });

    it.each([
        ['lounge', 'tel:0774080300'],
        ['hotel', 'tel:0723565077'],
    ])('should return %s for the %s type', (type: string, expectedNumber: string) => {
        expect(getTypesPhoneNumber(type)).toBe(expectedNumber);
    });
});
