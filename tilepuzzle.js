var visualTiles;
var states=["empty","tile","block","start","end"];
init();


tiles=document.getElementsByClassName("cell")
for(var i = 0; i < tiles.length; i++) {

    tiles[i].addEventListener('click', function(e){
    for(var j = 0; j < states.length; j++) {
        if (this.classList.contains(states[j])){
          console.log(states[j])
          this.classList.remove(states[j])
          if (j==4){
            this.classList.add(states[0])
            break;
          } else {
              this.classList.add(states[j+1])
              break ;
          }
        }
      }
    });
}


function init(){
  visualTiles= document.createElement("TABLE");
  header=visualTiles.createTHead()
  body=visualTiles.createTBody()
  headerRow=header.insertRow(0)
  rows=[];
  for (i=3;i<12;i++){
    rowId=i-3;
    if (i==3){
      cell=headerRow.insertCell(rowId);
      cell.innerHTML="<div class=\"headerCell\"></div>";
    } else {
    cell=headerRow.insertCell(rowId);
    cell.innerHTML="<div class=\"headerCell\">"+i.toString(16).toUpperCase()+"8</div>";
  }
}
  for (j=7;j<20;j++){
    rowId=j-7;
    rows[j]=body.insertRow(rowId);
    for (i=3;i<12;i++){
      cellId=i-3;
      if (i==3){
        cell=rows[j].insertCell(cellId);
        cell.innerHTML="<div class=\"headerCell\">"+j.toString(16).toUpperCase()+"8</div>";
      } else {
      cell=rows[j].insertCell(cellId);
      cell.innerHTML="<div class=\"cell empty\" data-x="+i.toString(16).toUpperCase()+"8 data-y="+j.toString(16).toUpperCase()+"8></div>";
    }
  }
}
  elem=document.createElement("div");
  elem.appendChild(visualTiles)
  document.body.appendChild(elem)
  console.log ("Init successful");
}
