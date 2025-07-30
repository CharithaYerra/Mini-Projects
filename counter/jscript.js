let count = 0;
    function increment() {
      count++;
      document.getElementById("count").innerText = count;
    }

    function refreshPage() {
      location.reload(); 
      //document.getElementById("message").innerText = "you have refreshed the page";

      

    }