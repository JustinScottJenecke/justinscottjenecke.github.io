/*
*                                       Constructor Templates:
*----------------------------------------------------------------------------------------------------------------
*    Project:                     |   Skill:                  | Story:                       |   Tech:
*    --------------------------   |   ---------------------   | --------------------------   |   ----------------
*        this.type = type;        |   this.name = name;       | this.paragraph = paragraph;  |   this.type = type;
*        this.title = title;      |   this.details = details; |                              |   this.icon = icon;
*        this.preview = preview; 
*        this.details = details;
*        this.repo = repo;
*        this.demo = demo;
*-----------------------------------------------------------------------------------------------------------------
*/

import Project from './classes/Project.js';
import Skill from './classes/Skill.js';
import StoryBlock from './classes/StoryBlock.js';
import Tech from './classes/Tech.js';

/* ----------------------
    Projects DataStore*/

export const populateProjects = (array) => {

    array.push(  new Project(
        'backend', 
        'Courier Manager API',
        'courierManager.gif',
        'details',
        'https://github.com/JustinScottJenecke/courier-manager-rest-service.git',
        '#')
    );

    array.push( new Project(
        'backend', 
        'Tutorspace API',
        'courierManager.gif',
        'details',
        'https://github.com/JustinScottJenecke/courier-manager-rest-service.git',
        '#')
    );
        
}

/* ----------------------
    Skills DataStore*/

export const populateSkills = (array) => {

    array.push( new Skill(
        'Web Development', 
        'Full stack web development. (APIs, clients, databases)'));

}

/* ----------------------
    Stories DataStore*/ 

export const populateStories = (array) => {

    array.push( new StoryBlock('I am a final year Applications Development student, studying at CPUT'));

}

/* ----------------------
    Technologies DataStore*/ 

export const populateTechnologies = (array) => {

    array.push( new Tech('backend','Java'));
    array.push( new Tech('frontend', 'JavaScript'));

}


/*-------- Tests --------*/
/*
const projects = new Array;
const skills = new Array;
const stories = new Array;
const technologies = new Array;

populateProjects(projects);
populateSkills(skills);
populateStories(stories);
populateTechnologies(technologies);

console.log(projects, skills, stories, technologies);
*/