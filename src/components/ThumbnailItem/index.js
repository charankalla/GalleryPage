// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, clicked, clsName} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = eachItem

  const onClicked = () => {
    clicked(id, imageUrl, imageAltText)
  }

  return (
    <li className="thumbnail-listitem-container">
      <button type="button" onClick={onClicked} className="thumb-nail">
        <img
          src={thumbnailUrl}
          className={`img ${clsName}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
