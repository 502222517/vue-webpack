/**
 * 路由配置
 */
const routers = [
	{path:'/',redirect:'/index'},
    {path:'/index', component (resolve) {
	    	/*import('./views/index.vue').then(module => {
			    return module.default;
			).catch(err => {
			    console.log("Chunk loading failed");
			});*/
            require(['./views/index.vue'], resolve);
        }
	}
];
export default routers;