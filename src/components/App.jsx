import { Routes, Route } from 'react-router-dom';
import Home from '../pages/RecipesList/RecipesList';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import NotFound from '../pages/NotFound/NotFound';

const App = () => {
  return (
    <div className="App">
      <h1>Beer recipes</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
