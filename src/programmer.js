import Heading from './components/heading/heading.js';
import Coder from './components/coder/coder.js';
// import _ from 'lodash';

const heading = new Heading();
// heading.render(_.upperCase('Programmer'));
heading.render('Programmer');

const coder = new Coder();
coder.render();
