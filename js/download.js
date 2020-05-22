var s = "Dewy";
var t = "artoSugio";
var u = "cc"

u = ".v" + u.replace(/c$/, "f");
t = "res/ZA " + s + " " + t.substring(4) + t.substring(0,4);
$("#vcf-download").click(function() {
    window.location = t + u;
});
