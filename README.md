# GoogleFormResponseToDB
This repository contains the code how to send the data from google forms to a database using php.

Steps to proceed

1. Go to google forms and get you google from id.
2. Click on more settings and go to script editor.
3. Paste the Code.gs code there. Give an appropriate title and save the code.
4. Go to your hosting and create a file with the required name with the contents in submit.php.
5. In script editor, run your code to test it.

If everything works fine you can proceed to enable this code to run everytime form is filled
Steps for making this autorun on form fill.

1. Click on Edit->Current project triggers.
2. Click on Add Trigger on the next page that opens.
3. Select the function name(Using default name in this example).
4. Select the event type to On form Submit(can be changed based on need). Leave other fields intact.
5. Optionally add a notification incase of failure.

Hope this gets you going.

Feel free to contribute or make additions to this repo.
