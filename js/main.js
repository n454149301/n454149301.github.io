import './translate.js'
import './tools.js'
import './libs.js'
import './global.js'

import {router as index_router} from './main/index.js'
window.router = new VueRouter ({
	mode: "hash",
	routes: [
		{
			path: '/',
			components: {
				"index": () => import ('./main/index.js'),
			},
			children: index_router,
		},
		{
			path: '*',
			components: {
				"index": () => import ('./main/404.js'),
			},
		},
	],
});

window.main = new Vue ({
	el: '#main-body',
	router: window.router,
	template: `
<div>
	<router-view name="index"></router-view>
	<footer class="hidden-prince">
		<div class="copyright"><p></p></div>
	</footer>
</div>
`
});
