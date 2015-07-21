function switchPic(whichPic){

  var currentImg=document.getElementById("placeholder");
  var currentSrc=currentImg.getAttribute("src");
  var targetIndex=parseInt(currentSrc[10])+1;
  console.log(targetIndex);
  if(targetIndex<6){
  var targetSrc=currentSrc.replace(currentSrc[10],targetIndex);
  console.log(targetSrc);
  currentImg.setAttribute("src",targetSrc);
  }
}
