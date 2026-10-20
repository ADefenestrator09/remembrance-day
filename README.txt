REMEMBRANCE DAY PAGE
====================

WHAT'S IN THE FOLDER
  index.html   The page itself. You normally never need to edit this.
  config.js    ALL the settings (text, tracks, pictures, slideshow, video).
  audio/       The mp3 files.
  images/      Your pictures for the audience slideshow (see below).
  slides/      Optional. Your slides exported as pictures (see slideImages).
  video/       Optional. Create this folder yourself if you want to play a
               video file instead of a YouTube link.
  favicon.svg  The poppy icon on the browser tab.
  README.txt   This guide.


PUTTING IT ON GITHUB PAGES
  1. Unzip this folder on your computer.
  2. In your GitHub repository choose Add file > Upload files and drag in
     index.html, config.js, favicon.svg and the audio and images folders
     (plus a video folder if you use one). Commit the changes.
  3. Settings > Pages > Deploy from a branch > main > /(root) > Save.
  4. Open https://adefenestrator09.github.io/remembrance-day/ after a minute or two.

  Open the website address, not the index.html file on your computer.
  YouTube refuses to play inside a page that was opened as a local file
  (it shows "Error 153").


PRESENTING: THE PRESENTER AND THE AUDIENCE
  The page you control is the PRESENTER screen. What the room sees is the
  AUDIENCE screen: a slideshow of your pictures while the audio plays,
  instead of the player and the file names. There are two ways to do it.
  Both are in the top-right corner of the tab row.

  A) Audience button: two screens (laptop + projector set to "extend")
     1. Open the site and run the audio check (or press Skip).
     2. Press Audience. A second window opens. Drag it onto the projector
        and click once anywhere inside it: it goes full screen.
        (Allow pop-ups for the site if the browser blocks the window.)
     3. Keep working in the presenter window. The audience window follows
        you: the Audio tab shows the picture slideshow, the Slideshow tab
        shows your slides, the Video tab shows the video.
     4. On the Slideshow tab: if you use slide pictures (slideImages), use
        the Next / Previous buttons, the arrow keys or Space in the
        presenter window and the audience screen follows. With only a
        Google Slides link, click the slides on the audience screen and use
        the arrow keys there. On the Video tab, use the Play and Pause
        buttons in the presenter window.
     5. The Audience button shows a green dot while the two windows are
        linked. Closing the audience window puts everything back on the
        presenter screen.
     Both windows must be in the same browser on the same computer.

  B) Present button: one screen (or a projector that mirrors the laptop)
     Press Present. This window fills the screen with the slideshow and
     hides the controls. Move the mouse to bring up a small control bar
     (previous, play, next, switch tab, exit). Esc or the X leaves it.

  Keyboard shortcuts (on either screen)
     Space       play / pause the audio (next slide on the Slideshow tab
                 when slide pictures are used)
     Right/Left  next / previous track (slides on the Slideshow tab)
     1, 2, 3     Audio / Slideshow / Video tab
     F           full screen (on the audience screen)
     Esc         leave Present mode


CHANGING A SETTING
  1. In your repository on github.com, click config.js.
  2. Click the pencil icon (Edit this file).
  3. Change the value, keeping the quotation marks and commas as they are.
  4. Click Commit changes. The live site updates in a minute or two
     (press Ctrl+F5 on the site to see it straight away).


