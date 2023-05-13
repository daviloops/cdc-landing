export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5403b27e.js","app":"_app/immutable/entry/app.8336c138.js","imports":["_app/immutable/entry/start.5403b27e.js","_app/immutable/chunks/index.fe361f2c.js","_app/immutable/chunks/singletons.4363556d.js","_app/immutable/entry/app.8336c138.js","_app/immutable/chunks/index.fe361f2c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
