import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/Angular.png","assets/Bootstrap.png","assets/Css3.png","assets/Docker.png","assets/Git.png","assets/Github.png","assets/html5.png","assets/javascript.png","assets/Jquery.png","assets/Less.png","assets/Logo.png","assets/Mongodb.png","assets/Mysql.png","assets/Node.js.png","assets/php.png","assets/Postman.png","assets/python.png","assets/React.js.png","assets/Sass.png","assets/Svelte.png","assets/tailwindcss.png","assets/TypeScript.png","assets/Vue.png","Oliveira.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.138bdf5a.js","imports":["_app/immutable/entry/start.138bdf5a.js","_app/immutable/chunks/index.f5e86a83.js","_app/immutable/chunks/singletons.3aaed9a3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a5c1738a.js","imports":["_app/immutable/entry/app.a5c1738a.js","_app/immutable/chunks/index.f5e86a83.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
