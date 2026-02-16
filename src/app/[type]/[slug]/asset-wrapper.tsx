import Image from 'next/image';

export default function AssetWrapper({videoUrl, thumbnailUrl}: { videoUrl?: string, thumbnailUrl?: string }) {
    if (!videoUrl && !thumbnailUrl) return;

    const thumbnailAlt = thumbnailUrl || 'food image thumbnail';
    const containerClasses = 'relative w-full overflow-hidden rounded-2xl shadow-md max-h-[250px] lg:max-h-[333px] xl:max-h-[450px] mx-auto';

    if (videoUrl) {
        return (
            <div className={containerClasses}>
                <video
                    autoPlay loop muted playsInline preload="metadata"
                    className="w-full h-full max-h-[450px] object-cover"
                    poster={thumbnailUrl}
                >
                    <source src={videoUrl} type="video/webm"/>
                </video>
            </div>
        );
    }

    return (
        <div className={containerClasses}>
            <div className="aspect-[4/3] w-full max-h-[450px]">
                <Image
                    src={thumbnailUrl as string}
                    alt={thumbnailAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
