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
                link : "",
                color : "is-success"
            },
            {
                type : "LinkedIn",
                link : "",
                color : "is-info"
            }
        ],
        // ===== Hero =====

        // ===== Projects =====
        projectStacks : ["Frontend", "Backend", "Full-Stack"],

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
            "Hi I'm Justin, a Cape Town born Junior software developer. My journey into development began with a program called Game Maker " +
            "back in primary school. After a few years of hiatus from computers during high school I decided to pick up the keyboard again after " +
            "thinking about what career I wanted to pursue, which let to me graduating from CPUT with a Diploma in ICT: Application Development.",

            "My main focus as a developer was always to become a backend engineer, however I have picked a number of frontend skills in past " +
            "two years so that I could gain more insight into the requirements and workflows of a frontend developer.",

            "I am currently working in an internship role at CodeSpace Academy where I perform website maintence, create sample solutions for course projects " +
            "and challenges, contribute code walkthroughs for other coaches/lecturers. I am also the current in-house instructor for the company, so I answer." +
            "most of the student's questions, provide extra coaching when needed, marking, etc."
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
        ]
        // ===== About =====
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