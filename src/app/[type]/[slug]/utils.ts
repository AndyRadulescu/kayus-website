import {UnresolvedLink} from 'contentful';

export function isResolved<T>(entry: T | UnresolvedLink<'Entry'>): entry is T {
    if (entry != null && typeof entry === 'object' && 'fields' in entry) {
        return entry.fields !== undefined;
    }
    return false;
}
