// @flow
import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { setBrushColor } from '../actionCreators';

const colorPickerStyle = {
  backgroundColor: 'rgb(0,188,212)'
};

const pickerStyle = {
  gridColumnStart: 2,
  gridRowStart: 2,
  fontSize: '20px'
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const ColorPicker = (props: {
  brushColor: string,
  brushColorDefault: string,
  handleBrushColorChange: string => void
}) => {
  const clickFunction = () => {
    props.handleBrushColorChange(randomColor());
  };

  let selectorText = '';
  if (props.brushColor === props.brushColorDefault) {
    selectorText = 'Click Me!';
  }
  colorPickerStyle.backgroundColor = props.brushColor;
  return (
    <Paper
      onClick={clickFunction}
      id="ColorPickerBody"
      className="circle colorPicker"
      style={colorPickerStyle}
      zDepth={4}
      circle
    >
      <p style={pickerStyle}>{selectorText}</p>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch: ({}) => void) => ({
  handleBrushColorChange(color: string) {
    dispatch(setBrushColor(color));
  }
});

const mapStateToProps = (state: {
  brushColor: string,
  brushColorDefault: string
}) => ({
  brushColor: state.brushColor,
  brushColorDefault: state.brushColorDefault
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
