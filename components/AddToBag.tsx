"use client"

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/app/sanity";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
}

export default function AddToBag({currency, description, image, name, price}: ProductCart){
    const {addItem, handleCartClick} = useShoppingCart()

    const product= {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: "test"
    }

    return <Button onClick={() => {
        addItem(product), handleCartClick()
    }}>
            Add To Cart
        </Button>
}