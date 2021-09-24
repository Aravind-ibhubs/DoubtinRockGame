import {Button, ImageElement} from './styledComponents'

const ButtonElement = props => {
  const {details, choiceFunction} = props
  const {image, id} = details

  const getTextId = () => `${id.toLowerCase()}Button`

  const sendId = () => {
    choiceFunction(id)
  }

  return (
    <Button data-testid={getTextId()} onClick={sendId}>
      <ImageElement src={image} alt={id} />
    </Button>
  )
}

export default ButtonElement
