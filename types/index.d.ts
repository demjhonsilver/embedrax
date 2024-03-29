// dist/index.d.ts

declare module 'embedrax' {
    // TypeScript type definitions for embedrax module
  
  
      // Type for the Video object built-in typescript
      type Video = {
        width?: number;
        height?: number; 
        autoplay?: boolean;
        fullscreen?: boolean;
        controls?: boolean;
        loop?: boolean;
        videoUrl: string;
        videoClass: string;
      };
  
      // Type for the VideoEmbed function
      type VideoEmbed = (
        video: any, container?: HTMLElement
      ) => void;
  
  

  
    // Export the VideoEmbed type
    export const embed: VideoEmbed;

  }
  