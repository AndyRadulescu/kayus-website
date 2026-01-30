import {getPromotion} from '@/app/lib/lounge-menu';
import AssetWrapper from '@/app/lounge/[slug]/asset-wrapper';

export default async function Promotion() {
    const promotion = await getPromotion();

    if (!promotion || !promotion[0].fields.isVisible) return null;
    return (
        <div className="w-full mb-4 flex justify-center">
            <a className="w-[80%] block no-underline text-inherit" href="tel:0774080300">
                <AssetWrapper foodImg={promotion[0].fields.promotionMedia}/>
            </a>
        </div>
    );

}
