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
        <video autoPlay loop muted playsInline preload="metadata" className="rounded-xl">
            <source src={url} type="video/webm"/>
        </video>
    );
    return (
        <Image src={url} alt="Image"/>
    );
}
