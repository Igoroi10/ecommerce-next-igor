import { fullProduct } from "@/app/interface";
import { client } from "@/app/sanity";

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

export default async function ProductPage({params}: {params: {slug: string}}) {
    const data: fullProduct = await getData(params.slug)
    return(
        <h1>Product page</h1>
    )

}