function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add headers if they don't exist
  if (sheet.getRange("A1").isBlank()) {
    const headers = [
      "Timestamp",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Game Dev Experience",
      "Programming Skills",
      "Game Engine Experience",
      "Portfolio URL",
      "Country",
      "Learning Goals"
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  
  // Add new row
  const newRow = [
    data.timestamp,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.experience,
    data.programmingSkills,
    data.gameEngineExperience,
    data.portfolio,
    data.country,
    data.learningGoals
  ];
  
  sheet.appendRow(newRow);

  // Create response with CORS headers
  return ContentService.createTextOutput(JSON.stringify({ 
    status: "success",
    message: "Application submitted successfully"
  }))
    .setMimeType(ContentService.MimeType.JSON)
    .addHeader('Access-Control-Allow-Origin', '*');
} 