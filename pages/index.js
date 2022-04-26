import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup 1',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    address: 'sample address 123465 karachi',
    description: 'This is first meet up'
  },
  {
    id: 'm2',
    title: 'A first meetup 2',
    image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    address: 'sample address 123465 karachi',
    description: 'This is first meet up'
  },
  {
    id: 'm3',
    title: 'A first meetup 3',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    address: 'sample address 123465 karachi',
    description: 'This is first meet up'
  }
]


function HomePage () {
  // const [loadedMeetups, setloadedMeetups] = useState([]);

  // useEffect(() => {
  //   //send http request to fetch the data
  //   setloadedMeetups(DUMMY_MEETUPS);
  // }, []);


  return <MeetupList meetups={DUMMY_MEETUPS} />
} 


export async function getStaticProps() {
  // fetch data from api, database or file system that stored on server or while deploying the application
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
 