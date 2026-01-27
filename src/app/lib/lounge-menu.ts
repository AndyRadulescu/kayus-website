import { contentfulClientApi } from './contentful';
import {FoodCategory, FoodItem} from '@/app/model/menu';
import {EntrySkeletonType} from 'contentful';

export async function getLoungeMenu() {
    const res = await contentfulClientApi.getEntries<EntrySkeletonType<FoodCategory>>({
        content_type: 'foodCategory',
    });

    return res.items;
}

export async function getFoodItemsByCategorySlug(slug: string) {
    const categoryRes = await contentfulClientApi.getEntries<EntrySkeletonType<FoodCategory>>({
        content_type: 'foodCategory',
        'fields.slug': slug,
        limit: 1,
    });

    const category = categoryRes.items[0];
    if (!category) return [];

    const itemsRes = await contentfulClientApi.getEntries<EntrySkeletonType<FoodItem>>({
        content_type: 'foodItem',
        'fields.foodType.sys.id': category.sys.id,
    });

    return itemsRes.items;
}
