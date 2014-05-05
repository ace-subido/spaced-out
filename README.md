SpacedOut
====================

[https://ace-subido.github.com/spaced-out](https://ace-subido.github.com/spaced-out)

A small CSS/JS library to recreate the slide menu found in the [atmospherejs](https://atmospherejs.com/) site. Doesn't depend on jQuery. The CSS file doesn't include normalize or reset. Parts of the js code are inspired from Hakim's Avgrund

Download
====================

[spaced-out.css](https://raw.githubusercontent.com/ace-subido/spaced-out/gh-pages/stylesheets/spaced-out.css)
[spaced-out.js](https://raw.githubusercontent.com/ace-subido/spaced-out/gh-pages/javascripts/spaced-out.js)


Basic Template and Usage
====================

It's pretty straightforward :)

    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="css/spaced-out.css" type="text/css" />
      <script src="js/spaced-out.js"></script>
    </head>
    <body>
      <div class="so-page-wrapper">
        <aside class="so-page-menu">
          <div class="so-menu-content">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </aside>
        <div class="so-content-overlay">
        </div>
        <div class="so-content">
          <a href="#" class="so-menu-toggle">
            Open Menu
          </a>
        </div>
      </div>

      <script type="text/javascript">
        SpacedOut.install();
      </script>
    </body>
    </html>

This installs event handlers to the button with the `.so-menu-toggle` class. The button is binded with event handlers that open and close the menu.

    SpacedOut.install()

This uninstalls those event handlers

    SpacedOut.uninstall()

License
====================
Apache License v2
