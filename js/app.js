/**
 * Author: Maximo Mena
 * GitHub: mmenavas
 * Twitter: @menamaximo
 * Project: Study Buddy
 * Description:
 */

define(function(require) {

  var StudyBuddy = require("StudyBuddy");
  var StudyQuestion = require("StudyQuestion");
  var gui = require("gui");

  var q1 = new StudyQuestion(
    "A",
    "La"
  );
  var q2 = new StudyQuestion(
    "B",
    "Ti"
  );
  var q3 = new StudyQuestion(
    "C",
    "Do"
  );
  var q4 = new StudyQuestion(
    "D",
    "Re"
  );
  var q5 = new StudyQuestion(
    "E",
    "Mi"
  );
  var q6 = new StudyQuestion(
    "F",
    "Fa"
  );
  var q7 = new StudyQuestion(
    "G",
    "Sol"
  );

  StudyBuddy.addQuestion(q1);
  StudyBuddy.addQuestion(q2);
  StudyBuddy.addQuestion(q3);
  StudyBuddy.addQuestion(q4);
  StudyBuddy.addQuestion(q5);
  StudyBuddy.addQuestion(q6);
  StudyBuddy.addQuestion(q7);

  StudyBuddy.randomize();

  gui.draw(StudyBuddy, 500);

});
