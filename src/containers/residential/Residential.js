import React from 'react'
import PropTypes from 'prop-types'
import { resfullwidthdata, imagedata} from '../../data/residentialdata'
import FullWidth from '../../components/full-width/FullWidth'
import ImageContent from '../../components/image-content/ImageContent'

import './residential.scss'

const Residential = props => {
  return (
    <div className="residential">
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

  
