!function(){"use strict";function e(e){if(e===h)p(),r=l[0].id,t();else{jQuery(".VC-question-options").empty();var o=a[c];jQuery(".VC-question-number").text(c+1+"/"+h),jQuery(".VC-question-body").text(o.question);for(var n in o.options)jQuery(".VC-question-options").append("<p><input type='radio' name='answer'value='"+o.options[n]+"'>"+n+"</input></p>");s.sendHeight()}}function t(){jQuery(".VC-question-panel").fadeOut("slow",function(){var e=l[1].id,t=l[1].percentage,o=n[e].name,i=l[2].id,a=l[2].percentage,u=n[i].name;jQuery(".VC-results-name").text(n[r].name),jQuery(".VC-results-similarity").text("You are "+l[0].percentage+"% similar."),jQuery(".VC-results-faction").text("Factional allegiance: "+n[r].faction),jQuery(".VC-results-summary").text("People you are not: "+o+" ("+t+"%) and "+u+" ("+a+"%)."),jQuery(".VC-results-panel").fadeIn(),s.sendHeight()})}function o(){var t=jQuery("input[name='answer']:checked").val();return t?(u.push(parseInt(t)),jQuery(".VC-alert").hide(),s.sendHeight(),c+=1,e(c)):(jQuery(".VC-alert").slideToggle().text("Pick an answer first"),s.sendHeight(),!1)}var n={1:{name:"Imogen Grant",faction:"Grassroots, running as Switch",pageURL:"https://www.facebook.com/switchforsrc/"},2:{name:"Bella Pytka",faction:"Sydney Labor Students (Labor Left), running as Stand Up",pageURL:"https://www.facebook.com/standupusyd/"},3:{name:"Brendan Ma",faction:"Moderate Liberals, running as Vision",pageURL:"https://www.facebook.com/VISION4SRC/"}},i=[{id:1,position:[1,5,1,5,5,3,5,5,3]},{id:2,position:[5,5,3,3,2,5,5,3,3]},{id:3,position:[1,1,5,1,1,1,1,1,3]}],a=[{question:"Would you vote for a candidate whose campus political faction can require them to act in a particular way?",options:{Yes:5,No:1}},{question:"Do you value a candidate having experience in the SRC over experience in other campus activities?",options:{"Yes, very much":5,"Yes, a bit":4,"I do not care":3,"No, not really":2,"No, I think other experience is more important":1}},{question:"Do you think the SRC should significantly change the way that it is run?",options:{"Absolutely, the SRC should radically change the way it operates":5,"Yes, some change is needed":3,"No, things are fine how they are":1}},{question:"How much do you value the SRC pursuing an activist agenda?",options:{"Very much":5,"A bit":4,Neutral:3,"Not really":2,"Not at all":1}},{question:"How important to you is it that a candidate has a record of working to stop sexual assault on campus?",options:{"It is not important to me":1,"It is somewhat important to me":3,"It is very important to me":5}},{question:"Should the SRC maintain its $63000 a year affiliation with the National Union of Students?",options:{"Yes, the SRC should remain affiliated":5,"I don't care":3,"No, the SRC should disaffiliate":1}},{question:"Do you support the SRC striking in solidarity with University staff members?",options:{Yes:5,"I don't care":3,No:1}},{question:"Are you more aligned with the Liberals, Labor or the Greens?",options:{Liberals:1,Labor:3,"The Greens":5}},{question:"Do you support ruthless enforcement of 'No Hat, No Play' on campus?",options:{"Yes, lock up all unhatted offenders":3,"Neutral – I'm a bit worried about sun safety but don't want my mates to think I am":3,"No, fuck Healthy Harold":3}}],s=new pym.Child;s.sendHeight();var r,u=[],l=[],c=0,h=a.length,p=function(){console.log("Voter position:"),console.log(u);for(var e=0;e<i.length;){var t=d(i[e].position,u),o=Math.round(100*(1-t/12));l.push({id:i[e].id,similarity:t,percentage:o}),e++}l.sort(function(e,t){return e.similarity-t.similarity}),console.log(l)},d=function(e,t){if(e.length===t.length){for(var o=0,n=0;n<e.length;){var i=e[n]-t[n];o+=i*i,n++}return Math.sqrt(o)}};jQuery(document).ready(function(){e(0),jQuery("#VC-submit-button").click(function(){o()})})}();
