
import { React } from "./react.js";
const virtualDOM = React.createElement('div', { class: 'content' }, React.createElement('span', { class: 'item' }, '内部'));
console.log(virtualDOM);