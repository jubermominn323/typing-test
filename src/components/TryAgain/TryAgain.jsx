import React from 'react'
import './TryAgain.css'

const TryAgain = ({words, characters, wpm}) =>{
    return(
        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container">
                <p>
                    <b>Characters</b> : {characters}
                </p>
                <p>
                    <b>Words</b> : {words}
                </p>
                <p>
                    <b>Speed</b> : {wpm} wpm
                </p>
            </div>
            <div>
                <button className="end-button start-again-btn">
                    Re-try
                </button>
                <button 
                    onClick={() =>{
                        window.open("https://www.facebook.com/sharer/sharer.php?u=jubermomin", 
                        "facebook-share-dialog", 
                        "width=800, height=600")
                    }}
                    className="end-button share-btn">
                    Share
                </button>
                <button 
                    onClick={()=>{
                        window.open("https://twitter.com/intent/tweet?text=jubermomin",
                        "twitter-share-dialog", 
                        "width=800, height=600")
                    }}
                    className="end-button tweet-btn">
                    Tweet
                </button>
            </div>
        </div>
    )
}
export default TryAgain