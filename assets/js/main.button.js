
var mainBtn = {
	props: ['letter'],
	template: '<div class="btn btn-circle"><div class="in-text">{{letter}}</div></div>',
	methods: {
		expand: function(){

		}
	}
}

new Vue({
	el: '#sedikit-btn',
	components: {
		'main-btn' : mainBtn
	}
})
