import FoodContainer from '@/app/lounge/[slug]/food-container';
import DrinksContainer from '@/app/lounge/[slug]/drinks-container';

interface Props {
    params: { slug: string };
}

export default async function CategoryPage({params}: Props) {
    const {slug} = await params;

    let container;
    if (slug === 'drinks') {
        container = <DrinksContainer slug={slug}/>;
    } else {
        container = <FoodContainer slug={slug}/>;
    }
    return (
        <div className="p-4">
            {container}
        </div>
    );
}
