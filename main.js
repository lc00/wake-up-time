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
var clockText = $('<div class="clock-text"></div>');
var bottomAmLabelAndFreq = $('<div class="bottom-Am-label-Freq"></div>');
var bottomFmLabelAndFreq = $('<div class="bottom-Fm-label-Freq"></div>');




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
	clockScreen.append(clockAmPmIndicator);


	// outerShell.appendTo('.container');
	// innerShell.appendTo(outerShell);
	// leftAmPmAutoLabels.appendTo(innerShell);
	// clockScreen.appendTo(innerShell);
	// clockAmPmIndicator.appendTo(clockScreen);
	



});