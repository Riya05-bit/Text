import React, { useState } from 'react'

const Text_Utils = () => {

    const [text, setText] = useState('')

    const change = (e) => {
        setText(e.target.value)
    }

    const uppercase = (e) => {
        setText(text.toUpperCase())
        e.preventDefault()
    }

    const lowercase = (e) => {
        setText(text.toLowerCase())
        e.preventDefault()
    }

    // const count = () => {
    //     console.log(text.split(" ").length)
    // }

    const word = text.split(" ")
    const wordcount = word.filter((wrd) => wrd !== '').length

    const character = text.replaceAll(" ", "").length

    const clear = () => {
        setText("")
    }

    const duplicate = () => {
        setText(text + " " + text)
    }

    const copy = () => {
        navigator.clipboard.writeText(text)
    }

    const paste = () => {
        navigator.clipboard.readText().then(res => setText(res + " " + text))
    }

    return (
        <div>

            <div className='container w-50 border'>
                <form>
                    <div className="form-group text-center">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" value={text} placeholder='Type Here' onChange={change} id="exampleFormControlTextarea1" rows="5"></textarea>
                        <button onClick={uppercase}>Upper Case</button>
                        <button onClick={lowercase}>Lower Case</button>
                    </div>
                </form>
            </div>

            <div className='container w-50 border text-center'>
                <div className='container w-25 border p-3 bg-danger text-light text-center'>{text}</div>
                <div className='container w-25 border bg-secondary text-light text-center'>word:{wordcount}</div>
                <div className='container w-25 border bg-secondary text-light text-center'>character:{character}</div>
                <div className='container w-25 border bg-secondary text-light text-center'>{paste}</div>
                <button onClick={clear}>Clear</button>
                <button onClick={duplicate}>Duplicate</button> <br />
                <button onClick={copy}>Copy</button>
                <button onClick={paste}>Paste</button>
            </div>

        </div>
    )
}

export default Text_Utils