//add row
function addHtmlTableRow()
   	{
    	var table = document.getElementById("dataTable"),
    	newRow = table.insertRow(table.length),
    	cell1 = newRow.insertCell(0),
    	cell2 = newRow.insertCell(1),
    	cell3 = newRow.insertCell(2),
    	cell4 = newRow.insertCell(3),
    	cell5 = newRow.insertCell(4),
    	
    	hotel = document.getElementById("hotel").value,
    	rtype = document.getElementById("rtype").value,
    	room = document.getElementById("room").value,
    	roomrate = document.getElementById("roomrate").value,
    	nights = document.getElementById("nights").value;
    	
    	cell1.innerHTML = hotel;
    	cell2.innerHTML = rtype;
    	cell3.innerHTML = room;
    	cell4.innerHTML = roomrate;
    	cell5.innerHTML = nights;
   	}
