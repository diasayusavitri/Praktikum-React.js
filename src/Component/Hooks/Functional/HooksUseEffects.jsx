import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'

function HooksUseEffects() {

    const[namaLengkap, setNamaLengkap] = useState({nama:'Dias', marga:'Ayu'})

    useEffect(()=>{
        console.log("Memanggil Use Effects")
        setNamaLengkap({nama : 'Munif', marga:'Abdillah'})
    },[])

    return (
        <Container>
            <h3>Profil User</h3>
            <h4>Nama : {namaLengkap.nama}</h4>
            <h4>Marga : {namaLengkap.marga}</h4>
        </Container>
    )
}

export default HooksUseEffects