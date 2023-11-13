import './App.css';
import Swal from "sweetalert2";

function App() {
  const handleAlert = () => {
        Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }
  return (
    <div className="App">
      <button onClick={handleAlert}>Alert</button>
    </div>
  );
}

export default App;
