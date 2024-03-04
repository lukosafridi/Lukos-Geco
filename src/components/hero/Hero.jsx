import './hero.scss';
import men from '../../assets/slider_img01.png';
import women from '../../assets/slider_img02.png';
import circle from '../../assets/slider_circle.png';
import {motion} from 'framer-motion'

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration:3,
        staggerChildren: 0.3, // Adjust the stagger duration
      },
    },
  };

  const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100, },
  };



  return (
    <div className='hero-main'>
      <div className='hero-center'>
        <div className="hero-left">
          <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className="text-container">
            <motion.h6 variants={childVariants}>world gaming</motion.h6>
            <motion.h2 variants={childVariants}>Code <span>Modren</span> Warfare</motion.h2>
            <motion.p variants={childVariants}>Find technology or people for digital projects in public sector and<br/> Find an individual specialist develope researcher.</motion.p>
            <motion.a variants={childVariants} href="#">READ MORE</motion.a>
          </motion.div>
        </div>
        <div className="hero-right">
          <div className="circle">
            <img src={circle} alt="" />
          </div>
          <div className="menimg">
            <motion.img 
            initial={{
              opacity:1,
              right:'-400px',

            }}
            animate={{
              opacity:1,
              right:0,
              transition:{
                duration:1,
              }
            }}
            
            src={men} alt="" />
          </div>
          <div className="womenimg">
            <motion.img 
            initial={{
              opacity:0,
              left:'-300px',
            }}
            animate={{
              opacity:1,
              left:0,
              transition:{
                duration:1,
              }
            }}
            src={women} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
