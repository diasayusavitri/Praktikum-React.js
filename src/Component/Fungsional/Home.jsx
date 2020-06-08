import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog 
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
        />

    </div>
}

export default Home;