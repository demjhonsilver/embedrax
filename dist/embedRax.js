  /* # Embedrax core license
  
  Embedrax is released under the MIT license:
  
  MIT License
  
  Copyright (c) [2024] [Demjhon Silver]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE. */

  
  
  let videoCount = 1; // Initialize videoCount
  

  const embedInstagram = (video, container, videoClass, videoCount) => {
    const videoUrl = video.videoUrl;
  
    // Extract the video ID from the URL
    const videoId = extractInstagramVideoId(videoUrl);
    if (!videoId) {
      throw new Error('Invalid Instagram video URL');
    }
  
    // Check if the container element exists, create it if it doesn't
    let embedContainer = document.getElementById(container);
    if (!embedContainer) {
      embedContainer = document.createElement('div');
      embedContainer.id = container;
      document.body.appendChild(embedContainer);
    }
  
    // Check if the playerDiv for the Instagram video already exists
    let playerDiv = document.querySelector(`.${videoClass}`);
    if (!playerDiv) {
      // Create the playerDiv containing the Instagram video with the specified videoClass
      playerDiv = document.createElement("div");
      playerDiv.className = `video-${videoCount} ${videoClass}`;
  
      // Append the playerDiv to the embedContainer
      embedContainer.appendChild(playerDiv);
    }
  
    // Create the blockquote element for Instagram embed
    const blockquote = document.createElement('blockquote');
    blockquote.setAttribute('class', 'instagram-media');
    blockquote.setAttribute('data-instgrm-permalink', `https://www.instagram.com/p/${videoId}/`);
    blockquote.setAttribute('data-instgrm-version', '13');
  
    const anchor = document.createElement('a');
    anchor.setAttribute('href', videoUrl);
    blockquote.appendChild(anchor);
  
    // Append the blockquote to the playerDiv
    playerDiv.appendChild(blockquote);
  
    // Check if embed script already exists, if not, append it to the embedContainer
    if (!document.getElementById('instagramEmbedScript')) {
      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.setAttribute('id', 'instagramEmbedScript');
      script.setAttribute('src', '//www.instagram.com/embed.js');
      embedContainer.appendChild(script);
    }
  };
  
  // Regular expression to extract Instagram video ID from URL
  const extractInstagramVideoId = (url) => {
    const regex = /\/([a-zA-Z0-9_-]+)\/?$/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  
  

  const extractDailymotionVideoId = (url) => {
    const videoIdMatch = url.match(/\/(?:video|hub)\/([^_]+)/) || url.match(/(?:^|\/)([a-z0-9]+)(?:_[\w-]*)?$/i);
    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    }
    throw new Error("Invalid Dailymotion video URL");
  };
  
  const embedDailymotion = (video, container, videoClass) => {
    const videoUrl = video.videoUrl;
    const videoId = extractDailymotionVideoId(videoUrl);
    const autoplayValue = video.autoplay ? '1' : '0';
    const controlsValue = video.controls ? '1' : '0';
    const fullscreenValue = video.fullscreen ? '1' : '0';
  
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.dailymotion.com/embed/video/${videoId}?autoplay=${autoplayValue}&controls=${controlsValue}&fullscreen=${fullscreenValue}`;
    iframe.width = video.width || 640;
    iframe.height = video.height || 360;
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
  
    iframe.className = videoClass;
  
    container.appendChild(iframe);
  };
  
  
  
  // Function to extract Vimeo video ID from a URL
  const extractVimeoVideoId = (url) => {
    const videoIdMatch = url.match(/\/(\d+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    } else {
      console.error("Invalid Vimeo video URL");
      return "";
    }
  };
  
  
  const embedVimeo = (video, container, videoClass) => {
    const emWidth = video.width || 640;
    const emHeight = video.height || 360;
    const controlsValue = video.controls;
    const AutoplayValue = video.autoplay;
    const LoopValue = video.loop;
  
    const videoId = extractVimeoVideoId(video.videoUrl);
  
    const playerDiv = document.createElement("div");
    playerDiv.className = `video-${videoCount} ${videoClass}`;
    playerDiv.dataset.eWidth = emWidth;
    playerDiv.dataset.eHeight = emHeight;
    playerDiv.dataset.efullscreen = video.fullscreen;
    playerDiv.dataset.eVideoId = videoId;
  
    container.appendChild(playerDiv);
  
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
  
    script.onload = () => {
      const vimeoPlayer = new window.Vimeo.Player(playerDiv, {
        id: videoId,
        width: emWidth,
        height: emHeight,
        controls: controlsValue,
        autoplay: AutoplayValue,
        muted: true, // Set muted to true for autoplay
        loop: LoopValue,
      });
  
      vimeoPlayer.ready().then(() => {
        // You can use player methods here as needed
      });
    };
  
    document.body.appendChild(script);
  
    return () => {
      if (playerDiv) {
        playerDiv.innerHTML = "";
      }
      document.body.removeChild(script);
    };
  };
  
  
  
  
  
  const embedTwitter = (video, container, videoClass) => {
  
    const extractTwitterTweetId = (url) => {
      const regex = /\/status\/(\d+)/;
      const match = url.match(regex);
  
      if (match && match[1]) {
        return match[1];
      } else {
        return null; // No match found
      }
    };
  
    try {
      const videoUrl = video.videoUrl;
      const tweetId = extractTwitterTweetId(videoUrl);
  
      // Create a div to hold the embedded tweet
    const tweetContainer = document.createElement("div");
  
    // Apply the videoClass to the tweetContainer
    tweetContainer.className = `video-${videoCount} ${videoClass}`;
  
    // Set the ID for the tweet container
    tweetContainer.id = `tweet-${tweetId}`;
  
      // Add the Twitter widget script to the page and wait for it to load
      const twitterWidgetScript = document.createElement("script");
      twitterWidgetScript.src = "https://platform.twitter.com/widgets.js";
      twitterWidgetScript.charset = "utf-8";
      twitterWidgetScript.async = true;
  
      // Attach a load event listener to the script
      twitterWidgetScript.addEventListener("load", () => {
        // The Twitter widget script has loaded, and the tweet is now embedded.
        // You can perform any additional actions here if needed.
        window.twttr.widgets.createTweet(tweetId, tweetContainer);
      });
  
      // Append the tweet container to the provided container
      container.appendChild(tweetContainer);
      container.appendChild(twitterWidgetScript);
  
    } catch (error) {
      console.error("Error embedding Twitter content:", error);
    }
  };
  
  
  
  
  // Map to track embedded TikTok videos
  const embeddedTikTokVideos = new Map();
  
  const embedTiktok = (video, container, videoClass) => {
    const videoUrl = video.videoUrl;
  
    // Check if the TikTok video URL has already been embedded
    if (embeddedTikTokVideos.has(videoUrl)) {
      // Video has already been embedded, no need to embed it again
      return;
    }
  
     // Check if the TikTok video URL has already been embedded
  
     if (embeddedTikTokVideos.has(videoUrl)) {
  
      // Video has already been embedded, no need to embed it again
  
      return;
  
    }
  
    
  
  
    // Mark the TikTok video URL as embedded
  
    embeddedTikTokVideos.set(videoUrl, true);
  
  
  
    const width = video.width || '100%'; // Default width if not provided
  
    const height = video.height || '100%'; // Default height if not provided
  
  
  
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`, true);
  
  
  
    xhr.onload = function () {
  
      if (xhr.status >= 200 && xhr.status < 300) {
  
        const data = JSON.parse(xhr.responseText);
  
  
  
        if (data.html) {
  
          data.html = data.html.replace(/<script[^>]*>.*<\/script>/gi, '');
  
        }
  
  
  
        const videoContainer = document.createElement('div');
  
        const videoCount = Date.now();
  
  
  
        // Apply the videoClass to the videoContainer
  
        videoContainer.className = `video-${videoCount} ${videoClass}`;
  
  
  
        // Set the width and height of the videoContainer
  
        videoContainer.style.width = width;
  
        videoContainer.style.height = height;
  
  
  
        videoContainer.innerHTML = data.html;
  
  
  
        // Check if the TikTok embed script is already loaded
  
        if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
  
          // Dynamically load the TikTok embed script
  
          const embedBinderTikTok = document.createElement('script');
  
          embedBinderTikTok.src = 'https://www.tiktok.com/embed.js';
  
          document.body.appendChild(embedBinderTikTok);
  
        }
  
  
  
        if (container) {
  
          // Append the videoContainer to the specified container (if provided)
  
          container.appendChild(videoContainer);
  
        } else if (document.body) {
  
          // Append the videoContainer to the body if no container is specified
  
          document.body.appendChild(videoContainer);
  
        }
  
      } else {
  
        console.error('Failed to fetch TikTok oEmbed data: ' + xhr.statusText);
  
      }
  
    };
  
  
  
    xhr.onerror = function () {
  
      console.error('An error occurred while embedding TikTok video.');
  
    };
  
  
  
    xhr.send();
  
  };
  
  
  
  
  
  
  const embedFacebook = (video, container, videoClass) => {
    const videoUrl = video.videoUrl;
    const autoplay = video.autoplay ? 'autoplay=true' : 'autoplay=false';
    const muted = autoplay ? 'muted=true' : 'muted=false';
    const emWidth = video.width || 640;
    const emHeight = video.height || 360;
  
    // Create an iframe element for the Facebook video
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&width=${emWidth}&height=${emHeight}&show_text=false&${autoplay}&${muted}`);
    iframe.setAttribute('width', emWidth);
    iframe.setAttribute('height', emHeight);
    iframe.setAttribute('frameborder', '0');
  
    if (video.fullscreen) {
      iframe.setAttribute('allowfullscreen', 'true');
    }
  
   
    iframe.className = `video-${videoCount} ${videoClass} custom-facebook`;
  
    videoCount++;
  
    container.appendChild(iframe);
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Function to extract YouTube video ID from a URL
  const extractYouTubeVideoId = (url) => {
    // Check if it's a YouTube Shorts URL
    const shortsMatch = url.match(/(?:shorts\/|v=)([a-zA-Z0-9_-]{11})/);
    if (shortsMatch && shortsMatch[1]) {
      return shortsMatch[1];
    }
  
    // Check if it's a regular YouTube video URL
    const videoIdMatch = url.match(/(\?v=|\/embed\/|\/watch\?v=|\/v\/|\/e\/|youtu.be\/)([^#&?]*).*/);
    if (videoIdMatch && videoIdMatch[2].length === 11) {
      return videoIdMatch[2];
    }
  
    throw new Error("Invalid YouTube video URL");
  };
  
  
  const embedYouTube = (video, container, videoClass) => {
    if (!container) {
      console.error("Container element not found.");
      return;
    }
  
    const autoplayValue = video.autoplay ? 1 : 0;
    const muteValue = video.autoplay ? 1 : video.muted ? 1 : 0;
    const loopValue = video.autoplay ? 1 : video.loop ? 1 : 0;
  
    const videoId = extractYouTubeVideoId(video.videoUrl);
  
    // Create an iframe element for the YouTube player
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplayValue}&mute=${muteValue}&loop=${loopValue ? 1 : 0}&controls=${video.controls ? 1 : 0}`;
  
    iframe.width = video.width || 640;
    iframe.height = video.height || 360;
    iframe.frameborder = "0";
  
  
    if (video.fullscreen) {
      iframe.setAttribute("allow", "fullscreen");
    }
  
  
  
    // Apply the videoClass to the iframe element
    iframe.className = videoClass;
  
    // Append the iframe to the provided container
    container.appendChild(iframe);
  };
  
  
  
  
  
  
  
  const embed = (videos) => {
    videos.map((video) => {
      const videoClass = video.videoClass || "";
      const container = document.querySelector(`.${videoClass}`);
  
      // Clear the container before embedding a new video
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
  
      if (video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be")) {
        embedYouTube(video, container, videoClass);
      }
      else if (video.videoUrl.includes("facebook.com") || video.videoUrl.includes("fb.com")) {
        embedFacebook(video, container, videoClass);
      }
      else if (video.videoUrl.includes("tiktok.com") || video.videoUrl.includes("tiktok")) {
        embedTiktok(video, container, videoClass);
      }
      else if (video.videoUrl.includes("twitter.com")) {
        embedTwitter(video, container, videoClass);
      }
      else if (video.videoUrl.includes("vimeo.com")) {
        embedVimeo(video, container, videoClass);
      }
      else if (video.videoUrl.includes("dailymotion.com") || video.videoUrl.includes("dailymotion")) {
      embedDailymotion(video, container, videoClass);
      }
      else if (video.videoUrl.includes("instagram.com") || video.videoUrl.includes("instagram")) {
      embedInstagram(video, container, videoClass);
      }
      else {
        throw new Error("Invalid video URL");
      }
    });
  };
  


export default embed;

  /* # Embedrax core license
  
  Embedrax is released under the MIT license:
  
  MIT License
  
  Copyright (c) [2024] [Demjhon Silver]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE. */
