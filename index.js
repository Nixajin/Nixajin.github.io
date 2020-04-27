 window.onload = function()
 {
  html2canvas(document.body)
  {
   onrendered: function(canvas)
   {
    var imgData = canvas.toDoURL();
    document.getElementById("ss").href = imgData;
   }
  });
 }
