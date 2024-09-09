// Write your React code here.
import {Component} from 'react'

import './index.css'

import ResourceList from '../ResourceList'

class Feedback extends Component {
  state = {
    isClicked: true,
  }

  onClickEmoje = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isClicked ? (
          <div className="emoje-container">
            <h1>How satisfied are you with our customer support performance</h1>
            <div>
              <ul className="emojes">
                {emojis.map(each => (
                  <ResourceList
                    emojiDetails={each}
                    key={each.id}
                    onClickEmoje={this.onClickEmoje}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="emoje-container">
            <img src={loveEmojiUrl} className="heart-image" alt="love emoji" />
            <h1 className="name">Thank you!</h1>
            <p className="about">
              We will use your information to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
