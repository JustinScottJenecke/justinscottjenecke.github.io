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
        ]
        // ===== Projects =====
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