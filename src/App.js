import logo from './logo.svg';
import './App.css';
import MeetingList from './components/MeetingList';
import MeetingInput from './components/MeetingInput';



function App() {
  return (
    <div className="App">
      <MeetingInput />
      <MeetingList />
    </div>
  );
}

export default App;
