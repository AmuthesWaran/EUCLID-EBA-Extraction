# How to get data from web as json and extract as a table using power query

The below steps is to scrap data from EUCLID EBA website (https://euclid.eba.europa.eu/register/cir/search)

1) Run the Search after Selecting the type dropdown.

2)	Go to developer tools by using the keyboard shortcut Ctrl + Shift + I

3)	Choose Network tab.

4)	And choose the row starts with entities?t= from the table as below. Note: Sometime you might not able to see entities?t as below  if that the case run the search again.
![network-tab-1](https://github.com/AmuthesWaran/Java-Foundation/assets/79437368/ba24ea04-0b56-4fd8-83b3-ac96554d2ea3)

5)	Click Preview tab and Right click on the values on the preview tab and copy.
![network-tab-2](https://github.com/AmuthesWaran/Java-Foundation/assets/79437368/ac4a09bd-7678-47e0-a274-a6681c502be1) 
![network-tab-3](https://github.com/AmuthesWaran/Java-Foundation/assets/79437368/000822d0-7dc4-4205-9b78-abc13df95851)

6)	Paste it in the notepad and save as JSON file type refer “[CRD-Register-Sample-Data.json](src/PowerQueryExtractionUsingExcel/CRD-Register-Sample-Data.json)” and “[SampleDataTemplate.json](src/PowerQueryExtractionUsingExcel/SampleDataTemplate.json)” file to get more clarity and save appropriately.
![sample-json-file-placeholder](https://github.com/AmuthesWaran/Java-Foundation/assets/79437368/33c8416d-3b91-4c98-89ba-5c50f2614f9e)

7)	Now you will be able to extract json data to a table using the “[PowerQueryExtraction.xlsx](src/PowerQueryExtractionUsingExcel/PowerQueryExtraction.xlsx)” file.
8)	Change the path of your json file in power query advanced editor and refresh the query to get data in a table format.
