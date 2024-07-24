import React, { useState } from 'react';

const Textfoem = () => {
  const [textarea, setTextarea] = useState("")
  const handleUpper = () => {
    setTextarea(textarea.toUpperCase())
  }
  const handlelower = () => {
    setTextarea(textarea.toLowerCase())
  }
  const handlecleartext = () => {
    setTextarea('')
  }
  const handlespaces = () => {
    setTextarea(textarea.trim());

  }

  return (

    <div className='container'>
      <h1 className='text-3xl mt-4 mb-2 font-bold'>Enter your text to analyse</h1>
      <div className="mb-3">
        <textarea className="form-control rounded-2xl" value={textarea} onChange={(e) => setTextarea(e.target.value)} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>


      <button type="button" onClick={handleUpper} className="btn btn-primary mr-4">Convert to upper case</button>
      <button type="button" onClick={handlelower} className="btn btn-primary mr-4">Convert to lower case</button>
      <button type="button" onClick={handlecleartext} className="btn btn-primary mr-4">Clear text</button>
      <button type="button" onClick={handlespaces} className="btn btn-primary mr-4">Remove extra spaces</button>

      {/* PROPS->TRANSFER DATA FROM ONE COMPONENT TO ANOTHER */}
      <h1 className='text-3xl mt-4 mb-2'><b>Your Text Summary</b></h1>

      <p>{textarea.split(' ').filter((element) => { return element.length !== 0 }).length} words and {textarea.length} characters</p>
      <p>{0.08 * textarea.split(' ').filter((element) => { return element.length !== 0 }).length} minutes required to read the given text</p>
      <br />
      <h1 className='text-3xl mt-4 mb-2'><b>Preview</b></h1>
      <p>{textarea ? textarea : 'Enter text to preview it'}</p>

    </div>
  )
}

export default Textfoem
