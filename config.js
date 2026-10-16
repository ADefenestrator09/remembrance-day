/* ============================================================
   REMEMBRANCE DAY PAGE SETTINGS  (edit this file, not index.html)
   After editing, save/commit it. See README.txt for a full guide.
   ============================================================ */
window.REMEMBRANCE_CONFIG = {

  /* Text at the top of the page. */
  title: "Remembrance Day",
  subtitle: "Lest we forget",

  /* Look of the page. Choose one:
       "classic"  dark, poppies in the bottom corners
       "field"    dark, a quiet grassy field with a few poppies
       "paper"    warm parchment with an inked border
       "vigil"    night sky with stars and candlelight
       "maple"    deep red with a faint maple leaf
     To preview one without changing anything, add ?theme=NAME to the
     web address, for example  .../remembrance-day/?theme=paper  */
  theme: "classic",

  /* Audio tracks, in playing order.
     "src" is the file's location inside the audio folder.
     To change a track: upload a new mp3 to the audio folder and
     update the file name here. To add one, copy a line. */
  tracks: [
    { title: "O Canada",               src: "audio/o-canada.mp3" },
    { title: "The Last Post",          src: "audio/last-post.mp3" },
    { title: "Two Minutes of Silence", src: "audio/silence-2-minutes.mp3" },
    { title: "Rouse",                  src: "audio/rouse.mp3" }
  ],

  /* true  = each track starts the next one by itself.
     false = wait for someone to press Next. */
  autoContinue: false,

  /* Starting volume, from 0 (silent) to 1 (full). */
  volume: 0.8,

  /* Google Slides link (the normal address-bar link works, as does a
     Publish to web link). Slides must be shared as "Anyone with the
     link" or published to the web. Leave "" to paste one on the page. */
  slidesUrl: "https://docs.google.com/presentation/d/14cuLkEGzFLnWPOxOr7ncvXK_RBAiV2kzn7F86Dw5Ig8/edit?slide=id.p#slide=id.p",

  /* Videos for the Video tab. One line per video. "src" can be:
       - a YouTube link (add &t=10s to start at 10 seconds)
       - a Google Drive video link
       - a video file in the video folder, e.g. "video/talk.mp4"
     With two or more videos, a row of buttons appears above the video so
     you can switch between them. With one video there are no buttons.
     Leave the list empty ( videos: [] ) to choose a video on the page.
     To add a video, copy a line (every line except the last ends in a comma). */
  videos: [
    { title: "Remembrance Day", src: "https://www.youtube.com/watch?v=dT4EytUeVjI" },
    { title: "What is Remembrance Day?", src:"https://www.youtube.com/watch?v=wBjPIXcZBF8" }
  ]
};
