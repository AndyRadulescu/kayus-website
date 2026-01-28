import {getFoodItemsByCategorySlug} from '@/app/lib/lounge-menu';
import {Macros} from '@/app/components/macros';
import {UnresolvedLink} from 'contentful';
import AssetWrapper from '@/app/[slug]/asset-wrapper';

interface Props {
    params: { slug: string };
}

function isResolved<T>(entry: T | UnresolvedLink<'Entry'>): entry is T {
    if (entry != null && typeof entry === 'object' && 'fields' in entry) {
        return entry.fields !== undefined;
    }
    return false;
}

export default async function CategoryPage({params}: Props) {
    const {slug} = await params;

    const items = await getFoodItemsByCategorySlug(slug);
    const foodTypeField = items[0]?.fields?.foodType;
    return (
        <div className="p-4">
            <h1 className="text-center text-2xl mb-2">{isResolved(foodTypeField) ? foodTypeField.fields.foodType : 'Loading...'}</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.sys.id}>
                        <div className="bg-neutral-900 mb-4 rounded-2xl">
                            <AssetWrapper foodImg={item.fields.foodImg}/>
                            <p className="text-center text-xl font-bold my-2 text-primary">{item.fields.foodTitle}</p>
                            <p className="text-center">{item.fields.ingredients}</p>
                            <div className="flex justify-center text-center">
                                <Macros macros={item.fields.macros}/>
                            </div>
                            <p className="text-center primary-gradient text-gray-700 mt-2 rounded-b-2xl py-1">{item.fields.priceAndInfo}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
