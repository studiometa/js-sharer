# Sharer

Un script pour gérer des boutons de partage sur les réseaux sociaux sans polluer une page avec des scripts tiers.

Utilisé pour les boutons de partage des recettes sur le site des [Vins d’Alsace](http://www.vinsalsace.com/fr/).

## Utilisation

Markup :

```html
<!-- Facebook -->
<button type="button"
	class="js-share"
	data-type="facebook"
	data-url="http://www.studiometa.fr/">
	Share on Facebook
</button>

<!-- Twitter -->
<button type="button"
	class="js-share"
	data-type="twitter"
	data-msg="Share this on Twitter #yay"
	data-url="http://www.studiometa.fr/">
	Share on Twitter
</button>

<!-- Pinterest -->
<button type="button"
	class="js-share"
	data-type="pinterest"
	data-msg="Share nice stuff on Pinterest"
	data-img="http://placehold.it/500x333">
	Share on Pinterest
</button>
```

Script :

```js
// Vanilla JS
var btns = document.querySelectorAll('.js-share');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', Sharer);
}

// jQuery
$('.js-share').on('click', Sharer);
```