import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png'
}

const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div style={{
				display: "flex",
				flexDirection: 'row',
				flexWrap: "wrap"
			}}>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title={'Cafe'} />
					<ProductCard.Buttons />
				</ProductCard>

				{/* de la siguiente forma es lo mismo que lo anterior, se lo puede trabajar de la foma que mejor nos paresca  */}
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	)
}

export default ShoppingPage