import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,webp}`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,webp,svg,ico}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
};
