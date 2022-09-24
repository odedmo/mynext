import MeetupDetails from "../../components/meetups/MeetupDetails"

const MeetupDetailsPage = (props) => {

  const {image, title, address} = props

  return (
    <MeetupDetails 
      image={image}
      title={title}
      address={address}
    />
  )
}

export function getStaticPaths() {
  return {
    paths: [
      { 
        params: {
          meetupid: '1'
        }
      },
      { 
        params: {
          meetupid: '2'
        }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupid

  return {
    props: {
      image: 'https://picsum.photos/200/300',
      id: meetupId,
      title: `meetup ${meetupId}`,
      address: `address ${meetupId}`
    },
    revalidate: 10
  }
}

export default MeetupDetailsPage