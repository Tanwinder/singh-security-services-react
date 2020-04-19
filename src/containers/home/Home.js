import React from 'react'
import PropTypes from 'prop-types'
import Corosel from '../../components/corosel/corosel'
import { imagecontent } from '../../data/homepagedata'
import ImageContent from '../../components/image-content/ImageContent'
import './home.scss'

const Home = props => {
    return (
        <div>
            <Corosel />
<div className="home_image_content">
    {
        imagecontent && imagecontent.map( ac => <ImageContent item={ac} /> )
    }
    {/* <app-image-content *ngFor="let item of data" [header]="item.header" [imagesrc]="item.imagesrc" [imageclass]="item.imageclass" [paragraph]="item.paragraph"></app-image-content> */}
</div>
{/* <div><app-full-width [classvalue]="a.classvalue" [heading]="a.heading" [paragraph]="a.paragraph"></app-full-width></div> */}
        </div>
    )
}

Home.propTypes = {

}

export default Home
