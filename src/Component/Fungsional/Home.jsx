import React from 'react'
//import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
        {
        <div>
        <Produk nama="Macbook Pro 2020" stock="10" harga="33000000"/>
        <Produk nama="Macbook Pro 2019" stock="56" harga="36000000"/>
        <Produk nama="Macbook Pro 2021" stock="17" harga="32000000"/>
        <Produk nama="Macbook Pro 2022" stock="43" harga="30000000"/>
        <Produk nama="Macbook Pro 2023" stock="20" harga="29000000"/>
        <Produk nama="Macbook Pro 2024" stock="30" harga="43000000"/>
        </div>
        /* {<Blog 
        tanggal="02 Juni 2020"
        judul="Teknologi Blockchain"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
        />
        <Blog 
        tanggal="03 Juni 2020"
        judul="Teknologi Internet of Things"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
        />
        <Blog 
        tanggal="04 Juni 2020"
        judul="Teknologi Pattern Laravel"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
        />} */}

    </div>
}

export default Home;