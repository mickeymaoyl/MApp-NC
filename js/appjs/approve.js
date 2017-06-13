var  approve =new Vue({
	 el:"#approve",
	 data:{
	 	title:'合同管理',
	 	state:'N',
	 	appinfo:{}
	 },
	 ready:function(){
//	 	console.log("ffffffff");
	 	initPage();
	 	
	 },
	 methods:{
	 	  openFj:function(src){
	 	  	  console.log(this.appinfo.billid);
	 	  	  openFJ(this.appinfo.billid,src);
	 	  }
	 }
	
});


function initPage(){
	  mui.init();
	  if(mui.os.plus){
	  mui.plusReady(function(){
	  	    //如果有参数 
	  	    var curWB =plus.webview.currentWebview();
	  	    
	  	    var  billtype =curWB.billtype;
	  	    var  billid=curWB.billid;
	  	   console.log(billid+"@@@@"+billtype);
	  	    queryApproveInfo(billtype,billid);
	  	    mui(".mui-scroll-wrapper").scroll({
 				deceleration:0.0006,
				bounce: false,//滚动条是否有弹力默认是true
				indicators: true, //是否显示滚动条,默认是true
			});
	  });
	  }else{
//	  	queryApproveInfo();
	  	 mui.ready(function(){
	  	 	mui(".mui-scroll-wrapper").scroll({
 				deceleration:0.0006,
				bounce: false,//滚动条是否有弹力默认是true
				indicators: true, //是否显示滚动条,默认是true
			});
			
			mui(".mui-fj").on('tap','.mui-fj',function(){
	  			console.log("tap")
			});
			queryApproveInfo();
	  	 });
	  }
}


function queryApproveInfo(billtype,billid){
	var param  =new Object();
	param.billtype=billtype||'ht';
	param.billid=billid;
	sendUrlCmd(this,"wxApprove","queryappinfo",param,setApproveInfot);
}


function setApproveInfot(data){
	approve.appinfo=data;
}





