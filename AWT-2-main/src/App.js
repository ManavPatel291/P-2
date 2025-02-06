import './App.css';
import UserProfile from './UserProfile';

function App() {

  const details = {
    name : "Manav Patel",
    age : 20,
    location : "Bardoli",
    bio : "Har Har Mahadev❤️"
  }

  return(
    <UserProfile  name={details.name} age={details.age} loc={details.location} bio={details.bio}/>
  )
}

export default App;
