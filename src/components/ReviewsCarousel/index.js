import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  onClickLeftBtn = () => {
    const {activeId} = this.state

    const updatedId = activeId - 1

    if (updatedId >= 0) {
      this.setState({activeId: updatedId})
    }
  }

  onClickRightBtn = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const reviewsListLength = reviewsList.length

    const updatedId = activeId + 1

    if (updatedId <= reviewsListLength - 1) {
      this.setState({activeId: updatedId})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state

    const activeReview = reviewsList[activeId]

    return (
      <div className="app-container">
        <div className="reviews-app">
          <h1 className="title"> Reviews</h1>
          <img
            src={activeReview.imgUrl}
            className="person-img"
            alt={activeReview.username}
          />
          <div className="buttons-container">
            <button
              className="left-btn"
              type="button"
              data-testId="leftArrow"
              onClick={this.onClickLeftBtn}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow"
              />
            </button>
            <div className="name-container">
              <h1 className="name">{activeReview.username}</h1>
              <p className="company-name">{activeReview.companyName}</p>
            </div>
            <button
              className="right-btn"
              type="button"
              data-testId="rightArrow"
              onClick={this.onClickRightBtn}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
          <p className="description">{activeReview.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
