var ourRequest = new XMLHttpRequest();
ourRequest.open('GET',"file:///C:/xampp/htdocs/ab/custom.json");

ourRequest.onload = function (){
    console.log(ourRequest.responseText)
}

ourRequest.send();
