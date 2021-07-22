[dark mode link to follow](https://tailwindcss.com/docs/dark-mode)

```js
  //tailwind.config.js
  darkMode:false,//or media or class
  darkMode:'class',
//   media is automatic using prefer-color-scheme
//use class way for manual instead of os.

//pages/_document.tsx
<Html class="dark"></Html>

//_app.tsx
<div className="grid dark:bg-black"> <Sidebar/></div>
```
# 2) Automatic theme changes

```js
yarn add next-theme

//pages/_app.tsx
import {ThemeProvider} from 'next-themes'
function MyApp({Components,pageProps}){
     return (
          <ThemeProvider attribute="class">
          </Theme>
          </ThemeProvider>
     )
}

//Slider.tsx
import {useTheme} from 'next-theme'

const {theme,setTheme}= useTheme()

const changeTheme= ()=> {
     setTheme(theme ==="light" ? "dark":"light" )
}

//tailwind.config.js
dark:{
     DEFAULT:" 
}

```

```html
<body className="bg-fixed from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
     <Main>
</body>

```