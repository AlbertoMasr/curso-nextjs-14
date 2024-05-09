import { ProductWrapper } from "app/components/store/productsWrapper";
import { getCollections, getCollectionProducts } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoriesProps {
    params: {
        categories: string[];
    },
    searchParams: {
        category?: string;
    }
}

export default async function Category(props: CategoriesProps) {

    const { categories } = props.params;

    let products = [];

    const collections = await getCollections();

    if(categories?.length > 0) {
        const selectedCollectionId = await collections.find((collection: any) => collection.handle === categories[0]).id;
        products = await getCollectionProducts(selectedCollectionId);
    } else {
        products = await getProducts();
    }

    return (
        <div>
            <ProductWrapper  products={products} />
        </div>
    )
}