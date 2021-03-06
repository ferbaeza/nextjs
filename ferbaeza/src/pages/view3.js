import React, {useEffect, useState} from "react";
import Link from'next/link';
import Head from 'next/head';

export default function showPage(){
    const [resourceType, setResourceType] = useState('bender');
    const [items, setItems]= useState([]);
    useEffect(() => {
        fetch(`https://futuramaapi.herokuapp.com/api/characters/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
            <Head>
                <title>Api_3</title>
            </Head>

            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

            <h1 className="text-7xl text-center text-blue-500">{resourceType}</h1>

            <div className="text-center text-blue-700">
                <button
                    className="btn text-center text-4xl text-blue-500"
                    onClick={() => setResourceType('bender')}>
                    Bender
                </button>
                <button
                    className="btn text-4xl text-blue-500"
                    onClick={() => setResourceType('fry')}>
                    Fry
                </button>
                <button
                    className="btn text-4xl text-blue-500"
                    onClick={() => setResourceType('leela')}>
                    Leela
                </button>
    
                <button
                    className="btn text-4xl text-blue-500"
                    onClick={() => setResourceType('Hermes')}>
                    Hermes
                </button>
                <button
                    className="btn text-4xl text-blue-500"
                    onClick={() => setResourceType('Giant Bender')}>
                    Giant Bender
                </button>


            </div>
            <div className=" grid grid-cols-3">
                {items.map((item, index) => {
                    return (
                    <div key={index} className=" w-auto m-auto text-xl pb-2 mb-2 ml-14">
                        <p className=" text-center text-3xl">{item.character}</p>
                        <p>{item.quote}</p>
                        <img className=" w-36 h-22" src={item.image}/>
                    </div>)
                })}            
            </div>

        </>

    )

}