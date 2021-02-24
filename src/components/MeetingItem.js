import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMeeting, updateMeeting } from '../redux/actions'
import { meetings } from '../redux/states'

const MeetingItem = ({ meeting }) => {
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(meeting.id)
    const [meetingTitle, setMeetingTitle] = useState(meeting.title)
    const [meetingDay, setMeetingDay] = useState(meeting.day)

    const toggleEdit = () => {
        setEdit(!edit)
        console.log(edit)
    }

    const handleSubmit = () => {

        const updatedMeeting = {
            "id": id,
            "title": meetingTitle,
            "day": meetingDay
        }
        dispatch(updateMeeting(updatedMeeting))
        setEdit(false)
    }

    const dispatch = useDispatch()
    return (
        <div>
            <p>{meeting.id}</p>
            <input type='text' value={meetingTitle} readOnly={!edit} onChange={(e) => setMeetingTitle(e.target.value)} />
            <input type='text' value={meetingDay} readOnly={!edit} onChange={(e) => setMeetingDay(e.target.value)} />
            {!edit && <input type='button' value='Delete' onClick={() => dispatch(deleteMeeting(meeting.id))} />}
            {!edit && <input type='button' value='Edit' onClick={toggleEdit} />}
            {edit && <input type='button' value='submit' onClick={handleSubmit} />}
        </div>
    )
}

export default MeetingItem
