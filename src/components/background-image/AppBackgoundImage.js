import React from 'react'
import PropTypes from 'prop-types'
import './AppBackgoundImage.scss'

const AppBackgoundImage = ({item: {imageurl, divheight, fontsize, titleWidth, title, description} = {}}) => {
    const heightValue = (val, dividend)=> {
        let value = Number(val);
        return value/dividend+ 'vh';
    }
    return (
        <div 
            className="background-image"
            style={{
                backgroundImage: imageurl,
                height: heightValue(divheight,1),
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div style={{height: heightValue(divheight,1), paddingTop: heightValue(divheight,2.8)}}>
                <h1
                 style={{fontSize: fontsize, width: titleWidth}}>
                    {title}
                </h1>
                <h2>
                    {description}
                </h2>
            </div>
        </div>
    //     <div class="background-image" [ngStyle]="{'background-image':imageurl, 'height': height,'background-repeat': 'no-repeat'}">
    // <div [ngStyle]="{'height': height, 'padding-top': padding}">
    //     <h1 [ngStyle]="{'font-size': fontsize, 'width': titleWidth}">
    //         {{title}}
    //     </h1>
    //     <h2>{{desc}}</h2>
    // </div>
    )
}

AppBackgoundImage.propTypes = {

}

export default AppBackgoundImage
