import React from 'react'
import PropTypes from 'prop-types'
import FullWidth from '../../components/full-width/FullWidth'
import {fullwidthData, commercialData} from '../../data/commercialpagedata'
import ImageContent from '../../components/image-content/ImageContent'

import './commercial.scss'

const Commercial = props => {
  return (
    <div className="commercial">
      <FullWidth item={fullwidthData} />
      <div>
        {
          commercialData && commercialData.map( (ac, i) => <ImageContent key={i} item={ac} /> )
        }
      </div>
      {/* <!-- <app-background-image [image]="image" height="50vh" width="100%"></app-background-image> --> */}
    {/* <app-full-width [classNamevalue]="a.classNamevalue" [heading]="a.heading" [paragraph]="a.paragraph"></app-full-width>
  <app-image-content *ngFor="let item of data" [header]="item.header" [imagesrc]="item.imagesrc" [imageclassName]="item.imageclass" [paragraph]="item.paragraph"></app-image-content> */}
</div>
  )
}

Commercial.propTypes = {

}

export default Commercial

