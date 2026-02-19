import {getPromotion} from '@/app/lib/lounge-menu';
import AssetWrapper from '@/app/[type]/[slug]/asset-wrapper';
import {filterAvailabilityPromotions} from '@/app/[type]/[slug]/utils';
import {RestaurantType} from '@/app/model/restaurant-type';
import {getServerLocaleFromCookies} from '@/app/utils';

export default async function Promotion({type}: { type: RestaurantType }) {
    const locale = await getServerLocaleFromCookies();
    const promotion = await getPromotion(locale);
    const filteredPromos = filterAvailabilityPromotions(type, promotion);

    if (!filteredPromos || filteredPromos.length === 0 || !filteredPromos[0].fields.isVisible) return null;
    return (
        <div className="w-full mb-4 flex justify-center">
            <a className="w-[80%] block no-underline text-inherit" href="tel:0774080300">
                <AssetWrapper thumbnailUrl={filteredPromos[0].fields.promotionMediaUrl}/>
            </a>
        </div>
    );

}
