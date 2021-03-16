const defaultStyle = {
  background: 'none',
  border: 'none',
  'border-radius': 0,
  'box-decoration-break': 'slice',
  'box-shadow': 'none',
  clear: 'none',
  float: 'none',
  color: 'black',
  cursor: 'auto',
  display: 'inline',
  'line-height': 'normal',
  margin: 0,
  outline: 'none',
  padding: 0,
  'text-align': 'left',
  'text-align-last': 'auto',
  'text-decoration': 'none black solid',
  'text-indent': 0,
  'text-justify': 'auto',
  'text-overflow': 'clip',
  'text-shadow': 'none',
  'text-transform': 'none',
  'white-space': 'normal',
  'word-spacing': 'normal',
  'word-break': 'normal',
  'writing-mode': 'horizontal-tb',
};

const braceRegex = /\{(.*?)\}/;

export const defaultStyleString = JSON.stringify(defaultStyle).match(braceRegex)![1];
