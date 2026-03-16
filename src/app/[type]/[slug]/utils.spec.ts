import {describe, expect, it} from 'vitest';
import {
    filterAvailability,
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

    describe('filterAvailability function', () => {
        const mockItems = [
            {fields: {availability: 'lounge'}},
            {fields: {availability: 'hotel'}},
            {fields: {availability: 'lounge,hotel'}},
            {fields: {availability: 'jacuzzi'}},
            {fields: {availability: null}},
        ] as any[];

        it('should filter items by type or null availability', () => {
            const resultLounge = filterAvailability('lounge', mockItems);
            expect(resultLounge).toHaveLength(3); // lounge, lounge,hotel, null
            expect(resultLounge.some(i => i.fields.availability === 'hotel')).toBe(false);

            const resultHotel = filterAvailability('hotel', mockItems);
            expect(resultHotel).toHaveLength(3); // hotel, lounge,hotel, null
            expect(resultHotel.some(i => i.fields.availability === 'lounge' && !i.fields.availability.includes('hotel'))).toBe(false);
        });

        it('should filter items strictly for jacuzzi (null availability is excluded)', () => {
            const resultJacuzzi = filterAvailability('jacuzzi', mockItems);
            expect(resultJacuzzi).toHaveLength(1); // only 'jacuzzi'
            expect(resultJacuzzi[0].fields.availability).toBe('jacuzzi');
        });

        it('should return items if type is included in comma-separated availability', () => {
            const items = [{fields: {availability: 'lounge,hotel'}}] as any[];
            expect(filterAvailability('lounge', items)).toHaveLength(1);
            expect(filterAvailability('hotel', items)).toHaveLength(1);
        });
    });

    it.each([
        ['lounge', 'tel:0774080300'],
        ['hotel', 'tel:0723565077'],
    ])('should return %s for the %s type', (type: string, expectedNumber: string) => {
        expect(getTypesPhoneNumber(type)).toBe(expectedNumber);
    });
});
