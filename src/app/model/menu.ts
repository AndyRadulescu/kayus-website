import {EntryFieldTypes, EntrySkeletonType} from 'contentful';


export interface PromotionFields {
    promotionTitle: EntryFieldTypes.Symbol;
    isVisible: EntryFieldTypes.Boolean;
    promotionMedia: EntryFieldTypes.AssetLink;
    availability: EntryFieldTypes.Symbol;
}

export interface FoodCategoryFields {
    foodType: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    priority: EntryFieldTypes.Integer;
}

export interface FoodItemFields {
    foodTitle: EntryFieldTypes.Symbol;
    ingredients?: EntryFieldTypes.Symbol;
    macros: EntryFieldTypes.Symbol;
    priceAndInfo: EntryFieldTypes.Symbol;
    thumbnail?: EntryFieldTypes.AssetLink;
    availability: EntryFieldTypes.Symbol;
    foodType: EntryFieldTypes.EntryLink<FoodCategorySkeleton>;
    priority: EntryFieldTypes.Integer;
    videoUrl?: EntryFieldTypes.Symbol;
}

export interface DrinkSectionFields {
    drinkTitle: EntryFieldTypes.Symbol;
    priority: EntryFieldTypes.Integer;
    slug: EntryFieldTypes.Symbol;
    drinkType: EntryFieldTypes.EntryLink<FoodCategorySkeleton>;
}

export interface DrinkItemFields {
    drinkTitle: EntryFieldTypes.Symbol;
    price: EntryFieldTypes.Symbol;
    availability: EntryFieldTypes.Symbol;
    drinkSection: EntryFieldTypes.EntryLink<DrinkSectionSkeleton>;
    priority: EntryFieldTypes.Integer;
}

export type PromotionSkeleton = EntrySkeletonType<PromotionFields, 'promotion'>;
export type FoodCategorySkeleton = EntrySkeletonType<FoodCategoryFields, 'foodCategory'>;
export type FoodItemSkeleton = EntrySkeletonType<FoodItemFields, 'foodItem'>;
export type DrinkSectionSkeleton = EntrySkeletonType<DrinkSectionFields, 'drinkSection'>;
export type DrinkItemSkeleton = EntrySkeletonType<DrinkItemFields, 'drinkItem'>;
