# Generic Starter Files Gulp 3.9

Most of the projects I work on have a very similar structure. And this repo was mainly for me, so I didn't have to recreate everything from scratch for every project. Now it's turned into a repo for anyone needed a quick starting place for new projects. This is meant to be a good starting place and meant to be modifiable to fit your needs.

## Project Overview

This starter pack gets you with everything you need to get up and running quickly. It turns your `scss` into CSS, babels your JavaScript\*, moves your html and php files, relocates your images, starts up a browser and has browser refresh and style hot loading!

## Project Structure

All of your source files live in the `src` directory. You have three main folders in here, `images` | `scripts` | `styles`.

The basic folder structure is as follows :

```
root-folder/
    ├── build/
    ├── src/
    │   ├── images/
    │   ├── scripts/
    │   ├── styles/
    │   └── index.html
    │
    ├── gulp-config.js
    ├── gulp-env.js
    ├── gulpfile.js
    └── package.json
```

All of your work will be done with in the `src` folder, and everything will be compiled to the `build` folder.

## Gulp Tasks

You have three main tasks that you will use most often.

`gulp __start-local__`

`gulp __compile-assets__`

`gulp __lint-everything__`

### Start Local

Start local is your main development command. This triggers a series of tasks that takes care of everything. Let's break it down.

#### Clean Build

`gulp clean:build`

This tasks simply cleans the build folder.

#### Compile Styles

`gulp task:compile-styles`

Compile styles takes your Sass `.scss` and `.sass` files, converts to `.css`, adds all the vendor prefixes specified in the config, writes the source maps, places the output in the build folder, and injects the changes in the browser.

#### Compile Scripts

`gulp task:compile-scripts`

Compile scripts takes your `.js` files, allows you to write in ES6+ and compile down to least common environment based on the config settings, moves the files the build folder, and refreshes the browser.

This does basic conversion. It does not handle tree shaking, or module imports, or other advanced stuff. There will be another project coming that handles that portion of it.

#### Compile HTML

`gulp task:compile-html`

Currently, this is a simple file mover. It checks if any markup has change, if it has, move it and reload the browser.

#### Compile Images

`gulp task:compile-html`

Currently, this is another simple file mover. Moves all the images to the build folder.

#### Start Watch

`gulp task:start-watch`

Dependent on `gulp task:start-server`. This task listens to all the files for changes, if any file changes run the appropriate task and reload the browser.

#### Start Server

`gulp task:start-server`

Based on your environment path, this task either spins up a local server or triggers a local host already defined, spins up your default browser.

### Compile Assets

Compile assets runs all the same tasks, sans the server. This task is meant for production server to run.

### Lint Everything

It's important to have everything conforming to the coding style agreed upon with your team. If you don't know where to start, this is good place. Check out the `gulp-config.js` file for the linting rules for JavaScript and CSS. Most of the configurable items are set with a value that I like to code against. Try it out and if you find those rules are to lax or strict for you, change them how you best see fit.

#### Lint Styles

`gulp _lint-styles`

This is a group task that calls two other tasks. `clean:sass` and `lint:sass`.

#### Clean Sass

`gulp clean:sass`

Formatting everything manually is cool and all, but it's even better to have a tool to auto format for you.

#### Lint Sass

`gulp lint:sass`

After things have been formatted properly, check if your code conforms with the code style you have put in place.

#### Lint Scripts

`gulp _lint-scripts`

This is a group task that calls two other tasks. `clean:js` and `lint:js`.

#### Clean JS

`gulp clean:js`

Formatting everything manually is cool and all, but it's even better to have a tool to auto format for you.

#### Lint JS

`gulp lint:js`

After things have been formatted properly, check if your code conforms with the code style you have put in place.

---

## Environment file

`gulp-env.js`

This environment file should be the only file you need to touch from project to project. Mainly the `siteInstanceName` and `srcPath` / `buildPath`. These variables dictate how the system builds. If you are utilizing this in a project that is not as cut and dry as a `./src` and a `./build` folder, then change the start and end locations here.

The `siteInstanceName` is for a local host environment. If you are using a localhost such as MAMP or IIS, then `siteInstanceName` should reflect the url those systems have set up. If you are not using a local host situation, then leave `siteInstanceName` as `./` and Browser Sync will take care of the rest.

---

## Gulp Config

This file should be touched a little less frequently than the environment file, but may need to better reflect the structure of your system.

Each file type has their own structure with three items. `source` | `lintPath` | `build` Take a look at what these are currently set to and update according to your system.

If there is not a file represented in a group that needs to be, simply update the file extension where appropriate separate with a comma. NO SPACES.

For example, you need to support `.twig` file extension, update the `html.source` like so. `${env.srcPath}/**/*.{html,htm,php,cshtml,twig}`

### Options

These are the options that power the variables that affect how the files come out in the end.

#### Auto Prefixer

By default it has set been set up to support `last 4 versions` or `> 9%` browser usage.

#### Babel Env Options

Similar to Auto Prefixer, Babel can be set up to compile down to browsers last n versions.

If you are looking to play with a feature that is being proposed, then you need to install the babel plugin and include it in the `plugins` section for babel options.

#### Formatting

These options are based on how I like to work and have found pretty common to how teams work. This should be reviewed and agreed upon by your team, or what works with your style if working solo.

#### Linting JavaScript

These options are ones I have tweaked based my likings. Try these out, tweak as you see fit.

#### Linting Styles

These options are ones I have tweaked based my likings. Try these out, tweak as you see fit.
