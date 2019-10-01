# GoogleFormResponseToDB
This repository contains the code how to send the data from google forms to a database using php. It is a automated script that is triggered every time a google form response is logged. It picks up that response from the list of all responses and sends a request to your hosting or any place that can fetch that request. Once the request has been received, you can trigger you code(PHP here) to send it to database.

Steps to proceed

1. Go to google forms and get you google from id.
2. Click on more settings and go to script editor.
3. Paste the Code.gs code there. Give an appropriate title and save the code.
4. Go to your hosting and create a file with the required name with the contents in submit.php.
5. In script editor, run your code to test it.
6. If everything works fine you can proceed to enable this code to run every time form is filled 

Steps for making this autorun on form fill.

1. Click on Edit->Current project triggers.
2. Click on Add Trigger on the next page that opens.
3. Select the function name(Using default name in this example).
4. Select the event type to On form Submit(can be changed based on need). Leave other fields intact.
5. Optionally add a notification in case of failure.
6. Hope this gets you going.

Feel free to report any bugs, suggestions or improvements.
TODO-
Need to develop a code in other languages to receive that request and put the data in database.
Need to develop a code to support other databases.

Note -

This is a free to use script.
I am not responsible for anything that goes wrong using this.
Developed using Google Code Script(https://developers.google.com/apps-script/) and its related documentation and backend with PHP..
