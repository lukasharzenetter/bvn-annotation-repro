# bootstrap-vue-next INVALID_ANNOTATION repro

```sh
npm install
npm run build
```

`vite build` (Vite 7, Rollup) warns:

```
node_modules/bootstrap-vue-next/dist/dist-DKc2ivHS.js contains an annotation
that Rollup cannot interpret due to the position of the comment.
```

The comment is the `@__NO_SIDE_EFFECTS__` JSDoc on the bundled VueUse 14.2 `injectLocal`
(`var injectLocal = (...args) => {`). VueUse fixed it in v15.0.0 (vueuse/vueuse#5613).
