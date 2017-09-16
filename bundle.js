!function(){"use strict";function e(e){if(e===c)d(),s=u[0].id,t();else{jQuery(".VC-question-options").empty();var o=a[p];jQuery(".VC-question-number").text(p+1+"/"+c),jQuery(".VC-question-body").text(o.question);for(var n in o.options)jQuery(".VC-question-options").append("<p><input type='radio' name='answer'value='"+o.options[n]+"'>"+n+"</input></p>");r.sendHeight()}}function t(){jQuery(".VC-question-panel").fadeOut("slow",function(){var e=u[1].id,t=u[1].percentage,o=n[e].name,i=u[2].id,a=u[2].percentage,l=n[i].name;jQuery(".VC-results-name").text(n[s].name),jQuery(".VC-results-similarity").text("You are "+u[0].percentage+"% similar."),jQuery(".VC-results-slogan").text("Slogan: "+n[s].slogan),jQuery(".VC-results-faction").text("Factional allegiance: "+n[s].faction),jQuery(".VC-results-summary").text("You were also close to "+o+" ("+t+"%) and "+l+" ("+a+"%)."),jQuery(".VC-results-panel").fadeIn(),r.sendHeight()})}function o(){var t=jQuery("input[name='answer']:checked").val();return t?(l.push(parseInt(t)),jQuery(".VC-alert").hide(),r.sendHeight(),p+=1,e(p)):(jQuery(".VC-alert").slideToggle().text("Pick an answer first"),r.sendHeight(),!1)}var n={1:{name:"Adam Torres",slogan:"Up and Adam",colour:"",faction:"National Labor Students (Labor Left)",pageURL:"https://www.facebook.com/adamforboard/"},2:{name:"Alexander Shu",slogan:"We want Shu",colour:"",faction:"Independent",pageURL:"https://www.facebook.com/WeWantShu/"},3:{name:"Caitlin McMenamin",slogan:"Choose Caitie",colour:"",faction:"Sydney Labor Students (Labor Left)",pageURL:"https://www.facebook.com/ChooseCaitie/"},4:{name:"Claudia Gulbransen-Diaz",slogan:"Harder, Better, Faster, Stronger",colour:"",faction:"Student Unity (Labor Right)",pageURL:"https://www.facebook.com/CLAUDIAforUSU/"},5:{name:"Erika Salmon",slogan:"Upstream with Salmon",colour:"",faction:"Independent Liberal",pageURL:"https://www.facebook.com/UpstreamWithSalmon/"},6:{name:"Hengjie Sun",slogan:"Hengjie Sun Get Things Done",colour:"",faction:"Independent",pageURL:"https://www.facebook.com/Hengjie-Sun-Get-things-done-Hengjie-For-USU-Board-1756389244672799/"},7:{name:"Jacob Masina",slogan:"Team Jacob",colour:"",faction:"Liberal",pageURL:"https://www.facebook.com/TEAMJACOBFORUSU/"},8:{name:"Liliana Tai",slogan:"Don't Be Silly, Vote For Lili",colour:"",faction:"Independent",pageURL:"https://www.facebook.com/Lili4USU/"},9:{name:"Sally Yang",slogan:"Select Sally",colour:"",faction:"Independent",pageURL:"#"},10:{name:"Zhixian Wang",slogan:"Yas Zhixian",colour:"",faction:"Independent",pageURL:"https://www.facebook.com/yaszhixianforusu"}},i=[{id:1,position:[1,5,5,5,5,2,5,5,4]},{id:2,position:[5,3,3,4,3,1,4,4,4]},{id:3,position:[1,5,5,2,5,1,5,2,2]},{id:4,position:[1,5,3,1,3,1,2,5,4]},{id:5,position:[1,1,1,1,1,5,1,3,1]},{id:6,position:[5,3,3,1,3,1,4,3,1]},{id:7,position:[1,1,2,5,1,5,1,3,2]},{id:8,position:[5,4,4,3,3,1,5,1,4]},{id:9,position:[5,3,3,1,3,1,4,2,3]},{id:10,position:[5,5,4,4,2,1,4,3,4]}],a=[{question:"Would you vote for a candidate who is a member of a campus political faction?",options:{Yes:1,No:5}},{question:"Should the USU restrict extreme right-wing films, like the Red Pill, from being shown on campus?",options:{"Definitely not":1,"Probably not":2,Neutral:3,Probably:4,Definitely:5}},{question:"How much do you value the USU pursuing a progressive agenda?",options:{"I'd prefer the exact opposite":1,"I don't value it":2,"I don't care":3,"I value it":4,"I REALLY value it":5}},{question:"How important is it to you that Board Directors have experience running USU clubs or events?",options:{"Not important at all":1,"Not very important":2,Netural:3,Important:4,"Very important":5}},{question:"Should the USU prioritise giving free ACCESS cards to students who cannot afford them?",options:{"Definitely not":1,"Probably not":2,Neutral:3,Probably:4,Definitely:5}},{question:"Should the USU prioritise getting large chain stores, like McDonalds, on campus?",options:{"The USU shouldn't pursue large chains":1,"It doesn't matter":3,"It should be a priority":4,"Large chains should be the top priority":5}},{question:"Should the USU begin introducing more quotas for marginalised groups, like queer students or international students?",options:{"Definitely not":1,"Probably not":2,Neutral:3,Probably:4,Definitely:5}},{question:"The USU should prioritise making their parties better.",options:{"Definitely not":1,"Probably not":2,Neutral:3,Probably:4,Definitely:5}},{question:"Do you agree that a Board Director should act in the interests of students, even if it means breaking their legal duties to the board?",options:{"Strongly disagree":1,"Somewhat disagree":2,Neutral:3,"Somewhat agree":4,"Strongly Agree":5}}],r=new pym.Child;r.sendHeight();var s,l=[],u=[],p=0,c=a.length,d=function(){console.log("Voter position:"),console.log(l);for(var e=0;e<i.length;){var t=g(i[e].position,l),o=Math.round(100*(1-t/12));u.push({id:i[e].id,similarity:t,percentage:o}),e++}u.sort(function(e,t){return e.similarity-t.similarity}),console.log(u)},g=function(e,t){if(e.length===t.length){for(var o=0,n=0;n<e.length;){var i=e[n]-t[n];o+=i*i,n++}return Math.sqrt(o)}};jQuery(document).ready(function(){e(0),jQuery("#VC-submit-button").click(function(){o()})})}();