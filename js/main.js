function unsetActive(className){
  var i, classToToggle;
  classToToggle = document.getElementsByClassName(className);

  for (i = 0; i < classToToggle.length; i++) {
    classToToggle[i].className = classToToggle[i].className.replace(" active", "");
  }
}

function loadMore(){
  var i, sectionName, selector, classToToggle, len;
  sectionName = document.getElementsByClassName("tablinks active")[0].innerHTML;
  selector = "." + sectionName + ":not(.active)";
  classToToggle = document.querySelectorAll(selector);

  len = Math.min(classToToggle.length, 4);
  for (i = 0; i < len; i++) {
    classToToggle[i].className += " active";
  }

  showButton(classToToggle);
}

function showButton(elements){
  var loadMoreBtn = document.getElementsByClassName("btn-load-more")[0];
  if(elements.length > 4){
    loadMoreBtn.classList.add("active");
  }
  else{
    loadMoreBtn.classList.remove("active");
  }
}

function openCategory(evt) {
  unsetActive("tabcontent");
  unsetActive("tablinks");

  evt.currentTarget.className += " active";
  loadMore();
}