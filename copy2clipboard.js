function copyToClipboard(div_id) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(div_id));
    range.select().createTextRange();
    document.execCommand("Copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(div_id));
    window.getSelection().addRange(range);
    document.execCommand("Copy");
    alert("Copied to Clipboard")
  }
}