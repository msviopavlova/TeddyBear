
function privet() {

    var bears = ["Black bear", "Puma bear", "Russian Bear", "Toma Bear"];
    
   
    var i;
    for (i = 0; i < bears.length; i++) {
      var teddy  = bears[i];
 
      var node = document.createElement("LI");                 // Create a <li> node
      var textnode = document.createTextNode(teddy);         // Create a text node
      
      node.appendChild(textnode);                              // Append the text to <li>
      document.getElementById("bearList").appendChild(node);
    }

    


}



