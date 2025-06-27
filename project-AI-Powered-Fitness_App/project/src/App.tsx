import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import WorkoutPlanPage from './pages/WorkoutPlanPage';
import NutritionPage from './pages/NutritionPage';
import ProgressPage from './pages/ProgressPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="exercise" element={<ExercisePage />} />
        <Route path="workout" element={<WorkoutPlanPage />} />
        <Route path="nutrition" element={<NutritionPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;