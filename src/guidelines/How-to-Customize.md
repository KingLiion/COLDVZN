# 🎨 So passt du deine Portfolio-Seite an

## 📝 Texte ändern

### Willkommenstext (Hero-Bereich)
Öffne `/components/Gallery3D.tsx` und suche nach den Kommentaren `⭐ HIER KANNST DU...`

```tsx
// Zeile ~44-58
<motion.h1 className="text-white" ...>
  Willkommen  {/* ⭐ ÄNDERE HIER */}
</motion.h1>
<motion.p className="text-white/60" ...>
  Entdecke meine kreativen Projekte  {/* ⭐ ÄNDERE HIER */}
</motion.p>
```

### Text unter den Karten
```tsx
// Zeile ~145-180 in Gallery3D.tsx
<span className="text-white/40">Portfolio 2025</span>  {/* ⭐ ÄNDERE HIER */}
<h2 className="text-white">Creative Excellence</h2>  {/* ⭐ ÄNDERE HIER */}
<p className="text-white/60">
  Crafting immersive digital experiences...  {/* ⭐ ÄNDERE HIER */}
</p>
```

### Button-Texte
```tsx
// Zeile ~185-195 in Gallery3D.tsx
<button>Explore Work</button>  {/* ⭐ ÄNDERE HIER */}
<button>Get in Touch</button>  {/* ⭐ ÄNDERE HIER */}
```

---

## 🖼️ Bilder ändern

### Galerie-Bilder
Öffne `/components/Gallery3D.tsx` (Zeile ~7-30):

```tsx
const galleryImages = [
  {
    url: 'DEINE-BILD-URL-HIER',  // ⭐ Ersetze mit deiner Bild-URL
    title: 'Dein Projekttitel',  // ⭐ Dein Titel
    subtitle: 'Dein Untertitel',  // ⭐ Dein Untertitel
  },
  // Füge weitere Bilder hinzu...
];
```

### Lokale Bilder verwenden
1. Erstelle einen Ordner `/public/images`
2. Lege deine Bilder dort ab (z.B. `project1.jpg`)
3. Verwende den Pfad: `/images/project1.jpg`

```tsx
const galleryImages = [
  {
    url: '/images/project1.jpg',  // ⭐ Lokales Bild
    title: 'Mein Projekt',
    subtitle: 'Design 2025',
  },
];
```

---

## 🎯 Projekt-Karten ändern

### 3D Projects Sektion
Öffne `/components/Projects.tsx`:

```tsx
const projects = [
  {
    title: 'Dein Projekt Name',  // ⭐ ÄNDERE HIER
    category: '3D Design',
    image: 'DEINE-BILD-URL',  // ⭐ ÄNDERE HIER
  },
  // Weitere Projekte hinzufügen...
];
```

---

## 🎨 Navigation ändern

### Menü-Punkte anpassen
Öffne `/components/Navigation.tsx` (Zeile ~5-11):

```tsx
const menuItems = [
  { id: 'home', label: 'Home' },          // ⭐ ÄNDERE "Home"
  { id: '3d-projects', label: '3D Projects' },  // ⭐ ÄNDERE "3D Projects"
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'photography', label: 'Photography' },
  { id: 'about', label: 'About Me' },
];
```

**Wichtig:** Die `id` muss mit der Sektion-ID übereinstimmen!

---

## 👤 About Me Sektion

Öffne `/components/About.tsx`:

```tsx
// Dein Name
<h2>Dein Name</h2>

// Deine Beschreibung
<p>Hier steht deine persönliche Beschreibung...</p>

// Deine Skills
const skills = ['Skill 1', 'Skill 2', 'Skill 3'];
```

---

## 🎨 Farben anpassen

### Gold-Farben ändern
Öffne `/styles/globals.css` (Zeile ~121-125):

```css
--color-gold-400: #E5C068;  /* ⭐ Heller Gold-Ton */
--color-gold-500: #D4AF37;  /* ⭐ Standard Gold */
--color-gold-600: #B8962D;  /* ⭐ Dunkler Gold-Ton */
```

### Hintergrundfarbe
```css
/* Schwarz bleibt schwarz, aber du kannst Transparenzen anpassen */
background: rgba(0, 0, 0, 0.95);  /* Leicht transparent */
```

---

## 📱 Weitere Anpassungen

### Animationsgeschwindigkeit
In jeder Komponente findest du `transition={{ duration: 0.8 }}`:
- Erhöhe für langsamere Animationen
- Verringere für schnellere Animationen

### 3D-Modell ändern
Die Datei `/components/Model3D.tsx` enthält ein animiertes 3D-Würfel-Modell.
Du kannst die Form in Zeile ~40-45 anpassen.

---

## 💡 Tipps

1. **Speichern**: Änderungen werden automatisch aktualisiert
2. **Bilder**: Verwende hochauflösende Bilder (mindestens 1920x1080px)
3. **Konsistenz**: Halte den Stil einheitlich
4. **Mobile**: Teste immer auf verschiedenen Bildschirmgrößen

---

## 🆘 Häufige Fehler

**Bild wird nicht angezeigt?**
- Prüfe die URL/Pfad
- Stelle sicher, dass das Bild im `/public` Ordner liegt

**Text wird nicht aktualisiert?**
- Browser-Cache leeren (Strg + F5)
- Prüfe, ob die Datei gespeichert wurde

**Layout bricht?**
- Prüfe, ob alle Tags geschlossen sind
- Achte auf fehlende Kommata in Arrays
