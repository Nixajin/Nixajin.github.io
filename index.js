$("td").click(function()
{
 if($(this).css("background-color")=="rgba(0, 0, 0, 0)")
 {
  $(this).css("background-color", "red");
 }
 else
 {
  $(this).css("background-color", "");
 }
});

$('button').click(function()
{
 html2canvas(document.body,
 {
  onrendered: function(canvas)
  {
   var imgData = canvas.toDataURL();
   document.getElementById("ss").href = imgData;
  }
 });
});
