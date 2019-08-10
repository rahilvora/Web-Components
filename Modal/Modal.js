customElements.define('my-modal', class extends HTMLElement {
    constructor() {
        super();
        //initializations
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
            <style>
                /* The Modal (background) */
                .modal {
                    display: none; 
                    position: fixed;
                    z-index: 1;
                    min-width: 30rem;
                    background: burlywood;
                    padding: 3rem;
                }
             /* styles truncated for brevity */
            </style>
            <button>Open Modal</button>
            <div class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <slot name="header"><h1>Default text</h1></slot>
                    </div>
                    <div class="modal-body">
                        <slot><slot>
                    </div>
                </div>
            </div>
            `
    }
    connectedCallback() {
        this.render();
        this.addEvents();
    }

    disconnectedCallback() {
        this.removeEvents();
    }

    render() {
        this._modal = this.shadowRoot.querySelector(".modal");
    }

    addEvents() {
        this.shadowRoot.querySelector("button").addEventListener('click', this.showModal.bind(this));
        this.shadowRoot.querySelector(".close").addEventListener('click', this.hideModal.bind(this));
    }

    removeEvents() {
        this.shadowRoot.querySelector("button").removeEventListener('click', this._showModal);
        this.shadowRoot.querySelector(".close").removeEventListener('click', this._hideModal);
    }

    showModal() {
        this._modal.style.display = 'block';
    }

    hideModal() {
        this._modal.style.display = 'none';
    }
});