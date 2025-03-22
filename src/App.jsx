import { useEffect, useState } from "react";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
// import { supabase } from './supabase';
import { createClient } from "@supabase/supabase-js";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../src/pages/Profile';
import SignIn from '../src/pages/SignIn';
import InterviewTips from '../src/pages/InterviewTips';
import Applications from '../src/pages/Applications';

const supabase = createClient("https://fhtcwplpwerxpsulpozu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodGN3cGxwd2VyeHBzdWxwb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mjg5NDMsImV4cCI6MjA1NTMwNDk0M30.D1db1cnYuDJGdq-ENR5Wlg1wSxzHaF64Il2o4JvWh2w");

function App() {
  
  const [count, setCount] = useState(0);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const logOut = (event) => {
    supabase.auth.signOut()
  }

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />)
  }
    return (
      <>
      <div>
          <h1>
            Logged in!
          </h1>
          <button onClick={(e) => logOut(e)}>Log Out</button>
        </div>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Sign In</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/interview-tips">Interview Tips</Link></li>
              <li><Link to="/applications">Applications</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/interview-tips" element={<InterviewTips />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </Router></>
    );
}

export default App

