import {getDrinksItemsByCategorySlug} from '@/app/lib/lounge-menu';
import {filterAvailabilityDrinks, isResolved} from '@/app/[type]/[slug]/utils';
import {RestaurantType} from '@/app/model/restaurant-type';

export const DRINKS_ORDER = [
    'soft-drinks',
    'coffee',
    'tea',
    'breakfast-cocktails',
    'long-drinks',
    'wiskey',
    'vodka',
    'rum',
    'gin',
    'tequila',
    'digestive',
    'beer',
] as const;

export default async function DrinksContainer({slug, type}: { slug: string, type: RestaurantType }) {
    const items = await getDrinksItemsByCategorySlug(slug);
    const drinksTypeField = items[0]?.fields?.drinkType;
    const filteredItems = filterAvailabilityDrinks(type, items);
    const groupedItems = filteredItems.reduce((acc, item) => {
        const categoryId = item.fields.drinkCategoryId || 'Other';
        if (!acc[categoryId]) {
            acc[categoryId] = [];
        }
        acc[categoryId].push(item);
        return acc;
    }, {} as Record<string, typeof filteredItems>);

    return (
        <>
            <h1 className="text-center text-2xl mb-6">
                {isResolved(drinksTypeField) ? drinksTypeField.fields.foodType : 'Loading...'}
            </h1>

            {DRINKS_ORDER.map((sectionId) => {
                const categoryItems = groupedItems[sectionId];
                if (!categoryItems || categoryItems.length === 0) return null;

                return (
                    <section key={sectionId} className="mb-8">
                        <h2 className="text-xl font-bold border-b pb-2 mb-4 text-primary uppercase tracking-wide">
                            {categoryItems[0].fields.drinkCategory}
                        </h2>

                        <ul className="space-y-2">
                            {categoryItems.map((item) => (
                                <li key={item.sys.id} className="flex justify-between items-center group">
                                    <span className="font-medium text-sm group-hover:text-primary transition-colors">
                                        {item.fields.drinkTitle}
                                    </span>
                                    <div className="hidden md:flex md:flex-1 border-b border-dotted border-gray-300 mx-2 mb-1"/>
                                    <span className="text-gray-600 text-sm font-semibold whitespace-nowrap">
                                        {item.fields.price}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            })}
        </>
    );
}
