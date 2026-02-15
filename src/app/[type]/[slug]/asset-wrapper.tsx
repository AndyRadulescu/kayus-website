import Image from 'next/image';
import {Asset, UnresolvedLink} from 'contentful';

export function isResolvedAsset(asset: Asset | UnresolvedLink<'Asset'>): asset is Asset {
    return asset && 'fields' in asset;
}

type AssetType = UnresolvedLink<'Asset'> | Asset<undefined, string> | undefined;

export default function AssetWrapper({videoUrl, thumbnail}: { videoUrl?: string, thumbnail?: AssetType }) {
    const hasFoodVideoUrl = !videoUrl || videoUrl.length > 0;
    const hasThumbnail = thumbnail && isResolvedAsset(thumbnail) && thumbnail.fields?.file?.url;

    if (!hasFoodVideoUrl && !hasThumbnail) {
        return;
    }

    const foodImgUrl = hasFoodVideoUrl ? videoUrl : '';

    const thumbnailUrl = hasThumbnail
        ? (thumbnail?.fields?.file?.url as string)
        : `${foodImgUrl}#t=0.5`;

    const thumbnailAlt = hasThumbnail
        ? (thumbnail.fields.title as string)
        : 'food image thumbnail';
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
                    src={`https:${thumbnailUrl}`}
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
