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
    function handleUpclick(event) {
        setText(event.target.value)
    }
    const [text, setText] = useState('enter your text here')
    return (
        <div>

            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleUpclick} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className=' my-3  mx-3 btn btn-primary' onClick={upperCase}> Click to upperCase</button>
                <button className=' my-3   btn btn-primary' onClick={lowerCase}> Click to lowerCase</button>

            </div>
        </div>
    )
}
