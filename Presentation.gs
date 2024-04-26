function onFormSubmit(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Presentation');

  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();

  const teams = ['NUS HIgh Team 1 (A1)',
'NUS High Team 2 (A2)',
'Smooth Operation Motorsports (B1)',
'Alpha Romeo (B2)',
'ACS Barker U5 (C1)',
'ACS Barker Team 2 (C2)',
'Monster Energy Racing (D1)',
'Smooth Operators (D2)',
'Peicai Team 1 (E1)',
'Peicai Team 2  (E2)',
'Eagles 1 (F1)',
'Eagles2 (F2)',
'DYS01 (G1)',
'DYS02 (G2)',
'CHRstastic (H)',
'BBSS Team 1 (J)',
'Spooderman (K)',
'Thunder McDonalds (L)',
'Vortex (M)',
'Nitro Knights (N)',
'OPSS Team 1 (P)',
'CCKSS Alpha (Q)',
'Vroom Vroom (R)',
'Acclerator (S)',
'SGSS (T)']
  var teamname, delivery, qna, flow, design, research, environ, phys;

  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];

    var title = itemResponse.getItem().getTitle();
    var response = itemResponse.getResponse();

    if (title === 'Name of Teams in P1 (Seminar Room)' || title === 'Name of Teams in P2 (STEM Room)' || title === 'Name of Teams in P3 (Engineering Room)' || title === 'Name of Teams in P4 (PH Lab Classroom)')
    {
      teamname = response;
    }
    else if (title === 'Presentation Grading')
    {
      delivery = response[0];
      qna = response[1];
      flow = response[2];
    }
    else if (title === "Content")
    {
      design = response[0];
      research = response[1];
      environ = response[2];
      phys = response[3];
    }
  }

  var rowToUpdate = teams.indexOf(teamname) + 3;
  sheet.getRange(rowToUpdate, 2).setValue(delivery);
  sheet.getRange(rowToUpdate, 3).setValue(qna);
  sheet.getRange(rowToUpdate, 4).setValue(flow);
  sheet.getRange(rowToUpdate, 5).setValue(design);
  sheet.getRange(rowToUpdate, 6).setValue(research);
  sheet.getRange(rowToUpdate, 7).setValue(environ);
  sheet.getRange(rowToUpdate, 8).setValue(phys);
}

function setUpTrigger() {
  var form = FormApp.openById('1J2SQEQJJjoRuB-t8Jcwx9G4_7q4h-V_XbpjG5gQu208');
  ScriptApp.newTrigger('onFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();
}
