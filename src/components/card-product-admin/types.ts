import {Product} from "../../pages/home/types.ts";
import React from "react";

export type CardProductAdminProps = {
    product: Product,
    setMyProducts: React.Dispatch<React.SetStateAction<Product[]>>
}