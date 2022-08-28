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

const Meetups = () => {

  return (
    <MeetupsList meetups={MEETUPS}/>
  );
}
 
export default Meetups;