"use client"

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/app/sanity";

import { ProductCart } from "./AddToBag";

export default function CheckoutNow({currency, description, image, name, price, price_id}: ProductCart){
    const {checkoutSingleItem} = useShoppingCart()

    function buyNow(price_id: string){
        checkoutSingleItem(price_id)
    }

    const product= {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }

    return <Button onClick={() => {
        buyNow(product.price_id)
    }}>
            Add To Cart
        </Button>
}