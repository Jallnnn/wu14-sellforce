<!DOCTYPE html>
<html>
<head>
  <!-- base href must correspond to the base path of your wordpress site -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <base href="/wu14-sellforce/">
  <title>ngTheme</title>
  <?php wp_head(); ?>
</head>
<body ng-app="ngTheme">
  <header ng-include="'<?php echo(THEME_HTTP_ROOT)?>partials/header.html'" ng-controller="headerController">
  </header>
 
  <main class="container" ng-view>

  </main>
 
  <footer ng-include="'<?php echo(THEME_HTTP_ROOT)?>partials/footer.html'" ng-controller="footerController">
  </footer>
 
</body>
</html>