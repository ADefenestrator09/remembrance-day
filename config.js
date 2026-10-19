/* ============================================================
   REMEMBRANCE DAY PAGE SETTINGS  (edit this file, not index.html)
   After editing, save/commit it. See README.txt for a full guide.
   ============================================================ */
window.REMEMBRANCE_CONFIG = {

  /* Text at the top of the page. */
  title: "Remembrance Day",
  subtitle: "Lest we forget",

  /* The page uses the deep-red maple look. (Nothing to set here.) */
  theme: "maple",

  /* Soft effects: a few maple leaves drift slowly down the screen.
     true = on, false = off. (Also off automatically for anyone whose
     device is set to "reduce motion".) */
  effects: true,

  /* PICTURES for the audience screen. While the Audio tab is showing,
     the audience screen plays these as a slow slideshow instead of
     showing the audio controls. Upload the pictures into the images
     folder and list them here, in order. Leave [] for a simple
     title screen instead. */
  images: [
    // "images/photo1.jpg",
    // "images/photo2.jpg",
    // "images/photo3.jpg"
  ],

  /* Seconds each picture stays on screen (3 or more). */
  imageSeconds: 10,

  /* Show the name of the current track (e.g. "The Last Post") at the
     bottom of the audience screen while it plays. true / false. */
  audienceCaption: true,

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
    { title: "Remembrance Day", src: "https://www.youtube.com/watch?v=lDBvV2HbpgE" },
    { title: "Battle of the Somme", src:"https://www.youtube.com/watch?v=A8QL9TxrtY8" }
  ]
};
