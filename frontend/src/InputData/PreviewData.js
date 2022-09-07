import React from 'react'

export default function PreviewData({preview}) {
  return (
    <div className='boxed'>
        <fieldset>
            <legend>Preview</legend>
            <h3>Preview : {preview}</h3>
        </fieldset>
    </div>
  )
}
