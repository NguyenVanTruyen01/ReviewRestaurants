import React from "react";
import './Loading.css'

const LoadingPage = () => {
    return (
        <div className = "body">
            <div className= "text-loading">Loading...</div>
            <div className="loader">
                <div className="loader-item"></div>
                <div className="loader-item"></div>
                <div className="loader-item"></div>
            </div>
            </div>
    )
}

export default LoadingPage