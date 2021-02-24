const getAllMeetings = async () => {
    const res = await fetch(`http://localhost:3000/meetings`)
    const data = await res.json()
    return data
}



export { getAllMeetings }