
const createSkillCards = (SkillList) => {

    const skillCardTemplate = (Skill) => `               
        <li class="border-solid border-4 border-gray-300 p-6" id="${Skill.id}">
            <div class="card-wrapper w-full aspect-square relative">
                <div class="card-cover-image w-full aspect-square absolute flex justify-center">
                    <h4 class="absolute flex justify-center">${Skill.name}</h4>
                    <img
                        src='${Skill.bgImgTag}' />
                </div>
                <div class="card-content aspect-square">
                    <ul class="flex flex-col p-3 pt-8">
                    ${
                        Skill.tools.map(toolItem => `<li class="flex gap-2"><span>${toolItem.tool}</span></li>`)
                    }
                    </ul>
                </div>
            </div>
        </li>`

    let outputString = "";

    SkillList.forEach(Skill => {
        outputString += skillCardTemplate(Skill)
    });

    return outputString;
}

