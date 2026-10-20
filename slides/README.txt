PUT YOUR SLIDE PICTURES HERE
============================

Only needed if you want to run the slides from the presenter window
(Next / Previous buttons) instead of using the Google Slides embed.

1. In Google Slides: File > Download > PDF document.
2. Turn the PDF into pictures, one per slide, named slide1.jpg, slide2.jpg ...
   (a free "PDF to JPG" website or app works, or ask Claude to do it for you).
3. Upload the pictures into this folder.
4. In config.js set, for example (12 slides):

     slideImages: { pattern: "slides/slide{n}.jpg", count: 12 },

Tip: 1920 pixels wide and under 1 MB each is plenty.
Animations and embedded videos in Google Slides do not carry over.
