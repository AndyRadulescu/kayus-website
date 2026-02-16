import AssetWrapper from '@/app/[type]/[slug]/asset-wrapper';
import {Macros} from '@/app/components/macros';
import {getFoodItemsByCategorySlug} from '@/app/lib/lounge-menu';
import {filterAvailabilityFood, isResolved} from '@/app/[type]/[slug]/utils';
import {RestaurantType} from '@/app/model/restaurant-type';
import {useTranslationServer} from '@/app/lib/i18n-server';

export default async function FoodContainer({slug, type}: { slug: string, type: RestaurantType }) {
    const items = await getFoodItemsByCategorySlug(slug);
    const foodTypeField = items[0]?.fields?.foodType;
    const filteredItems = filterAvailabilityFood(type, items);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslationServer();
    return (
        <>
            <h1 className="text-center text-2xl mb-6 uppercase">{isResolved(foodTypeField) ? `- ${foodTypeField.fields.foodType} -` : 'Loading...'}</h1>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.sys.id}>
                        <div className="bg-neutral-900 mb-4 rounded-2xl">
                            <AssetWrapper videoUrl={item.fields.videoUrl} thumbnailUrl={item.fields.thumbnailUrl}/>
                            <p className="text-center text-xl font-bold p-2 text-primary">{item.fields.foodTitle}</p>
                            <p className="text-center px-2">{item.fields.ingredients}</p>
                            <div className="flex justify-center text-center">
                                <Macros macros={item.fields.macros} hideLabel={t('hideMacros')} showLabel={t('showMacros')}/>
                            </div>
                            <p className="text-center primary-gradient text-black mt-2 rounded-b-2xl py-1">{item.fields.priceAndInfo}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
