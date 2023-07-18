import { useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useBeerStore } from "../../zustand/store";
import {
  Container,
  Button,
  Recipe,
  TextBtn,
  Img,
  Name,
} from "./RecipeDetails.styled";
import { ThreeCircles } from "react-loader-spinner";

const RecipeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const { id } = useParams();
  const recipes = useBeerStore((state) => state.beers);
  const recipe = recipes.find((recipe) => Number(recipe.id) === Number(id));
  const loader = useBeerStore((state) => state.loader);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const { name, image_url, description, tagline, first_brewed } = recipe;

  return (
    <Container>
      {loader && <ThreeCircles />}
      <Button onClick={() => navigate(backLinkLocationRef.current)}>
        <TextBtn>Go Back</TextBtn>
      </Button>
      <Recipe>
        <Img src={image_url} alt={name} />
        <div>
          <Name>{name}</Name>
          <p>{description}</p>
          <p>{tagline}</p>
          <p>Since: {first_brewed}</p>
        </div>
      </Recipe>
    </Container>
  );
};

export default RecipeDetails;
