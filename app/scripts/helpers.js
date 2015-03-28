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