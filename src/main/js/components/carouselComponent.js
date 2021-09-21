const template = document.createElement('template');
template.innerHTML = `
    <style>
        #section {
            display: flex;
            flex-direction: row;
            min-height: 50vh;
            overflow-x: auto;
            justify-content: space-between;
        }

        #section::-webkit-scrollbar {
            background: black;
        }

        #section::-webkit-scrollbar-track {
            border: 1px solid lime;
        }

        #section::-webkit-scrollbar-thumb {
            background: silver;
        }
        
        #section article {
            min-width: 50%;
            text-align: center;
            color: whitesmoke;
            background-color: black;
        }

        @media (min-width: 800px) {

            #section article {
                min-width: 25%;
            }
        }    

    </style>

    <div id="skill__carousel">
        <article>
            lfbjijbewpogjwl;goejgpewg
        </article>
        <article>
            lfbjijbewpogjwl;goejgpewg
        </article>
        <article>
            lfbjijbewpogjwl;goejgpewg
        </article>
        <article>
            lfbjijbewpogjwl;goejgpewg
        </article>
        <article>
            lfbjijbewpogjwl;goejgpewg
        </article>
        <article>
            lfbjijbewpogjwl;goejgpewg
        </article>
    </div>
`
class CarouselComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));        
    }
}
window.customElements.define('carousel-component', CarouselComponent);