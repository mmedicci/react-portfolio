function Footer() {
    return(
        <section className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white"> 
            <div className="container mx-auto flex max-w-4xl p-4 text-sm font-sans">
                <p className="flex-grow">
                    &copy; {new Date().getFullYear()} &middot; All rights reserved.
                </p>
                <ul className="flex flex-nowrap gap-2">
                    <li>
                        <a href="#">Terms of use</a>
                    </li>
                    <li className="text-gray-500">&middot;</li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;

