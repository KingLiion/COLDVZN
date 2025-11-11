# COLDVZN Portfolio - Customization Guide

## Übersicht

Diese Guideline erklärt, wie du dein Portfolio individuell anpassen kannst: Farben, Inhalte, 3D-Modelle, Bilder und mehr.

---

## 📋 Inhaltsverzeichnis

1. [Grundlegende Informationen ändern](#1-grundlegende-informationen-ändern)
2. [Farben anpassen](#2-farben-anpassen)
3. [3D-Modelle (GLB-Files) hinzufügen](#3-3d-modelle-glb-files-hinzufügen)
4. [Projekte hinzufügen/bearbeiten](#4-projekte-hinzufügenbearbeiten)
5. [Bilder austauschen](#5-bilder-austauschen)
6. [Navigation anpassen](#6-navigation-anpassen)
7. [About Me Sektion bearbeiten](#7-about-me-sektion-bearbeiten)
8. [Kontaktinformationen ändern](#8-kontaktinformationen-ändern)
9. [Animations-Effekte anpassen](#9-animations-effekte-anpassen)
10. [Erweiterte Anpassungen](#10-erweiterte-anpassungen)

---

## 1. Grundlegende Informationen ändern

### Markenname und Titel

**Datei:** `/components/LandingPage.tsx`

```tsx
// Zeile ~90-100
<h1 className="...">
  COLDVZN {/* ← Hier deinen Namen/Marke eintragen */}
</h1>;

// Zeile ~115-125 - Subtitles ändern
const subtitles = [
  "3D ARTIST", // ← Deine Titel
  "DESIGNER",
  "PHOTOGRAPHER",
];
```

### Footer-Informationen

**Datei:** `/components/LandingPage.tsx` (unten)

---

## 2. Farben anpassen

### Eisige Akzentfarben (Blau-Türkis)

**Datei:** `/styles/globals.css`

```css
/* Zeile ~121-130 */
--color-ice-100: #f0fdff; /* Hellstes Eis-Blau */
--color-ice-200: #d4f8ff; /* Helles Eis */
--color-ice-300: #a8f0ff; /* Medium Hell */
--color-ice-400: #64d2ff; /* Haupt-Akzent (Hover, Badges) */
--color-ice-500: #1ec8ff; /* Dunklerer Akzent */
--color-ice-600: #00a8e0; /* Dunkel */

--color-silver-200: #e5e7eb; /* Helles Silber */
--color-silver-400: #9ca3af; /* Medium Silber */
--color-silver-500: #6b7280; /* Dunkles Silber */
--color-silver-600: #4b5563; /* Sehr dunkel */
```

**So änderst du die Farben:**

1. Ersetze die HEX-Werte (#...) mit deinen Wunschfarben
2. `ice-400` wird für Hover-Effekte und Badges verwendet
3. `ice-200` bis `ice-400` werden für Farbverläufe verwendet

### Farbverläufe für Überschriften

**Verwendung in Komponenten:**

```tsx
className =
  "bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent";
```

**Beispiel - eigene Farben:**

```tsx
// Statt ice-200/400 kannst du auch direkte Farben nutzen:
style={{
  background: 'linear-gradient(to right, #FF6B6B, #4ECDC4, #FF6B6B)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}
```

---

## 3. 3D-Modelle (GLB-Files) hinzufügen

### Schritt 1: GLB-Files vorbereiten

1. Exportiere dein 3D-Modell als `.glb` oder `.gltf` aus Blender/Cinema4D/etc.
2. Optimiere die Dateigröße (empfohlen: < 5MB pro Modell)
3. Lade die Datei auf einen Hosting-Service hoch oder platziere sie in deinem Projekt

### Schritt 2: Modell-URLs in Projekten eintragen

**Datei:** `/components/Projects.tsx`

```tsx
// Zeile ~10-70
const galleryProjects = [
  {
    id: "neural-nexus",
    title: "Dein Projekt Name",
    subtitle: "Kurzbeschreibung",
    url: "DEINE_BILD_URL_HIER", // Vorschaubild
    model: "DEINE_GLB_MODEL_URL_HIER", // ← Hier GLB-File URL einfügen
    category: "Product Design",
    client: "Tech Corp",
    year: "2024",
    description: "Deine Projektbeschreibung...",
    challenge: "Die Herausforderung war...",
    solution: "Die Lösung bestand darin...",
    results: ["Ergebnis 1", "Ergebnis 2"],
    galleryImages: ["URL_ZU_BILD_1", "URL_ZU_BILD_2"],
    technologies: ["Blender", "Cinema4D"],
  },
];
```

### Schritt 3: GLB-File URLs

**Option A: Externes Hosting (empfohlen)**

```tsx
model: "https://cdn.example.com/models/your-model.glb";
```

**Option B: Sketchfab Embed**

```tsx
model: "https://sketchfab.com/3d-models/YOUR_MODEL_ID";
```

**Option C: GitHub Raw (für kleinere Files)**

```tsx
model: "https://raw.githubusercontent.com/DEIN_USER/DEIN_REPO/main/models/model.glb";
```

### 3D Viewer Einstellungen

**Datei:** `/components/Model3D.tsx`

```tsx
// Kamera-Position anpassen (Zeile ~50-60)
<PerspectiveCamera
  makeDefault
  position={[5, 3, 8]}      // [x, y, z] - Position der Kamera
  fov={45}                  // Field of View (Sichtfeld)
/>

// Beleuchtung anpassen (Zeile ~70-90)
<ambientLight intensity={0.5} />           // Umgebungslicht
<directionalLight position={[10, 10, 5]} intensity={1} />  // Gerichtetes Licht
<pointLight position={[-10, -10, -10]} intensity={0.3} />  // Punktlicht

// Auto-Rotation Geschwindigkeit (Zeile ~110)
useFrame((state, delta) => {
  if (meshRef.current && autoRotate) {
    meshRef.current.rotation.y += delta * 0.2;  // ← Geschwindigkeit anpassen
  }
});
```

---

## 4. Projekte hinzufügen/bearbeiten

### 3D Projects

**Datei:** `/components/Projects.tsx`

```tsx
const galleryProjects = [
  {
    id: "unique-id", // Eindeutige ID (kleingeschrieben, keine Leerzeichen)
    title: "Projekt Titel",
    subtitle: "Kurzbeschreibung",
    url: "VORSCHAUBILD_URL",
    model: "GLB_MODEL_URL",
    category: "Kategorie",
    client: "Kunde/Firma",
    year: "2024",
    description: "Vollständige Beschreibung des Projekts...",
    challenge: "Welches Problem sollte gelöst werden?",
    solution: "Wie hast du es gelöst?",
    results: ["Ergebnis 1", "Ergebnis 2", "Ergebnis 3"],
    galleryImages: [
      "URL_ZU_RENDER_1",
      "URL_ZU_RENDER_2",
      "URL_ZU_RENDER_3",
    ],
    technologies: ["Software 1", "Software 2"],
  },
  // Weiteres Projekt hier hinzufügen...
];
```

### Graphic Design Projects

**Datei:** `/components/GraphicDesign.tsx`

```tsx
const graphicDesignProjects = [
  {
    id: "unique-id",
    title: "Design Titel",
    subtitle: "Kurzbeschreibung",
    category: "Branding",
    image: "VORSCHAUBILD_URL",
  },
];
```

### Gallery 3D (Featured Projects)

**Datei:** `/components/Gallery3D.tsx`

```tsx
// Zeile ~15-35
const galleryProjects = [
  {
    id: "project-1",
    title: "Titel",
    subtitle: "Beschreibung",
    url: "BILD_URL",
  },
];
```

---

## 5. Bilder austauschen

### Unsplash API nutzen (automatisch)

Das Portfolio nutzt bereits Unsplash für Placeholder-Bilder. Keine Änderung nötig!

### Eigene Bilder verwenden

**Option A: ImageWithFallback Komponente**

```tsx
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

<ImageWithFallback
  src="https://deine-url.com/bild.jpg"
  alt="Beschreibung"
  className="w-full h-full object-cover"
/>;
```

**Option B: Standard img-Tag**

```tsx
<img
  src="URL_ZU_DEINEM_BILD"
  alt="Beschreibung"
  className="w-full h-full object-cover"
/>
```

### Photography Galerie

**Datei:** `/components/Photography.tsx`

```tsx
// Zeile ~10-100
const photographyImages = [
  {
    id: 1,
    url: "DEINE_FOTO_URL",
    title: "Foto Titel",
    category: "Landscape",
    description: "Beschreibung",
  },
];
```

### About Me Profilbild

**Datei:** `/components/About.tsx`

```tsx
// Zeile ~70-90
<img
  src="DEIN_PROFILBILD_URL"
  alt="Dein Name"
  className="..."
/>
```

---

## 6. Navigation anpassen

### Menüpunkte ändern

**Datei:** `/components/Navigation.tsx`

```tsx
// Zeile ~15-25
const menuItems = [
  { id: "home", label: "Home" },
  { id: "3d-projects", label: "3D" },
  { id: "graphic-design", label: "Design" },
  { id: "photography", label: "Photos" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
```

**Neuen Menüpunkt hinzufügen:**

1. Füge ein neues Objekt in `menuItems` hinzu
2. Erstelle eine neue Sektion mit der entsprechenden `id` in deiner Komponente:

```tsx
<section id="new-section" className="...">
  {/* Dein Inhalt */}
</section>
```

### Mobile Navigation (Burger Menu)

Zeile ~130-200 - Icons und Labels ändern

---

## 7. About Me Sektion bearbeiten

**Datei:** `/components/About.tsx`

### Einleitungstext

```tsx
// Zeile ~140-155
<p className="text-white/80 mb-6">
  Hier steht deine persönliche Geschichte...
</p>
```

### Skills hinzufügen/ändern

```tsx
// Zeile ~20-80
const skills = [
  {
    category: "Deine Skill-Kategorie",
    icon: Package, // Lucide-React Icon
    items: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

**Verfügbare Icons:** Importiere von `lucide-react`

```tsx
import {
  Package,
  Palette,
  Camera,
  Code,
  Sparkles,
} from "lucide-react";
```

### Timeline (Berufsweg)

```tsx
const experience = [
  {
    year: "2023 - Heute",
    title: "Deine Position",
    company: "Firma/Freelance",
    description: "Was du machst...",
  },
];
```

### Timeline (Bildungsweg)

```tsx
const education = [
  {
    year: "2020 - 2024",
    title: "Dein Abschluss",
    company: "Institution",
    description: "Details...",
  },
];
```

---

## 8. Kontaktinformationen ändern

**Datei:** `/components/Contact.tsx`

### Email & Telefon

```tsx
// Zeile ~5-10
const contactInfo = {
  email: "deine@email.com",
  phone: "+49 123 456789",
  location: "Deine Stadt, Land",
};
```

### Social Media Links

```tsx
// Zeile ~15-40
const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/DEIN_HANDLE",
    icon: Instagram,
    color: "#E4405F",
  },
  {
    name: "Behance",
    url: "https://behance.net/DEIN_USERNAME",
    icon: Globe,
    color: "#1769FF",
  },
  // Weitere hinzufügen...
];
```

**Neues Social Media hinzufügen:**

```tsx
import { Twitter } from 'lucide-react';  // Icon importieren

{
  name: 'Twitter',
  url: 'https://twitter.com/DEIN_HANDLE',
  icon: Twitter,
  color: '#1DA1F2'
}
```

---

## 9. Animations-Effekte anpassen

### Motion/Framer Motion Animationen

**Fade In (Einblenden)**

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }} // Start: unsichtbar, 30px unten
  whileInView={{ opacity: 1, y: 0 }} // Ende: sichtbar, Position 0
  viewport={{ once: true }} // Nur einmal abspielen
  transition={{ duration: 0.8 }} // 0.8 Sekunden Dauer
>
  Dein Inhalt
</motion.div>
```

**Hover-Effekte**

```tsx
<motion.div
  whileHover={{
    scale: 1.05, // 5% größer
    y: -5, // 5px nach oben
  }}
  transition={{ duration: 0.3 }}
>
  Dein Element
</motion.div>
```

**Geschwindigkeit ändern:**

- `duration: 0.3` = Schnell
- `duration: 0.8` = Normal
- `duration: 1.5` = Langsam

### Parallax-Effekte

**Datei:** `/components/FloatingMesh.tsx`

```tsx
// Zeile ~140-165
animate={{
  rotate: 360,
  scale: [1, 1.1, 1]
}}
transition={{
  duration: 20,    // ← Rotationsgeschwindigkeit (höher = langsamer)
  repeat: Infinity,
  ease: 'linear'
}}
```

---

## 10. Erweiterte Anpassungen

### Überschriften-Größen

Alle Hauptüberschriften nutzen:

```tsx
style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
```

**Bedeutung:**

- `2.5rem` = Minimale Größe (mobil)
- `6vw` = Responsive Größe (basierend auf Viewport-Breite)
- `4rem` = Maximale Größe (desktop)

**Anpassen:**

```tsx
style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}  // Kleiner
style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}    // Größer
```

### Glassmorphism-Effekte

```tsx
className =
  "backdrop-blur-md bg-white/10 border border-white/20";
```

**Stärke anpassen:**

- `backdrop-blur-sm` = Leicht
- `backdrop-blur-md` = Medium
- `backdrop-blur-lg` = Stark
- `backdrop-blur-xl` = Sehr stark

### Hover-Card Effekt wie Menüleiste

**Datei:** `/components/HoverCard.tsx`

- Der Effekt nutzt einen eisigen Gradient mit Glow
- Wird automatisch bei allen Projektkarten verwendet

### Responsive Breakpoints

```tsx
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
```

**Tailwind Breakpoints:**

- `sm:` = 640px+
- `md:` = 768px+
- `lg:` = 1024px+
- `xl:` = 1280px+
- `2xl:` = 1536px+

---

## 🎨 Schnell-Referenz: Häufige Änderungen

| Was                 | Datei           | Zeile (ca.) |
| ------------------- | --------------- | ----------- |
| Markenname          | LandingPage.tsx | 90-100      |
| Farben (Eis/Akzent) | globals.css     | 121-130     |
| 3D-Modelle          | Projects.tsx    | 10-70       |
| Projekte            | Projects.tsx    | 10-70       |
| Fotos               | Photography.tsx | 10-100      |
| About Text          | About.tsx       | 140-160     |
| Skills              | About.tsx       | 20-80       |
| Email/Telefon       | Contact.tsx     | 5-10        |
| Social Media        | Contact.tsx     | 15-40       |
| Navigation          | Navigation.tsx  | 15-25       |

---

## 🚀 Deployment Tipps

### Vor dem Deployment:

1. **Bilder optimieren:** Nutze WebP-Format für bessere Performance
2. **3D-Modelle:** Komprimiere GLB-Files (max 5MB empfohlen)
3. **URLs prüfen:** Stelle sicher, alle externen Links funktionieren
4. **Mobile testen:** Prüfe die Seite auf verschiedenen Bildschirmgrößen

### Empfohlene Hosting-Services:

- **Vercel** (empfohlen für React/Next.js)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### 3D-Model Hosting:

- **Sketchfab** (kostenlos, mit Viewer)
- **GitHub** (für kleine Files)
- **Cloudinary** (CDN mit Optimierung)
- **AWS S3** (professionell)

---

## 📞 Support

Bei Fragen oder Problemen:

1. Prüfe diese Guideline nochmal
2. Schaue in die Kommentare im Code
3. Suche nach ähnlichen Komponenten als Beispiel

**Wichtige Hinweise:**

- Immer Backup erstellen vor großen Änderungen
- Teste Änderungen lokal vor dem Deployment
- Nutze Browser-DevTools zum Debuggen
- Achte auf Konsolen-Fehler

---

**Version:** 1.0  
**Letzte Aktualisierung:** November 2025  
**Portfolio-Template:** COLDVZN by COLDVZN