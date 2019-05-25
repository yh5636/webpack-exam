//var _ = require('lodash');  /*lodash 라이브러리 가져온다. 단, require는 브라우저에서 이해하지 못하기 때문에 weppack에 내장된 기능으로 한번 더 컴파일 해줘야 함.*/
import _ from 'lodash';

import {area, circumference} from './js/circle';  //반드시 name을 일치시켜 가져와야함.
import a from './js/cube.js'; //전체 모듈 적용한 js의 이름을 마음대로 받을 수 있다.

import './css/style.css'; /*css를 모듈로 가져옴.*/
import './css/hello.scss';

function component() {
  let element = document.createElement('div');

  // Lodash(_), currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(10), circumference(10));
console.log(a(10));
console.log(a(10));