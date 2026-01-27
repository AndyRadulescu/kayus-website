import {getFoodItemsByCategorySlug} from '@/app/lib/lounge-menu';

interface Props {
    params: { slug: string };
}

export default async function CategoryPage({params}: Props) {
    const {slug} = await params;

    const items = await getFoodItemsByCategorySlug(slug);

    return (
        <div>
            <h1>{slug}</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.sys.id}>
                        <div>
                            <video autoPlay loop muted playsInline>
                                <source src={item.fields.foodImg.fields.file.url} type="video/webm" />
                            </video>
                            <span>{item.fields.foodTitle} - {item.fields.priceAndInfo}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
