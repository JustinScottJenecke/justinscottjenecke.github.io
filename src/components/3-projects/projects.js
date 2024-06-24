// ================================ Functions ===============================

const createSkillCard = (Skill) => {
    return `               
        <li class="border-solid border-4 border-gray-300" id="${Skill.id}">
            <div class="card-wrapper w-full aspect-[4/3] relative">
                <div class="card-cover-image w-full absolute grid grid-rows-[5fr_2fr_2fr] h-full m-4">
                    <div>? preview-image</div>
                    <div>? project details</div>
                    <div class="grid grid-cols-2 grid-rows-2 mb-4">
                        <button>
                            View More
                        </button>
                        <button>
                            Live Demo
                        </button>
                        <button>
                            Repository
                        </button>
                        <button>
                            Demo Video
                        </button>
                    </div>
                </div>
                <div class="card-content aspect-[4/3]">
                    <ul class="flex flex-col p-3 pt-8">
                        Effect Content
                    </ul>
                </div>
            </div>
        </li>
    `;
}


const renderSkills = (selector, skillList) => {
    const entryPoint = document.querySelector(selector);

    skillList.forEach(skill => {
        entryPoint.innerHTML += createSkillCard(skill)
    });
}

// ================================ Listeners ===============================

document.addEventListener('DOMContentLoaded', () => {

    // const entryPoint = document.querySelector('skills-container');

    fetchAndParseJSON("./src/data/skills.json")
        .then(skillsData => renderSkills('#skills-container', skillsData))
})