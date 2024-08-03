function Id(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let result = '';
  for (let i = 0; i < length; i++) {  result += characters.charAt(Math.floor(Math.random() * characters.length));}
  return result;
}

//XPWindow({width: "000px", height: "000px", x: "0px", y: "0px", type: 'small_alert'},{title: "bla", body: "Warning! Update now!", buttons: "ok_cancel"})
function XPWindow(prop, content){
  this.width = prop.width;
  this.height = prop.height;
  this.x = prop.x;
  this.y = prop.y;
  this.type = prop.type;
  this.id = Id(10);

  
  
  document.body.innerHTML+='<div class="window_main" style="width:'+this.width+';height:'+this.height+';top:'+this.y+';left:'+this.x+';" id="'+this.id+'"><div class="titlebar"><p class="title">'+content.title+'</p><div class="x" id="'+this.id+'_x"></div></div><div class="window_box"><div class="window_cont" id="'+this.id+'_cont'+'"style=""></div></div></div>';
  let buttontype;

  if(content.buttons == "ok_cancel"){
    buttontype = '<button>Ok</button>&#160;<button>Cancel</button>';
  }
  if(content.buttons == "ok"){
    buttontype = '<center><button>Ok</button></center>'
  }

  document.getElementById(this.id+"_cont").innerHTML = '<img class="emblem" src="Info.png"></img><div class="body">'+content.body+'</div><div class="choice" id="'+this.id+'_choice">'+buttontype+'</div>';

  document.getElementById(this.id+"_x").onclick = () => {
    document.getElementById(this.id).remove();
  }
  document.getElementById(this.id+"_choice").onclick = () => {
    document.getElementById(this.id).remove();
  }
}

window.onload = () => {
  document.getElementById("overlay").innerHTML = "Click anywhere to start WebXP...";
  document.getElementById("overlay").onclick = () => {
    document.getElementById('overlay').style.visibility = 'hidden';

    document.getElementById("overlay").remove();
  }
}