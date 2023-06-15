import MeetupList from "../components/meetups/MeetupList";
import { loadMeetups } from "./api/new-meetup";


function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const meetups = await loadMeetups();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),        
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
