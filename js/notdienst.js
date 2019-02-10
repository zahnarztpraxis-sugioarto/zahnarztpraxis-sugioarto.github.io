function notdienst_hide() {
	notdienst.style.visibility = "hidden";
}

var notdienst = document.getElementById("timetoggle");
if (notdienst != null) {
	var dt = new Date();
	var h = dt.getHours();
	var d = dt.getDay();
	switch (d) {
		case 1:
		case 2:
		case 4:
			if (h >= 6 && h <= 18) {
				notdienst_hide();
			}
			break;
		case 3:
		case 5:
			if (h >= 6 && h <= 12) {
				notdienst_hide();
			}
			break;
		default:
			break;
	}
}
