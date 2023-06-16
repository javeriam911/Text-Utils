import React, { useState } from 'react';

export default function Textforms(props) {
    function upperCase() {

        let newText = text.toUpperCase();
        setText(newText)
    }
    function lowerCase() {

        let newText = text.toLowerCase();
        setText(newText)
    }
    function clear() {

        let newText = " ";
        setText(newText)
    }
    function copytext() {
        let text = document.getElementById("textArea");
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    // 

    function removeExtraSpaces() {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText)
    }


    function handleUpclick(event) {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : " rgb(16, 32, 56)", }}>
                <div className='container' >

                    <h1>{props.heading} </h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleUpclick}
                         style={{backgroundColor : props.mode === 'dark'?  'rgb(35, 48, 66)' :'white',color : props.mode ==='dark'? 'white': ' rgb(16, 32, 56)' }    }
                          id="textArea" rows="3"></textarea>
                    </div>

                    <button className=' my-3  mx-3 btn btn-primary' onClick={upperCase}> Click to upperCase</button>
                    <button className=' my-3  mx-3  btn btn-primary' onClick={lowerCase}> Click to lowerCase</button>
                    <button className=' my-3  mx-3  btn btn-primary' onClick={clear}> Click to clear</button>
                    <button className=' my-3  mx-3  btn btn-primary' onClick={copytext}> copy</button>
                    <button className=' my-3  mx-3  btn btn-primary' onClick={removeExtraSpaces}> removeExtraSpaces</button>

                </div>
                <div className="container">
                    <h1> Your text summary </h1>
                    <p> {text.split(" ").length} words and {text.length} characteristics</p>
                    <p>{0.08 * text.split(" ").length} minutes to read</p>
                    <h1>Preview</h1>
                    <p>{text.length > 0 ? text : "Enter your text to preview it here"}</p>
                </div>
            </div>

        </>

    )
}
