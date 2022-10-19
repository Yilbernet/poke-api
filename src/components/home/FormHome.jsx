import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserNameGlobal } from '../../store/slices/userName.slice';

const FormHome = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const submit = (event) => {
      event.preventDefault();
      dispatch(setUserNameGlobal(event.target.firstChild.value.trim()));
      navigate('/pokedex');
   }

  return (
   <div>
      <form onSubmit={submit} className='home__form'>
         <input
            className='home__input'
            type="text"
            placeholder='Enter your name here.'
         />
         <button className='home__btn'>Catch them all!</button>
      </form>
   </div>
  )
}

export default FormHome;