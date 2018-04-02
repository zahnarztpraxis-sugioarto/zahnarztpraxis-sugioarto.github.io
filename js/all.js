if (navigator.userAgent.match(/mobi/i)) {
	var attr = 'myinc';
	if (!document.getElementById(attr))
	{
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = attr;
		link.href = 'css/mobile.css';
		link.media = 'all';
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		head.appendChild(link);
	}
}
