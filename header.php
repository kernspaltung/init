<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plantilla X</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <main id="main" class="row">


    <header id="header h-10 fixed top left">

      <div id="header-logo" class="columns small-3 imgLiquid imgLiquidNoFill" >
        <img src="img/placeholder.png" alt="" />
      </div>

      <!-- menu escritorio -->
      <nav class="columns small-9 fixed top left">

        <?php
        for ($i=0; $i < 5; $i++):
          ?>

          <li class="columns shareW">

            <a href="" class="row p-0 h-100 text-center">

              <div class="columns h-a p-0">

                <?php echo "menu link " . $i; ?>

              </div>

            </a>

          </li>

        <?php endfor; ?>
      </nav>

    </header>
