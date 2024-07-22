// import "./App.css";
import "./App.scss";
import ProfileCard from "./components/ProfileCard";

const information = {
  name: "Victor Crest",
  age: 26,
  country: "London",
  followers: 80,
  likes: 803,
  photos: 1.4,
};

function App() {
  return <ProfileCard info={information} />;
}

export default App;
