import React from 'react'
import MeetingItem from './MeetingItem'
import { useSelector } from 'react-redux'

const MeetingList = () => {
    const meetings = useSelector(state => state.meetings)
    return (
        <div>
            <h1>Meeting List</h1>
            {
                meetings.map((meeting, index) => (
                    <MeetingItem key={index} meeting={meeting} />
                ))
            }
        </div>
    )
}

export default MeetingList
