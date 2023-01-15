const Homepage = () => {
    return (
        <>
            <nav className="flex justify-between items-center py-3 border border-b-black shadow shadow-black">
                <div className="pl-5">
                    <h1 className="text-3xl bold text-pink-500">CHRIS</h1>
                </div>
                <ul className="gap-5 pr-5 text-gray-100 xs:flex hidden">
                    <li>
                        <a href=" ">Home</a>
                    </li>
                    <li>
                        <a href=" ">About</a>
                    </li>
                    <li>
                        <a href=" ">Contact</a>
                    </li>
                </ul>
            </nav>

            <main className="flex flex-col md:flex-row justify-between gap-8 xs:p-10 p-5">
                <div>
                    <div>
                        <h1 className="text-3xl md:text-6xl text-gray-200">
                            We are ready to supply your desired food for you{" "}
                            <span className="text-pink-700">anytime</span>
                        </h1>
                        <p className="text-slate-300 my-6">
                            The foods we provide are supplied directly from our garden we
                            assure you <span>quality </span> and <span> freshness</span>
                        </p>
                    </div>
                    <div className="flex flex-col xs:flex-row gap-2 mt-12 items-center">
                        <button className="btn">
                            Shop Now{" "}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 inline-block"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <button className="btn">
                            Show Menu{" "}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 inline-block"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img
                        src="/home-img-1.png"
                        alt="hero-food"
                        className="w-full"
                    />
                </div>
            </main>

            <section className="py-8 xs:py-12">
                <h1 className="text-3xl xs:text-5xl bold text-center underline xs:mb-12 mb-6">Our Menu</h1>
                <div className="grid md:grid-cols-3 gap-8 px-4">
                    <div className="card">
                        <img src="/dish-1.png" alt="first dish" className="w-full object-contain h-3/4" />
                        <p className="text-gray-800 text-lg bold pl-6">Burger</p>
                        <p className="text-gray-800 pl-6">$5</p>
                    </div>
                    <div className="card">
                        <img src="/dish-2.png" alt="second dish" className="w-full object-contain h-3/4" />
                        <p className="text-gray-800 text-lg bold pl-6">Crispy</p>
                        <p className="text-gray-800 pl-6">$10</p>
                    </div>
                    <div className="card">
                        <img src="/dish-3.png" alt="third dish" className="w-full object-contain h-3/4" />
                        <p className="text-gray-800 text-lg bold pl-6">Chicken</p>
                        <p className="text-gray-800 pl-6">$15</p>
                    </div>
                    <div className="card">
                        <img src="/home-img-1.png" alt="fourth dish" className="w-full object-contain h-3/4" />
                        <p className="text-gray-800 text-lg bold pl-6">Noodles</p>
                        <p className="text-gray-800 pl-6">$20</p>
                    </div>
                    <div className="card">
                        <img src="/home-img-2.png" alt="fifth dish" className="w-full object-contain h-3/4" />
                        <p className="text-gray-800 text-lg bold pl-6">Vegan Chicken</p>
                        <p className="text-gray-800 pl-6">$25</p>
                    </div>
                    <div className="card">
                        <img src="/home-img-3.png" alt="sixth dish" className="w-full object-contain h-3/4" />
                        <p className="text-gray-800 text-lg bold pl-6">Pizza</p>
                        <p className="text-gray-800 pl-6">$30</p>
                    </div>
                </div>
            </section>

            <footer>
                <p className="text-xl xs:text-3xl text-center pb-6 text-white">
                    Created By <a href="https://www.github.com/Christiano112" rel="noreferrer" target="_blank" className="text-pink-500 underline">Christiano12</a>
                </p>
            </footer>
        </>
    );
};

export default Homepage;
