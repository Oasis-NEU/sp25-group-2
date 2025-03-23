import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://fhtcwplpwerxpsulpozu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodGN3cGxwd2VyeHBzdWxwb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3Mjg5NDMsImV4cCI6MjA1NTMwNDk0M30.D1db1cnYuDJGdq-ENR5Wlg1wSxzHaF64Il2o4JvWh2w");

export default function Profile() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      }
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('userName');
      localStorage.removeItem('user');
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="profile-info">
        {userEmail ? (
          <p>Hello, {userEmail}</p>
        ) : (
          <p>Please sign in to view your profile.</p>
        )}
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
} 