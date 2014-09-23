<?
// get the file file from a URL parameter (for example)
$file = $_GET['fp'];
$file = urldecode($file);

header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . 'myimage.png' . '"');
header('Content-Transfer-Encoding: binary');
header("Last-Modified: " . date( "D, j M Y H:i:s", strtotime("- 1 month")));
header("Expires: Thu, 20 Sep 2012 05:00:00 GMT");
header("Cache-Control: max-age=2692000, public");
header("Pragma: cache");
ob_clean();
flush();
readfile($file);
exit;