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

export default function ProductPage() {
    return(
        <h1>Product page</h1>
    )

}