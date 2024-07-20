import IProduct from "@/interfaces/IProduct";

const apiURL = process.env.NEXT_PUBLIC_API_URL


export const fetchProducts = async () => {
    try {
        const response = await fetch(`${apiURL}/products`, {
            method: 'GET',
            // cache: 'no-cache',
            // next: { revalidate: 3600 },
        })
        const products: IProduct[] = await response.json();
        return products;
        
    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchProductById = async (id: string) => {
    try {
        const products = await fetchProducts();
        const product = products.find((product) => product.id.toString() === id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error: any) {
        throw new Error(error)
    }
};