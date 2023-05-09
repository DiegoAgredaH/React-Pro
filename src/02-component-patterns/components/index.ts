import { ProductCard as ProductCarHOC } from "./ProductCard";

import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

// Lo siguiente se hace para poder trabajar el HOC así: <ProductCard.Image />
export const ProductCard:ProductCardHOCProps = Object.assign(ProductCarHOC,{ //Para utilizar nuestro componente ProductCardHOC como un objeto y añadirle nuevas propiedades
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
}) 
