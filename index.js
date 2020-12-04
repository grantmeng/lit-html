        //import {html, render} from './node_modules/lit-html/lit-html.js';
        import {html, render} from 'lit-html'
        // Define a template
        const myTemplate = name => { return html`<p>Hello, ${name}</p>`; };
        // Render the template to the document
        const mynode = document.getElementById('username');
        render(myTemplate('lit-html'), mynode);

