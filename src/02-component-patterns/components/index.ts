import { ProductCard as ProductCarHOC } from "./ProductCard";

import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCarHOC,{ //Para utilizar nuestro componente ProductCarHOC como objeto y añadirle nuevas propiedades
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
}) 
