// Select color input
// Select size input
var button, colorPicker;

button = $("#button");
colorPicker = $("#colorPicker");

button.click(function(e) {
  //call makeGrid function, remove the previous grid, set default the colorpicker
  $("tbody").remove();
  colorPicker.val("#000000");
  makeGrid();
  e.preventDefault();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    var n = $("#input_height").val();
    var m = $("#input_width").val();

  //creating rows
  for (var i = 1; i <= n; i++) {
    const tr = $("<tr></tr>");
    $("table").append(tr);

    //creating cells
    var z = 1;
    while (z <= m) {
      const td = $("<td></td>");
      tr.append(td);
      z++;

      //coloring the cells after clicking
      $("td").click(function() {
        $(this).css("background-color", colorPicker.val());
      });
    }
  }
}
