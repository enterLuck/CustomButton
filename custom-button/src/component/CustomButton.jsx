import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import './CustomButton.scss';

function handleClick(){ //logic of the action triggered
  alert("Great this handled the click"); //response displayed
}

function CustomButton() {
  return (  
    <Button
      variant="outlined" // can be text, contained, outlined
      className="custom-button-group" //Sass class or css class
      onClick={handleClick} //event trigger, action handler
      size="medium" // can be small, medium, large
      color="success" //green
      >
      Custom Button
    </Button>    //button text is the child of element
  );
}
export default CustomButton;
