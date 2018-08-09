# Cloudflare Workers Time Tests

## Usage

```bash
npm run install
npm run build
```

### Identifying Bottleneck Functions

#### If you want to get into the weeds

This setup is most useful when you are trying to trace down where the most CPU time is going. It runs in the node environment, so don't expect its output to be realistic in production. 

```bash
$ npm run time:bottleneck
                     _getHello @ response.js            0ms
                     _getWorld @ response.js            0ms
                   getResponse @ response.js            2ms
```

#### If you don't want to use Babel

Use this if you want a quick and dirty way to start timing things.

Note that this runs in the preview environment, which is ~5x faster than production.

```bash
npm run time:preview
```

### Testing production requests

Use this if want to see how long your requests take. The number of milliseconds is simply the time spent waiting for the entire request to complete.

This setup assumes you have deployed the worker you want to time to production.

```bash
npm run time:request
```
