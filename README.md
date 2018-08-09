# Cloudflare Workers Time Tests

## Usage

```bash
npm run install
npm run build
```

### Identifying Bottleneck Functions

#### If you want to get into the weeds

This setup is most useful when you are trying to trace down where the most CPU time is going. It runs in the node environment, so don't expect its output to be realistic in production. You can change what function to time in `time.js`. `njstrace` runs by hijacking the compile method and tracks the time of nested functions as well. 

```bash
$ npm run transpile
$ npm run time:bottleneck
                     _getHello @ response.js            0ms
                     _getWorld @ response.js            0ms
                   getResponse @ response.js            2ms
```

#### If you don't want to use Babel

Use this if you want a quick and dirty way to start timing things.

Note that this runs in the preview environment, which is ~5x faster than production. This can be used for smaller measurements without Babel. 

```js
console.time('func');
await func();
console.timeEnd('func');
```

```bash
npm run build
npm run time:preview
```

### Testing production requests

Use this if want to see how long your requests take. The number of milliseconds is simply the time spent waiting for the entire request to complete. This uses `Date.now()` and is tied to the fetch event request, so this is about as helpful as just using the network tab for requests.

This setup assumes you have deployed the worker you want to time to production.

```bash
npm run build
npm run time:request
```
