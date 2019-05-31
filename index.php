<!-- This file allows you to host this page as a static file on Heroku -->
<?php
  header( 'Location: /index.html' );
  header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
?>
