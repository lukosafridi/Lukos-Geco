import './latestnews.scss';
import React from 'react';
import clock from '../../assets/clock.png'
import tag from '../../assets/tag.png'
import blog1 from '../../assets/s_blog_thumb01.jpg'
import blog2 from '../../assets/s_blog_thumb02.jpg'
import blog3 from '../../assets/s_blog_thumb03.jpg'

const Latestnews = () => {

  const blogs = [
    {
      img: blog1,
      title: "SHOOTER ACTION VIDEO GAME",
      pclcok: clock,
      iconp1: "July 4, 2022 ",
      pspanslash: "/",
      ptag: tag,
      iconp2: " Shooter",
      description: "Compete with 100 players on a remote island for winner takes showdown known for issue where certain skin strategic [...]"
    },
    {
      img: blog2,
      title: "MULTIPLAYER ENVIRONMENTS",
      pclcok: clock,
      iconp1: "July 4, 2022 ",
      pspanslash: "/",
      ptag: tag,
      iconp2: " Shooter",
      description: "Compete with 100 players on a remote island for winner takes showdown known for issue where certain skin strategic [...]"
    },
    {
      img: blog3,
      title: "BULLET FORCE MULTIPLAYER",
      pclcok: clock,
      iconp1: "July 4, 2022 ",
      pspanslash: "/",
      ptag: tag,
      iconp2: " Shooter",
      description: "Compete with 100 players on a remote island for winner takes showdown known for issue where certain skin strategic [...]"
    },
  ]



  return (
    <div className='latestnews-main'>
      <div className='latestnews-center'>
        <div className="news-text-container">
          <h2>LATEST NEWS <span>ARTICLES</span></h2>
          <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
        </div>
        <div className="blogs-container">
          {blogs.map((blogs, index) => {
            return (
              <div className="box" key={index}>
                <img src={blogs.img} alt="" />
                <h4>{blogs.title}</h4>
                <p className='icons-p'><img className='clock' src={blogs.pclcok} alt="" />{blogs.iconp1}<span className='slash'>{blogs.pspanslash}</span><img className='tag' src={blogs.ptag} alt="" />{blogs.iconp2}</p>
                <p>{blogs.description}</p>
              </div>
            )
          })}
        </div>
      </div >
    </div >

  )
}

export default Latestnews
