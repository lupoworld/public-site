$(function(){
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

$(".bubble").hover(function() {
  document.getElementsByClassName("bubble")[0].style.transform += "scale(1.1)";
}, function() {
  if (document.getElementsByClassName("bubble")[0].style.transform[0] != "s") {
    document.getElementsByClassName("bubble")[0].style.transform = document.getElementsByClassName("bubble")[0].style.transform.split(")")[0];
  } else {
    document.getElementsByClassName("bubble")[0].style.transform = "";
  }
});
