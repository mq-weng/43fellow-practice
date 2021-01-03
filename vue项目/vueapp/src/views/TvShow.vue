<template>
	<div class="contain">
		<div v-for="item in tvList"  :key="item.id">
			<ul>
				<li class="left"><img :src="'https://images.weserv.nl/?url='+item.cover.url" alt=""></li>
				<li class='right'>
				<h3>{{item.title}}</h3>
				{{item.card_subtitle}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
    // let flag=true;
	let urlBase = 'https://bird.ioliu.cn/v2?url=';
	let url;
	export default {
		name: "TvShow",
		created() {
			this.getData()
		},
		mounted() {
			this.lisenScroll();
		},
		data() {
			return {
				tvList: [],
				num: 0,
				isFinish:true,
			}
		},
		methods: {
				getData() {
					url =
						'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start='+this.num+'&count=10';// flag=false;
					if(this.isFinish==true){//前一个请求完事
						this.isFinish=false;
						this.axios.get(urlBase + url).then((response) => {
							this.isFinish=true;
							console.log(response)
							this.tvList=this.tvList.concat(response.data.subject_collection_items);//拼接数组concat
						}).catch((error) => {
							console.log(error)
						})
					}
				},
			lisenScroll(){
				let htmlDom=document.documentElement;
				let clientHeight=htmlDom.clientHeight;
				let height;
				let scrollHeight;
				let vm =this;
				console.log(clientHeight);//窗口大小
				window.onscroll=function(){//使用箭头函数就可以直接使用this
					height=htmlDom.offsetHeight;//html总高度
					scrollHeight=htmlDom.scrollTop;//滚出高度
					console.log(height);
					console.log(scrollHeight);
					if(scrollHeight+667>=height-20){
						console.log('到达底部了');
						vm.num+=10;
						if(vm.num<50){
							vm.getData();
						}
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.contain{
		margin-bottom: 50px;
		ul{
			display: flex;
			flex-direction: 1;
			border-bottom: 1px #aaaa00 solid;
		}
		img{
			height: 100px;
		}
	}
		
</style>