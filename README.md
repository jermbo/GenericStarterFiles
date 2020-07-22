# Generic Starter Files Gulp 4.0

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
    ├── gulp/
    │   ├── _config.js
    │   ├── _plumber.js
    │   ├── browser-sync.js
    │   ├── clean.js
    │   ├── html.js
    │   ├── images.js
    │   ├── scripts.js
    │   ├── styles.js
    │   └── watcher.js
    │
    └── package.json
```

All of your work will be done with in the `src` folder, and everything will be compiled to the `build` folder.

## Gulp Tasks

You have three main tasks that you will use most often.

`gulp`

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
