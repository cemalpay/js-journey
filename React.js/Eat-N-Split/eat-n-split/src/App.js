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
  return <ul> List</ul>;
}
