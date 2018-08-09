// var button = document.getElementsByClassName('button');
//
// button[0].addEventListener('click',function(){
//   Do something
// })
//
// document.addEventListener('DOMContentLoaded', function(event) {
//   console.log('DOM is ready');
// })


$(document).ready(function(event) {
  console.log("DOM is ready");

//count list items
  function setCount() {
    $("#count").html($(".todo").length);
  }
  setCount();

//add class 'done' to all items when button clicked.
  function markAsDone(){
    $(".markdone").click(function() {
      $(this).parent().addClass("done");
      $(this).parent().removeClass("todo");
      setCount();
    })
  };
  markAsDone();

//create new item in list
  $("#newitem").click(function() {
    $("#list").append($("<li class='todo'>New Item<button type='button' name='button' class='markdone'>Done</button></li>"))
    markAsDone();
    setCount();
  })

//remove last item in list
  $("#removeitem").click(function() {
    $("li").last().remove();
    setCount();
  })




})
