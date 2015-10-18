/**
 * Small social sharer function to avoid loading
 * external scripts for such a simple action
 * Usage : $('.selector').on('click', Sharer);
 * @return {false}
 */
Sharer = function() {
	'use strict';

	var type = this.getAttribute('data-type') || '';
	var href = this.getAttribute('data-url') || '';
	var msg = this.getAttribute('data-msg') || '';
	var img = this.getAttribute('data-img') || '';

	var screenWidth = screen.availWidth/2 || screen.width/2;
	var screenHeight = screen.availHeight/2 || screen.height/2;

	var types = {
		facebook: {
			url: 'http://www.facebook.com/sharer.php?s=100&p[summary]=' + msg + '&p[url]=' + href + '&p[images][1]=' + img,
			name: 'Facebook',
			features: 'toolbar=0,status=0,width=580,height=607,top='+ (screenHeight-310) +',left='+ (screenWidth-290)
		},
		twitter: {
			url: 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(msg) + ' ' + encodeURIComponent(href),
			name: 'Twitter',
			features : 'scrollbars=yes,width=600,height=253,top='+ (screenHeight-135) +',left='+ (screenWidth-300)
		},
		pinterest: {
			url: 'http://pinterest.com/pin/create/button/?url=' + href + '&amp;media=' + img + '&amp;description=' + msg,
			name: 'Pinterest',
			features: 'scrollbars=yes,width=760,height=520,top='+ (screenHeight-265) +',left='+ (screenWidth-380)
		}
	};

	var url = types[type].url;
	var name = types[type].name;
	var features = types[type].features;
	var popup = window.open(url, name, features);
	popup.focus();

	return false;
};