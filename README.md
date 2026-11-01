# A Little World of You ❤️
### *A Premium Cinematic Romantic Experience*

This website is a handcrafted, cinematic digital universe designed to make her feel cherished, appreciated, and loved under a dreamy midnight sky.

---

## ✨ Features & Sections

- **Theme: Midnight Romance** — Deep midnight navy (`#080D1B`), lavender accents (`#C8B7F0`), blush pink (`#F0BFD0`), moonlight silver (`#E6E8F0`), and warm white.
- **Section 01 — The Opening Experience**: Luminous breathing moon, twinkling stars canvas, gentle moving clouds, and curiosity-sparking greeting.
- **Section 02 — The Little Envelope**: Interactive 3D wax-sealed envelope that opens to reveal an introductory letter.
- **Section 03 — Her Little World (Gallery)**: Curated editorial portraits, polaroids with handwritten captions, and film frames with full-screen interactive lightbox (touch swipe + keyboard navigation).
- **Section 04 — A Little Appreciation**: 5 glassmorphic cards revealing heartfelt reminders.
- **Section 05 — Our Little Memory**: Dedicated museum-grade frame for your special photograph together.
- **Section 06 — A Letter From Me**: Translucent warm parchment letter revealing your heartfelt message paragraph by paragraph.
- **Section 07 — The Final Surprise**: 4-part progressive midnight climax culminating in the luminous "I LOVE YOUUU! ❤️" declaration and Good Night message.
- **Section 08 — One Last Little Thing**: Interactive finale revealing the parting reminder and peaceful moon animation.
- **Dreamy Background Music**: Floating player with real audio playback (`/audio/background-music.mp3`) plus an integrated Web Audio API celestial chime synthesizer fallback that plays soothing music even before you upload an MP3!

---

## 📸 Adding Your Photos

### 1. Her Photographs
Place her 4 to 10 photos inside:
```
public/images/her/
  her-01.jpg
  her-02.jpg
  her-03.jpg
  ...
  her-10.jpg
```
*(Supports `.jpg`, `.png`, `.webp`)*

### 2. Your Shared Photograph
Place the photo of you two together inside:
```
public/images/us/
  our-memory.jpg
```

### 3. Customizing Captions & Order
Open `src/data/galleryData.js` to change captions, reorder photos, or add quotes.

---

## 🎵 Adding Custom Music

Place your romantic instrumental track inside:
```
public/audio/
  background-music.mp3
```
*If you haven't added an MP3 yet, the built-in ambient sound generator will automatically play soft, romantic chords.*

---

## 🚀 Running Locally

1. Open your terminal in this project folder:
   ```bash
   npm run dev
   ```
2. Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser or phone!

---

## 🌐 Deploying to Vercel (1-Click)

1. Install the Vercel CLI or connect your Git repository:
   ```bash
   npx vercel
   ```
2. Follow the prompt to deploy. `vercel.json` is already configured for instant deployment!

---

*Made with lots of love, just for her. ❤️*

