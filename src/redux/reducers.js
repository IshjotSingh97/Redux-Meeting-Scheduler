import {
    ADD_MEETING, DELETE_MEETING, UPDATE_MEETING
} from './actions'

import { meetings } from './states'

const reducer = (state = meetings, action) => {
    switch (action.type) {
        case ADD_MEETING:
            return [...state, action.payload]
        case DELETE_MEETING:
            let newMeetings = [...state]
            newMeetings = newMeetings.filter((meeting) => (meeting.id !== action.payload))
            return newMeetings
        case UPDATE_MEETING:
            const updatedMeetings = {
                ...state,
                meetings: state.map(meeting =>
                    meeting.id === action.payload.id ? { ...meeting, title: action.payload.title, day: action.payload.day } : meeting
                )
            }
            return updatedMeetings.meetings

        default:
            return state

    }
}

export { reducer }