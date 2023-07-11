function fetchData(callback) {
    setTimeout(function() {
      const data = "Ini data hasil fetch";
      callback(data);
    }, 4000);
  }
  
  function processData(data) {
    console.log("Data yang diproses:", data);
  }
  
  fetchData(processData);
  