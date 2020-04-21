import React from 'react'
import PropTypes from 'prop-types'
import AppBackgoundImage from '../../components/background-image/AppBackgoundImage';
import { titleData, data } from '../../data/securityservicepagedata'
import ImageContent from '../../components/image-content/ImageContent'

const Services = props => {
  return (
    <div className="services">
      <AppBackgoundImage item={titleData} width="100%" height="auto" />
      <div>
        {
          data && data.map( (ac, i) => <ImageContent key={i} item={ac} /> )
        }
      </div>
      {/* <div class="services">
    <app-background-image [arrData]="titleData" width="100%" height="auto"></app-background-image>
    <!-- <app-full-width [classvalue]="a.classvalue" [heading]="a.heading" [paragraph]="a.paragraph"></app-full-width> -->
    <app-image-content *ngFor="let item of data" [header]="item.header" [imagesrc]="item.imagesrc" [imageclass]="item.imageclass" [paragraph]="item.paragraph"></app-image-content>
  </div> */}
    </div>
  )
}

Services.propTypes = {

}

export default Services
