import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
// import { useNavigate } from 'react-router-dom'


const ExcelData = ({ jsonstate }) => {

    const componentRef = useRef()
    const generatePDF = useReactToPrint({
        content: () => componentRef.current,

    })
    let [usedata, setData] = useState(sessionStorage.getItem("data"))
    useEffect(() => {

    }, [usedata])
    function print(index) {
        setData([`${index.Name}, ${index.Grade} ,  ${index.Course}`])
        console.log(`${index.Name}, ${index.Grade} ,  ${index.Course}`)
        sessionStorage.setItem("data", JSON.stringify([`${index.Name} , ${index.Course}, ${index.Grade}`]));
    }
    console.log(jsonstate)
    return (
        <>
            <div className="container">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Sr no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    {
                        jsonstate.map((obj, sno) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{sno + 1}</td>
                                            <td>{obj.Name}</td>
                                            <td>{obj.Course}</td>
                                            <td>{obj.Grade}</td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </div>


            {
                jsonstate.map((obj, index) => {
                    return (
                        <>
                            <div className="outer">
                                <div className="inner">
                                    <div className="subinner">
                                        <br />
                                        <br />
                                        <h1 className="certification">Certificate of Completion</h1>
                                        <br /><br />
                                        <span><i>This is to certify that</i></span>
                                        <br /><br />
                                        <h1><b>{obj.Name}</b></h1><br />
                                        <span><i>has successfully completed the certification</i></span> <br /><br />
                                        <h2>{obj.Course}</h2>
                                        <span>with score of <b>{obj.Grade}</b></span> <br /><br />
                                        <div className='d-flex justify-content-end mx-1'>
                                            <button type="button" onClick={() => print(obj)} className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Print {obj.Name} Certificate
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="text-center">
                    <button type="button" onClick={generatePDF} className="btn btn-primary">Print this</button>
                </div>
                <div className="modal-dialog">
                    <div>
                        <div className="modal-body">
                            <div>
                                <div className="outer certificate-height" ref={componentRef}>
                                    <div className="inner" >
                                        <div className="subinner">
                                            <br />
                                            <br />
                                            <h1 className="certification">Certificate of Completion</h1>
                                            <br /><br />
                                            <span><i>This is to certify that</i></span>
                                            <br /><br />
                                            {
                                                JSON.parse(sessionStorage.getItem("data")) ? JSON.parse(sessionStorage.getItem("data")).map((objectdata) => {
                                                    return (
                                                        <><h1><b>{objectdata.split(",")[0].toUpperCase()}</b></h1><br /
                                                        ><br />
                                                            <span><i>has successfully completed her/his the certification</i></span> <br /><br />
                                                            <h2><b>{objectdata.split(",")[1]}</b></h2>
                                                            <span>with score of <b><b>{objectdata.split(",")[2]}</b></b></span> <br /><br />
                                                        </>
                                                    )
                                                }) : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExcelData