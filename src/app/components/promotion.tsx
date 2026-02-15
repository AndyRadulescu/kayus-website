import {getPromotion} from '@/app/lib/lounge-menu';
import AssetWrapper from '@/app/[type]/[slug]/asset-wrapper';
import {filterAvailabilityPromotions} from '@/app/[type]/[slug]/utils';
import {RestaurantType} from '@/app/model/restaurant-type';

export default async function Promotion({type}: { type: RestaurantType }) {
    const promotion = await getPromotion();
    const filteredPromos = filterAvailabilityPromotions(type, promotion);

    if (!filteredPromos || !filteredPromos[0].fields.isVisible || filteredPromos.length === 0) return null;
    return (
        <div className="w-full mb-4 flex justify-center">
            <a className="w-[80%] block no-underline text-inherit" href="tel:0774080300">
                <AssetWrapper thumbnail={filteredPromos[0].fields.promotionMedia}/>
            </a>
        </div>
    );

}
