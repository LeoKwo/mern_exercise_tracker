import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';


function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          {/* <Route path="/edit/:id" element={<EditExercise />} /> */}
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
