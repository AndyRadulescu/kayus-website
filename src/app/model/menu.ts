import { EntryFieldTypes, EntrySkeletonType } from 'contentful';

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

export type FoodCategorySkeleton = EntrySkeletonType<FoodCategoryFields, 'foodCategory'>;
export type FoodItemSkeleton = EntrySkeletonType<FoodItemFields, 'foodItem'>;
