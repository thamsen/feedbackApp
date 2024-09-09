import './index.css'

const ResourceList = props => {
  const {emojiDetails, onClickEmoje} = props
  const {id, name, imageUrl} = emojiDetails

  const imageClicked = () => {
    onClickEmoje(id)
  }

  return (
    <li className="images">
      <button className="button" onClick={imageClicked} type="button">
        <img className="button-image" src={imageUrl} alt={name} />
      </button>
      <p className="image-name">{name}</p>
    </li>
  )
}
export default ResourceList
