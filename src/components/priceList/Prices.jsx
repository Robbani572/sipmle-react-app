import React, { useEffect, useState } from "react";
import Price from "../price/price";

const Prices = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])


    return (
        <div className="mt-12">
            <h1 className="text-5xl font-bold text-center">Our Packeges and Details</h1>
            <div className="grid md:grid-cols-3 gap-3 md:ml-16 md:mr-16">
                {
                    prices.map(price => <Price
                        key={price.id}
                        price={price}
                    ></Price>)
                }
            </div>
        </div>
    )
};

export default Prices;