<template>
	<div>
		<div class="y-tabs__nav">
			<div class="y-tabs__item-active" :style="computedStyle"></div>
			<div
				class="y-tabs__item"
				:class="initval===item.name ? 'is-active': ''"
				v-for="(item, index) in datalist"
				:key="index"
				@click="tabClick(item)"
			>{{item.name}}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			initval: this.checked,
			computedStyle: {},
			activeDom: ""
		};
	},
	model: {
		prop: "checked",
		event: "change"
	},
	props: {
		datalist: {
			type: Array,
			default: []
		},
		checked: {
			type: String,
			default: ""
		}
	},

	components: {},
	created() {},
	mounted() {
		this.ativeDom = document.querySelector(".is-active");
		this.computedClickStyle();
	},
	methods: {
		tabClick(item) {
			this.initval = item.name;
			this.$nextTick(() => {
				this.computedClickStyle();
			});
		},
		computedClickStyle() {
			let ativeDom = document.querySelector(".is-active");
			this.computedStyle = {
				transform: `translateX(${ativeDom.offsetLeft}px)`,
				width: `${ativeDom.offsetWidth}px`
			};
		}
	}
};
</script>
<style lang='scss' scoped>
	.y-tabs__nav {
		position: relative;
	}
	.y-tabs__item {
		display: inline-block;
		height: 100%;
		position: relative;
		cursor: pointer;
		height: 40px;
		user-select: none;
		// padding-right: 40px;
		margin-right: 40px;
		box-sizing: border-box;
		&.is-active {
			color: #409eff;
		}
	}
	.y-tabs__item-active {
		transform: translateX(135px);
		position: absolute;
		bottom: 2px;
		height: 2px;
		background: #409eff;
		transition: all 0.3s;
	}
</style>