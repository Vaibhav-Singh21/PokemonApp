import React from 'react'

export default function Pagination({ gotonextPage, gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage} style={{padding:'5px', color:'red', margin:'2rem'}}>Previous</button>}
            {gotonextPage && <button onClick={gotonextPage}style={{padding:'5px', color: 'red', margin:'2rem'}}>Next</button>}
        </div>
    )
}
