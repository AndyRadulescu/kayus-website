import {getLoungeMenu} from '@/app/lib/lounge-menu';
import Link from 'next/link';

export default async function LoungeLayout({children}: {
    children: React.ReactNode;
}) {
    const menu = await getLoungeMenu();
    console.log(menu);

    return (
        <section>
            <nav>
                {menu.map((item) => (
                    <Link href={`/${item.fields.slug}`} key={item.sys.id}>
                        <p>{item.fields.foodType}</p>
                    </Link>
                ))}
            </nav>

            {children}
        </section>
    );
}
