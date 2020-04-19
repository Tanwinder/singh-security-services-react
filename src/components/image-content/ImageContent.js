import React from 'react'
import PropTypes from 'prop-types'
import './image-content.scss'

const ImageContent = ({item}) => {
  const { imageclass, imagesrc, header, paragraph } = item;
  return (
    <div className={imageclass}>
      <img src={imagesrc} alt="image"/>
      <div className="content">
        <h1>
          {header}
        </h1>
        <p>
          {paragraph}
        </p>
      </div>
    </div>
  )
}

ImageContent.propTypes = {

}

export default ImageContent

