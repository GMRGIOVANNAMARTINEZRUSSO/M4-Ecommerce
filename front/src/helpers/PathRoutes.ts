const PATHROUTES ={
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    LOGIN: "/login",
    REGISTER: "/register",
    PRODUCTID: (id: number | string) => `/products/${id}`,
    DASHBOARD: "/dashboard",
    SHOP: "/shop",
    CART: "/dashboard/cart"
}
export default PATHROUTES