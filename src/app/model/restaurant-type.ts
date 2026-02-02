export const validRestaurantTypes = ['lounge', 'hotel'] as const;
export type RestaurantType = typeof validRestaurantTypes[number];

export interface PropsSlug {
    params: { slug: string, type: RestaurantType },
}

export interface PropsType {
    params: { type: RestaurantType };
}
