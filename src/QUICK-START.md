# COLDVZN Portfolio - Quick Start Guide

## 🚀 In 10 Minuten startklar!

Diese Anleitung bringt dich schnell zum ersten personalisierten Portfolio.

---

## Schritt 1: Grundlegende Informationen (5 Min)

### 1.1 Name und Titel ändern

📁 **Datei:** `/components/LandingPage.tsx`

Suche nach "COLDVZN" und ersetze es mit deinem Namen:

```tsx
<h1 className="...">DEIN_NAME {/* ← Hier ändern */}</h1>
```

Ändere die Berufsbezeichnungen (ca. Zeile 115):

```tsx
const subtitles = [
  "DEIN TITEL 1",
  "DEIN TITEL 2",
  "DEIN TITEL 3",
];
```

### 1.2 Kontaktinformationen

📁 **Datei:** `/components/Contact.tsx`

```tsx
const contactInfo = {
  email: "deine@email.com",
  phone: "+49 123 456789",
  location: "Deine Stadt",
};
```

Social Media Links (ca. Zeile 15):

```tsx
const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/DEIN_HANDLE", // ← Ändern
    // ...
  },
];
```

---

## Schritt 2: Eigene Projekte hinzufügen (5 Min)

### 2.1 3D-Projekt hinzufügen

📁 **Datei:** `/components/Projects.tsx`

```tsx
const galleryProjects = [
  {
    id: "mein-erstes-projekt", // Eindeutig, kleingeschrieben
    title: "Mein Projekt",
    subtitle: "Kurzbeschreibung",
    url: "https://images.unsplash.com/photo-1234567890", // Vorschaubild
    model: "https://deine-url.com/model.glb", // 3D-Modell (optional)
    category: "Product Design",
    client: "Kunde",
    year: "2024",
    description: "Vollständige Projektbeschreibung...",
    challenge: "Was war die Herausforderung?",
    solution: "Wie hast du sie gelöst?",
    results: ["Ergebnis 1", "Ergebnis 2"],
    galleryImages: [
      "https://images.unsplash.com/photo-1",
      "https://images.unsplash.com/photo-2",
    ],
    technologies: ["Blender", "Cinema4D"],
  },
  // Weiteres Projekt...
];
```

### 2.2 Featured Gallery aktualisieren

📁 **Datei:** `/components/Gallery3D.tsx`

```tsx
const galleryProjects = [
  {
    id: "projekt-1",
    title: "Projekt Name",
    subtitle: "Beschreibung",
    url: "BILD_URL",
  },
];
```

---

## Schritt 3: About Me personalisieren (2 Min)

📁 **Datei:** `/components/About.tsx`

### 3.1 Profilbild ändern

```tsx
<img
  src="https://dein-profilbild-url.com/foto.jpg" // ← Hier ändern
  alt="Dein Name"
/>
```

### 3.2 Über mich Text

```tsx
<p className="text-white/80 mb-6">
  Schreibe hier über dich, deine Leidenschaft und Erfahrung...
</p>
```

### 3.3 Skills anpassen

```tsx
const skills = [
  {
    category: "3D & Motion",
    icon: Package,
    items: ["Blender", "Cinema4D", "After Effects"],
  },
  {
    category: "Design",
    icon: Palette,
    items: ["Figma", "Photoshop", "Illustrator"],
  },
];
```

---

## Schritt 4: GLB 3D-Modelle verwenden (Optional)

### 4.1 GLB-File vorbereiten

1. Exportiere dein 3D-Modell als `.glb` aus Blender/C4D
2. Optimiere die Dateigröße (empfohlen < 5MB)

### 4.2 GLB hochladen

**Option A: Sketchfab (Kostenlos & Einfach)**

