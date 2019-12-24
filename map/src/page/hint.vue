<template>
	<div class="hint_main">
		<!--顶部导航-->
		<div class="top_title">
			<div class="top_word">订单</div>
		</div>
		<!--正文-->
		<div class="hint_con">
			<div class="hint">{{hint}}</div>
			<p>如有疑问请拨打<a href="tel:95589">95589</a></p>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
export default{
	name: 'app',
	data(){
		return{
			hint: '',
		}
	},
	created(){
		this.hint = this.$route.query.hint;
	},
	mounted(){
	},
	methods:{
	}
}
</script>
<meta name="format-detection" content="telephone=yes"/>
<style lang="scss">
.hint_main{
	.top_title{
		width: 100%; height: 1rem; background: #006cb7; position: fixed; left: 0; top: 0; z-index: 99;
		.top_back{ width: 0.66rem; height: 0.66rem; position: absolute; left: 0.24rem; top: 0.17rem; }
		.top_word{ line-height: 1rem; text-align: center; font-size: 0.32rem; color: #fff; }
	}
	.hint_con{
		padding: 1.6rem 0.24rem 0;
		.hint{ padding-top: 2rem; line-height: 0.6rem; text-align: center; font-size: 0.28rem; color: #000; }
		p{ width: 100%; height: 0.6rem; line-height: 0.6rem; text-align: center; font-size: 0.28rem; color: #000; position: fixed; left: 0; top: 50%; z-index: 10; }
	}
}
</style>