import MeetupDetail from '../../components/meetups/MeetupDetail'
import { Fragment } from "react";

function MeetupDetails () {
    return <MeetupDetail 
        title="A first meetup"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        address="sample address 123465 karachi"
        description="Here you go, This is first meet up"
    />
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
            },
            {
                params: {
                    meetupId: 'm2'
                },
            }
        ]
    }
}


export async function getStaticProps(context) {
    // fetch data from a singlemeetup
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                title: "A first meetup",
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                address: "sample address 123465 karachi",
                description: "Here you go, This is first meet up",
            }
        }
    }
}
export default MeetupDetails;

// first comment