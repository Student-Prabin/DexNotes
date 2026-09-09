import React from 'react'
import { Route, Routes } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoutes'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <AuthProvider>
      <div data-theme="coffee">
        <Routes>
          {/* Public Auth Routes */}
            <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />


          {/* Protected Routes */}
          <Route path='/' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path='/create' element={<ProtectedRoute><CreatePage /></ProtectedRoute>} />
          <Route path='/goal/:id' element={<ProtectedRoute><NoteDetail /></ProtectedRoute>} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App