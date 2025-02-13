import PATHROUTES from "./PathRoutes";


export const navItemsPublic = [
    {
        title: "Home",
        href: PATHROUTES.HOME,
        icon: "home",
    },
    {
        title: "Products",
        href: PATHROUTES.PRODUCTS,
        icon: "products"
    },
    {
        title: "Login",
        href: PATHROUTES.LOGIN,
        icon: "login"
    },
    {
        title: "Register",
        href: PATHROUTES.REGISTER,
        icon: "register"
    },

];

export const navItemsPrivate= [
    {
        title: "Home",
        href: PATHROUTES.HOME,
        icon: "home",
    },
    {
        title: "Products",
        href: PATHROUTES.PRODUCTS,
        icon: "products"
    },
];

export const navItemsLogged = [
    {

        title: "Profile",
        path: PATHROUTES.DASHBOARD,
    },
    {
        title: "Cart",
        path: PATHROUTES.CART,

   }
]


