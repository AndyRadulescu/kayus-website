import Image from 'next/image';
import {Asset, UnresolvedLink} from 'contentful';

export function isResolvedAsset(asset: Asset | UnresolvedLink<'Asset'>): asset is Asset {
    return asset && 'fields' in asset;
}

type AssetType = UnresolvedLink<'Asset'> | Asset<undefined, string> | undefined;

export default function AssetWrapper({foodImg}: { foodImg: AssetType }) {
    if (!foodImg) return;
    if (!isResolvedAsset(foodImg)) return <p>Loading...</p>;
    if (!foodImg?.fields?.file) return <p>Image not loaded</p>;

    const url = foodImg.fields.file.url as string;
    const containerClasses = 'relative w-full overflow-hidden rounded-2xl shadow-md max-h-[250px] lg:max-h-[333px] xl:max-h-[450px] mx-auto';

    if (foodImg.fields.file.contentType === 'video/webm') {
        return (
            <div className={containerClasses}>
                <video
                    autoPlay loop muted playsInline preload="metadata"
                    className="w-full h-full max-h-[450px] object-cover"
                    poster={`${url}#t=0.5`}
                >
                    <source src={url} type="video/webm"/>
                </video>
            </div>
        );
    }

    return (
        <div className={containerClasses}>
            <div className="aspect-[4/3] w-full max-h-[450px]">
                <Image
                    src={`https:${url}`}
                    alt={(foodImg.fields.title as string) || 'Food image'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
