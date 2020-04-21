import React from 'react'
import PropTypes from 'prop-types'
import './fullwidth.scss'

const FullWidth = ({item: {classvalue, heading, paragraph} = {}}) => {
  // console.log("{classvalue, heading, paragraph}", classvalue, heading, paragraph)
  return (
    <div className={classvalue}>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  )
}

FullWidth.propTypes = {

}

export default FullWidth

