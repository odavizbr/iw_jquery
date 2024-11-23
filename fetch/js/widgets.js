$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

$(function () {
    $("#animate-btn").click(function () {
        $("#color-box").animate(
            { backgroundColor: "#ff4081", color: "#ffffff" },
            1000
        ).animate(
            { backgroundColor: "#333333", color: "#ffffff" },
            1000
        );
    });
});

$(function () {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
    });
});
