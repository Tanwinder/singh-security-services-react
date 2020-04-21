import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'
import AppBackgoundImage from '../../components/background-image/AppBackgoundImage'
import { arrData, fourColumnContent} from '../../data/aboutdata'
import ImagetitleContent from '../../components/ImagetitleContent/ImagetitleContent'
import './about.scss'


const About = props => {
  return (
    <div className="about">
      <AppBackgoundImage item={arrData} width="100%" height="auto"/>
      <div className="row-four">
        {
          fourColumnContent && fourColumnContent.map( ac => <ImagetitleContent item={ac} />)
        }
      </div>
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.856195850472!2d-113.9394000959202!3d51.13561085973527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163c843362e1b%3A0x239aaf8190cdb1f1!2s70+Saddlecrest+Crescent+NE%2C+Calgary%2C+AB+T3J+0C6%2C+Canada!5e0!3m2!1sen!2sus!4v1524405506842" 
        width="100%" 
        height="350"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
      {/* //  <div class="about">
//     <app-background-image [arrData]="arrData" width="100%" height="auto"></app-background-image>
//     <div class="row-four">
//       <app-image-title-content *ngFor="let content of fourColumnContent" [content]="content"></app-image-title-content>
//     </div>
//     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.856195850472!2d-113.9394000959202!3d51.13561085973527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163c843362e1b%3A0x239aaf8190cdb1f1!2s70+Saddlecrest+Crescent+NE%2C+Calgary%2C+AB+T3J+0C6%2C+Canada!5e0!3m2!1sen!2sus!4v1524405506842" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
//  </div> */}
    </div>
  )
}

About.propTypes = {

}

export default About

