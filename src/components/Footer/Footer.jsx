import React from "react";

const Footer = () => {
    return (
        <div className="grid pb-10 md:grid-cols-3 grid-cols-1 mt-12 mb-0 md:ml-16 md:mr-16 bg-gray-900 text-white">
            <div className="pt-5 pl-5">
                <h4 className="text-3xl font-semibold">About Us:</h4>
                <div className="font-light pl-3 pt-5">
                <p>Blogs: <a href="/blog">Click</a> </p>
                <p>Shop: <a href="/shop">Click</a></p>
                <p>Conatact: info@dimongym.com</p>
                <p>Telephone: 097458475</p>
                </div>
            </div>

            <div className="pt-5 pl-5">
            <h4 className="text-3xl font-semibold text-center">Become our Family</h4>
                <div className="pl-3 pt-5">
                <input type="text" placeholder="Email" className="w-full rounded-md h-10 p-2 text-black " />
                <input type="number" placeholder="Phone" className="mt-3 w-full rounded-md h-10 p-2 text-black " />
                <input type="button" value="Submit" className="mt-3 w-full rounded-md h-10 p-2 bg-white text-black text-1xl font-bold hover:bg-gray-600" />
                </div>
            </div>

            <div className="pt-5 pl-5">
            <h4 className="text-3xl font-semibold text-center">Few thngs you have to know</h4>
            <p className="pl-3 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perferendis iure, iusto ab veritatis vero excepturi ipsum officiis blanditiis, at tenetur odio provident velit quidem rem recusandae debitis molestiae modi!</p>
            </div>
        </div>
    )
};

export default Footer;