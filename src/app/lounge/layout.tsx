import {getLoungeMenu} from '@/app/lib/lounge-menu';

export default async function LoungeLayout({children}: {
    children: React.ReactNode;
}) {
    const menu = await getLoungeMenu();
    console.log(menu);

    return (
        <section>
            <nav>
                {menu.map((item: any) => (
                    <span key={item.sys.id}>{item.fields.title}</span>
                ))}
            </nav>

            {children}
        </section>
    );
}
