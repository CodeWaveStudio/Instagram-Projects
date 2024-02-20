<?php
// Get the video ID from the query string
$videoId = $_GET['videoId'];

// Fetch the image from the YouTube URL
$thumbnailUrl = "https://img.youtube.com/vi/$videoId/mqdefault.jpg";
$image = file_get_contents($thumbnailUrl);

// Output the image
header('Content-Type: image/jpeg');
echo $image;
?>
