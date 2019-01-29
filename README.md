## What's this

![Happy Chinese New Year!](icon.png)

A simple Chrome extension written with Vanilla JS (ES5). No polyfill required:tada:

## How to use

- `Customize and control Chrome` ->
- `More Tools` ->
- `Extensions` ->
- `Load unpacked` ->
- Choose the directory of this repository

> Note: Make sure `Developer Mode` is enabled. (The button locates at the right top corner of the `Extensions` page.)

## Key points

### Load script

1. Load script via local source, instead of inline `<script></script>` code blocks.
2. Load script with `async` and `defer`, so that it will be executed after DOM elements are ready.

### `manifest.json`

1. `name`: Name of the extension
2. `version`: Version number of the extension
3. `manifest_version`: Syntax version of `manifest.json`
4. `browser_action`:
   - `default_popup`: Source for default popup
   - `default_icon`: Default icon of the extension
5. `content_scripts`:
   - `js`: JavaScript files that are allowed to be loaded
   - `matches`: Determine on which urls the extension should be enabled

### The `count` function

The variable `num` is stored in the high-order function's closure, so it will not be directly exposed to the global environment.
