import React from "react" 

const Loading = () => {
    return (
        <div className="w-100 min-vh-100 d-flex justify-content-center">
            <div className="" style={{marginTop: "128px"}}>
                <div className="spinner-border">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading