# Biit Icons

This project helps to integrate BiiT icons into your projects.

## Add or remove icons

You can use ./icons directory to add or remove SVG files.
As well, you can group them on different folders.

Any SVG file under icons directory it will be automatically added.

``` NOTE: Icon will be automatically centered. Check if svg canvas is fit to the icon```


## Test your icons

To check how icons are going to be shown. Run the next command:

`npm run dev`

All icons will be processed and a web server will start on the next address: http://localhost:5173

You will se a landing page containing all the icons processed. A search box is available on the page to find icons if needed.

## Build

Use `npm run build` to compile the project. ./dist directory will be created.

## Publishing

To publish the dist folder run `npm publish ./dist`

A script facility has been added to make publishing easy. Whether running `npm run publish`. It automatically will compile the project and publish dist folder.

## Dependencies:

`vito:` It's a web server to show the landing page. Configuration is located on ./vite.config.js

`svg-to-ts:` Process SVG files and creates TypeScript files to be used on Angular projects. Configuration file is located on: ./.svg-to-tsrc

## Further documentation
[SVG-TO-TS project](https://github.com/kreuzerk/svg-to-ts)

[How to build your own tree shakable SVG icons library in less than 30 minutes!](https://kevinkreuzer.medium.com/how-to-build-your-own-tree-shakable-svg-icons-library-in-less-than-30-minutes-9f7a4a324d29)
