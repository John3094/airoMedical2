import { useBeerStore } from '../../zustand/store';
import { ButtonStyled, TextBtn } from './Button.styled';

export const Button = () => {
  const remove = useBeerStore(state => state.removeBeers);
  const removeList = useBeerStore(state => state.removeList);

  return (
    <>
      <ButtonStyled type="button" onClick={() => remove(removeList)}>
        <TextBtn>Delete</TextBtn>
      </ButtonStyled>
    </>
  );
};
