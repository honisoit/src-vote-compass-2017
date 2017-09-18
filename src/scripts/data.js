// src/scripts/data.js
var candidateInfo = {
   "1": {
      "name": "Imogen Grant",
      "faction": "Grassroots, running as Switch",
      "pageURL": "https://www.facebook.com/switchforsrc/"
   },
   "2": {
      "name": "Bella Pytka",
      "faction": "Sydney Labor Students (Labor Left), running as Stand Up",
      "pageURL": "https://www.facebook.com/standupusyd/"
   },
   "3": {
      "name": "Brendan Ma",
      "faction": "Moderate Liberals, running as Vision",
      "pageURL": "https://www.facebook.com/VISION4SRC/"
   }
};

var candidatePositions = [
 {
   "id": 1,
   "position": [1,5,1,5,5,3,5,5,3]
 },
 {
   "id": 2,
   "position": [5,5,3,3,2,5,5,3,3]
 },
 {
   "id": 3,
   "position": [1,1,5,1,1,1,1,1,3]
 }
];

var questions = [
 {
   "question": "Would you vote for a candidate whose campus political faction can require them to act in a particular way?",
   "options": {"Yes":5,"No":1}
 },
 {
   "question": "Do you value a candidate having experience in the SRC over experience in other campus activities?",
   "options": {"Yes, very much":5,"Yes, a bit":4,"I do not care":3,"No, not really":2,"No, I think other experience is more important":1}
 },
 {
   "question": "Do you think the SRC should significantly change the way that it is run?",
   "options": {"Absolutely, the SRC should radically change the way it operates":5,"Yes, some change is needed":3,"No, things are fine how they are":1}
 },
 {
   "question": "How much do you value the SRC pursuing an activist agenda?",
   "options": {"Very much":5,"A bit":4,"Neutral":3,"Not really":2,"Not at all":1}
 },
 {
   "question": "How important to you is it that a candidate has a record of working to stop sexual assault on campus?",
   "options": {"It is not important to me":1,"It is somewhat important to me":3,"It is very important to me":5}
 },
 {
   "question": "Should the SRC maintain its $63000 a year affiliation with the National Union of Students?",
   "options": {"Yes, the SRC should remain affiliated":5,"I don't care":3,"No, the SRC should disaffiliate":1}
 },
 {
   "question": "Do you support the SRC striking in solidarity with University staff members?",
   "options": {"Yes":5,"I don't care":3,"No":1}
 },
 {
   "question": "Are you more aligned with the Liberals, Labor or the Greens?",
   "options": {"Liberals":1,"Labor":3,"The Greens":5}
 },
 {
   "question": "Do you support ruthless enforcement of 'No Hat, No Play' on campus?",
   "options": {"Yes, lock up all unhatted offenders":3,"Neutral – I'm a bit worried about sun safety but don't want my mates to think I am":3,"No, fuck Healthy Harold":3}
 }
]

export {
  candidateInfo,
  candidatePositions,
  questions
}
