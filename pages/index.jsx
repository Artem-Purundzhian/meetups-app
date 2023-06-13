import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
  {
    id: "m1",
    title: "First",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "street 3, 344 New York",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Second",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "street 3, 344 New York",
    description: "This is first meetup",
  },
  {
    id: "m3",
    title: "Third",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "street 3, 344 New York",
    description: "Lorem ipsum",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={MEETUPS} />
    </Layout>
  );
}

export default HomePage;
