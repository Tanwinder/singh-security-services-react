import garagedoor from '../assetfiles/images/garage-door.jpg';
import securitycameras from '../assetfiles/images/security-cameras.jpg';
import dooralarm from '../assetfiles/images/door-alarm.jpg';
import home2 from '../assetfiles/images/homeAutomation4.jpg';
import SmartHomeDoorLock from '../assetfiles/images/Smart-Home-Door-Lock.jpg';
import doorbellcameras from '../assetfiles/images/doorbell-cameras.jpg'

export const titleData = {
    imageurl: home2,
    title: 'OUR SERVICES',
    description: 'PROVEN PRODUCTS FOR BETTER PROTECTION',
    fontsize: '3em',
    titleWidth: '60%',
    divheight: '70'   //send only number like 80 ,30 etc dont punt % or vh
  }

export const data = [
    {
      header: 'Home Security',
      imagesrc: garagedoor,
      paragraph: 'Protect your home and family with our advanced home security monitoring systems.',
      imageclass: 'image-content left'
    },
    {
      header: 'Security Cameras',
      imagesrc: garagedoor,
      paragraph: 'Whether you are shopping, on vacation or at work, high definition security cameras let you view and hear live video streaming on your computer or mobile device.',
      imageclass: 'image-content'
    },
    {
      header: 'Home Automation',
      imagesrc: home2,
      paragraph: 'We are home automation experts – Access your security system, lights, thermostat, etc. through your smart phone',
      imageclass: 'image-content left'
    },
    {
      header: 'Burglary Alarm Systems',
      imagesrc: garagedoor,
      paragraph: 'Interactive Alarm Systems with remote mobile access and full notifications',
      imageclass: 'image-content'
    },
    {
      header: 'Fire, Smoke & Heat',
      imagesrc: garagedoor,
      paragraph: 'When every second counts, sensors throughout your home instantly alert our monitoring centers in the event of a fire or gas leak.',
      imageclass: 'image-content left'
    },
  ]