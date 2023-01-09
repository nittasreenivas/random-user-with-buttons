import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const { results } = await response.json();
    console.log(results);
    setUsers(results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <h3> Fetching a Random User </h3>
      <div className="user-container">
        {users.map((item) => {
          const {
            gender,
            name: { title, first, last },
            picture: { medium },
            location: {
              street: { number, name },
              city,
              state,
              country,
              postcode,
              email
            },
            login: { uuid, username, password }
          } = item;
          return (
            <div key={uuid} className="user-info">
              <h4> {title} </h4>
              <h4> {first} </h4>
              <h4> {last} </h4>
              <h5> {gender} </h5>
              <img alt="title" src={medium} width={300} />
              <h4> {number} </h4>
              <h4> {name} </h4>
              <h4> {city} </h4>
              <h4> {state} </h4>
              <h4> {country} </h4>
              <h4> {postcode} </h4>
              <h4> {email} </h4>
              <h4>{username} </h4>
              <h4> {password}</h4>
              <div>
                <button onClick={() => fetchUsers(uuid - 1)}> PREV </button>
                <button onClick={() => fetchUsers(uuid + 1)}> NEXT </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
