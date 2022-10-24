import React from 'react'
import './feedback.scss'
import IndividualFeedback from './IndividualFeedback'

const Feedback = () => {
  return (
    <div className='feedback-main'>
        <h1>Feedback</h1>
        <div className="feedbacks">
            {/* {requests.map((e) => (
            <IndividualMsg key={e.id} e={e} />
            ))} */}
            <IndividualFeedback />
            <IndividualFeedback />
            <IndividualFeedback />
            <IndividualFeedback />
            <IndividualFeedback />  
        </div>
    </div>
  )
}

export default Feedback