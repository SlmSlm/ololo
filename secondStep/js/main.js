function checkIp() {
  $.getJSON("https://apileads.3snet.tech/check-ip", function (n) {
    if ((console.log(n), void 0 !== n.ip)) {
      var i = n.ip;
      $("input[name=ip]").attr("value", i);
    }
  });
}
function rand(n, i) {
  return Math.floor(Math.random() * (i - n + 1)) + n;
}
function copies() {
  var n = $(".slots .pin"),
    i = parseInt($(n).html());
  (i = i > 5 ? i - rand(1, 3) : i - rand(-2, 2)) < 2
    ? $(n).html(1)
    : $(n).html(i),
    setTimeout("copies()", rand(9e3, 13e3));
}
function visitors() {
  var n = $(".online .pin"),
    i = parseInt($(n).html()),
    t = i - 20,
    e = i + 20;
  t < 100 && (t = i),
    e > 200 && (e = i),
    $(".online .pin").html(rand(t, e)),
    setTimeout("visitors()", rand(3e3, 13e3));
}
function videoReview() {
  $(".video-review").click(function () {
    $(this).find(".poster").remove(), $(this).find("video").play();
  });
}
!(function (n) {
  n(document).ready(function () {
    n("input.js-phone").keyup(function () {
      var i = n(this).val();
      (regVal = /[^\d\+\(\)\-]/g),
        (newval = i.replace(regVal, "")),
        n(this).val(newval);
    }),
      n(".js-phone").intlTelInput({
        geoIpLookup: function (i) {
          n.get("//ipinfo.io", function () {}, "jsonp").always(function (n) {
            var t = n && n.country ? n.country : "";
            i(t);
          });
        },
        initialCountry: "auto",
        nationalMode: !1,
        utilsScript: "./bundles/utils.js",
        customPlaceholder: function (n, i) {
          return n;
        },
      });
  });
})(jQuery),
  (yesyoucan = 1),
  $(function () {
    copies(), visitors(), videoReview();
  });
