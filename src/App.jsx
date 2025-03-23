import { useEffect, useState } from "react";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from "@supabase/supabase-js";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// importing pages
import CreateAcc from '../src/pages/CreateAcc';
import Home from '../src/pages/Home';
import Resources from '../src/pages/Resources';
import SignIn from '../src/pages/SignIn';
import InterviewTips from '../src/pages/InterviewTips';
import Applications from '../src/pages/Applications';
import Applications_Add from '../src/pages/Applications_Add';
import Layout from './components/Layout';


const supabase = createClient("https://fhtcwplpwerxpsulpozu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodGN3cGxwd2VyeHBzdWxwb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mjg5NDMsImV4cCI6MjA1NTMwNDk0M30.D1db1cnYuDJGdq-ENR5Wlg1wSxzHaF64Il2o4JvWh2w");

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const logOut = (event) => {
    supabase.auth.signOut();
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (loading) return <div>Loading...</div>;
    if (!session) return <Navigate to="/sign-in" />;
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<CreateAcc supabase={supabase} />} />
        <Route path="/home" element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route
          path="/sign-in"
          element={
            !session ? (
              <SignIn supabase={supabase} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        
        {/* Protected routes */}
        <Route path="/interview-tips" element={<ProtectedRoute><Layout><InterviewTips /></Layout></ProtectedRoute>} />
        <Route path="/applications" element={<Layout><ProtectedRoute><Applications /></ProtectedRoute></Layout>} />
        <Route path="/applications-add" element={<Layout><ProtectedRoute><Applications_Add /></ProtectedRoute></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;