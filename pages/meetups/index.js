import { useEffect, useState } from 'react';
import MeetupsList from '../../components/meetups/MeetupsList'

const MEETUPS = [
  {
    id: 1,
    title: 'meetup1',
    address: 'address1',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    title: 'meetup2',
    address: 'address2',
    image: 'https://picsum.photos/200/300'
  }
]

const Meetups = (props) => {

  const {meetups} = props

  return (
    <MeetupsList meetups={meetups}/>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: MEETUPS
    },
    revalidate: 10
  }
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
  
//   return {
//     props: {
//       meetups: MEETUPS
//     }
//   }
// }
 
export default Meetups;