var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>');
var leftAmPmAutoLabels = $('<div class="left-AM-PM-Auto-labels">' +
							'<ul>' +
							'<li>AM</li>' + 
							'<li>FM</li>' +
							'<li>AUTO</li>' +
							'</ul>' +
							'</div>');
var clockScreen = $('<div class="clock-screen"></div>');
var clockAmPmIndicator = $('<div class="clock-AM-PM-indicator"></div>');
var clockText = $('<div class="clock-text">10:20</div>');
var bottomAmLabelAndFreq = $('<div class="bottom-Am-label-Freq">AM<span class="spacing">53 60 70 90 110 140 170</span></div>');
var bottomFmLabelAndFreq = $('<div class="bottom-Fm-label-Freq">FM<span class="spacing">88 92 96 102 106 108</span></div>');




/* a contains b */
// var bAppendToA = function(a,b){
// 	b.append(a);
// };

$(document).on('ready', function() {
	// bAppendToA($('.container'), outerShell,);
	// bAppendToA(innerShell, outerShell);
	// bAppendToA(leftAmPmAutoLabels, innerShell);
	$('.container').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(leftAmPmAutoLabels, clockScreen);
	clockScreen.append(clockAmPmIndicator, clockText);
	innerShell.append(bottomAmLabelAndFreq, bottomFmLabelAndFreq);

	var day  = new Date();
	var time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
	console.log(time)



});