function sendData(res) {
  if(res === '') {
    console.log('please enter text')
    notificationme();
  }
  else {
   var data1 = {
    'text':res
  };
  console.log('Posting request to GitHub API...');
  fetch('https://gmm.onrender.com/sentiment', {
    method: 'post',
    body: JSON.stringify(data1),
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    var output = Object.values(data)
      document.getElementById("output").innerHTML = output;
    console.log('Prediction:', data);
  }); 
  }
	
}

function notificationme(){
toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "100",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "show",
            "hideMethod": "hide"
        };
toastr.error('Please enter text');
}