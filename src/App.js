import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TinderCard from './Cards';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SwipeButton from './SwipeButton';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/chat/:empId"
          element ={
            <>
            <Header backbutton={"/chat"} />
            <ChatScreen />
            </>
            
          }
          >  
          </Route>
          <Route path='/chat' element={
            <>
              <Header backbutton={"/"} />
              <Chats />
            </>
          }>
          </Route>
          <Route path='/' element={
            <>
              <Header />
              <TinderCard />
              <SwipeButton />
            </>

          }></Route>
        </Routes>
      </BrowserRouter>
      { /* Header Part */}
      { /* Tinder  Cart */}
      { /* Tinder Selection Button */}
      { /* Chats Screen */}
      { /* Indivisual Chat Screen */}


    </div>
  );
}

export default App;
