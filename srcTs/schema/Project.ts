// "id" : 2,
// "title": "Hotel Booking App",
// "category": "frontend",
// "thumbnail": "hotel-book.png",
// "description": "Mock site for Booking application. No functionality and still a static website. Further plans to integrate PHP into this frontend to create a Full-Stack app",
// "tech-stack": "HTML, CSS, JavaScript, Storage API, DOM API, OOP",
// "links": {
//     "repo": "https://github.com/JustinScottJenecke/csa-hotel-booking-site",
//     "demo": "https://justinscottjenecke.github.io/csa-hotel-booking-site/"
// },
// "featured" : false,
// "completed" : true,
// "type" :"Learning Project"

type Project = {
    id: number;
    title: string;
    catergory: "frontend" | "backend" | "fullstack";
    thumbnail: string;
    descrption: string;
    techStack: Array<string>
    links: Object;
    featured: boolean;
    completed: boolean;
    projectType: "Learning Project" | "Tutorial" | "Personal Project";
}

export default Project;