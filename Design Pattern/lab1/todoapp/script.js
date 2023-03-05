/*$("#btnAdd").on("click", function () {
  if (!!$("#taskInput").val()) {
    $(".tasksBox").append(
      "<div class='task2'><div class='task'>" +
        $("#taskInput").val() +
        "</div>" +
        "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
    );
    $("#taskInput").val("");
  } else {
    console.error("Empty value");
  }
});
$(document).on("click", ".delete", function () {
  $(this).parent(".task2").remove();
});

$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});*/



//var dataTime = new Date();
//let i = 0;
///funct
let cookieReturn = document.cookie.split("; ");
cookieReturn.map((t) => {
  if (t.split("=")[1]) {
    if (t.includes("deleted")) {
      console.log("deleted");
    } else {
      changetasksBox( t.split("=")[1])
    }
  }
});




$("#btnAdd").on("click", function () {
  if (!!$("#taskInput").val()) {
    changetasksBox( $("#taskInput").val() );
    setCustomCoockie($("#taskInput").val());
  } else {
  }
});


$(document).on("click", ".delete", function () {


  removeCustomCoockie( $(this).siblings("div").text());

});

$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});


///////////////
function changetasksBox(value)
{
  $(".tasksBox").append(
    "<div class='task2'><div class='task'>" +
   value +
    "</div>" +
    "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
  );
}

function setCustomCoockie(value)
{
    const dataTime = new Date();
    dataTime.setMonth(dataTime.getMonth() + 1);
    document.cookie = `${value} = ${value}  ; expires=${dataTime}`;
}

function removeCustomCoockie(value)
{
  var removeMe = value;
  console.log(removeMe);
  document.cookie = `${removeMe} = ${removeMe} deleted  ; expires=1/1/2001`;
  $(this).parent(".task2").remove();
}