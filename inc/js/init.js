// 這是所有src的入口檔案
// 這邊只能寫引入
// 要寫功能的js去找base.js

import 'jquery';
import '../lib/primeui-all.js'

import '../icomoon/style.css';
import 'font-awesome/css/font-awesome.css';
import 'jqueryui/jquery-ui.css';
import 'primeui/themes/omega/theme.css';
import 'primeui/primeui.css'

import '../css/style.css';
import '../css/button.css';


var $base = require('./base.js');
window.$base = new $base();