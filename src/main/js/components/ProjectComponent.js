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

        .project__article {
            margin: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            min-height: 70vh;
        }

        h4 {
            margin: 0;
            grid-column-start: 1;
            grid-column-end: 3;
            padding: 0.5rem;
            height: 5vh;
            text-align: center;
        }

        figure {
            margin: 0;
            grid-column-start: 1;
            grid-column-end: 3;
            height: 35vh
        }

        p {
            margin: 0;
            padding: 1rem;
            height: 15vh;
        }

        h5 {
            text-align: center;
            margin: 0;
            padding: 0.5rem;
            height: 5vh
        }

        button {
                margin: 0;
                background-color:var(--colorAccent);
                color: var(--colorDominant_a);
                border-style: none;
                height: 5vh
            }

        @media (min-width:800px){

            button:hover {
                background-color: var(--colorCompliment);
                color: rgb(26, 211, 2);
            }

            figure {
                height: 45vh;
            }
            p {
                height: 10vh
            }
        }
    </style>
    
    <article class="project__article">
        <h4 id="project__article__title">Project Title</h4>
        
        <figure id="">
            <img src="#" alt="preview">
        </figure>

        <h5>Description</h5>
        <h5>Technologies</h5>

        <p id="project__article__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore ducimus porro perspiciatis,
            quasi, dolor quisquam.
        </p>
        
        <p id="project__article__technology">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore ducimus porro perspiciatis,
            quasi, dolor quisquam.
        </p>

        <button>Visit/Demo</button>                      
        <button>Repository</button>
    </article>
`
export default class ProjectComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('project-component', ProjectComponent);