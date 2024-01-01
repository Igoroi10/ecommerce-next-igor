import Link from "next/link"

export default function Navbar() {
    return(
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-4xl font-b">
                        Test<span className="text-primary">Commerce</span>
                    </h1>
                </Link>
            </div>
        </header>
    )
}