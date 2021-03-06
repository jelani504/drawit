import styled, { css } from 'react-emotion';

const width = '180px';
const fontSize = '20px';
const padding = '8px';
const colors = {
  default: css`
    color: #f8f8f8;
    background: #2f2f2f;

    :hover {
      background: #000;
    }
  `,
  primary: css`
    color: #f8f8f8;
    background: blue;

    :hover {
      background: #0038D3;
    }
  `,
};
const rounded = '30px';

const Button = styled('button')`
  ${props => (colors[props.color || 'default'])};

  width: ${props => props.width || width};
  font-size: ${props => props.fontSize || fontSize};
  padding: ${props => props.padding || padding};
  border-radius: ${props => (props.rounded ? rounded : '3px')};

  transition: background 300ms ease-out;
  border: 0;
  margin: 5px auto;
  display: block;
  cursor: pointer;

  :focus {
    outline: none;
  }

  a {
    color: inherit;
  }
`;

export default Button;
