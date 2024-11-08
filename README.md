# Auto-Table-Of-Contents
Automatically generates a table of contents for your site

## How to use
look at [example](https://github.com/NudeUnicorn/Auto-Table-Of-Contents/tree/main/Example)

- just link `autoToc.js` and `autocstyleExmpl.css` files

```html
<link rel="stylesheet" type="text/css" href="autocstyleExmpl.css">

<script src="autoToc.js"></script>
```

- add element-container `tableOfContents-list`

```html
<div class="tableOfContents-list" id="tableOfContents-list">
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

# Автооглавление
Автоматически создает оглавление для вашего сайта

## Как использовать
посмотрите на [пример](https://github.com/NudeUnicorn/Auto-Table-Of-Contents/tree/main/Example)

- привяжите файлы `autoToc.js` и `autocstyleExmpl.css`

```html
<link rel="stylesheet" type="text/css" href="autocstyleExmpl.css">

<script src="autoToc.js"></script>
```

- добавьте необходимый элемент-контейнер `tableOfContents-list`

```html
<div class="tableOfContents-list" id="tableOfContents-list">
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

# И `возрадуйтесь`!🎉


# Arguments of a function

```js
function autoTableOfContents(classes = ["main"], anchorsText = "@", tableOfContentsID = "tableOfContents-list", tocRealization = null, tocRealizationParams = [], anchorRegEx = /^[А-яёЁ]*/g) {...}
```
## You can:

classes = ["main"]  | choose, which classes to inspect for h-tags
anchorsText = "@"  | choose, symbol or text for anchors
tableOfContentsID = "tableOfContents-list"  | choose another id for element-conteiner, where toc links will be placed
tocRealization = null  | choose your own implementation to create links and anchors 
tocRealizationParams = []  | arguments for you realization 
anchorRegEx  | create another pattern of anchors names, links and ids 

## Default params using in function

```js
let defaultRealizationParams = [elemH, aTOC, aAnchor, ...tocRealizationParams];
```

**Where:**

`elemH` - h tag from the collection
`aTOC` - link, created for be appended to `tableOfContents-list`
`aAnchor` - link, created to be anchor with id
`tocRealizationParams` - its your params, they needed to inplement you function

# Аргументы функции

```js
function autoTableOfContents(classes = ["main"], anchorsText = "@", tableOfContentsID = "tableOfContents-list", tocRealization = null, tocRealizationParams = [], anchorRegEx = /^[А-яёЁ]*/g) {...}
```
## Вы можете:

classes = ["main"]  | выбрать классы для поиска h-тегов
anchorsText = "@"  | выбрать символ или текст для якорей
tableOfContentsID = "tableOfContents-list"  | выбрать другой id онтейнера, где будут размещены ссылки оглавления
tocRealization = null  | применить вашу собстенную реализацию создания ссылок и якорей 
tocRealizationParams = []  | аргументы для функции вашей реализации 
anchorRegEx  | создать другой паттерн для имен, ссылок и id 

## Параметры функции создания якорей

```js
let defaultRealizationParams = [elemH, aTOC, aAnchor, ...tocRealizationParams];
```

**Где:**

`elemH` - h тэг из всей коллекции
`aTOC` - ссылка, созданная для добавления в оглавление `tableOfContents-list`
`aAnchor` - ссылка, созданная как якорь с id
`tocRealizationParams` - а это ваши параметры для вашей функции

