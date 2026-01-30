import { EntryFieldTypes, EntrySkeletonType } from 'contentful';


export interface PromotionFields {
    promotionTitle: EntryFieldTypes.Symbol;
    isVisible: EntryFieldTypes.Boolean;
    promotionMedia: EntryFieldTypes.AssetLink;
}

export interface FoodCategoryFields {
    foodType: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    priority: EntryFieldTypes.Integer;
}

export interface FoodItemFields {
    foodTitle: EntryFieldTypes.Symbol;
    ingredients: EntryFieldTypes.Symbol;
    macros: EntryFieldTypes.Symbol;
    priceAndInfo: EntryFieldTypes.Symbol;
    foodImg: EntryFieldTypes.AssetLink;
    foodType: EntryFieldTypes.EntryLink<FoodCategorySkeleton>;
}

export interface DrinkItemFields {
    drinkTitle: EntryFieldTypes.Symbol;
    price: EntryFieldTypes.Symbol;
    drinkCategory: EntryFieldTypes.Symbol;
    drinkCategoryId: EntryFieldTypes.Symbol;
    drinkType: EntryFieldTypes.EntryLink<FoodCategorySkeleton>;
}

export type PromotionSkeleton = EntrySkeletonType<PromotionFields, 'promotion'>;
export type FoodCategorySkeleton = EntrySkeletonType<FoodCategoryFields, 'foodCategory'>;
export type FoodItemSkeleton = EntrySkeletonType<FoodItemFields, 'foodItem'>;
export type DrinkItemSkeleton = EntrySkeletonType<DrinkItemFields, 'drinkItem'>;
