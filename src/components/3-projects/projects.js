// ================================ Functions ===============================

const createSkillCard = (Skill) => {
    return `               
        <li class="border-solid border-4 border-gray-300" id="${Skill.id}">
            <div class="card-wrapper w-full aspect-[3/2] relative">
                <div class="card-cover-image w-full absolute grid grid-rows-[6fr_2fr_1fr] h-full m-4">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div class="card-content aspect-[3/2]">
                    <ul class="flex flex-col p-3 pt-8">
                        Banner Content
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