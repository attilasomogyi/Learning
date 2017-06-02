# Example HTML5 page
## [Favicon](https://en.wikipedia.org/wiki/Favicon)
| File Type |  Image Size |
| ---- | ---- |
| PNG | 16x16 and 32x32 |
### How do you create favicon.ico with [ImageMagick](http://imagemagick.org/)?
```sh
convert original-image.png -resize 16x16 resized-image-16x16.png
convert original-image.png -resize 32x32 resized-image-32x32.png
convert resized-image-16x16.png resized-image-32x32.png favicon.ico 
```
