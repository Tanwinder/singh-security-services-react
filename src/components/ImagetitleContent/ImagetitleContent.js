import React from 'react'
import PropTypes from 'prop-types'
import Img from 'react-cool-img';
import './ImagetitleContent.scss'

const ImagetitleContent = ({item: {imagesrc, title, para} = {}}) => {
  return (
    <div class="image-title">
      {/* <img src={imagesrc} alt="images" className="image" /> */}
      <Img
        className="image"
        placeholder={"singh security image"}
        src={imagesrc}
        // error={errorImage}
        alt="singh security image"
      />
      <h1 className="title">{title}</h1>
      <p className="content">{para}</p>
    </div>
  )
}

ImagetitleContent.propTypes = {

}

export default ImagetitleContent
