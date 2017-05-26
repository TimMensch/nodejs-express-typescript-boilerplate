## Node.js, Express REST API development with TypeScript
##### Sample boilerplate project for node.js, express using TypeScript and Gulp.

Modified extensively by Tim Mensch to use @types instead of tsd, to auto-reload the server, 
to clean up some of the code structure, and to include source maps.

### Why TypeScript?
TypeScript has been embraced as the choice language for building next generation web application using 
ECMAScript 6 (ES6) with strong typing. Strong typing doesn’t necessarily improve the JavaScript that your Node.js server 
will execute, or the JavaScript that your browser might execute. However, it provides the developer more insight into 
public and 3rd party APIs as well as reducing the bugs (and development cycle to check for bugs) in the software we are developing.

### Looking for Node-Express-ES6?
```
https://github.com/bapatel1/nodejs-express-es6-boilerplate
```

### Tools and middleware used
  - TypeScript
  - express
  - Node.js 6.x
  - Gulp

  ![packages.json](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/packages.png?raw=true "packages.json")

#### Setting up TypeScript
- You’ll need some global tools too. You might need to run these as sudo or “Run As Administrator” if you’re using windows.
```
npm install --global typescript gulp yarn
```
`typescript` is our global typescript compiler.
`gulp` is a build tool that’s crazy popular now and will help us create beautiful expressive build commands.
`yarn` is a great npm replacement that's more deterministic *and* faster.

#### Setting up Node

After your global tools are set up, run:

```
yarn
```

... in the main project directory, and all of the dependencies (including type definitions) will be installed. 

If you install another package and need type definitions, try this: (replace `some-package` with the package name
you want)

```
yarn add some-package 
yarn add --dev @types/some-package
```

If the types exist in @types, you'll install the types that way, and TypeScript won't complain.

#### Running the server.

Simply using this command 

```
> gulp serve
```

... will run a server that will restart every time you modify the source code.

#### Setting up tsconfig.json
Modify the tsconfig.json file at root level. This tells our TypeScript compiler some information about how to compile our .ts extension files. You can read more about tsconfig.json files here.

The default configuration is set up to be as safe as possible.

![tsconfig.json](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/tsconfig.png?raw=true "tsconfig.json")


#### Setting up your Linting using tslint
Modify the tsling.json file in the root directory to define linting rules.

![tslint.json](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/tslint.png?raw=true "tslint.json")

#### Setting up Gulp file
Modify the gulpfile.js at your root level to add any additional build steps.

![gulpfile.js](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/gulpfile.png?raw=true "gulpfile.json")

#### Server Setup
Now let’s start moving towards actual ./Src folder and actual server setup code.


#### Main server.ts file setup
Customize server.ts file under ./src to work with your needs.

![import](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/import1.png?raw=true "import1.ts")

#### Let’s define our first class “HttpServer”
– it will initiate and define express app
– handle bootstrapping express app
– handle defining routes
– and basic express configurations

![class](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/class.png?raw=true "class.ts")

![Express configurations](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/configuration.png?raw=true "configuration.ts")


![import](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/import2.png?raw=true "import2.ts")


![routes](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/routes.png?raw=true "routes.ts")

We will get to the route files later on but first let’s start server and finish our server.ts coding


![Server](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/server.png?raw=true "server.ts")

Helper functions like “onError” and “onListening” are here –

![helper](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/helper.png?raw=true "helper.ts")


#### Setting up Express Routes

- We have two routes – Index and Users for example.
  -   Create “routes” folder under “src” folder which will have our routes.
  -   Create Index.ts and Users.ts files inside routes folder.

![index](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/index.png?raw=true "index.ts")


![users](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/users.png?raw=true "users.ts")


#### Final Run and build
```
> gulp serve
```

![postman](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/postman.png?raw=true "postman")

##### Authors
```
Tim Mensch
Bhavin Patel
```

##### Repository
```
https://github.com/TimMensch/nodejs-express-typescript-boilerplate
```
