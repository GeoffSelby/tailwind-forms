# Tailwind Forms

>**HEAVILY** inspired by Adam Wathan's [Tailwind Form Styles](https://github.com/adamwathan/tailwindcss-form-styles), basically just the installable package version to use in your projects.

## Installation

```bash
npm install tailwind-forms
```

## Configuration

```js
// tailwind.config.js
{
  theme: {
    ...
  },
  plugins: [
    require('tailwind-forms')(),
  ],
}
```

> There are currently no options available. You can customize everything by stacking core utility classes.

## Usage

### Text Input

```html
<label class="block">
  <span class="text-gray-700">Name</span>
  <input type="email" class="form-input mt-1 block w-full" placeholder="John Appleseed"/>
</label>
```

### Textarea

```html
<label class="block">
  <span class="text-gray-700">Textarea</span>
  <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some long form content."></textarea>
</label>
```

### Select

```html
<label class="block">
  <span class="text-gray-700">Select</span>
  <select class="form-select block w-full mt-1">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>
```

### Select Multiple

```html
<label class="block">
  <span class="text-gray-700">Multiselect</span>
  <select class="form-multiselect block w-full mt-1" multiple>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </select>
</label>
```

### Checkbox

```html
<div class="block">
  <span class="text-gray-700">Checkboxes</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="sr-only" checked/>
        <span class="form-checkbox text-blue-400" aria-hidden="true"></span>
        <span class="ml-2">Option 1</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="sr-only"/>
        <span class="form-checkbox text-blue-400" aria-hidden="true"></span>
        <span class="ml-2">Option 2</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="sr-only"/>
        <span class="form-checkbox text-blue-400" aria-hidden="true"></span>
        <span class="ml-2">Option 3</span>
      </label>
    </div>
  </div>
</div>
```

#### Changing the `clicked` background color

```html
<div class="block">
  <span class="text-gray-700">Checkboxes</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="sr-only" checked/>
        <span class="form-checkbox text-indigo-600" aria-hidden="true"></span>
        <span class="ml-2">Option 1</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="sr-only" checked/>
        <span class="form-checkbox text-blue-500" aria-hidden="true"></span>
        <span class="ml-2">Option 2</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="sr-only" checked/>
        <span class="form-checkbox text-pink-600" aria-hidden="true"></span>
        <span class="ml-2">Option 3</span>
      </label>
    </div>
  </div>
</div>
```

### Radio Button

```html
<div class="block">
  <span class="text-gray-700">Radio Buttons</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="sr-only" name="radio" value="1" checked/>
        <span class="form-radio text-blue-400" aria-hidden="true"></span>
        <span class="ml-2">Option 1</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="sr-only" name="radio" value="2"/>
        <span class="form-radio text-blue-400" aria-hidden="true"></span>
        <span class="ml-2">Option 2</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="sr-only" name="radio" value="3"/>
        <span class="form-radio text-blue-400" aria-hidden="true"></span>
        <span class="ml-2">Option 3</span>
      </label>
    </div>
  </div>
</div>
```

#### Changing the `checked` background color

```html
<div class="block">
  <span class="text-gray-700">Radio Buttons</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="sr-only" name="radio-colors" value="1" checked/>
        <span class="form-radio text-indigo-600" aria-hidden="true"></span>
        <span class="ml-2">Option 1</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="sr-only" name="radio-colors" value="2"/>
        <span class="form-radio text-blue-500" aria-hidden="true"></span>
        <span class="ml-2">Option 2</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="radio" class="sr-only" name="radio-colors" value="3"/>
        <span class="form-radio text-pink-600" aria-hidden="true"></span>
        <span class="ml-2">Option 3</span>
      </label>
    </div>
  </div>
</div>
```