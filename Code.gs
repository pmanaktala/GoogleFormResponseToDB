function myFunction() {

  //Get your form ID and put in below.
  var form = FormApp.openById('YOUR-FORM-ID');
  var formResponses = form.getResponses();
  
  //The below line is only used to read the last filled response. In order to alter just run a loop to get individual responses.
  var formResponse = formResponses[formResponses.length-1];
  var itemResponses = formResponse.getItemResponses();

  //Creating a JSON of the data
  var data = {};
  for (var j = 0; j < itemResponses.length; j++) {
    var itemResponse = itemResponses[j];
    data[itemResponse.getItem().getTitle()] = itemResponse.getResponse(); 
  }
  //To check if data is being fetched.
  Logger.log(JSON.stringify(data));
  
  //Sending data as POST
  var options = {
  'method' : 'post',
  'contentType': 'application/json',
  'payload' : JSON.stringify(data)
  };
  UrlFetchApp.fetch('https://example.com/submit.php', options);
  Logger.log('Request Sent');
}
