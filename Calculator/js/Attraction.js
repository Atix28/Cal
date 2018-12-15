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
            name = document.getElementById("Nattraction").value,
            child = document.getElementById("Pricechild").value,
            adult = document.getElementById("Priceadult").value,
        	total = document.getElementById("total").value;
        	
        	
        cell2.innerHTML = child;
        cell3.innerHTML = adult;
        cell4.innerHTML = ( * nights);
        
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
              document.getElementById("Nattraction").value = this.cells[0].innerHTML;
              document.getElementById("Pricechild").value = this.cells[1].innerHTML;
              document.getElementById("Priceadult").value = this.cells[2].innerHTML;
              document.getElementById("total").value = this.cells[3].innerHTML;
            };
        }
    }
    selectedRowToInput();
    
    function editHtmlTbleSelectedRow()
    {
        var name = document.getElementById("Nattraction").value,
            child = document.getElementById("Pricechild").value,
            adult = document.getElementById("Priceadult").value,
            total = (roomrate * nights);
      
        table.rows[rIndex].cells[0].innerHTML = name;
        table.rows[rIndex].cells[1].innerHTML = child;
        table.rows[rIndex].cells[2].innerHTML = adult;
        table.rows[rIndex].cells[3].innerHTML = total;
      
    }
    
    function removeSelectedRow()
    {
        table.deleteRow(rIndex);
        // clear input text
        document.getElementById("Nattraction").value = "";
        document.getElementById("Pricechild").value = "";
        document.getElementById("Priceadult").value = "";
        document.getElementById("total").value = "";
    }
    
    function Total()
    {

    	var td = document.querySelectorAll('#table > tr > td:last-child');

    	var total = [].reduce.call(td, function(a, b) {
    	    return a + parseInt(b.innerText);
    	}, 0);

    	document.getElementById('area_total').innerText = total;
    } 
    
    
    