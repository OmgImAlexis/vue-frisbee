# vue-frisbee
A small wrapper for integrating [Frisbee](https://github.com/niftylettuce/frisbee) to Vuejs

## How to install:
### CommonJS:
```console
$ yarn add frisbee vue-frisbee
```

And in your entry file:
```js
import Vue from 'vue';
import frisbee from 'frisbee';
import VueFrisbee from 'vue-frisbee';

Vue.use(VueFrisbee, frisbee);
```

### Script:
Just add 3 scripts in order: `vue`, `frisbee` and `vue-frisbee` to your `document`.

## Usage:
This wrapper will bind `frisbee` to `Vue` or `this` if you're using single file component.

You can `frisbee` like this:
```js
Vue.frisbee.get('/').then(res => {
  console.log(res.body);
});

this.frisbee.get('/').then(res => {
  console.log(res.body);
});

this.$http.get('/').then(res => {
  console.log(res.body);
});
```
