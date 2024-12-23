const INFO = {
  main: {
    title: "Portfolio",
    name: "Jeevan Sekhar.T",
    email: "jeevanjames2000@gmail.com",
    logo: "download.jpg",
  },

  socials: {
    github: "https://github.com/jeevanjames2000",
    linkedin: "https://www.linkedin.com/in/jeevan-sekhar-tamada-b9b0b11ba/",
    leetcode: "https://leetcode.com/u/jeevanjames2000/",
    hackerrank: "https://www.hackerrank.com/profile/jeevanjames2000",
  },

  homepage: {
    title: "Software engineer",
    description:
      "I am a Software engineer with expertise in FullStack Web Applications and Mobile Apps. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
  },

  about: {
    title: "I’m Jeevan Sekhar.T, I live in India, where I design the future.",
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
  },

  projects: [
    {
      title: "MicroFrontend E-Commerce Application",
      description:
        "A Microfrontend application  with React, integrating three apps (Header, Body, Footer) using Webpack Module Federation. This approach shares Redux state and configurations dynamically, enabling modularity and scalability.",
      logo: "/favicon.ico",
      linkText: "View Project",
      link: "https://microfrontend-host.vercel.app/",
    },
    {
      title: "College Monitoring Application",
      description: (
        <span>
          A Complete Student and Faculty Attendance Monitoring Application with{" "}
          <strong>QR Code Scanning</strong>, where we can keep track of
          Attendance.
        </span>
      ),
      logo: "/favicon.ico",
      linkText: "View Project",
      link: "https://college-monitoring-panel.netlify.app/",
    },

    {
      title: "Finance Tracker",
      description:
        "Personal Finance Tracker for daily expenses,investments,spending calculations and visualize through Graphical representation of data",
      logo: "/favicon.ico",
      linkText: "View Project",
      link: "https://personalfinancetracker01.netlify.app",
    },
    {
      title: "RBAC",
      description: "Role Based Access Control using Nodejs",
      logo: "/nodeimg.png",
      linkText: "View Project",
      link: "https://github.com/jeevanjames2000/Role-Based-Auth-NodeJS",
    },
    {
      title: "Custom Components",
      description: "Implemented Custom components using React and Nodejs",
      logo: "/nodeimg.png",
      linkText: "View Project",
      link: "https://reactcustomcomponents.netlify.app/",
    },
    {
      title: "Weather Application",
      description:
        "Based on the country you searches it will gives you 5 days Weather Report including. Temperature,Humidity,Pressure etc",
      logo: "/favicon.ico",
      linkText: "View Project",
      link: "https://jeevan-weather-app.netlify.app",
    },

    // {
    //   title: "TODO",
    //   description:
    //     "You can create Todos to remember and do it, you can able create,Make it complete,Delete after Completion",
    //   logo: "/favicon.ico",
    //   linkText: "View Project",
    //   link: "https://jeevan-todos.netlify.app",
    // },
  ],
};

export default INFO;
