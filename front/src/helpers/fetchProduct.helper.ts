import IProduct from "@/interfaces/IProduct";

const apiURL = process.env.NEXT_PUBLIC_API_URL


export const fetchProducts = async () => {
    try {
        const response = await fetch(`${apiURL}/products`, {
            method: 'GET',
            cache: 'no-cache',
            // next: { revalidate: 3600 },
        })
        const products: IProduct[] = await response.json();
        return products;
        
    } catch (error: any) {
        throw new Error(error)
    }
}

const findProductById = async (product : IProduct[], producId: number) => {
    const productsId= product.find
    ((product) => product.id === producId)
    return productsId

}

export const fetchProductById = async (id: string) => {
    const producId = Number(id)
    try {
        const products = await fetchProducts();
       if (products.length === 0) {
           throw new Error('Products not found');
       }
        const product = await findProductById(products, producId);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error: any) {
        throw new Error(error)
    }
};