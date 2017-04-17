$(document).ready(function(){
  defaultGrid();
  $('button').click(function(){
    var newGridSize = prompt('How many boxes should be on each side?');
    if (isNaN(parseInt(newGridSize)) === false){
      $('table').empty();
      resizeGrid(newGridSize);
    }else{
      window.alert("That's not a number! Try again with a real number this time.");
    }
  });
  $('table').on('mouseenter', '.drawBox',function(){
      $(this).css('opacity', '+=.1');
  });
});

addRow = function(rows){
  for(i=0;i<rows;i++){
  $('table').append('<tr></tr>');
};
}
addColumn = function(columns){
  for(i=0; i<columns; i++){
    $('tr').append("<td class='drawBox'><div></div></td>");
  };
}

resizeGrid = function(boxes){
  addRow(boxes);
  addColumn(boxes);
}
defaultGrid = function(){
  addRow(16);
  addColumn(16);
}
