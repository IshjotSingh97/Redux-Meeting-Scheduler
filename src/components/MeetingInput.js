import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMeeting } from '../redux/actions'

const MeetingInput = () => {
    const [meetingName, setMeetingName] = useState('')
    const [dayName, setDayName] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(addMeeting({
            "id": Math.floor(Math.random() * 100),
            "title": meetingName,
            "day": dayName
        }))
        setMeetingName('')
        setDayName('')
    }
    return (
        <div>
            <p>Meeting Input</p>
            <input type='text' value={meetingName} onChange={(e) => setMeetingName(e.target.value)} placeholder='Meeting Name' />
            <input type='text' value={dayName} onChange={(e) => setDayName(e.target.value)} placeholder='Day Name' />
            <input type='button' value='Add' onClick={handleSubmit} />
        </div>
    )
}

export default MeetingInput
