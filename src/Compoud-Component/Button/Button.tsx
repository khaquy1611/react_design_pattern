import { StyledButton } from './style'
import classNames from 'classnames'

export function Button({
  classes,
  buttonType = 'standard',
  name = null,
  disabled = false,
  type = 'button',
  size = 'dunder',
  onClick = () => false,
  ...restProps
}: any) {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      type={type}
      buttonType={buttonType}
      onClick={onClick}
      className={classNames(`${buttonType}_button`, classes)}
      {...restProps}
    >
      {name}
    </StyledButton>
  )
}
