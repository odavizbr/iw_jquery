let envia = () => {
    let $form = $("#frm");
    $form.attr("action", "proc.php");
    $form.attr("method", "get");
    $form.submit();
};
