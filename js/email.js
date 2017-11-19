function init()
{
	var s = "zahnarztpraxis";
	var t = ".desugioarto";
	var u = "foo"

	u = "in" + u.replace(/o$/, "@");
	t = u + s + "-" + t.substring(3) + t.substring(0,3);

	var canvas = document.getElementById("insertaddy");
	var ctx = canvas.getContext("2d");

	ctx.font="13pt Droid Sans Mono";
	ctx.fillText(t, 0, 17);
}
