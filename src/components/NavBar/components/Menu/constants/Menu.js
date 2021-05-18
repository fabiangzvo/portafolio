import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const constants = {}

constants.routes = [
  {
    path: '/about',
    label: 'About'
  }, {
    path: '/awards',
    label: 'Award'
  }, {
    path: '/education',
    label: 'Education'
  }, {
    path: '/experience',
    label: 'Experience'
  }, {
    path: '/interests',
    label: 'Interests'
  }, {
    path: '/skills',
    label: 'Skills'
  }]

constants.socialNetworks = [
  { url: 'https://twitter.com/fabiangzvo', Icon: AiFillTwitterCircle },
  { url: 'https://github.com/fabiangzvo/', Icon: AiFillGithub },
  { url: 'https://www.linkedin.com/in/fabian-guzman-190618141/', Icon: AiFillLinkedin }
]

export default constants;