import React from 'react'
import PropTypes from 'prop-types'
import { resfullwidthdata, imagedata} from '../../data/residentialdata'
import FullWidth from '../../components/full-width/FullWidth'
import ImageContent from '../../components/image-content/ImageContent'
import imgPNG from '../../assetfiles/images/smarthome11.png'

import './residential.scss'
import Img from 'react-cool-img'

const Residential = props => {
  return (
    <div className="residential">
      <img src={imgPNG} alt="" className="residential__fullwidth" />
      <FullWidth item={resfullwidthdata} />
      <div>
        {
          imagedata && imagedata.map( (ac, i) => <ImageContent key={i} item={ac} /> )
        }
      </div>
      {/* <div >
  <app-full-width [classvalue]="a.classvalue" [heading]="a.heading" [paragraph]="a.paragraph"></app-full-width>
  <app-image-content *ngFor="let item of data" [header]="item.header" [imagesrc]="item.imagesrc" [imageclass]="item.imageclass" [paragraph]="item.paragraph"></app-image-content>
</div> */}
      
    </div>
  )
}

Residential.propTypes = {

}

export default Residential

  
