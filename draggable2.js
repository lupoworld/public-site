/*$(function(){
  if($('div').is('.Index')){
    //add dynamic script tag  using createElement()
    OR
    //call specific functions
    $(".gallery_card").hover(function() {
  document.getElementsByClassName("gallery_card")[0].style.transform += "scale(1.1)";
}, function() {
  if (document.getElementsByClassName("gallery_card")[0].style.transform[0] != "s") {
    document.getElementsByClassName("gallery_card")[0].style.transform = document.getElementsByClassName("gallery_card")[0].style.transform.split(")")[0];
  } else {
    document.getElementsByClassName("gallery_card")[0].style.transform = "";
  }
});
  }
});
*/
/*$(function () {

cardHover(); //intially call hover function

function cardHover() {
  document.getElementsByClassName(".gallery_card")[0].style.transform = "scale(1,1)";
  document.getElementsByClassName(".gallery_card")[0].onmouseout = function(){
    document.getElementsByClassName(".gallery_card")[0].style.transform = "scale(1,1)";
  };

  document.getElementsByClassName(".gallery_card")[0].onmouseenter = function(){

    document.getElementsByClassName(".gallery_card")[0].style.transform = "scale(2,2)";
  };

  };
});
*/
$(function () {
const nodeList = document.querySelectorAll(".gallery_card");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.transform = "scale(1,1)";
  nodeList[i].onmouseout = function(){
        nodeList[i].style.transform = "scale(1,1)";
  };
    nodeList[i].onmouseenter = function(){

    nodeList[i].style.transform = "scale(2,2)";
  };

  };
};
});
$(".bubble").hover(function() {
  document.getElementsByClassName("bubble")[0].style.transform += "scale(1.1)";
}, function() {
  if (document.getElementsByClassName("bubble")[0].style.transform[0] != "s") {
    document.getElementsByClassName("bubble")[0].style.transform = document.getElementsByClassName("bubble")[0].style.transform.split(")")[0];
  } else {
    document.getElementsByClassName("bubble")[0].style.transform = "";
  }
});
