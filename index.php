<?php 
$loadnav = (isset($_GET['loadnav']) && $_GET['loadnav'] != '') ? $_GET['loadnav']: '';
?>
<html>
    <head>
        <title>Portfolio | Aguilar,Carl | BSIT_3A</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
        <body>
            <div class="header">
                <h1>PORTFOLIO</h1>by: Carl Aguilar | BSIT_3A
                <div class="nav">
                    <div class="navbar">
                        <a href="index.php">Home</a>
                        <div class="dropdown">
                          <button class="dropbtn">CSS
                            <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content">
                            <a href="index.php?loadnav=Mod2">Module 2</a>
                            <a href="index.php?loadnav=Mod3">Module 3</a>
                            <a href="index.php?loadnav=Mod4">Module 4</a>
                          </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">SVG
                              <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                              <a href="index.php?loadnav=LT5.1">Learning Task 5.1</a>
                              <a href="index.php?loadnav=LT6.1">Learning Task 6.1</a>
                              <a href="index.php?loadnav=LT6.2">Learning Task 6.2</a>
                            </div>
                          </div>
                        <div class="dropdown">
                            <button class="dropbtn">CLE
                              <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                              <a href="CLE/Prelim/index.php">Prelim</a>
                              <a href="CLE/Midterm/index.php">Midterm</a>
                            </div>
                          </div>
                          <a href="index.php">About Me</a>
                    </div>
                </div>
            </div>
            <div class="body">
                    <?php 
                    switch($loadnav){
                      case 'LT6.1':
                        require_once 'SVG/LT6.1/LT6.1.php';
                        break;
                      case 'LT6.2':
                        require_once 'SVG/LT6.2/LT6.2.php';
                        break;
                      case 'Mod3':
                        require_once 'CSS/Module3/Module3.php';
                        break;
                      case 'Mod2':
                        require_once 'CSS/Module2/Module2.php';
                        break;
                      case 'Mod4':
                        require_once 'CSS/Module4/Module4.php';
                        break;
                      case 'LT5.1':
                        require_once 'SVG/LT5.1/LT5.1.php';
                        break;
                      case 'prelim':
                        require_once 'CLE/Prelim/index.php';
                        break;
                      case 'midterm':
                        require_once 'CLE/Midterm/index.php';
                        break;
                      case 'home':
                          require_once 'index.php';
                          break;
                    default:
                        require_once 'index.php';
                    }
                    ?>
            </div>
        </body>
</html>
