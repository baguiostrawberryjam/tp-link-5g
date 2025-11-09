import { useState } from 'react'
import './App.css';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { BrowserRouter, Routes, Route } from 'react-router';
import Recipes from './pages/Recipes/Recipes';
import RecipeView from './pages/RecipeView/RecipeView';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
     <BrowserRouter>
     
      <Navbar />

      <div className="container">
        <Routes>
          <Route path='/' element={<Recipes />}/>
          <Route path='/recipes' element={<Recipes />}/>
          <Route path='/recipe/:id' element={<RecipeView />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>

      <Footer />

     </BrowserRouter>
    </>
  )
}

export default App
