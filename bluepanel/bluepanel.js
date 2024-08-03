// ==UserScript==
// @name         Bluepanel 3.0 (BETA)
// @namespace    https://jy738.github.io/webxp/
// @version      1.0
// @description  Bluepanel 3.0 Client for BonziWORLD.org! some features will be broken cus its a beta
// @author       Jy
// @match        https://bonziworld.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bonziworld.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


  var urlhost = "https://jy738.github.io/webxp/";

document.body.innerHTML+='<link rel="stylesheet" href="'+urlhost+'/bluepanel/bluepanel.css">';

function Id(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let result = '';
  for (let i = 0; i < length; i++) {  result += characters.charAt(Math.floor(Math.random() * characters.length));}
  return result;
}

var defaultmenu = '<div class="titlebar"><p class="title">Bluepanel Menu</p><div class="x" id="bp_x"></div></div><div class="window_box"><div class="window_cont" id="bp_cont" style=""><img class="emblem" src="'+urlhost+'/bluepanel/info.png"></img><div class="body">Bluepanel Version 3.0</div><div class="choice" id="bp_choice"><button id="jsdebug">Javascript Debugger</button><button>Silent Typing</button><button>Bluepanel Themes</button><button style="color:rgba(0,0,0,0.3)">Crosscolor manager</button><button style="color:rgba(0,0,0,0.3)">Friends list</button></div></div></div>';

  var jsmenu = '<div class="titlebar"><p class="title">Bluepanel Menu</p><div class="x" id="bp_x"></div></div><div class="window_box"><div class="window_cont" id="bp_cont" style=""><div class="body">Bluepanel Javascript Debugger</div><br>Stats: {stats}<br><textarea type="text" style="width:280px;height:200px;" id="jsexc" placeholder="enter javascript here..."></textarea><br><div class="choice" id="bp_choice"><button="jsrun">Run Script</button></div></div></div>'

document.getElementById("content").innerHTML+="<div id='start_cont'><div id='start'></div>";
document.body.innerHTML+="<div id='window_area'></div>";
document.getElementById("window_area").innerHTML+='<div class="window_main" style="width:450px;height:230px;top:40%;left:40%;" id="bpmenu">'+defaultmenu+'</div>';

  
var show = () => {document.getElementById("bpmenu").style.visibility = "visible";}
var hide = () => {document.getElementById("bpmenu").style.visibility = "hidden";}
var x = () => {document.getElementById("bp_x").onclick = () => {hide();document.getElementById("bpmenu").innerHTML = defaultmenu;}}
document.getElementById("window_area").innerHTML+="<div id='start'></div>";
document.getElementById("start").onclick = () => {
  show();
  document.getElementById("jsdebug").onclick = () => {
    document.getElementById("bpmenu").innerHTML = jsmenu;
    x();
    document.getElementById("jsrun").onclick = () => {
      document.body.innerHTML+='<script>'+document.getElementById("jsexc").value+'</script>';
    }
  }
  x();
}

})();
