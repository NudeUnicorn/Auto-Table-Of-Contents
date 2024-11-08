//автооглавление - берет все тэги(h1-h6) со всех элементов с классом main, рядом с h создает якорь, а в оглавлении создает ссылку на него
//auto-title - takes all tags(h1-h6) from all elements with the main class, creates an anchor next to h, and creates a link to it in the table of contents

function autoTableOfContents(classes = ["main"], anchorsText = "@", tableOfContentsID = "tableOfContents-list", tocRealization = null, tocRealizationParams = [], anchorRegEx = /^[А-яёЁ]*/g) {

	if (classes.length == 0) return;
	
	let ElemsByClasses = [];
	let tableOfContentsList = document.getElementById(tableOfContentsID);

	
	for(let clas of classes){
		ElemsByClasses = [...ElemsByClasses,...document.getElementsByClassName(clas)];
	}
	/* console.log(`1) ElemsByClasses - `, ElemsByClasses); */
	
	if (ElemsByClasses.length == 0) return;
	
	let Hs = [];
	
	for (let elem of ElemsByClasses) {  //берем все h со всех елементов с классом main
		Hs = [...elem.getElementsByTagName("h1")];	//we take all h from all elements with the main class
		Hs = [...Hs, ...elem.getElementsByTagName("h2")];
		Hs = [...Hs, ...elem.getElementsByTagName("h3")];
		Hs = [...Hs, ...elem.getElementsByTagName("h4")];
		Hs = [...Hs, ...elem.getElementsByTagName("h5")];
		Hs = [...Hs, ...elem.getElementsByTagName("h6")];
	}
	if (Hs.length == 0) return;
	
	/* console.log(`1)Hs - `, Hs); */
	
	
	if (tableOfContentsList.childElementCount > 0) { //если в контейнере-елементе не пусто, удаляем все и будем свое вставлять
		while (tableOfContentsList.firstChild) {	//if the container element is not empty, delete everything and we will insert our own
			tableOfContentsList.removeChild(tableOfContentsList.firstChild);
		}
	}
	
	let defaultRealization = tocRealization || links;
	const wordRegEx = anchorRegEx; //нужно чтобы взять самое первое слово от h/it is necessary to take the very first word from h
	
	for (let elemH of Hs) { //создаем элементы-ссылки, определяем их принадлежность и передаем функции
		let aTOC = document.createElement("a");	//we create link elements, determine their affiliation and pass functions
		let aAnchor = document.createElement("a");
		aAnchor.classList.add("tableOfContents-anchor");
		
		let defaultRealizationParams = [elemH, aTOC, aAnchor, ...tocRealizationParams];

		switch (elemH.tagName) {
			case "H1":
				aTOC.classList.add("tableOfContents-btn", "tocH1");
				defaultRealization(...defaultRealizationParams);
				/* links(elemH, aTOC, aAnchor); */
				break;
			case "H2":
				aTOC.classList.add("tableOfContents-btn", "tocH2");
				defaultRealization(...defaultRealizationParams);
				break;
			case "H3":
				aTOC.classList.add("tableOfContents-btn", "tocH3");
				defaultRealization(...defaultRealizationParams);
				break;
			case "H4":
				aTOC.classList.add("tableOfContents-btn", "tocH4");
				defaultRealization(...defaultRealizationParams);
				break;
			case "H5":
				aTOC.classList.add("tableOfContents-btn", "tocH5");
				defaultRealization(...defaultRealizationParams);
				break;
			case "H6":
				aTOC.classList.add("tableOfContents-btn", "tocH6");
				defaultRealization(...defaultRealizationParams);
				break;
			default:
				break;
		}
	}

	function links(elemH, aTOC, aAnchor) {  //а здесь все и происходит
		aTOC.innerText = elemH.innerText;	//and here everything happens
		aTOC.title = aTOC.innerText;

		aAnchor.title = elemH.innerText;
		aAnchor.id = translite(aTOC.innerText.match(wordRegEx)[0] + elemH.tagName + `${rand(1, Hs.length * 10)}`);
		aAnchor.innerText = anchorsText;

		aTOC.href = "#" + aAnchor.id;
		elemH.append(aAnchor);
		/* console.log(`3) ${elemH.tagName} - `, elemH.innerText); */

		tableOfContentsList.append(aTOC);
	}

	
	//функция транслитерации / transliteration function
	function translite(str = "") {
		const arr = {
			'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'g',
			'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
			'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
			'ы': 'i', 'э': 'e', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
			'Е': 'E', 'Ж': 'G', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L',
			'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
			'У': 'U', 'Ф': 'F', 'Ы': 'I', 'Э': 'E', 'ё': 'yo', 'х': 'h', 'ц': 'ts',
			'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ь': '', 'ю': 'yu', 'я': 'ya',
			'Ё': 'YO', 'Х': 'H', 'Ц': 'TS', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ь': '',
			'Ю': 'YU', 'Я': 'YA'
		};
		const replacer = function (a) { return arr[a] || a };
		return str.replace(/[А-яёЁ]/g, replacer)
	}
	
	//функция для псевдорандома числа в диапазоне
	//a function for the pseudorandom of a number in the range
	function rand(min = 0, max = 5) {	// От минимума до максимума, не включая максимум
		return Math.floor(Math.random() * (max - min)) + min; // From minimum to maximum, not including maximum
	}
	
}