import {createClient} from 'contentful';
import '../../envConfig';

export const contentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
