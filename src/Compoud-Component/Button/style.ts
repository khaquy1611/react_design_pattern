import styled from 'styled-components'
interface Props {
  small: string
  medium: string
  standard: string
  size: number
  cancel: string
  unstyled: string
  buttonType: string
}

export const StyledButton = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  justify-content: center;
  font-size: 20px;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
  ${({ size }: Props) =>
    ({
      small: `font-size: 12px;`,
      medium: `font-size: 16px;`,
      standard: ``,
    }[size])}

  ${({ buttonType }: Props) =>
    ({
      cancel: `background: tomato;
                border-color: tomato;
                color: white;`,
      standard: `background: lightgray; 
                border-color: lightgray;
                color: black;`,
      unstyled: `
        padding: 1px;
  justify-content: center;
  font-size: 15px;
  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 3px rgba(0,0,0, 0.24);
    cursor: pointer;
  }
                background: lightgray; 
                border-color: lightgray;
                color: black;`,
    }[buttonType] ??
    `background: cornflowerblue; 
                border-color: cornflowerblue;
                color: white;`)}
`
