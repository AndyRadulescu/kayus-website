import { contentfulClientApi } from './contentful';
import { FoodCategorySkeleton, FoodItemSkeleton} from '@/app/model/menu';

export async function getLoungeMenu() {
    const res = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
        content_type: 'foodCategory',
    });

    return res.items;
}

export async function getFoodItemsByCategorySlug(slug: string) {
    const categoryRes = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
        content_type: 'foodCategory',
        'fields.slug': slug,
        limit: 1,
    });

    const category = categoryRes.items[0];
    if (!category) return [];

    const itemsRes = await contentfulClientApi.getEntries<FoodItemSkeleton>({
        content_type: 'foodItem',
        'fields.foodType.sys.id': category.sys.id,
    });

    return itemsRes.items;
}
