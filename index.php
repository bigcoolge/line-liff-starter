<?php
  // Disabled cache
  header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
?>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LIFF application</title>
  <link rel="stylesheet" href="style.css?v=7">

  <!-- vconsole for debugging the application -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.3.0/vconsole.min.js"></script>
  <script>
    var vConsole = new VConsole();
  </script> -->
</head>

<body>
  <form id="phoneForm">
    <label>Please insert your phone number below.</label>
    <input name="phone" type="number" placeholder="Phone number" required />
    <div>
      <button id="submitButton" type="submit" class="submit-button" disabled>
        Loading...
      </button>
    </div>
  </form>

  <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
  <script src="liff-starter.js?v=7"></script>
</body>
