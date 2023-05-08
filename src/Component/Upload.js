import React, { useState } from 'react'

import * as  xlsx from 'xlsx'
import ExcelData from './Exceldata'


const Upload = () => {

    const [jsonstate, setJson] = useState([])

    const readUploadFile = (e) => {
        e.preventDefault();

        const selectedfile = e.target.files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(selectedfile)
        reader.onload = (e) => {
            const binarydata = e.target.result;
            const workbook = xlsx.read(binarydata, { type: 'binary' })

            workbook.SheetNames.map((data) => {
                const json = xlsx.utils.sheet_to_json(workbook.Sheets[data])
                setJson(json)
            })
        }
        console.log(jsonstate)
    }

    return (
        <>
            <form>
                <h2>
                    <marquee width="100%" direction="left" scrollamount="12" className="bg-dark text-light">
                        Upload excel file that contain name , grade and course
                    </marquee>
                </h2>
                <div className="container">

                    <input
                        type="file"
                        name="upload"
                        id="upload"
                        className='form-control mb-4'
                        accept='.xls,.xlsx'
                        onChange={readUploadFile}
                    />
                </div>
            </form>
            {/* <Exceldata jsondata={jsonstate} /> */}
            <ExcelData jsonstate={jsonstate}/>
        </>
    )
}

export default Upload