##Building SVG Library Instructions:

1. Add .svg files to the SVG folder!
2. In the terminal, from the project directory, run: `grunt svgstore`
3. New .svg files will be compiled into includes/defs.svg
4. Compiler will automatically create #id for svg based on .svg file name. So, if your new .svg file is called "film.svg", the compiler will wrap the svg path tags in a symbol with an #id of "film"
5. Use this new svg in your HTML! `<svg class="film"><use xlink:href="includes/defs.svg#film"></use></svg>`. This gets the svg with the #id "film" from the compiled file "includes/defs.svg" and prints it in the browser. Neat!
