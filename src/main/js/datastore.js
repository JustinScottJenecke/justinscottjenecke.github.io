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

const projects = new Array;
const skills = new Array;
const stories = new Array;
const technologies = new Array;

/* ----------------------
    Projects DataStore 
----------------------- */

projects[0] = new Project(
    'backend', 
    'courier manager',
    'courierManager.gif',
    'details',
    'https://github.com/JustinScottJenecke/courier-manager-rest-service.git',
    '#');

/* ----------------------
    Skills DataStore 
----------------------- */

skills[0] = new Skill(
    'Web Development', 
    'Full stack web development. (APIs, clients, databases)');

/* ----------------------
    Stories DataStore 
----------------------- */

stories[0] = new StoryBlock('I am a final year Applications Development student, studying at CPUT');

/* ----------------------
    Technologies DataStore 
----------------------- */

technologies[0] = new Tech('backend','Java');
technologies.push(new Tech('frontend', 'JavaScript'));
/*-------- Tests --------*/

console.log(projects, skills, stories, technologies);
