import React from 'react'
import '../App.css';
import Footer from '../components/Footer';
import Login from '../components/Login';

export default function MainPage() {
  return (
    <div className='App'>
      <h1>Bingo App</h1>
    <Login></Login>
    <Footer></Footer>
    </div>
  )
}
