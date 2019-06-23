export const router = [
	{
		path: 'homepage',
		components: {
			"main_container": () => import ('./index/homepage.js'),
		},
	},
	{
		path: 'cartoon',
		components: {
			"main_container": () => import ('./index/cartoon.js'),
		},
	},
];

export default {
	data: function () {
		return {
			title: window.global.title,
			nav_list: [
				{
					// 主页
					"url": "/homepage",
					"nav_type": "homepage",
				},
				{
					// 漫画
					"url": "/cartoon",
					"nav_type": "cartoon",
				},
				{
					// 动漫
					"url": "/anime",
					"nav_type": "anime",
				},
				{
					// 音乐
					"url": "/music",
					"nav_type": "music",
				},
				{
					// 文章
					"url": "/article",
					"nav_type": "article",
				},
			],
			nav_type_translate: window.translate.default.nav_type,
		}
	},
	created: function () {
		this.$router.replace ('/homepage');
	},
	template: `
<div class="wrap hidden-prince">
	<nav class="page-navigation">
		<div class="nav-container">
			<div class="page-header-logo">
				<h1 class="prince-log">
					<router-link class="home-link" to="/">{{title}}</router-link>
				</h1>
			</div>
			<button type="button" data-toggle="collapse" data-target=".main-nav-items" class="navbar-toggle">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<ul class="collapse navbar-collapse main-nav-items">
				<template v-for="nav_one in nav_list">
					<li class="menu-item">
						<router-link :to="nav_one.url">{{nav_type_translate[nav_one.nav_type]}}</router-link>
					</li>
				</template>
			</ul>
		</div>
	</nav>
	<router-view name="main_container"></router-view>
</div>
`
}
