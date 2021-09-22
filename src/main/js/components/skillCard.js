const template = document.createElement('template');
template.innerHTML = `
    <style>
        .card {
            margin: 0;
            position: relative;
            min-height: 100%;
            min-width: 100%;
        }

        .content {
            position: absolute;
            min-width: inherit;
            min-height: inherit;
            color: var(--colorDominant);
        }
        .overlay {
            position: absolute;
            left: 0;
            height: 100%;
            width: 100%;
            color: var(--colorCompliment);
            background-color: var(--colorDominant);
        }

        .card:hover > .overlay {
            display: none
        }
    </style>

    <article class="card">
        <div class="content" style='background-color: lime'>
            <h1 id="title">title</h1>
            <p id='body'>ljhjhgjlgljkh lugiuhgiuho;ho</p>
        </div>
        <div class="overlay">
            <h1 id="title">title</h1>
        </div>
    </article>
`;

export default class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));             
    }
}

window.customElements.define('skill-card', SkillCard);