CUSTOMIZATION SETTINGS (all in config.js)

  title          The heading and the browser-tab name.
                 Example:  title: "Service of Remembrance",

  subtitle       The small line under the heading. Use "" for none.
                 Example:  subtitle: "We will remember them",

  tracks         The audio, in playing order. Each line is:
                   { title: "Name shown on screen", src: "audio/file.mp3" },
                 - Reorder: move the lines up or down.
                 - Rename: change the title.
                 - Replace a recording: upload the new mp3 into the audio
                   folder (use the same file name to replace it, or a new
                   name and update "src" to match).
                 - Add a track: copy a line and change it. The last line
                   in the list has no comma after it.
                 - Remove a track: delete its line.
                 - Different banner words for one track: add
                   banner: "Words to show" to its line (banner: "" hides
                   it for that track). The default is the track's title.
                 - Different pictures for one track: add  gallery: [ ... ]
                   (and optionally  interval: 15 ) to that track's line.
                   Example, for the two minutes of silence:
                   { title: "Two Minutes of Silence",
                     src: "audio/silence-2-minutes.mp3",
                     gallery: [ { src: "images/s1.jpg" }, { src: "images/s2.jpg" } ],
                     interval: 15 },

  autoContinue   true  = each track starts the next one by itself.
                 false = wait for someone to press Next.
                 (The tick box on the page can still be changed on the day.)

  volume         Starting volume from 0 (silent) to 1 (full). Example: 0.8

  gallery        The pictures and words shown on the audience screen while
                 the audio plays. Each entry is one of:
                   { src: "images/photo1.jpg", caption: "Optional caption" }
                   { text: "Words to show", note: "Optional smaller line" }
                 They play in order and then start again. To add pictures,
                 upload them into the images folder (Add file > Upload
                 files) and add a line for each one. Names must match
                 exactly. About 1920 pixels wide and under 1 MB each is
                 plenty. Pictures that are tall or wide are shown whole,
                 on a soft blurred backdrop, and are never cropped. A
                 picture that can't be found is skipped.
                 Only add pictures you are allowed to share, because the
                 repository is public.
                 The two minutes of silence is long, so add plenty of
                 entries (at 10 seconds each, 12 of them fill it).

  galleryInterval  Seconds each picture or line stays on screen (3 or more).

  bannerSeconds    How long that name stays on screen (default 8).

  textScale        Size of the words and captions on the audience screen:
                   1 = normal, 1.3 = bigger, 0.8 = smaller (0.5 to 2).

  showTrackTitle   true  = the name of each track (for example "The Last
                           Post") appears at the top of the audience screen
                           for a few seconds when it starts.
                   false = never show it.

  effects        Soft effects, shown only on the audience screen (and in
                 Present mode) on the Audio tab. Set any to false to turn
                 it off:
                   petals     poppy petals drifting and fluttering down
                   embers     small warm lights rising like candle sparks
                   glow       a soft vignette and a slowly breathing red light
                   slowZoom   pictures drift and zoom very slightly
                   crossfade  seconds a fade between pictures takes
                   intensity  how strong the effects are: 0.1 (barely there)
                              to 1 (full). The default is 0.4.

  respectReducedMotion   false (default) = the effects always run, even on a
                 computer with "animation effects" turned off in its
                 settings (common on school computers, and the usual reason
                 effects seem to be missing).
                 true = those computers get a still picture show instead.

  slidesUrl      Your Google Slides link. The normal link from the address
                 bar works. The slides must be shared as "Anyone with the
                 link" or published to the web (File > Share > Publish to
                 web). Use "" to leave the slideshow tab empty.

  slideImages    OPTIONAL. Show your slides as pictures so you can move
                 them from the presenter window.
                 1. In Google Slides choose File > Download > PNG or JPEG
                    image (current slide), or use File > Download > PDF and
                    convert the pages to pictures, so each slide is one
                    picture.
                 2. Upload them into the slides folder.
                 3. List them in order:
                      slideImages: ["slides/slide1.jpg", "slides/slide2.jpg"],
                    or, if they are named slide1, slide2, ... :
                      slideImages: { pattern: "slides/slide{n}.jpg", count: 12 },
                 Leave it as [] to use the Google Slides link instead.
                 Pictures don't keep animations or embedded video, and you
                 need to export again if you change the deck.

  slidesAutoplaySeconds   0 = you move through the slides yourself.
                 A number such as 15 = the slides move on by themselves
                 every 15 seconds.

  videos         The list of videos on the Video tab. Each line is:
                   { title: "Name on the button", src: "link or file" },
                 "src" can be:
                 - a YouTube link (add &t=10s to start at 10 seconds)
                 - a Google Drive video link
                 - a video file in the video folder, e.g. "video/talk.mp4"
                 Add more lines to add more videos. With two or more, a row
                 of buttons appears above the video so you can switch
                 between them (the first one loads automatically). With one
                 video there are no buttons. Use  videos: [],  to leave the
                 tab empty so a video can be chosen on the page.
                 Example with three videos:
                   videos: [
                     { title: "Introduction", src: "https://youtu.be/XXXXXXXXXXX" },
                     { title: "Ceremony",     src: "video/ceremony.mp4" },
                     { title: "Tribute",      src: "https://youtu.be/YYYYYYYYYYY" }
                   ]
                 mp4 files (H.264) play in every common browser.


BEFORE THE EVENT
  - Open the live site once on the exact computer and speakers or projector
    you will use, press Play test tone, and check all three tabs.
  - If you will use the Audience button, try it with the projector plugged
    in, and check that the audience window can go full screen on it.
  - The slideshow and YouTube video need an internet connection. The Audio
    tab, including the picture slideshow, works offline once the page has
    loaded.
  - Clicking a track in the list only selects it; press Play (or Space) to
    start it.
  - Keep the computer awake while the page is open (check the power and
    sleep settings), especially for the two minutes of silence.
  - Use the fullscreen icon (top right of the tab row) on the Slideshow or
    Video tab to fill the screen when you are not using the audience screen.


IF SOMETHING GOES WRONG
  "No audio tracks found"   config.js is missing or has a typo. Check that
                            it is next to index.html and every { } line
                            ends with a comma except the last one.
  A track won't play        The file name in config.js must match the file
                            in the audio folder exactly, including capitals.
  A picture doesn't show    The name in config.js must match the file in the
                            images folder exactly, including capitals and
                            the .jpg or .png ending. (Missing pictures are
                            skipped, so check the rest of the list.)
  Video shows Error 153     You opened the file from your computer. Use the
                            website address instead.
  Slides or video blocked   Some school networks or preview windows block
                            embedded content. Open the site in a normal
                            Chrome or Edge tab.
  The audience window       Allow pop-ups for the site, then press the
  doesn't open              Audience button again.
  The audience screen       Make sure both windows are in the same browser
  shows nothing new         on the same computer, then close the audience
                            window and press Audience again.
  Changes don't appear      Wait a couple of minutes, then press Ctrl+F5.
