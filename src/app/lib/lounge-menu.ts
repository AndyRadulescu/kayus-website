import {contentfulClientApi} from './contentful';
import {
    DrinkItemSkeleton,
    DrinkSectionSkeleton,
    FoodCategorySkeleton,
    FoodItemSkeleton,
    PromotionSkeleton
} from '@/app/model/menu';
import {Entry} from 'contentful';
import {getServerLocaleFromCookies} from '@/app/utils';

export async function getPromotion() {
    const locale = await getServerLocaleFromCookies();
    const res = await contentfulClientApi.getEntries<PromotionSkeleton>({
        content_type: 'promotion',
        locale: locale,
    });

    return res.items;
}

export async function getLoungeMenu() {
    const locale = await getServerLocaleFromCookies();
    const res = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
        content_type: 'foodCategory',
        locale: locale,
    });

    return res.items;
}

export async function getFoodItemsByCategorySlug(slug: string) {
    const locale = await getServerLocaleFromCookies();
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

export async function getDrinksSectionsByCategorySlug(slug: string) {
    const locale = await getServerLocaleFromCookies();

    const categoryRes = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
        content_type: 'foodCategory',
        'fields.slug': slug,
        limit: 1,
        locale: locale,
    });

    const category = categoryRes.items[0];
    if (!category) return [];

    const drinkSections = await contentfulClientApi.getEntries<DrinkSectionSkeleton>({
        content_type: 'drinkSection',
        'fields.drinkType.sys.id': category.sys.id,
        order: ['fields.priority'],
        locale: locale,
    });
    return drinkSections.items;
}

export async function getDrinkItemsBySectionId(sectionId: Entry<DrinkSectionSkeleton, undefined, string>) {
    const locale = await getServerLocaleFromCookies();

    const drinkSection = sectionId;
    if (!drinkSection) return [];

    const itemsRes = await contentfulClientApi.getEntries<DrinkItemSkeleton>({
        content_type: 'drinkItem',
        'fields.drinkSection.sys.id': drinkSection.sys.id,
        locale: locale,
    });

    return itemsRes.items;
}
