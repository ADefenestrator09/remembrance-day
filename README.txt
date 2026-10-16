REMEMBRANCE DAY PAGE
====================

WHAT'S IN THE FOLDER
  index.html   The page itself. You normally never need to edit this.
  config.js    ALL the settings (look, text, tracks, slideshow, video).
  audio/       The mp3 files.
  video/       Optional. Create this folder yourself if you want to play a
               video file instead of a YouTube link.
  README.txt   This guide.


PUTTING IT ON GITHUB PAGES
  1. Unzip this folder on your computer.
  2. In your GitHub repository choose Add file > Upload files and drag in
     index.html, config.js and the audio folder (plus a video folder if
     you use one). Commit the changes.
  3. Settings > Pages > Deploy from a branch > main > /(root) > Save.
  4. Open https://YOUR-USERNAME.github.io/YOUR-REPO/ after a minute or two.

  Open the website address, not the index.html file on your computer.
  YouTube refuses to play inside a page that was opened as a local file
  (it shows "Error 153").


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

  theme          The look of the page. One of:
                   "classic"  dark, poppies in the bottom corners
                   "field"    dark, a quiet grassy field with a few poppies
                   "paper"    warm parchment with an inked border
                   "vigil"    night sky with stars and candlelight
                   "maple"    deep red with a faint maple leaf
                 To try one without changing anything, add ?theme=NAME to
                 the end of the web address, for example:
                   https://YOUR-USERNAME.github.io/YOUR-REPO/?theme=paper

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

  autoContinue   true  = each track starts the next one by itself.
                 false = wait for someone to press Next.
                 (The tick box on the page can still be changed on the day.)

  volume         Starting volume from 0 (silent) to 1 (full). Example: 0.8

  slidesUrl      Your Google Slides link. The normal link from the address
                 bar works. The slides must be shared as "Anyone with the
                 link" or published to the web (File > Share > Publish to
                 web). Use "" to leave the slideshow tab empty.

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
  - The slideshow and YouTube video need an internet connection. The Audio
    tab works fully offline once the page has loaded.
  - Use the fullscreen icon (top right of the tab row) on the Slideshow or
    Video tab to fill the screen.


IF SOMETHING GOES WRONG
  "No audio tracks found"   config.js is missing or has a typo. Check that
                            it is next to index.html and every { } line
                            ends with a comma except the last one.
  A track won't play        The file name in config.js must match the file
                            in the audio folder exactly, including capitals.
  Video shows Error 153     You opened the file from your computer. Use the
                            website address instead.
  Slides or video blocked   Some school networks or preview windows block
                            embedded content. Open the site in a normal
                            Chrome or Edge tab.
  Changes don't appear      Wait a couple of minutes, then press Ctrl+F5.
