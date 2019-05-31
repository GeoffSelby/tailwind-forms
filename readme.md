# Tailwind Forms

<p>
    <a href="https://travis-ci.org/GeoffSelby/tailwind-forms"><img src="https://travis-ci.org/GeoffSelby/tailwind-forms.svg?branch=master" alt="Build Status"></a>
    <a href="https://github.com/GeoffSelby/tailwind-forms/releases"><img src="https://img.shields.io/npm/v/tailwind-forms.svg" alt="Latest Release"></a>
</p>

>**HEAVILY** inspired by Adam Wathan's [Tailwind Form Styles](https://github.com/adamwathan/tailwindcss-form-styles)

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

### Input Groups

```html
<!-- Button Right -->
<div class="form-input-group w-1/2 mx-auto mb-4 relative">
  <input type="text" class="form-input form-input-group-left relative" placeholder="Username">
  <div class="form-input-group-right">
    <button class="bg-blue-600 text-white px-6 hover:bg-blue-500">Submit</button>
  </div>	
</div>
  
<!--  Text Right  -->
<div class="form-input-group w-1/2 mx-auto mb-4 relative">
  <input type="text" class="form-input form-input-group-left relative" placeholder="john_doe">
  <div class="form-input-group-right">
    <span class="bg-gray-300 text-gray-600">@example.com</span>
  </div>	
</div>
  
<!--  Button Left  -->
<div class="form-input-group w-1/2 mx-auto mb-4 relative">
  <div class="form-input-group-left">
    <button class="bg-blue-600 text-white px-6 hover:bg-blue-500">Submit</button>
  </div>
  <input type="text" class="form-input form-input-group-right" placeholder="Username">
</div>
  
<!--  Text Left  -->
<div class="form-input-group w-1/2 mx-auto mb-4 relative">
  <div class="form-input-group-left">
    <span class="bg-gray-300 text-gray-600">@</span>
  </div>
  <input type="text" class="form-input form-input-group-right" placeholder="Username">
</div>
```