1. Gehe zu [sketchfab.com](https://sketchfab.com)
2. Erstelle Account (kostenlos)
3. Upload dein GLB-Modell
4. Klicke auf "Download" → "Original" → Kopiere die URL

**Option B: GitHub**

1. Erstelle einen Ordner `/public/models` in deinem Projekt
2. Lege die `.glb` Datei dort ab
3. URL ist dann: `/models/dein-modell.glb`

### 4.3 GLB in Projekt einbinden

📁 **Datei:** `/components/Projects.tsx`

```tsx
{
  id: 'mein-projekt',
  // ... andere Felder
  model: 'https://sketchfab.com/models/XXX/download',  // ← GLB URL
  // oder
  model: '/models/mein-modell.glb',  // Lokale Datei
}
```

---

## Schritt 5: Farben anpassen (Optional)

📁 **Datei:** `/styles/globals.css`

```css
/* Zeile ~121-130 */

/* Hauptfarbe (Hover, Badges, etc.) */
--color-ice-400: #64d2ff; /* ← Hier deine Akzentfarbe */

/* Heller für Verläufe */
--color-ice-200: #d4f8ff;

/* Dunkler für Schatten */
--color-ice-500: #1ec8ff;
```

**Farbpaletten-Tools:**

- [coolors.co](https://coolors.co) - Farbpaletten Generator
- [realtime colors](https://realtimecolors.com) - Live Preview

---

## Schritt 6: Bilder hinzufügen

### Unsplash (Automatisch)

Das Portfolio nutzt bereits Unsplash API - einfach die Suchwörter in den Komponenten ändern!

### Eigene Bilder

**Empfohlene Services:**

- [Cloudinary](https://cloudinary.com) - Kostenloser Plan
- [Imgur](https://imgur.com) - Einfach & Schnell
- GitHub Repository

**Verwendung:**

```tsx
<img
  src="https://deine-image-url.com/bild.jpg"
  alt="Beschreibung"
  className="w-full h-full object-cover"
/>
```

---

## ✅ Checkliste vor dem Launch

- [ ] Name und Titel geändert
- [ ] Kontaktinformationen aktualisiert
- [ ] Social Media Links angepasst
- [ ] Mindestens 3 Projekte hinzugefügt
- [ ] About Me Text personalisiert
- [ ] Profilbild ausgetauscht
- [ ] Skills angepasst
- [ ] Alle externen Links getestet
- [ ] Mobile Version getestet
- [ ] 3D-Modelle laden korrekt (falls verwendet)

---

## 🎯 Nächste Schritte (Später)

### Erweitert:

1. **Mehr Projekte:** Füge weitere Case Studies hinzu
2. **Photography:** Fülle die Foto-Galerie mit eigenen Bildern
3. **Graphic Design:** Ergänze Branding-Projekte
4. **Animationen:** Passe Geschwindigkeiten an (siehe [CUSTOMIZATION-GUIDE.md](./CUSTOMIZATION-GUIDE.md))

### Performance:

1. **Bilder optimieren:** Nutze WebP-Format
2. **GLB komprimieren:** Nutze [glTF-Transform](https://gltf-transform.donmccurdy.com/)
3. **Lazy Loading:** Für große Galerien

---

## 🚀 Deployment

### Vercel (Empfohlen - Kostenlos)

1. Erstelle Account auf [vercel.com](https://vercel.com)
2. Verbinde dein GitHub Repository
3. Klicke "Deploy"
4. Fertig! 🎉

### Netlify

1. Erstelle Account auf [netlify.com](https://netlify.com)
2. Drag & Drop deinen Build-Ordner
3. Oder verbinde GitHub Repository

---

## 💡 Tipps & Tricks

### Schnelle Bildsuche:

```
Unsplash: https://unsplash.com/s/photos/SUCHBEGRIFF
Pexels: https://pexels.com/search/SUCHBEGRIFF
```

### 3D-Modell kostenlos finden:

```
Sketchfab: https://sketchfab.com/feed (Free Downloads)
Poly Pizza: https://poly.pizza
```

### Icons:

Das Portfolio nutzt [Lucide Icons](https://lucide.dev/icons/)

```tsx
import { Star, Heart, Camera } from "lucide-react";
```

---

## 🆘 Häufige Probleme

### "3D-Modell lädt nicht"

- ✅ Prüfe GLB-URL im Browser
- ✅ Max. 10MB Dateigröße
- ✅ CORS aktiviert beim Hosting

### "Bilder werden nicht angezeigt"

- ✅ URL korrekt kopiert?
- ✅ HTTPS-URL verwenden
- ✅ Bild ist öffentlich zugänglich

### "Farben ändern sich nicht"

- ✅ Cache leeren (Strg + F5)
- ✅ Richtige CSS-Variable geändert?
- ✅ Tailwind-Klassen verwenden `text-ice-400`

---

## 📚 Weiterführende Guides

- **[CUSTOMIZATION-GUIDE.md](./CUSTOMIZATION-GUIDE.md)** - Vollständige Anpassungs-Anleitung
- **[Deployment Guide](#)** - Detailliertes Deployment
- **[Performance Guide](#)** - Optimierung & Best Practices

---

## 🎨 Beispiel-Workflow

```
1. Fork/Clone Repository
   ↓
2. Ändere Grundinfo (Name, Email)
   ↓
3. Füge 1-2 Test-Projekte hinzu
   ↓
4. Teste lokal mit `npm run dev`
   ↓
5. Passe Farben an (optional)
   ↓
6. Deploy auf Vercel
   ↓
7. Teile dein Portfolio! 🚀
```

---

**Geschätzte Zeit:** 10-15 Minuten für Basis-Setup  
**Viel Erfolg mit deinem Portfolio!** 🎉

Bei Fragen: Siehe [CUSTOMIZATION-GUIDE.md](./CUSTOMIZATION-GUIDE.md)