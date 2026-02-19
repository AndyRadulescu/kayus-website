import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <div className="bg-neutral-900 p-8 rounded-3xl border border-primary shadow-2xl">
                <h1 className="text-2xl font-bold text-primary mb-4 uppercase tracking-widest">
                    Cache Invalidated
                </h1>
                <p className="text-gray-400 mb-8">
                    The menu data has been refreshed for all users.
                </p>
                <Link href="/">
                    <button className="primary-gradient text-black px-8 py-2 rounded-full font-bold uppercase hover:opacity-90 transition-opacity">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
