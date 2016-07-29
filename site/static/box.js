var things = ["lowering the voting age", "improving political literacy", "reducing voter discrimination", "increasing transparency", "eliminating gerrymandering", "simplifying voting", "{{ config.APP_NAME }}"];
var index = -1;
$(function() {
    $el = $("#what-we-are");
    setInterval(function() {
        if (++index < things.length) {
            $el.fadeOut(500, function() {
                $el.html(things[index] + ".");
                $el.fadeIn(500);
            });
        } else {
            $el.html("{{ config.APP_NAME }}.");
            $el.show();
        }
    }, 4000);
});
