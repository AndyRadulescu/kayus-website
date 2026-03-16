import {Entry, EntryFieldTypes, EntrySkeletonType, UnresolvedLink} from 'contentful';

export function isResolved<T>(entry: T | UnresolvedLink<'Entry'>): entry is T {
    if (entry != null && typeof entry === 'object' && 'fields' in entry) {
        return entry.fields !== undefined;
    }
    return false;
}

export function filterAvailability<T extends EntrySkeletonType<{ availability: EntryFieldTypes.Symbol }>>(
    type: string,
    items: Entry<T, undefined, string>[]
): Entry<T, undefined, string>[] {
    return items.filter((item) => {
        const availability = item.fields.availability;
        if (typeof availability === 'string') {
            return availability.includes(type);
        }
        // If type is jacuzzi, it must be explicitly set in availability.
        // For other types, null/undefined availability means it's available everywhere.
        return type !== 'jacuzzi' && availability == null;
    });
}

export function getTypesPhoneNumber(type: string) {
    if (type === 'lounge') return 'tel:0774080300';
    return 'tel:0723565077';
}
