import './App.scss'
import {Header} from "./components/header/header";
import {Notes} from "./pages/notesContainer/Notes";
import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {UserPage} from "./pages/user";
import {Login} from "./pages/login";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "./store/authSlice";


function App() {
    const [profile, setProfile] = useState()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        const saved = localStorage.getItem("profile");
        const initialValue = JSON.parse(saved);
        setProfile(initialValue)
    }, [auth])

  return (
      <BrowserRouter>
          {auth.auth? <main>
              <Header
              />
              <div className='route-container'>
                  <Routes>
                      <Route index path='/' element={<Notes
                      />}/>
                      <Route path='/userpage' element={<UserPage
                          profile={profile}
                      />}/>
                  </Routes>
              </div>
          </main> :
              <Login
              />
          }
      </BrowserRouter>
  );
}

export default App;
