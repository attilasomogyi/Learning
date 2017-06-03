# Example HTML5 page
## [Favicon](https://en.wikipedia.org/wiki/Favicon)
| File Type |  Image Size |
| ---- | ---- |
| PNG | 16x16 and 32x32 |
### How do you create favicon.ico with [ImageMagick](http://imagemagick.org/)?
```sh
convert original-image.png -define icon:auto-resize=32,16 favicon.ico
```
