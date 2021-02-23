/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ben Bachir Aboubakar Nabil",
  title: "Hi all, I'm Ben Bachir",
  subTitle: emoji(
    "A Software Engineering student  👨🏻‍🎓 , having experience in the development of web applications with Php,"+
    "Java as well with the use of frameworks like Symfony, Spring Boot."+
    " I am passionate about artificial intelligence 👨🏻‍💻, especially machine learning and deep learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DmrKi2x5pHDoAOx3KqcjH_ZBasSDEwt9/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/aboubakrbenbach/",
  github: "https://github.com/AboubakrBenBach",
  gmail: "aboubakrbenbach@gmail.com",
 // instagram: 'https://www.instagram.com/aboubakr_ben_bach/',
  twitter: 'https://twitter.com/aboubakrbenbac',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "The technologies I work on for the different projects and my learning",
  skills: [
    emoji(
      "👆 I put into practice all these technologies during my experiences and academic and personal projects"
    )
   
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Php",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Java",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Symfony",
      fontAwesomeClassname: ""
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: ""
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: ""
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: ""
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: ""
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: ""
    },
    {
      skillName: "ASP .NET CORE WEB API",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Scikit learn",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: ""
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université du Québec à Montréal ",
      logo: require("./assets/images/uqam.png"),
      subHeader: "Specialized higher studies diploma",
      duration: "Septembre 2019 - April 2021",
      desc: "",
     
    },
    {
      schoolName: "Ecole SUP-MTI (Rabat-Maroc)",
      logo: require("./assets/images/supmti.png"),
      subHeader: "Bac + 5 Diploma in Information Systems",
      duration: "October 2017 - June 2019",
      
    },
    {
      schoolName: "Université de Ngaoundere",
      logo: require("./assets/images/ndere.png"),
      subHeader: "Bachelor in System and Network Architecture",
      duration: "October 2014 - June 2017",
    
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer",
      company: "Université du Québec à Montréal",
      companylogo: require("./assets/images/uqam.png"),
      date: "Fall 2020 – Present",
      desc:
        "Determine and document the Concept of Operation and Software  Requirements Specification document",
     /* descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]*/
      techno:
      "Technologies utilisées : Norme IEEE std 1362-1998 IEEE Guide for Information Technology- System Definition-Concept of Operations (ConOps),"+
      "IEEE Std 830 - IEEE Recommended Practice for Software Requirements Specifications"
    },
    {
      role: "Internship",
      company: "METLAB RESEARCH",
      //companylogo: require("./assets/images/cpLogo.png"),
      date: "November 2020 – February 2021",
      desc:
        "Develop the functionalities of the High Voltage Software Services web platform.",
     /* descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]*/
      techno:
      "Technologies utilisées : WordPress, Elementor, HTML5, CSS, PHP."
    },
    {
      role: "Web Developer",
      company: "Freelance",
      //companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "Janvier 2020 – Present",
      desc:
        "I develop web applications for individuals clients.",
    /*  descBullets: [
          "https://www.loanpaymentscalculator.com (en cours)",
          "https://www.beafricasanarwa.com/",
          "GESCOL (application de gestion des écoles)",
          "développement d'un réseau de neurones à convolution (CNN) capable de distinguer entre six espèces d'animaux : Éléphants, Girafe, Léopard, Rhinocéros, Tigres, Zèbre ",
          "Application de gestion des patiens et consultations"
        ]*/
        techno:
      "Technologies utilisées : HTML5, CSS, PHP, Symfony 5, JavaScript, Bootstrap, JAVA, React JS, Tensorflow, Kera"
    },
    {
      role: "IT Technician",
      company: "Action plus à Bangui (RCA)",
      //companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "May 2013 – January 2015",
      desc:
        "website programming and machine configurations",
      techno:
        "Technologies utilisées : HTML5, CSS, PHP, JavaEE, Bootstrap, DBA1"
       
    },
    {
      role: "Internship",
      company: "Kelogy Company",
      companylogo: require("./assets/images/kelo.png"),
      date: "February 2019 – July 2019",
      desc:
        "Establishment of the training management platform",
      techno:
       "Technologies utilisées : Symfony 3.4, Doctrine, JavaScript, Spring Boot, Thymeleaf, Bootstrap"
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(323) 768 0674",
  email_address: "contact@davidrakosi.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
