import {getDrinkItemsBySectionId, getDrinksSectionsByCategorySlug} from '@/app/lib/lounge-menu';
import {filterAvailabilityDrinks, isResolved} from '@/app/[type]/[slug]/utils';
import {RestaurantType} from '@/app/model/restaurant-type';

export default async function DrinksContainer({slug, type}: { slug: string, type: RestaurantType }) {
    const sections = await getDrinksSectionsByCategorySlug(slug);
    const drinksTypeField = sections[0]?.fields?.drinkType;

    const groupedDrinksBySection = await Promise.all(
        sections.map(async (section) => {
            const items = await getDrinkItemsBySectionId(section);
            return {
                section: section,
                items: filterAvailabilityDrinks(type, items)
            };
        })
    );

    return (
        <>
            <h1 className="text-center text-2xl mb-6 uppercase">
                {isResolved(drinksTypeField) ? ` - ${drinksTypeField.fields.foodType} - ` : 'Loading...'}
            </h1>

            {groupedDrinksBySection.map(({section, items}) => {
                return (
                    <section key={section.sys.id} className="mb-8">
                        <h2 className="text-xl font-bold border-b pb-2 mb-4 text-primary uppercase tracking-wide">
                            {section.fields.drinkTitle || 'Loading...'}
                        </h2>

                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li key={item.sys.id} className="flex justify-between items-center group">
                                    <span className="font-medium text-sm group-hover:text-primary transition-colors">
                                        {item.fields.drinkTitle}
                                    </span>
                                    <div
                                        className="hidden md:flex md:flex-1 border-b border-dotted border-gray-300 mx-2 mb-1"/>
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
