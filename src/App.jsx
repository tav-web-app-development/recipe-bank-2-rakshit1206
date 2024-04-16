import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
    return () => console.log("unmounted");
  }, []);
  function filterRecipesComputeIntensive(recipes) {
    const now = performance.now();
    while (performance.now() - now < 80) {
      //spin()
    }
    return recipes;
  }
  const filteredRecipes = filterRecipesComputeIntensive(recipes);
  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer recipe={data} key={data.id} />
      ))}
      <Footer />
    </>
  );
}

export default App;
