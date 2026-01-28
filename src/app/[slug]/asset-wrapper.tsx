import Image from 'next/image';
import {Asset, UnresolvedLink} from 'contentful';

export function isResolvedAsset(asset: Asset | UnresolvedLink<'Asset'>): asset is Asset {
    return asset && 'fields' in asset;
}

export default function AssetWrapper({foodImg}: { foodImg: UnresolvedLink<'Asset'> | Asset<undefined, string> }) {
    if (!isResolvedAsset(foodImg)) return <p>Loading...</p>;

    if (!foodImg?.fields?.file) {
        return <p>Image not loaded</p>;
    }

    const url = foodImg.fields.file.url as string;
    if (foodImg.fields.file.contentType === 'video/webm') return (
        <div className="rounded-xl overflow-hidden w-full">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
            >
                <source src={url} type="video/webm"/>
            </video>
        </div>
    );
    return (
        <div className="image-container rounded-2xl" style={{position: 'relative', width: '100%', height: '300px'}}>
            <Image
                className="rounded-2xl" src={'https:' + url} alt={foodImg.fields.file.fileName} loading="lazy" fill
                objectFit="cover"
            />
        </div>
    );
}
