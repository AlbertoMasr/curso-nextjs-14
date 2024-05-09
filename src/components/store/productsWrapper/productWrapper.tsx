import { ProductCard } from "../productCard";
import styles from "./productWrapper.module.sass";

interface ProductWrapperInterface {
    products: ProductType[];
}

export const ProductWrapper = ({ products }: ProductWrapperInterface) => {
    return (
        <div className={styles.ProductsWrapper}>
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
    );
};