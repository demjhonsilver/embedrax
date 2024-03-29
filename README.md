<p align="center">
<img src="https://raw.githubusercontent.com/demjhonsilver/embedrax/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Embedrax 

[![npm version](https://img.shields.io/npm/v/embedrax.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/embedrax)
![Written](https://img.shields.io/badge/JavaScript-blue?logo=javascript&label=Supports&style=flat-square&color=FDDA0D)
![Written](https://img.shields.io/badge/TypeScript-blue?logo=typescript&label=Supports&style=flat-square&color=blue)
![Downloads](https://img.shields.io/npm/dt/embedrax.svg?style=flat-square&label=Downloads&color=brightgreen)
[![License](https://img.shields.io/npm/l/embedrax.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/embedrax/blob/main/LICENSE.md)






</div>




---------------------

## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
- [Features](#features)
- [Installation](#installation)
- [Supported Sites](#supported-sites)
- [Embed Video](#embed-video)
- [React](#react)
- [React TypeScript](#react-typescript)
- [Vue](#vue)
- [Vue TypeScript](#vue-typescript)
- [Svelte](#svelte)
- [Svelte TypeScript](#svelte-typescript)
- [Angular](#angular)
- [Embed Css](#embed-css)
- [License](#license)
- [Author](#author)

## Description

Embedrax is an embed package for React, Vue, Angular, and Svelte which can embed from platforms like Facebook, TikTok, YouTube/Shorts, Twitter/X, Vimeo and Dailymotion.


Frameworks / Libraries | Tested versions
------ | -------- | 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 & above
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 & above
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 & above
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 & above

-----

## Release-notes


Major Changes:
 v1.0.0


Minor Changes:


Patch Changes:
 v1.0.1
 - Reminder
 - Make sure your default `index.css` or `app.css` are not conflict, if you notice your css videos are not working properly.

---
Try to clear your existing css like `index.css` or `app.css` affected in React, Vue, Svelte and Angular. 
See if it's working now.
Then RESTORE the original `index.css` or `app.css` codes.

-------


## Features

- Easy to use and responsive.
- Capable of embedding one or many videos from platforms like Facebook, TikTok, YouTube, YouTube Shorts, Twitter/X, Dailymotion and Vimeo.

-------------
## Installation

To install the Embedrax, you can use the following npm command:

```bash
npm install embedrax
```

## Supported-sites

![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white) 
![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white) 
![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)
![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) 
![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white) 
![Vimeo](https://camo.githubusercontent.com/2026999d43e099c9c835757e3d2f5f8c574efad153f4e3d5143914223e9cbc24/68747470733a2f2f613131796261646765732e636f6d2f62616467653f6c6f676f3d76696d656f) 
![Dailymotion](https://a11ybadges.com/badge?logo=dailymotion)
--------

## Embed-video

Attributes |  Functionality | Type | Required | 
------ | -------- | -------- | ----------
`width` | dynamic width | number | optional
`height` |  dynamic height | number |optional
`fullscreen` |  enable fullscreen | boolean | optional
`controls` | enable controllers | boolean | optional
`autoplay` | enable autoplay | boolean | optional
`loop` | enable loop | boolean | optional
`videoClass` | set any classname | string | yes
`videoUrl` | video address, url/links | string | yes 
---------


Use Google chrome as much as possible to load more videos properly.

------------
Recommended web browser for local test:
-----
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
--------

Reminder:

- Don't forget to restart your server.


------------
## React
```jsx
import { useEffect } from 'react';
import { embed } from 'embedrax';

export const ExampleComponent = () => {
  useEffect(() => {
    embed([
      {
        width: 640,
        height: 360,
        autoplay: true,
        fullscreen: false,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
        videoClass: 'embed-youtube-one-clip' 
      }
    ])
  });
  return (
    <>
      <div className="embed-youtube-one-clip"></div>
    </>
  );
};
```

or 

```jsx
import { useEffect } from 'react';
import { embed } from 'embedrax';

const ExampleComponent = () => {
  useEffect(() => {
    embed([
      {
        width: 640,
        height: 360,
        autoplay: true,
        fullscreen: false,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
        videoClass: 'embed-youtube-one-clip' 
      }
    ])
  });
  return (
    <>
      <div className="embed-youtube-one-clip"></div>
    </>
  );
};

export default ExampleComponent
```


## React-Typescript

```ts
import { useEffect } from 'react';
import { embed } from 'embedrax';

interface VideoConfig {
  width?: number;
  height?: number;
  autoplay?: boolean;
  fullscreen?: boolean;
  controls?: boolean;
  videoUrl: string;
  videoClass: string;
}

export const ExampleComponent: React.FC = () => {
  const videos: VideoConfig[] = [
    {
      videoUrl: '',
      videoClass: 'embed-tiktok',
    },
    {
      width: 300,
      height: 600,
      videoUrl: '',
      videoClass: 'embed-twitter',
    },
  ];

  useEffect(() => {
    embed(videos);
  });

  return (
    <>
      <div className="embed-tiktok"></div>
      <div className="embed-twitter"></div>
    </>
  );
};

```





## Vue
```js
<template>
  <div>
    <div class="embed-youtube-one-clip"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { embed } from 'embedrax';

export default {
  name: 'ExampleComponent',
  setup() {

    onMounted(() => {
      embed([
        {
          width: 640,
          height: 360,
          autoplay: true,
          fullscreen: false,
          controls: true,
          videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
          videoClass: 'embed-youtube-one-clip'
        }
      ])
    });

    return {};
  },
};
</script>
```
## Vue-Typescript


```ts
<script lang="ts">
  import { onMount } from 'svelte';
  import { embed } from 'embedrax';

  interface VideoConfig {
    width?: number;
    height?: number;
    autoplay?: boolean;
    fullscreen?: boolean;
    controls?: boolean;
    videoUrl: string;
    videoClass: string;
  }

  const videos: VideoConfig[] = [
    {
      videoUrl: '',
      videoClass: 'embed-tiktok' 
    },
    {
      width: 300,
      height: 600,
      videoUrl: '',
      videoClass: 'embed-twitter'
    },
  ];

  onMount(() => {
    embed(videos);
  });
</script>

<div>
  <div class="embed-tiktok"></div>
  <div class="embed-twitter"></div>
</div>
```



## Svelte 

```js
<script>
  import { onMount } from 'svelte';
  import { embed } from 'embedrax';

  onMount(() => {
    embed([
      {
        width: 640,
        height: 360,
        autoplay: true,
        fullscreen: false,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
        videoClass: 'embed-youtube-one-clip'
      }
    ]);
  });
</script>

<div>
  <div class="embed-youtube-one-clip"></div>
</div>
```

## Svelte-Typescript

```ts
<template>
  <div>
    <div class="embed-tiktok"></div>
    <div class="embed-twitter"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { embed } from 'embedrax';

const videos = <VideoConfig[]>([
  {
    videoUrl: '',
    videoClass: 'embed-tiktok'
  },
  {
    width: 300,
    height: 600,
    videoUrl: '',
    videoClass: 'embed-twitter'
  },
]);

onMounted(() => {
  embed(videos);
});

interface VideoConfig {
  width?: number;
  height?: number;
  autoplay?: boolean;
  fullscreen?: boolean;
  controls?: boolean;
  videoUrl: string;
  videoClass: string;
}

</script>
```


## Angular 

example.component.ts

```ts
import { Component, AfterViewInit } from '@angular/core';
import { embed } from 'embedrax';

@Component({
  selector: 'app-example',
  template: `
    <div class="embed-youtube-one-clip"></div>
  `,
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements AfterViewInit {

  ngAfterViewInit() {
    embed([
      {
          width: 640,
          height: 360,
          autoplay: true,
          fullscreen: false,
          controls: true,
          videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
          videoClass: 'embed-youtube-one-clip'
      }
    ]);
  }
}  
```
For Angular css:

---

[Angular embed Css](#embed-css)

```css
::ng-deep .embed-youtube-one-clip {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border: 2px solid orange;
  width: 100%;
  max-width: 640px;
  margin: auto; /* Center the entire container horizontally */
}
```

## Embed-css

Make sure your default `index.css` or `app.css` are not conflict, if you notice your css videos are not working properly.

---
Try to clear your existing css like `index.css` or `app.css` affected in React, Vue, Svelte and Angular. 
See if it's working now.
Then RESTORE the original `index.css` or `app.css` codes.



You can add your own css set-up: <!-- You can rename, change color, resize, positioning etc. -->

You may apply to app.css or index.css or any css file.

This is sample only, you can rename, recreate, and do something:
```css
.embed-youtube-one-clip {
  display: flex;
  justify-content: center; 
  align-items: center; 
  border: 2px solid orange;
  width: 100%;
  max-width: 640px;
  margin: auto; 
}
```
For more css embed video styles:

```css
/* app.css  or index.css or any */

.embed-tiktok {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 370px;
  max-height: 560; 
  float: left;
}

.embed-twitter {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 300px;
  float: left;
}
.embed-youtube {
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 640px;
  max-height: 360; /* Allow the height to adjust proportionally */
  float: left;
}
.embed-facebook {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

.embed-facebook2 {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

.embed-vimeo {
  display: inline-flex;
/* You can assign any css properties */
}

.embed-dailymotion {
  display: inline-flex;
/* You can assign any css properties */
}
```

CSS for Angular:

-------

```css
/* example/component.css */

::ng-deep .embed-tiktok {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 370px;
  max-height: 560; 
  float: left;
}

::ng-deep .embed-twitter {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 300px;
  float: left;
}
::ng-deep .embed-youtube {
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 640px;
  max-height: 360; /* Allow the height to adjust proportionally */
  float: left;
}
::ng-deep .embed-facebook {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

::ng-deep .embed-facebook2 {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

::ng-deep .embed-vimeo {
  display: inline-flex;
/* You can assign any css properties */
}

::ng-deep .embed-dailymotion {
  display: inline-flex;
/* You can assign any css properties */
}
```







## License

[MIT](http://www.opensource.org/licenses/MIT)


----------------------------------------------------
## Author

Demjhon Silver

