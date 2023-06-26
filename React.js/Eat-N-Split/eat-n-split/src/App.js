const initialFriends = [
  {
    id: 118836,
    name: "Berfin",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 50,
  },
  {
    id: 933372,
    name: "Cem",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Gayrullah",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li friend={friend} key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <div className="friend-info">
        <h2>{friend.name}</h2>
        <span>{friend.balance} TL</span>
      </div>
    </li>
  );
}
