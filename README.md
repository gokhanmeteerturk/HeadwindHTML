# HeadwindHTML
Create HTML from CSS! A modern javascript library you'd expect Facebook to invent.

Slowly build modern websites without ever leaving your CSS, with HeadwindHTML

(note: We dropped Typescript with v0.x)

## What does it do?

[Try it now (Codepen)](https://codepen.io/gokhanmeteerturk/pen/QWQaaoZ)


Headwind HTML let's you write CSS *instead of* HTML. When the page is loaded, your css will be parsed and converted to HTML.

Normally, you would create an html link like this:

```html
<a href="https://google.com">Text</a>
```
---
With Headwind HTML, you can create your link element directly from CSS!!

```css
.css::after{
  --s:a;
  --s-text:"I love Headwind";
  --s-apply-href:"https://google.com";
}
```
Which will also reduce your HTML to this:
```html
<script src="https://cdn.jsdelivr.net/gh/gokhanmeteerturk/HeadwindHTML/headwind.js"></script>
<div id="root" class="css"></div>
```
End result:

[I love Headwind](https://google.com)


---

## Can I also apply Tailwind CSS utility classes?
Yes you can! Here is a simple html link, but with Headwind and Tailwind:

```css
.css::after{
  --s:a;
  --s-text:"I love Headwind with Tailwind";
  --s-apply:px-4 py-3 my-2 mx-3 text-md text-white font-semibold bg-purple-600 rounded-full border
  border-purple-200 hover:text-purple-600 hover:bg-white hover:border-purple-600 focus:outline-none
  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2;
  --s-apply-href:"https://google.com";
}
```

![ss2](https://user-images.githubusercontent.com/92143124/170674485-1ad93e40-bd54-4126-8db3-da10a1275943.png)

## How to create an element tree?
You can use `--s-child` custom property to create child elements. Headwind will automatically create the child elements.

```css
.css::after{
  --s:a;
  --s-text:"I love breaking";
  --s-apply:px-4 py-3 my-2 mx-3 text-md text-white font-semibold bg-purple-600 rounded-full border border-purple-200 hover:text-purple-600 hover:bg-white hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2;
  --s-apply-href:"https://google.com";
  
    /* Don't let Adam Wathan see this. */
  --s-child:bold-text-element;
}

.bold-text-element::after{
  --s:b;
  --s-text:" established industry standards";
}
```
![image](https://user-images.githubusercontent.com/92143124/170674666-b8e22e89-21d9-4957-899f-1e0e979295d7.png)



## Does it use virtual DOM?
No.


## Does it break your console?
Yes. Headwind HTML is so 2023 that it intentionally overrides console.error function to make your website feel modern and interactive.


## Should I use it?
You should never use Headwind HTML in any kind of environment.
