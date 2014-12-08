/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Fang | http://www.webdeveloper.com/forum/showpost.php?p=820426&postcount=2 */
function showHide(parent) {
  var aDD=parent.getElementsByTagName('dd');
  for(var dd=0; dd<aDD.length; dd++) {
    aDD[dd].style.display=(aDD[dd].style.display=='none')? 'block' : 'none';
  }
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
var aDT=document.getElementsByTagName('dt');
for(var i=0; i<aDT.length; i++) {
    aDT[i].onmouseover=aDT[i].onmouseout=Function ('showHide(this.parentNode)');
    showHide(aDT[i].parentNode);
    }
});
