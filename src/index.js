import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import Coder from './components/coder/coder.js';

const heading = new Heading();
heading.render();

const coder = new Coder();
coder.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
