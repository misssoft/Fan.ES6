import * as $ from 'jquery';

import {Button} from './ui/button.js';

let b = new Button('Click me');

console.log(b.title);
console.log(b.getElementString());

//b.appendToElement($('body'));