var notdienst = document.getElementById("timetoggle");
if (notdienst != null) {
	var dt = new Date();
	var h = dt.getHours();
	var d = dt.getDay();
	if (d >= 1 && d <= 5 && h >= 6 && h <= 18) {
		notdienst.style.visibility = "hidden";
	}
}
