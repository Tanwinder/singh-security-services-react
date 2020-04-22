import React from 'react'
import PropTypes from 'prop-types'
import Img from 'react-cool-img';
import './image-content.scss'
// import imagesrc1 from '../../assetfiles/images/fire-alarms.jpg'

const ImageContent = ({item}) => {
  const { imageclass, imagesrc, header, paragraph } = item;
  return (
    <div className={imageclass}>
      {/* <img src={imagesrc} alt="image"/> */}
      <Img
        placeholder={"singh security image"}
        src={imagesrc}
        // error={errorImage}
        alt="singh security image"
      />
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

