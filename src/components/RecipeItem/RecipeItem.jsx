import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBeerStore } from '../../zustand/store';
import { RecipesItemStyled, Img, Name, Link } from './RecipeItem.styled';

export const RecipesItem = () => {
  const beers = useBeerStore(state => state.beers).slice(0, 15);
  const fetch = useBeerStore(state => state.getBeers);
  const addRemove = useBeerStore(state => state.addRemove);

  const location = useLocation();

  useEffect(() => {
    if (beers.length === 0) {
      fetch();
    }
  }, [beers.length, fetch]);

  return (
    <>
      {beers.map(({ id, name, image_url }) => (
        <RecipesItemStyled
          key={id}
          onContextMenu={e => {
            e.preventDefault();
            addRemove(id);
          }}
        >
          <Link to={`/recipe/${id}`} state={{ from: location }}>
            <Name>{name}</Name>
            <Img src={image_url} alt={name} />
          </Link>
        </RecipesItemStyled>
      ))}
    </>
  );
};
