const routers = [
	{ path:'/',redirect:'/index'},
	{ path:'/index',component (resolve) {
	            require(['./views/index.vue'], resolve);
	    }
	}
];
export default routers;