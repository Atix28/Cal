 function addHtmlTableRow()
    {
        // get the table by id
        // create a new row and cells
        // get value from input text
        // set the values into row cell's
       
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            hotel = document.getElementById("hotel").value,
            rtype = document.getElementById("rtype").value,
            room = document.getElementById("room").value,
        	roomrate = document.getElementById("roomrate").value,
        	nights = document.getElementById("nights").value,
        	total = document.getElementById("total").value;
        	
        	
        cell1.innerHTML = hotel;
        cell2.innerHTML = rtype;
        cell3.innerHTML = room;
        cell4.innerHTML = roomrate;
        cell5.innerHTML = nights;
        cell6.innerHTML = (roomrate * nights * room );
        
        // making the total 
        
        
        
        // call the function to set the event to the new row
        selectedRowToInput();
       
    
    }
    
    // display selected row data into input text
    function selectedRowToInput()
    {
        
        for(var i = 1; i < table.rows.length; i++)
        {
            table.rows[i].onclick = function()
            {
              // get the seected row index
              rIndex = this.rowIndex;
              document.getElementById("hotel").value = this.cells[0].innerHTML;
              document.getElementById("rtype").value = this.cells[1].innerHTML;
              document.getElementById("room").value = this.cells[2].innerHTML;
              document.getElementById("roomrate").value = this.cells[3].innerHTML;
              document.getElementById("nights").value = this.cells[4].innerHTML;
              document.getElementById("total").value = this.cells[5].innerHTML;
            };
        }
    }
    selectedRowToInput();
    
    function editHtmlTbleSelectedRow()
    {
        var hotel = document.getElementById("hotel").value,
            rtype = document.getElementById("rtype").value,
            room = document.getElementById("room").value,
            roomrate = document.getElementById("roomrate").value,
            nights = document.getElementById("nights").value,
            total = (roomrate * nights * room);
      
        table.rows[rIndex].cells[0].innerHTML = hotel;
        table.rows[rIndex].cells[1].innerHTML = rtype;
        table.rows[rIndex].cells[2].innerHTML = room;
        table.rows[rIndex].cells[3].innerHTML = roomrate;
        table.rows[rIndex].cells[4].innerHTML = nights;
        table.rows[rIndex].cells[5].innerHTML = total;
      
    }
    
    function removeSelectedRow()
    {
        table.deleteRow(rIndex);
        // clear input text
        document.getElementById("hotel").value = "";
        document.getElementById("rtype").value = "";
        document.getElementById("room").value = "";
        document.getElementById("roomrate").value = "";
        document.getElementById("nights").value = "";
        document.getElementById("total").value = "";
    }
    
    function Total()
    {

        var table = document.getElementById("table"), sumVal = 0;
        
        for(var i = 1; i < table.rows.length; i++)
        {
            sumVal = sumVal + parseInt(table.rows[i].cells[5].innerHTML);
        }
        
        document.getElementById("area_total").innerHTML = "TOTAL = " + sumVal;
        console.log(sumVal);
    } 
    
    
    