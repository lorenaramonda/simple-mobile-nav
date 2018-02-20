# Simple Mobile Nav (plugin jQuery)
Make a simple nav with list item suitable for small devices

[Live Demo](https://lorenaramonda.github.io/simple-mobile-nav/)

Given the following markup:

```
<nav role="navigation">
  <span>Title</span>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a>
      <ul>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </li>
    <li><a href="#">Link</a>
      <ul>
        <li><a href="#">Link</a>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a>
              <ul>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</nav>
```

you can turn it into a mobile nav by inserting the script mobilenav.jquery.js after jQuery inclusion:

```
<script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="mobilenav.jquery.js"></script>
```

and after that init the mobile nav, possibly at the DOM ready:

```
<script>
  $(document).ready( function () {

      $('nav[role="navigation"]').mobilenav();

  });
</script>
```

The nav accepts two config parameters:

- **sticky**: false (default) | true
stick the nav position to top while scrolling
- **mainCategoryLinked**: true (default) | false
if `true` every submenu will open by only clicking the + icon, if `false` the link will work all over the link item. Bear in mind that this will disallow menu item to be link to his refering page

The script already adds the class "mobile-nav" to the element on which is initializ, in the example nav[role="navigation"], but it is possible that you see the unformatted menu for a while if run on the onready event of the DOM. To solve this you can simply add the class on the element directly into the markup.

```
<nav role="navigation" class="mobile-nav">
```
