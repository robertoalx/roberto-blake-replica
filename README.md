# Roberto Blake replica

## **baseUrl** support
add ***baseurl*** support which can be configured for GitHub.io and custom domain. Check *package.json* config section for
* *deployToGithubIo* - (true|false) by default it is set to *true* and will affect the value of *baseUrl* when you want to deploy to GitHub.io; You want to set it to *false* if you want to use *customUrl* as the value of *baseUrl*
* *customUrl* - if you want baseUrl to have a value like http://my-project.codetap.io or any other one;
* *githubUrl* - if you want baseUrl to have a value like http://github.com/marianzburlea/pug-starter.git or any other one;

In the end you can use *baseUrl* to prefix your paths like:
```
link(rel="stylesheet", href=`${baseUrl}/style.css`)
```

or
```
a(
  title="Is it possible?"
  target="_blank"
  href=`${baseUrl}/article/nice-weather`
)
```

or
```
img(alt="Awesome dog" width="100" href=`${baseUrl}/image/cool-dog.jpg`)
```

Starter package for pug (former jade) template based projects.

***Note***: an boolean option **config.render.sourceFileChange** has been added to the *package.json*. The behaviour differs based on the value:
1. **true** - it renders if the source file (pug file) has been changed; This has a much much greater speed when rendering compared to the other option however it's only relevant if you make change to the current file watched by PUG. If you make a change to a file that's extended and resides in a path that contains "_", like a layout one, the change won't be reflected.
2. **false** - it renders if any pug file has been changed and compares the output with the destination file (the HTML generated now with the previous generated HTML). This can be slower when the number of files increases.

To install NodeJS visit [nodejs download page](https://nodejs.org/en/download/) download the appropiate package for your operatin system, click on the downloaded file, open it and follow the installation procees. If you don't know much about it, just click ALL the NEXT and or INSTALL buttons and choose "I agree" when prompted and you should be fine.

## Installation
**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
$ npm i
```
or
```bash
$ npm install
```
## Usage
To run the project in development mode and open a local server that synchronizes across multiple devices use:
```bash
npm start
```
or
```bash
npm run dev
```
To build the project for production use:
```bash
npm run prod
```
To automatically deploy your project to GitHub pages and make it available at https://[your-username].github.io/[your-project-name] use:
```bash
npm run deploy
```
## Style

The project supports both ***embed*** and ***external*** style sheets. You can have none, one or the other, or both of them.

