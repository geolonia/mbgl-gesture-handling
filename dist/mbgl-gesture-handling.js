var t=function(t){this.settings=Object.assign({},{backgroundColor:"rgba(0, 0, 0, 0.8)",textColor:"#ffffff",textMessage:"Use [alt] + scroll to zoom the map.",timeout:2e3},t),this.alertBox=document.createElement("div"),this.alertBox.style.backgroundColor=this.settings.backgroundColor,this.alertBox.style.position="absolute",this.alertBox.style.display="none",this.alertBox.style.zIndex=9999,this.alertBox.style.justifyContent="center",this.alertBox.style.alignItems="center";var e=document.createElement("div");e.style.textAlign="center",e.style.color=this.settings.textColor,e.innerText=this.settings.textMessage,this.alertBox.appendChild(e),document.body.appendChild(this.alertBox)};t.prototype.addTo=function(t){var e=this;t.scrollZoom.disable();var o=t.getContainer(),s=o.getBoundingClientRect();this.alertBox.style.top=s.top+"px",this.alertBox.style.left=s.left+"px",this.alertBox.style.width=s.width+"px",this.alertBox.style.height=s.height+"px",o.addEventListener("wheel",function(o){o.altKey?t.scrollZoom.enable():e.alertBox.style.display="flex",setTimeout(function(){e.alertBox.style.display="none",t.scrollZoom.disable()},e.settings.timeout)})},module.exports=t;
//# sourceMappingURL=mbgl-gesture-handling.js.map