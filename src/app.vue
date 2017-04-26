<style lang="css">
	body {
		margin: 0;
		padding: 0;
	}
	ul,li {
		list-style: none;
	}
	ul {
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	ul li {
		float: left;
		width: 33.3%;
		text-align: center;
	}
	ul li>a {
		display: block;
	}
</style>

<template>
	<div class="root">
		<ul>
			<li><router-link to="/child1">child1</router-link></li>
			<li><router-link to="/child2">child2</router-link></li>
			<li><router-link to="/child3">child3</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import Home from './page/home/home.vue'
export default {}
</script>
