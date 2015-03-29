/*------------------------------------------------------------------------
SECTION : GENERAL
------------------------------------------------------------------------*/
function xjApp(app_name)
{
	var prefix = md5(window.location.href);
	var prefixed_app = [prefix,'_',app_name];

	if(typeof window[prefixed_app]==='undefined')
	{
		window[prefixed_app] = {};

		return window[prefixed_app];
	}

	return window[prefixed_app];
}
/*----------------------------------------------------------------------*/
/*------------------------------------------------------------------------
SECTION : DOM
------------------------------------------------------------------------*/
function xdCount()
{
	return document.getElementsByTagName("*").length;
}
function xdPrepend(target, element)
{
	target.insertBefore(element, target.childNodes[0]);
}
function xdAppend(target, element)
{
	target.appendChild(element);
}
/*----------------------------------------------------------------------*/
