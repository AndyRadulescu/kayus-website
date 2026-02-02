import FoodContainer from '@/app/[type]/[slug]/food-container';
import DrinksContainer from '@/app/[type]/[slug]/drinks-container';
import {PropsSlug, validRestaurantTypes} from '@/app/model/restaurant-type';
import {notFound} from 'next/navigation';

export default async function CategoryPage({params}: PropsSlug) {
    const {slug, type} = await params;

    if (!validRestaurantTypes.includes(type)) {
        notFound();
    }

    let container;
    if (slug === 'drinks') {
        container = <DrinksContainer slug={slug} type={type}/>;
    } else {
        container = <FoodContainer slug={slug} type={type}/>;
    }
    return (
        <div className="p-4">
            {container}
        </div>
    );
}
