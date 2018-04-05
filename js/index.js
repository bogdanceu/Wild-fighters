import { navigation } from './navigation-ui.js'

fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
	.then(res => res.json())
	.then(json => {
		const poolHeroJ1 = []
		const poolHeroJ2 = []
		let i = 0

		while (i < 12) {
			poolHeroJ1[i] = json[(Math.floor(Math.random() * 563))]
			poolHeroJ2[i] = json[(Math.floor(Math.random() * 563))]
			i++
		}

		document.getElementById('perso_grid').innerHTML = ''
		poolHeroJ1.map(elem => document.getElementById('perso_grid').innerHTML +=
			`<div class="img_perso">
		<img id="${name}" src="${elem.images.sm}">
		</div>`
		)

		document.getElementById('perso_grid2').innerHTML = ''
		poolHeroJ2.map(elem => document.getElementById('perso_grid2').innerHTML +=
			`<div class="img_perso">
		<img id="${name}" src="${elem.images.sm}">
		</div>`
		)
		navigation()
	})

	let player1id = document.querySelector('#perso_grid active').id
	let player2id = document.querySelector('#perso_grid2 active').id
	console.log(player1id, player2id)
