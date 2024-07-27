import React from "react"
import Link from "next/link"
import PATHROUTES from '@/helpers/PathRoutes'
const NotFound = () => {
    return (
        <div>
            <section className="text-center">
            <h3 className="text-3xl font-bold mb-6">UPS! 404 Page not found</h3>
            <p> no te preocupes tenemos mas productos para ti</p>
            <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href={PATHROUTES.HOME}>Ir al home</Link>
            </button>
            </section>
        </div>
    )
}
export default NotFound