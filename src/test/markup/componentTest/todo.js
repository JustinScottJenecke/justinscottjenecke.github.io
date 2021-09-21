const template = document.createElement('template');
template.innerHTML = `
    <style>

        .todo__item {
            display: grid;
            grid-template-columns: 3fr 1fr 1fr;          
            column-gap: 2%;
        }
        
        .todo__item div {
            background-color: rgb(235, 235, 235);
            border-radius: 6px 6px 0 0;
            
            border-bottom-color: rgb(140, 140, 140);
            border-bottom-style: solid;
            border-bottom-width: 1px;
        }

        button {
            width: 25%;
            justify-self: center;
            border-style: none;
            border-radius: 12px;
        }
    </style>

    <div class=todo__item>
        <div id='detail'></div>
        <div id='time'></div>
        <button id='delete'></button>
    </div>
`;

class ToDo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#detail').innerHTML = this.getAttribute('description');
        this.shadowRoot.querySelector('#time').innerHTML = this.getAttribute('time');
        this.shadowRoot.querySelector('#delete').innerHTML = 'X';
        
    }
}

window.customElements.define('to-do', ToDo);

class Renderer {

    constructor(){
        super();
    }

    addTodo (desc, time) {
        xyz.innerHTML +=  `<to-do 
                                description=${desc}
                                time=${time}>
                            </to-do>`;
    }

    deleteTodo (desc, time) {
        xyz.innerHTML +=  `<to-do 
                                description=${desc}
                                time=${time}>
                            </to-do>`;
    }

}
    