import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href='https://linkedin.com/in/yujia-lim-b85081213' target='_blank'><BsLinkedin/></a>

      <a href='https://github.com/Jia02' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials