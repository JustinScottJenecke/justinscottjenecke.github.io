// ================================ Functions ===============================

const createSkillCard = (Skill) => {
    return `               
        <li class="border-solid border-4 border-gray-300 p-6" id="${Skill.id}">
            <div class="card-wrapper w-full aspect-square relative">
                <div class="card-cover-image w-full aspect-square absolute flex justify-center">
                    <h4 class="absolute flex justify-center ${Skill.name === 'JavaScript' && 'text-black'}">${Skill.name}</h4>
                    ${Skill.bgImgTag}
                </div>
                <div class="card-content aspect-square overflow-hidden">
                    <ul class="flex flex-col p-3 pt-8">
                    ${
                        Skill.tools.map(toolItem => `<li class="flex gap-2"><span>${toolItem.tool}</span></li>`)
                            .join('')
                    }
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