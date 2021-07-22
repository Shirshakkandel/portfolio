# 2)Page base routing
1. page base routing except _app.tsx and _document.tsx.
2. Next js come with inbuild support for typescript (tsx)
3. yarn add --dev typescript @typescript/react @types/node
4. Add tailwind css. 
5. api inside file in ts like hello.ts and page route in tsx
6. make globalStyles.css and import '../globalStyles.css'
       
# 3)Sidebar (Developer portfolio using Nextjs)
1. About, resume and Project pages(3 pages)
```css
/* globalStyles.css */
body{background-color:black}
 /* _app.tsx */
 make grid one col-span-3 and col-span-9
```

```js
module.exports = {
   purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         sans: ['ui-sans-serif', 'system-ui'],
         kaushan: ['Kaushan Script'],
      },
      extend: {
         colors: {
            green: {
               DEFAULT: '#00f260',
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}

```

# 11)Next Image 

