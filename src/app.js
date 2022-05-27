const App = Vue.createApp({

    name : "app",

    //  ==================================== Data ====================================
    data() {
      return {

        // ===== Hero =====
        title : "Justin Scott Isaac Jenecke",
        jobTitle : "Junior Software Developer",

        links : [
            {
                type : "Resume",
                link : "",
                color : "is-primary"
            },
            {
                type : "GitHub",
                link : "https://github.com/JustinScottJenecke",
                color : "is-success"
            },
            {
                type : "LinkedIn",
                link : "https://www.linkedin.com/in/justin-scott-jenecke/",
                color : "is-info"
            }
        ],
        // ===== Hero =====

        // ===== Projects =====
        projectStacks : ["Frontend", "Backend", "Full-Stack"],

        activeProjectTab : 0,

        projects : [
            {
                name : "project",
                stack : "none",
                descript : "lorem",
                tech : "lrem",
                previews : [] 
            }
        ],
        // ===== Projects =====

        // ===== About =====
        
        about : [
            "Hi, I'm Justin, a Cape Town-born Junior software developer. " +
            "My development journey began back in primary school when I started experimenting "+
            "with a program known as 'Game Maker' since I was into computer gaming as a kid. After a few years of hiatus from computers during high school, I decided to pick" +
            "up the keyboard again after thinking about what career I wanted to pursue, which led to me graduating from CPUT with a Diploma in ICT: Application Development.",

            "My main focus as a developer is on the backend, however I have picked up several frontend skills in the past two years to " + 
            "gain more insight into the requirements and workflows of a frontend developer.",

            "I am currently working in an internship role at CodeSpace Academy, where I perform website maintenance, create sample solutions " +
            "for course projects and challenges, and contribute code walkthroughs for other coaches/lecturers. I am also the current in-house " +
            "instructor for the company, so I answer most of the students' questions, provide extra coaching when needed, marking, etc."
        ],

        skills : [
            "Java", 
            "Spring-Boot", 
            "JPA",
            "Hibernate",
            "MySQL",
            "JavaScript",
            "Vue",
            "Nuxt",
            "PHP", 
            "HTML & CSS",
            "Bootstrap",
            "Bulma CSS"
        ],

        tools : [
            "Git",
            "Trello",
            "Notion",
            "Slack",
            "Maven",
            "NPM"
        ],
        // ===== About =====

        // ===== Contact =====

        contactMessage : "Thanks for reading through my portfolio and making it this far. If you wish to in contact me for any reason, " +
                         "or your company is hiring Juniors and think I might be a good fit, please do not hesitate to contact me using the " +
                         "details below:",

        contactDetails : [
            {
                name : "Email",
                details : "thedon@gmail.com",
                icon : "gmail.png",
                link : "mailto:https://justinjenecke@gmail.com",
            },
            {
                name : "LinkedIn",
                details : "za.linkedin.com/in/justin-scott-jenecke",
                icon : "linkedin.png",
                link : "https://www.linkedin.com/in/justin-scott-jenecke/"
            }, 
            {
                name : "GitHub",
                details : "github.com/JustinScottJenecke",
                icon : "github.png",
                link : "https://github.com/JustinScottJenecke"
            }
        ]

        // ===== Contact =====
      }
    },

    //  ==================================== Computed ====================================
    computed : {

        frontendProjects() {
            return null
        },
        
        backendProjects() {
            return null
        },
        
        fullStackProjects() {
            return null
        }

    }

}).mount('#app')


/*
                1
            Github


    don                 Evelyn
    1.1                 1.2

*/