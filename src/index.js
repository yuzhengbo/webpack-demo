// import _ from 'lodash';
import {cube} from './math.js'
import './style.css';
import Icon from './qq.jpg';
import Data from './data.xml';
import printMe from './print.js'
function component() {
  // let element = document.createElement('div');
  let element = document.createElement('pre');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'World'], ' ');

  element.innerHTML = [
    'hello world!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  
  element.classList.add('hello');
  // 添加图片到div
  let myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  // xml数据
  console.log(Data);
  let btn = document.createElement('button');
  btn.innerHTML = '点我查看打印';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('更新之后执行');
    // printMe();
    // 重新渲染
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}