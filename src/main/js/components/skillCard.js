const template = document.createElement('template');
template.innerHTML = `
    <style>

        body {
            font-family: var(--fontBody);
        }

        button {
            font-family: var(--fontlink);
        }

        a {
            font-family: var(--fontlink);
        }

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
            <h1 id="title2"></h1>
            <p id='body'></p>
        </div>
        <div class="overlay">
            <h1 id="title1"></h1>
        </div>
    </article>
`;

export default class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#title1').innerHTML = this.getAttribute('skillTitle');  
        this.shadowRoot.querySelector('#title2').innerHTML = this.getAttribute('skillTitle'); 
        this.shadowRoot.querySelector('#body').innerHTML = this.getAttribute('skillDescription');             
    }
}

window.customElements.define('skill-card', SkillCard);