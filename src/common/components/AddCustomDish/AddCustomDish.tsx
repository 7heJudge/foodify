import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import theme from 'theme/theme';
import { favouritesActions } from 'store/favourites/ducks/reducers/favourites';

import Typography from '../Typography/Typography';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';
import Spacer from '../Spacer/Spacer';

type ModalProps = {
  active: boolean;
  handler: (state: boolean) => void;
};

const VALIDATION_SCHEMA = Yup.object().shape({
  strMeal: Yup.string().required('Dish title field is required'),
  strInstructions: Yup.string().required('Dish description field is required'),
});

const AddCustomDish = ({ active, handler }: ModalProps) => {
  const dispatch = useDispatch();

  const initialValues = { idMeal: '', strMeal: '', strInstructions: '' };
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: submitHandler,
  });

  async function submitHandler() {
    values.idMeal = uuidv4();
    const favourites = JSON.parse(localStorage.getItem('favourites') as string) || [];
    favourites.push(values);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    dispatch(favouritesActions.addToFavourites([values]));
    handler(false);
  }

  return (
    <Overlay onClick={() => handler(false)} active={active}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Typography text="Add custom dish" fontWeight="bold" fontSize="fz36" fontColor="black" />
        <TextInput
          value={values.strMeal}
          height={70}
          type="text"
          withBottomLine
          placeholder="Dish title"
          onChange={handleChange('strMeal')}
          error={errors.strMeal && touched.strMeal ? errors.strMeal : undefined}
        />
        <Spacer height={50} />
        <Textarea
          withBottomLine
          value={values.strInstructions}
          setValue={handleChange('strInstructions')}
          placeholder="Dish description..."
          error={
            errors.strInstructions && touched.strInstructions ? errors.strInstructions : undefined
          }
        />
        <Spacer height={50} />
        <ButtonWrapper>
          <Button
            height={50}
            width={140}
            label="Submit"
            bgColor={theme.colors.gray}
            borderColor={theme.colors.gray}
            labelColor={theme.colors.black}
            onClick={handleSubmit}
          />
        </ButtonWrapper>
      </ModalContent>
    </Overlay>
  );
};

const Overlay = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  opacity: ${(props) => (props.active ? '1' : '0')};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: ${theme.colors.lightGray};
  padding: 40px;
  border-radius: 25px;
  height: max-content;
  width: 500px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AddCustomDish;
