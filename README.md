jQuery Bootstrap Dropdown On Hover
==================

A very basic Meteor package of [Ben Miller](https://github.com/millerbennett)'s [jquery-bootstrap-dropdown-on-hover](https://github.com/millerbennett/jquery-bootstrap-dropdown-on-hover).

Allows Bootstrap 3's [Dropdown component](http://getbootstrap.com/javascript/#dropdowns) to be activated on mouse hover. Combine with Daniel Eden's Animate.css [package](https://atmospherejs.com/natestrauser/animate-css) for great effects.

Official demo [here](http://www.jqueryscript.net/demo/jQuery-Plugin-To-Add-CSS3-Animations-To-Bootstrap-Dropdowns/).

Add to your project
============

```bash
meteor add cneuro:jquery-bootstrap-dropdown-on-hover
```

Example Usage
============

Create a dropdown navigation using Bootstrap 3 dropdown component and call the jQuery binding (options not required) once the Blaze template has rendered.

```html
<template name="demo">
  <div id="demo" class="dropdown">
    <a id="dLabel" data-target="#" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
      Dropdown trigger
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
    <li><a href="#">First</a></li>
    <li><a href="#">Second</a></li>
    <li><a href="#">Third</a></li>
    </ul>
  </div>
</template>
```

```javascript
Template.demo.rendered = function () {
  this.$("#demo").bootstrapDropdownOnHover({
    // Number of milliseconds to wait before closing the menu on mouseleave
    mouseOutDelay: 500,
    // Pixel width where the menus should no-longer be activated by hover
    responsiveThreshold: 992,
    // Whether to remove the menu backdrop upon hover (mobile only)
    hideBackdrop: true
  });
};
```

Packaged and published for Meteor by Chris N.
