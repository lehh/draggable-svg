## Requirements
<h4>Requires jQuery 2.0 or greater</h4>

## How to use
1.Firstly you have to put an id/class to the SVG element you want to make draggable.
```xml
<image id="image" x="0" y="0">
```
<h5>Note that it will only work with elements whose supports x and y attributes. Here's the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x#Elements">List</a>.</h5>

2.Then you need to create a HTML object linked to your SVG and make it accessible by JavaScript.
<br>
(If you already know how to, just skip this step)

-Create an object inside your html body
```html
<object id="svgObject" data="YourSvgFileName.svg" type="image/svg+xml"></object>
```
-Make a jQuery on load function
```js
$("svgObject").on("load", function(){
  var svgObject = this.getSVGDocument();
})
```
If you have any doubts, please read <a href="https://benfrain.com/selecting-svg-inside-tags-with-javascript/">this</a> 
<br>
Credits to Ben Frain.

3.Finally, you just have to add a script reference to 'jquery.draggable-svg-versionNumber.js' and call the function like this:
```js
<script src="jquery.draggable-svg-versionNumber.js"></script>
<script type="text/javascript">
  $("svgObject").on("load", function(){
    var svgObject = this.getSVGDocument();
    
    dragMe(svgObject);
  })
  
  var dragMe = function(svg){
    $(svg).find("#image").draggableSvg();
  }   
</script>
```

## Options

|key|type|description|required|default|
|-|-|-|-|-|
|x|bool|If false, the element will <b>not</b> be dragged on x-axis|No|true|
|y|bool|If false, the element will <b>not</b> be dragged on y-axis|No|true|
|invertAxis|bool|If true, x-axis will be y-axis and vice versa|No|false|


## Known Issues

<b>- Malfunction if your svg unit is in milimeters. You have to set it to pixels.</b>
<br>
<b>- If x and y are not set on element, it will not work.</b>
