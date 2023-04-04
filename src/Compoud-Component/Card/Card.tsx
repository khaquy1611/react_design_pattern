import classNames from 'classnames'
import { Container, Body, Title, Text, Button, ButtonContainer } from './style'

export const Card = ({ classes, children, ...restProps }: any) => {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  )
}

Card.Body = ({ classes, children, ...restProps }: any) => {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  )
}

Card.Title = ({ classes, children, ...restProps }: any) => {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  )
}

Card.Text = ({ classes, children, ...restProps }: any) => {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  )
}

Card.Button = ({
  classes,
  buttonType,
  size = 'small',
  children,
  ...restProps
}: any) => {
  return (
    <Button
      buttonType={buttonType}
      size={size}
      type="button"
      className={classNames('card__button', classes)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

Card.ButtonContainer = ({ classes, children, ...restProps }: any) => {
  return (
    <ButtonContainer
      className={classNames('card__button', classes)}
      {...restProps}
    >
      {children}
    </ButtonContainer>
  )
}
