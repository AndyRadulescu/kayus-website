import {contentfulClientApi} from './contentful';
import {
    DrinkItemSkeleton,
    DrinkSectionSkeleton,
    FoodCategorySkeleton,
    FoodItemSkeleton,
    PromotionSkeleton
} from '@/app/model/menu';
import {unstable_cache} from 'next/cache';

export const getPromotion = unstable_cache(
    async (locale: string) => {
        const res = await contentfulClientApi.getEntries<PromotionSkeleton>({
            content_type: 'promotion',
            locale: locale,
        });

        return res.items;
    },
    ['promotion-cache'],
    {revalidate: 86400}
);

export const getLoungeMenu = unstable_cache(
    async (locale: string) => {
        const res = await contentfulClientApi.getEntries<FoodCategorySkeleton>({
            content_type: 'foodCategory',
            locale: locale,
        });

        return res.items;
    },
    ['lounge-menu-cache'],
    {revalidate: 86400}
);

export const getFoodItemsByCategorySlug = unstable_cache(
    async (slug: string, locale: string) => {
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
            order: ['fields.priority'],
            locale: locale,
        });

        return itemsRes.items;
    },
    ['food-items-cache'],
    {revalidate: 86400}
);

export const getDrinksSectionsByCategorySlug = unstable_cache(
    async (slug: string, locale: string) => {
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
    },
    ['drink-sections-cache'],
    {revalidate: 86400}
);

export const getDrinkItemsBySectionId = unstable_cache(
    async (sectionId: string, locale: string) => {
        const itemsRes = await contentfulClientApi.getEntries<DrinkItemSkeleton>({
            content_type: 'drinkItem',
            'fields.drinkSection.sys.id': sectionId,
            order: ['fields.priority'],
            locale: locale,
        });

        return itemsRes.items;
    },
    ['drink-items-cache'],
    {revalidate: 86400}
);
