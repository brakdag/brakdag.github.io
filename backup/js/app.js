var vue = null;

$(function(){

	vue = new Vue({
		el: '#app',
		data:{
			infos:{}
		}
	});

	$.get("data.json", function(data){
		vue.$set("infos", data);
	});

	
});
