import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    function addMeetupHandler(eneteredMeetupData){
        console.log(eneteredMeetupData);
    }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}
