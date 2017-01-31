##Building SVG Library Instructions:

1. Add .svg files to the SVG folder!
2. In the terminal, from the project directory, run: `grunt svgstore`
3. New .svg files will be compiled into includes/defs.svg
4. Compiler will automatically create #id for svg based on .svg file name. So, if your new .svg file is called "film.svg", the compiler will wrap the svg path tags in a symbol with an #id of "film"
5. Use this new svg in your HTML! `<svg class="film"><use xlink:href="includes/defs.svg#film"></use></svg>`. This gets the svg with the #id "film" from the compiled file "includes/defs.svg" and prints it in the browser. Neat!

###ADDITIONAL NOTES:

Want to add hoverstate to specific path? You can't! You can, however, have more than one `<use>` tag inside and `<svg>` tag. What does this mean? TURN YOUR PATHS INTO THEIR OWN SYMBOLS!

`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" enable-background="new 0 0 100 100" xml:space="preserve" style="display: none;">
  <defs>


<symbol id="clipboard-full" viewBox="0 0 30 30">
<path d="M14.5 2h-4.5c0-1.105-0.895-2-2-2s-2 0.895-2 2h-4.5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5zM8 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM14 15h-12v-12h2v1.5c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v12z"></path>
<path d="M7 13.414l-3.207-3.707 0.914-0.914 2.293 1.793 4.293-3.793 0.914 0.914z"></path>
  </symbol>
  </defs>
</svg>`

becomes:    

  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" enable-background="new 0 0 100 100" xml:space="preserve" style="display: none;">
    <defs>
  <symbol id="clipboard-frame" viewBox="0 0 30 30">
<path d="M14.5 2h-4.5c0-1.105-0.895-2-2-2s-2 0.895-2 2h-4.5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5zM8 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM14 15h-12v-12h2v1.5c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v12z"></path>
  </symbol>  
  <symbol id="clipboard-check" viewBox="0 0 30 30">
<path d="M7 13.414l-3.207-3.707 0.914-0.914 2.293 1.793 4.293-3.793 0.914 0.914z"></path>
  </symbol>
  </defs>
</svg>`


And in the HTML:

`<svg class="clipboard-full">
  <use xlink:href="#clipboard-full"></use>
</svg>`

becomes:

`<svg class="clipboard-parts">
    <use class="frame" xlink:href="#clipboard-frame">
  </use>
  <use class="check" xlink:href="#clipboard-check"></use>
</svg>`
