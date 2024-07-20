import React from "react"
import Link from "next/link"
const NotFound = () => {
    return (
        <div>
            <section>
            <h3>UPS! 404 Page not found</h3>
            <span> no te preocupes tenemos mas productos para ti</span>
            <Link href="/"> Volver al home</Link>
            </section>
        </div>
    )
}
export default NotFound