import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa"

export const urls = {
  linkedInUrl: "https://www.linkedin.com/in/sharmarajdaksh/",
  githubUrl: "https://github.com/sharmarajdaksh",
  mediumUrl: "https://medium.com/@sharmarajdaksh",
}

export default {
  email: "sharmarajdaksh@gmail.com",
  socialIconsData: [
    {
      url: urls.githubUrl,
      label: "Github URL",
      tooltip: "My Github profile",
      icon: FaGithub,
    },
    {
      url: urls.linkedInUrl,
      label: "LinkedIn URL",
      tooltip: "My LinkedIn profile",
      icon: FaLinkedin,
    },
    {
      url: urls.mediumUrl,
      label: "Medium URL",
      tooltip: "My Medium Profile",
      icon: FaMedium,
    },
  ],
  404: {
    message:
      "Whoopsie! You shouldn't be here... Redirecting you to my home page",
  },
  landing: {
    preText: "Hi, I'm",
    name: "Dakshraj Sharma.",
    postText: "I write magic spells in my code editor.",
    mainPara:
      "I'm a software engineer from India attempting to learn everything there is to learn, and then some more.",
  },
  goodreadsCurrentlyReadingEndpoint:
    "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/21277948.xml?key=KADkfwjgZmRlgnlHOH7HA&&shelf=currently-reading",
  // "https://www.goodreads.com/review/list/21277948.xml?key=KADkfwjgZmRlgnlHOH7HA&&shelf=currently-reading",
}
