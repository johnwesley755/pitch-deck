import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
   
      <header className="p-4 bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
        
            <h1 className="text-2xl font-bold">Soulsborne</h1>
          </Link>
          <nav>
            <Link
              to="/create-pitch"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
            >
              Create Pitch
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">Welcome to Soulsborne</h2>
        <p className="text-lg mb-4">
          Create and customize your pitches with ease.
        </p>
        <Link
          to="/create-pitch"
          className="px-6 py-3 bg-green-600 rounded text-white text-lg hover:bg-green-500"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}

export default Home