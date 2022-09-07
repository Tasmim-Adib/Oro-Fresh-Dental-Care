import React from 'react'

export default function CostData({total, due,nextVisit,dateOfAppointment}) {
  return (
    <div className='boxed'>
        <fieldset>
            <legend>Cost & Date</legend>
            <div className='design_cost_Data'>
                <h3>Total : {total}</h3>
                <h3>Due : {due}</h3>
            </div>
            <div className='design_cost_Data'>
                <h3>Next Visit : {nextVisit}</h3>
                <h3>dateOfAppointment : {dateOfAppointment}</h3>
            </div>
        </fieldset>
    </div>
  )
}
