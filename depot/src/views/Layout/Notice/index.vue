<template>
	<div>
		<h1>公告</h1>
		<p>基于vue</p>
		<div>
			<p>从现在开始你就是demo选项了兄弟</p>
			<tabs :datalist="items" v-model="tabtype"></tabs>
		</div>
		<readme></readme>
	</div>
</template>
<script>
// import Notice from '@/components/Notice/index.vue'
import tabs from "@/components/Tabs/tabs.vue";
import readme from "./readme.md";
export default {
	components: {
		// Notice,
		readme,
		tabs
	},
	data() {
		return {
			items: [{ name: "xiaoy" }, { name: "erzi" }, { name: "mengyao" }],
			tabtype: "mengyao"
		};
	},
	mounted() {
	}
};
</script>
<style lang="scss" scoped>
</style>
