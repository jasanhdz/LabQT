import React from 'react';
import './loading.css';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    backgroundColor: #55bc12;
    border: 19px
`;

const Loading = (props) => {
  return (
    <div className="SpinnerContainer">
      <MoonLoader 
              css={override}
              sizeUnit={"px"}
              size={120}
              color={'#5be800;'}
              loading={props.isLoading}
      />
      <p className="Spinner_Message">Cargando...</p>
    </div>
  );
}

export default Loading;