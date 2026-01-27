import { contentfulClientApi } from './contentful';

export async function getLoungeMenu() {
    const res = await contentfulClientApi.getEntries({
        content_type: 'loungeMenu',
    });

    return res.items;
}
