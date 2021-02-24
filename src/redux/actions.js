const ADD_MEETING = 'ADD_MEETING';
const DELETE_MEETING = 'DELETE_MEETING';
const UPDATE_MEETING = 'UPDATE_MEETING';

const addMeeting = (meeting) => {
    return {
        type: ADD_MEETING,
        payload: meeting
    }

}

const deleteMeeting = (meetingId) => {
    return {
        type: DELETE_MEETING,
        payload: meetingId
    }
}

const updateMeeting = (meeting) => {
    return {
        type: UPDATE_MEETING,
        payload: meeting
    }
}

export {
    ADD_MEETING,
    DELETE_MEETING,
    UPDATE_MEETING,
    addMeeting,
    deleteMeeting,
    updateMeeting
}