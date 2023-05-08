import React from 'react'

const Singlecertificate = () => {
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
                        <h1><b>{obj.Name}</b></h1><br /><br />
                        <span><i>has successfully completed the certification</i></span> <br /><br />
                        <h2>{obj.Course}</h2>
                        <span>with score of <b>{obj.Grade}</b></span> <br /><br />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Singlecertificate
