# Frontend

This template comes with only one route: `http://localhost:3000/`, aka the index.

When the page loads, it tries to load data from the API template's only endpoint, `http://localhost:8000/`. If you're running this frontend while also running the backend, the page should load correctly and you should see the data rendered in a grid.

To demonstrate how this template is requesting data from the backend, and what happens if there's a problem, you can change the URI to make it incorrect, i.e. `http://localhost:8001/`. Thanks to a `useEffect` hook, which is fetching the data, the changed URI is detected, the page is reloaded, and you can observe how this template handles the error.

![Gif of screenshot of index page](../img/frontend.gif)


## First-time set-up

Install the node modules with `npm install`.

```console
$ npm install
(node:10483) ExperimentalWarning: CommonJS module ... using require().
Support for loading ES Module in require() is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

added 446 packages, and audited 447 packages in 7s

155 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Run

1. Make sure the backend Python API is running.

2. Run the frontend with `npm run dev`.

```console
$ npm run dev

> frontend@0.1.0 dev
> next dev

   ▲ Next.js 15.2.2
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.83:3000

 ✓ Starting...
 ✓ Ready in 1323ms
```
