const template = document.createElement('template');
template.innerHTML = `

    <style>

        body {
            background-color: var(--colorDominant);
            color: var(--colorCompliment);
        }

        /*:root {
            
            /*Colours*/
            --colorDominant: #181818; /*Main*/
            --colorDominant_a:#1d1d1d;
            --colorDominant_b:#333333; /*Components and Contrast*/

            --colorCompliment: #ececec;  /*Text & Contrast*/
            --colorCompliment_a: #c0bebe;
            --colorCompliment_b: #797979;

            --colorAccent: #55ff4d;
        }*/

        .project__article {
            margin: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        h4 {
            margin: 0;
            grid-column-start: 1;
            grid-column-end: 3;
            padding: 0.5rem;
        }

        figure {
            margin: 0;
            grid-column-start: 1;
            grid-column-end: 3;
            background-color: white;
        }

        p {
            margin: 0;
            padding: 1rem;

        }

        h5 {
            text-align: center;
            margin: 0;
            padding: 0.5rem;

        }

        button {
                margin: 0;
                background-color:var(--colorAccent);
                color: var(--colorDominant_a);
                border-style: none;
            }

        @media (min-width:800px){

            button:hover {
                background-color: var(--colorCompliment);
                color: rgb(26, 211, 2);
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
            aaa
        </p>
        
        <p id="project__article__technology">
            bbb
        </p>

        <button>Visit/Demo</button>                      
        <button>Repository</button>
    </article>
`