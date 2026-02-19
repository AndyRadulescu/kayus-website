import {revalidateTag} from 'next/cache';
import {redirect} from 'next/navigation';

export async function GET() {
    revalidateTag('menu', 'max');
    redirect('/admin/refresh/success');
}
