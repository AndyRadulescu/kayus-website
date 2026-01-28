import {getFoodItemsByCategorySlug} from '@/app/lib/lounge-menu';
import {Macros} from '@/app/components/macros';

interface Props {
    params: { slug: string };
}

export default async function CategoryPage({params}: Props) {
    const {slug} = await params;

    const items = await getFoodItemsByCategorySlug(slug);

    return (
        <div className="p-4">
            <h1 className="text-center text-2xl mb-2">{items[0].fields.foodType.fields.foodType}</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.sys.id}>
                        <div className="bg-neutral-900 mb-4 rounded-2xl">
                            <video autoPlay loop muted playsInline loading="lazy" className="rounded-xl">
                                <source src={item.fields.foodImg.fields.file.url} type="video/webm"/>
                            </video>
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
