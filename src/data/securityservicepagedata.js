import smarthomepic from '../assetfiles/images/smarthomepic.jpg';
import securitycameras from '../assetfiles/images/security-cameras.jpg';
import homeAutomation4 from '../assetfiles/images/homeAutomation4.jpg';
import dooralarm from '../assetfiles/images/door-alarm.jpg';
import ourservices from '../assetfiles/images/ourservices.png';
import SmartHomeDoorLock from '../assetfiles/images/Smart-Home-Door-Lock.jpg';
import burglaryAlarmSystems from '../assetfiles/images/burglaryAlarmSystems.jpg';
import smokeDetector from '../assetfiles/images/smokeDetector.jpg';

export const titleData = {
    imageurl: ourservices,
    title: 'OUR SERVICES',
    description: 'PROVEN PRODUCTS FOR BETTER PROTECTION',
    fontsize: '3em',
    titleWidth: '60%',
    divheight: '70'   //send only number like 80 ,30 etc dont punt % or vh
  }

export const data = [
    {
      header: 'Home Security',
      imagesrc: smarthomepic,
      paragraph: 'Protect your home and family with our advanced home security monitoring systems.',
      imageclass: 'image-content left'
    },
    {
      header: 'Security Cameras',
      imagesrc: securitycameras,
      paragraph: 'Whether you are shopping, on vacation or at work, high definition security cameras let you view and hear live video streaming on your computer or mobile device.',
      imageclass: 'image-content'
    },
    {
      header: 'Home Automation',
      imagesrc: homeAutomation4,
      paragraph: 'We are home automation experts – Access your security system, lights, thermostat, etc. through your smart phone',
      imageclass: 'image-content left'
    },
    {
      header: 'Burglary Alarm Systems',
      imagesrc: burglaryAlarmSystems,
      paragraph: 'Interactive Alarm Systems with remote mobile access and full notifications',
      imageclass: 'image-content'
    },
    {
      header: 'Fire, Smoke & Heat',
      imagesrc: smokeDetector,
      paragraph: 'When every second counts, sensors throughout your home instantly alert our monitoring centers in the event of a fire or gas leak.',
      imageclass: 'image-content left'
    },
    {
      header: 'Smart Door Locks',
      imagesrc: SmartHomeDoorLock,
      paragraph: 'You can establish a connection to your Smart lock at all times. You can use a keypad on the lock itself, a fob on your keychain for touchless operation, or Android or iOS app with one our cloud-based integrated remote access and management solutions.',
      imageclass: 'image-content small-image'
    },
    {
      header: 'Door Alarm',
      imagesrc: dooralarm,
      paragraph: 'Door chime works great when you are at home. When asleep, or just wanting protection, you activate the door alarms. Door alarm takes over when you are gone. Combined with other components, you residential security system can really be a life and property saver and your home can be really well protected.',
      imageclass: 'image-content small-image'
    },
  ]