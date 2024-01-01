import { client } from "../sanity";

async function getData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"] {
          _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category->name
        }`;
  
    const data = await client.fetch(query);
  
    return data;
}

export default async function CategoryPage({params}:{params: {category:string}}){
    const data = await getData(params.category)
}