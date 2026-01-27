export type FoodCategory = {
    foodType: string;
    slug: string;
}

export type FoodItem = {
    foodImg: {
        fields: {
            file: {
                url: string;
            }
        }
    };
    foodTitle: string;
    ingredients: string;
    macros: string;
    priceAndInfo: string;
    foodType: string;
}
