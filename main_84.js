pizza_list_array = [];

function getmenu()
	{    
        // Give the appropriate id name as 
        var item = document.getElementById("pizza_name").value; 
       
        //Add  function to push item into array
        pizza_list_array.push()(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =display_menu+ remove_commas;
	}