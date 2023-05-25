const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","AboutBackground.jpg","Chiropractic.jpg","Chiropractic2.jpg","ChiropracticTechniques.jpg","DoctorOne.jpg","DoctorPatientPicture.jpg","DoctorPatientPicture2.jpg","DoctorPatientPicture3.jpg","DoctorPatientPicture4.jpg","DoctorPatientPicture5.jpg","DoctorPatientPicture6.jpg","DoctorThree.jpg","DoctorTwo.jpg","SpinalAdjustments.jpg","SportsInjury.jpg","TherapeuticExercise.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-894b5d90.js","imports":["_app/immutable/start-894b5d90.js","_app/immutable/chunks/index-6aaa5d23.js","_app/immutable/chunks/singletons-737e72be.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-74a213d6.js'),
			() => import('./chunks/1-aebb173d.js'),
			() => import('./chunks/2-abe8adc9.js'),
			() => import('./chunks/3-5f61a2ff.js'),
			() => import('./chunks/4-bbcc5ab2.js'),
			() => import('./chunks/5-0aea2a4c.js'),
			() => import('./chunks/6-d1929595.js'),
			() => import('./chunks/7-5ee5b350.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cases",
				pattern: /^\/cases\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/reservation",
				pattern: /^\/reservation\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tips",
				pattern: /^\/tips\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
