import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState("secondary");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  
  const handleLike = () => {
    const color = likeColor === "secondary" ? "primary" : "secondary";
    //
    setLikeColor(color)
  }
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))

    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => setSingleUser(data))

    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  }, []);
  
  return (
    <div className="App">
      <ThumbUpAltIcon onClick={handleLike} style={{fontSize:"100px"}} color={likeColor}></ThumbUpAltIcon>
      {
        users.map(user => <li>{user.name}</li>)
      }
      <h2>{singleUser.name}</h2>
      <h2>{`${randomUser.name?.title} ${randomUser.name?.first} ${randomUser.name?.last}`}</h2>
    </div>
  );
}

export default App;


// let color;
    // if(likeColor === "secondary"){
    //   color ="primary"
    // }
    // else{
    //   color = "secondary"
    // }
    // const colors = likeColor ? "" : "primary";  // setLikeColor(colors) and useState("")