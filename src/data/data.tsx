import * as React from "react"
import { provinsi, kabupaten, kecamatan, desa } from 'wilayah-indonesia'
import Select from "react-select"

const getOptionsLabel = (wilayah: string) => {
    return wilayah;
}

const getOPtionsValue = (wilayah: string) => {
    return wilayah;
}

const handleChange = (selected: string[]) => {
    console.log(selected);
}

const App = () => (
    <div>
        <h2>Start editing to see some </h2>
        <Select 
        isMulti={false}
        options={provinsi}
        />
    </div>
    
)