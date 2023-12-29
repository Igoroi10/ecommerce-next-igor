import imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '817l4hfg',
    dataset: 'production',
    apiVersion: '2023-12-29',
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source);
}