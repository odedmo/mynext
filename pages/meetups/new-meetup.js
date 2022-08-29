import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const newMeetup = () => {

  const addMeetupHandler = (meetup) => {
    console.log(meetup)
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default newMeetup