/* ============================================================
   REMEMBRANCE DAY PAGE SETTINGS  (edit this file, not index.html)
   After editing, save/commit it. See README.txt for a full guide.
   ============================================================ */
window.REMEMBRANCE_CONFIG = {

  /* Text at the top of the page. */
  title: "Remembrance Day",
  subtitle: "Lest we forget",

  /* Audio tracks, in playing order.
     "src" is the file's location inside the audio folder.
     To change a track: upload a new mp3 to the audio folder and
     update the file name here. To add one, copy a line.

     OPTIONAL, per track: show different pictures while that track plays.
     Add  gallery: [ ... ]  (same format as the main gallery below) and,
     if you like,  interval: 15  (seconds per picture). For example:
       { title: "Two Minutes of Silence", src: "audio/silence-2-minutes.mp3",
         gallery: [ { src: "images/silence1.jpg" }, { src: "images/silence2.jpg" } ],
         interval: 15 },

     OPTIONAL, per track: the name shown at the top of the audience screen
     when the track starts. By default it is the track's title. Set your own
     with  banner: "Words to show"  or hide it for one track with  banner: "".
       { title: "The Last Post", src: "audio/last-post.mp3",
         banner: "The Last Post – in memory of the fallen" },                */
  tracks: [
    { title: "O Canada",               src: "audio/o-canada.mp3" },
    { title: "The Last Post",          src: "audio/last-post.mp3" },
    { title: "Two Minutes of Silence", src: "audio/silence-2-minutes.mp3" },
    { title: "Rouse",                  src: "audio/rouse.mp3" }
  ],

  /* true  = each track starts the next one by itself.
     false = wait for someone to press Next. */
  autoContinue: false,

  /* true  = the audio stops when you switch to the Slideshow or Video tab.
     false = it keeps playing. */
  pauseAudioOnTabChange: true,

  /* Starting volume, from 0 (silent) to 1 (full). */
  volume: 0.8,

  /* ---------- PICTURE SLIDESHOW (shown on the audience screen) ----------
     While audio plays, the audience sees these pictures and words,
     fading from one to the next on their own. Each entry is either
       { src: "images/photo1.jpg", caption: "Optional caption" }   a picture
       { text: "Words to show", note: "Optional smaller line" }    words
     Upload your pictures into the images folder (see README.txt).
     Entries play in order and then start again from the top.
     Tip: add several pictures, since the silence lasts two minutes. */
  gallery: [
    { text: "Lest we forget" },
    { text: "Remembering all who served", note: "November 11" },
    { text: "Thank you to our veterans and to those who serve today" }
    /* , { src: "images/photo1.jpg", caption: "Optional caption" } */
  ],

  /* Seconds each picture or line stays on screen (3 or more). */
  galleryInterval: 10,

  /* Show the name of each track (for example "The Last Post") at the top
     of the audience screen for a few seconds when it starts. */
  showTrackTitle: true,

  /* How many seconds that name stays on screen (default 8). */
  bannerSeconds: 8,

  /* Size of the words and captions on the audience screen: 1 = normal,
     1.3 = bigger, 0.8 = smaller (from 0.5 to 2). */
  textScale: 1,

  /* Soft effects. They appear only on the AUDIENCE screen (and in Present
     mode), and only on the Audio tab. Set any to false to turn it off.
       petals     poppy petals drifting and fluttering down the screen
       embers     small warm lights, like candle sparks, rising slowly
       glow       a soft vignette and a slowly "breathing" red light
       slowZoom   pictures drift and zoom gently
       crossfade  seconds a fade between pictures takes
       intensity  how strong the effects are, 0.1 (barely there) to 1 (full)
     (Set respectReducedMotion: true below if you want computers that have
     animations turned off in their settings to get a still picture show.) */
  effects: { petals: true, embers: true, glow: true, slowZoom: true, crossfade: 1.6, intensity: 0.4 },
  respectReducedMotion: false,

  /* ---------- GOOGLE SLIDES ---------- */
  /* Google Slides link (the normal address-bar link works, as does a
     Publish to web link). Slides must be shared as "Anyone with the
     link" or published to the web. Leave "" to paste one on the page. */
  slidesUrl: "https://docs.google.com/presentation/d/14cuLkEGzFLnWPOxOr7ncvXK_RBAiV2kzn7F86Dw5Ig8/edit?slide=id.p#slide=id.p",

  /* OPTIONAL: show your slides as pictures instead of the Google embed.
     Then the presenter window gets Next / Previous buttons (and the arrow
     keys and space bar) that move the audience screen too.
     Export your slides as pictures, upload them to the slides folder, and
     list them here in order. Either list each one:
       slideImages: ["slides/slide1.jpg", "slides/slide2.jpg", "slides/slide3.jpg"],
     or, if they are numbered slide1, slide2, ... give a pattern and a count:
       slideImages: { pattern: "slides/slide{n}.jpg", count: 12 },
     Leave it as [] to use the Google Slides link above. */
  slideImages: [],

  /* OPTIONAL: use a PDF of your slides instead. In Google Slides choose
     File > Download > PDF document (.pdf), upload it to the slides folder,
     and put its name here. Each page becomes one slide, and the presenter
     window controls them just like slide pictures. Needs the lib folder
     (the PDF reader) to be uploaded too. If you have several PDFs, list them:
       slidesPdf: "slides/slides.pdf",
       slidesPdf: ["slides/part1.pdf", "slides/part2.pdf"],
     Leave it as "" to use the picture list or Google link. */
  slidesPdf: "slides/Remembrance day.pdf",

  /* How one slide changes to the next (for slide pictures and PDFs):
       "fade"   soft crossfade        "slide"  glides sideways
       "zoom"   gentle zoom in        "none"   instant */
  slideTransition: "fade",
  slideTransitionSeconds: 0.6,

  /* 0 = move through the slides yourself.
     A number, e.g. 15 = the slides move on by themselves every 15 seconds. */
  slidesAutoplaySeconds: 0,

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
