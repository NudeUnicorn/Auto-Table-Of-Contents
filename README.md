# Auto-Table-Of-Contents
Automatically generates a table of contents for your site

## How to use
look at [example](https://github.com/NudeUnicorn/Auto-Table-Of-Contents/tree/main/Example)

- just link `autoToc.js` and `autocstyleExmpl.css` files

```html
<link rel="stylesheet" type="text/css" href="autocstyleExmpl.css">

<script src="autoToc.js"></script>
```

- add html

```html
<div class="column tableOfContents-list" id="tableOfContents-list">
  <!-- all inside "tableOfContents-list" will be deleted and filled with you h-tags anchors-->
    <a href="" class="tableOfContents-btn tocH1">H1 заголовок, он без отступа</a>
    <a href="" class="tableOfContents-btn tocH2">H2 заголовок, он с отступом</a>
    <a href="" class="tableOfContents-btn tocH3">H3 заголовок, он с отступом</a>
    <a href="" class="tableOfContents-btn tocH4">H4 заголовок, он с отступом</a>
    <a href="" class="tableOfContents-btn tocH5">H5 заголовок, он с отступом</a>
    <a href="" class="tableOfContents-btn tocH6">H6 заголовок, он с отступом</a>
</div>

<script>

    autoTableOfContents();
    
</script>
```

# And `enjoy`!🎉
