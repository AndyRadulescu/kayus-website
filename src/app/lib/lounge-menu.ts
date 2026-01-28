import { contentfulClientApi } from './contentful';
import { FoodCategorySkeleton, FoodItemSkeleton} from '@/app/model/menu';
import {cookies} from 'next/headers';

export async function getLoungeMenu() {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';
    const res = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
        content_type: 'foodCategory',
        locale: locale,
    });

    return res.items;
}

export async function getFoodItemsByCategorySlug(slug: string) {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';
    const categoryRes = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
        content_type: 'foodCategory',
        'fields.slug': slug,
        limit: 1,
        locale: locale,
    });

    const category = categoryRes.items[0];
    if (!category) return [];

    const itemsRes = await contentfulClientApi.getEntries<FoodItemSkeleton>({
        content_type: 'foodItem',
        'fields.foodType.sys.id': category.sys.id,
        locale: locale,
    });

    return itemsRes.items;
}
