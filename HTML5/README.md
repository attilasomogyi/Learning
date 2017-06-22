# [HTML 5.2](https://www.w3.org/TR/html52/)
# [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)
## Validate HTML5 file with [w3 validator](https://validator.w3.org/) or [tidy](https://github.com/htacg/tidy-html5)
`tidy -errors -quiet filename.html`
## [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
## [Minify Resources (HTML, CSS, and JavaScript)](https://developers.google.com/speed/docs/insights/MinifyResources)
### 1. Install [npm](../npm/README.md)
### 2. Install [HTMLMinifier](https://github.com/kangax/html-minifier)
`npm install html-minifier --global`
#### Minify single html or svg file
```sh
# html
html-minifier --config-file html-minifier-conf.json original.html --output compressed.html
# svg
html-minifier --config-file html-minifier-conf.json original.svg --output compressed.svg
```
#### Minify multiple html or svg files
```
mkdir {original,compressed}
cp *.{html,svg} original/
html-minifier --config-file html-minifier-conf.json --input-dir ./original --output-dir ./compressed
```
## Make [favicon.ico](https://en.wikipedia.org/wiki/Favicon) with [ImageMagick](http://imagemagick.org/)
```sh
convert favicon.png -define icon:auto-resize=32,16 favicon.ico
```
