// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>
      <MyNavBar title="Bookstore" />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
