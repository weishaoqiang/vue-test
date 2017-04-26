<style lang="css">
	.tmpl .nav {
		overflow: hidden;
	}
	.tmpl .nav li {
		height: 40px;
		line-height: 40px;
		float: left;
		width: 33.3%;
	}
	.tmpl .nav li a {
		display: block;
		width: 100%;
	}
</style>

<template>
	<div class="home">
		<ul>
			<router-link to="/child1">child1</router-link>
			<router-link to="/child2">child2</router-link>
			<router-link to="/child3">child3</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name: 'wei',
			}
		}
	}
</script>
