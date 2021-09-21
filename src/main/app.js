import { populateProjects } from "./js/datastoreSetup.js";
import { populateSkills } from "./js/datastoreSetup.js";
import { populateStories } from "./js/datastoreSetup.js";
import { populateTechnologies } from "./js/datastoreSetup.js";

import ProjectComponent from "./js/components/ProjectComponent.js";

const projects = new Array;
const skills = new Array;
const stories = new Array;
const technologies = new Array;

populateProjects(projects);
populateSkills(skills);
populateStories(stories);
populateTechnologies(technologies);

console.log(projects, skills, stories, technologies);