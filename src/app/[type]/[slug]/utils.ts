import {Entry, UnresolvedLink} from 'contentful';
import {DrinkItemSkeleton, FoodItemSkeleton} from '@/app/model/menu';

export function isResolved<T>(entry: T | UnresolvedLink<'Entry'>): entry is T {
    if (entry != null && typeof entry === 'object' && 'fields' in entry) {
        return entry.fields !== undefined;
    }
    return false;
}

export function filterAvailabilityDrinks(type: string, items: Entry<DrinkItemSkeleton, undefined, string>[]): Entry<DrinkItemSkeleton, undefined, string>[] {
    return items.filter((item) => item.fields.availability == null || item.fields.availability.includes(type));
}

export function filterAvailabilityFood(type: string, items: Entry<FoodItemSkeleton, undefined, string>[]): Entry<FoodItemSkeleton, undefined, string>[] {
    return items.filter((item) => {
        const availability = item.fields.availability as string | undefined;

        return availability == null || availability.includes(type);
    });
}
