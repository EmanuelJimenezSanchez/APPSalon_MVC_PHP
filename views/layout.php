<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Salón</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/build/css/app.css">
</head>

<body>

  <div class="contenedor-app">
    <div class="imagen">

    </div>
    <div class="app">
      <?php echo $contenido; ?>
    </div>
  </div>


  <!-- 
  <footer class="footer p-5 mt-4 d-flex justify-content-center justify-content-md-start">
    <img class="" src="/src/img/image 5.png" alt="Logo del gobierno de México" loading="lazy">
  </footer> -->

  <!-- <script src=""></script> -->
  <?php
  echo $script ?? '';
  ?>

</body>

</html>