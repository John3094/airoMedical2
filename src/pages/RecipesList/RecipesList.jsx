import { useBeerStore } from '../../zustand/store';
import { RecipesItem } from '../../components/RecipeItem/RecipeItem';
import { Container, RecipesListStyled } from './RecipesList.styled';
import { Button } from '../../components/Button/Button';
import { ThreeCircles } from 'react-loader-spinner';

const RecipesList = () => {
  const disabledButton = useBeerStore(state => state.removeList);
  const loader = useBeerStore(state => state.loader);
  return (
    <Container>
      {loader && <ThreeCircles />}
      {disabledButton.length > 0 && <Button />}
      <RecipesListStyled>
        <RecipesItem />
      </RecipesListStyled>
    </Container>
  );
};

export default RecipesList;
