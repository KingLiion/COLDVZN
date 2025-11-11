# Portfolio Customization Guide

Diese Anleitung zeigt dir, wie du das Portfolio an deine eigenen Bedürfnisse anpassen kannst.

## 📧 Kontaktdaten anpassen

Öffne `/components/Contact.tsx` und finde diese Zeilen:

```typescript
// ⭐ HIER KANNST DU DEINE KONTAKTDATEN ANPASSEN
const contactInfo = {
  email: 'hello@alexchen.design',          // Deine E-Mail
  phone: '+49 123 456 7890',               // Deine Telefonnummer
  location: 'Berlin, Germany',             // Dein Standort
};

// ⭐ HIER KANNST DU DEINE SOCIAL MEDIA LINKS ANPASSEN
const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/yourhandle',    // Dein Instagram-Link
    color: '#E4405F',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/yourprofile', // Dein LinkedIn-Link
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yourusername',     // Dein GitHub-Link
    color: '#fff',
  },
  {
    name: 'ArtStation',
    icon: Palette,
    url: 'https://artstation.com/yourhandle',   // Dein ArtStation-Link
    color: '#13AFF0',
  },
];
```

**Was du ändern kannst:**
- Ersetze die E-Mail-Adresse, Telefonnummer und den Standort
- Ändere die Social Media URLs zu deinen eigenen Profilen
- Du kannst auch Social Media-Plattformen entfernen oder hinzufügen

---

## 📄 Download-Dokumente anpassen (Lebenslauf & Arbeitszeugnis)

### Schritt 1: Dokumente vorbereiten

1. **Konvertiere deine Dokumente zu PDF**
   - Öffne deinen Lebenslauf in Word/Google Docs
   - Gehe zu "Datei" → "Exportieren als" → "PDF"
   - Speichere als z.B. `lebenslauf.pdf`
   - Wiederhole für Arbeitszeugnis

2. **Erstelle Vorschaubilder (optional aber empfohlen)**
   - Öffne das PDF
   - Mache einen Screenshot der ersten Seite
   - Schneide das Bild zurecht (Hochformat, ca. 800x1200px)
   - Speichere als JPG (z.B. `lebenslauf-preview.jpg`)

### Schritt 2: Dokumente hochladen

**Option A: Öffentlicher Cloud-Speicher (empfohlen)**

1. Lade deine PDFs auf einen dieser Services hoch:
   - **Google Drive**: 
     - Hochladen → Rechtsklick auf Datei → "Freigeben" → "Link abrufen"
     - Stelle sicher, dass "Jeder mit dem Link" Zugriff hat
     - Kopiere den Link
   - **Dropbox**:
     - Hochladen → "Freigeben" → "Link erstellen"
   - **OneDrive**:
     - Hochladen → "Freigeben" → Link generieren

2. Für Google Drive-Links:
   ```
   Original: https://drive.google.com/file/d/ABC123XYZ/view
   Direct Link: https://drive.google.com/uc?export=download&id=ABC123XYZ
   ```
   Kopiere nur die ID (ABC123XYZ) und verwende den "Direct Link" Format

**Option B: In der App hosten (für Entwicklung)**

1. Erstelle einen Ordner `/public/documents/` in deinem Projekt
2. Lege deine PDFs dort ab
3. Verwende den relativen Pfad: `/documents/lebenslauf.pdf`

⚠️ **Wichtig**: Für Produktion nicht empfohlen, da Dateien öffentlich zugänglich sind!

### Schritt 3: Code anpassen

Öffne `/components/About.tsx` und finde diesen Bereich:

```typescript
// ⭐ HIER KANNST DU DEINE DOWNLOAD-DOKUMENTE ANPASSEN
const documents = [
  {
    title: 'Lebenslauf',                    // Titel des Dokuments
    description: 'Curriculum Vitae',        // Beschreibung
    fileUrl: '/documents/lebenslauf.pdf',   // Link zu deiner PDF
    previewImage: 'https://...',            // Link zum Vorschaubild
  },
  {
    title: 'Arbeitszeugnis',
    description: 'Work Certificate',
    fileUrl: '/documents/arbeitszeugnis.pdf',
    previewImage: 'https://...',
  },
];
```

**Beispiel mit eigenen Daten:**
```typescript
const documents = [
  {
    title: 'Lebenslauf',
    description: 'Stand: Oktober 2024',
    fileUrl: 'https://drive.google.com/uc?export=download&id=DEINE_DATEI_ID',
    previewImage: 'https://i.imgur.com/DeinVorschaubildCV.jpg',
  },
  {
    title: 'Arbeitszeugnis',
    description: 'Muster GmbH',
    fileUrl: 'https://drive.google.com/uc?export=download&id=ANDERE_DATEI_ID',
    previewImage: 'https://i.imgur.com/DeinVorschaubildZeugnis.jpg',
  },
];
```

### Weitere Download-Dokumente hinzufügen

Du kannst weitere Dokumente hinzufügen (Portfolio PDF, Zertifikate, etc.):

```typescript
const documents = [
  // Bestehende Dokumente...
  {
    title: 'Portfolio PDF',
    description: 'Complete Works 2024',
    fileUrl: 'https://deine-url.com/portfolio.pdf',
    previewImage: 'https://deine-url.com/portfolio-preview.jpg',
  },
  {
    title: 'Zertifikat Adobe',
    description: 'Certified Expert',
    fileUrl: 'https://deine-url.com/zertifikat.pdf',
    previewImage: 'https://deine-url.com/zertifikat-preview.jpg',
  },
];
```

Das Grid passt sich automatisch an (2 Spalten auf Desktop, 1 Spalte auf Mobile).

### Tipps für Vorschaubilder:

- **Format**: Hochformat (3:4 Ratio, z.B. 600x800px oder 900x1200px)
- **Inhalt**: Zeige die erste Seite des Dokuments
- **Qualität**: Gut lesbar aber komprimiert (unter 500KB)
- **Tools**: 
  - Screenshot + Zuschneiden
  - PDF zu Bild Konverter: https://www.ilovepdf.com/pdf_to_jpg
  - Komprimierung: https://tinypng.com

---

## 💼 Skills/Fertigkeiten anpassen

Öffne `/components/About.tsx` und finde den `skills` Array:

```typescript
// ⭐ HIER KANNST DU DEINE SKILLS/FERTIGKEITEN ANPASSEN
const skills = [
  { 
    icon: Layers,                           // Icon (von lucide-react)
    category: '3D Design',                  // Kategorie
    items: ['Blender', 'Cinema 4D', 'Houdini', 'ZBrush']  // 4 Skills
  },
  { 
    icon: Palette, 
    category: 'Graphic Design', 
    items: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'] 
  },
  { 
    icon: Camera, 
    category: 'Photography', 
    items: ['Portrait', 'Landscape', 'Architecture', 'Street'] 
  },
  { 
    icon: Code, 
    category: 'Development', 
    items: ['React', 'Three.js', 'WebGL', 'GLSL'] 
  },
];
```

**Beispiel - Deine eigenen Skills:**

```typescript
const skills = [
  { 
    icon: Layers,
    category: 'Motion Design',
    items: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Nuke']
  },
  { 
    icon: Palette, 
    category: 'UI/UX Design', 
    items: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping'] 
  },
  { 
    icon: Lightbulb,           // Andere Icons möglich
    category: 'Soft Skills', 
    items: ['Team Leadership', 'Client Communication', 'Project Management', 'Creative Direction'] 
  },
  { 
    icon: Globe, 
    category: 'Languages', 
    items: ['Deutsch (Muttersprache)', 'English (Fluent)', 'Französisch (B1)', 'Spanisch (A2)'] 
  },
];
```

**Verfügbare Icons** (von lucide-react):
- `Layers`, `Palette`, `Camera`, `Code`
- `Lightbulb`, `Globe`, `Briefcase`, `Award`
- `Star`, `Zap`, `Target`, `Cpu`
- Vollständige Liste: https://lucide.dev/icons

Du kannst auch die Anzahl der Skill-Kategorien ändern (2, 3, 4, 5, 6...). Das Grid passt sich automatisch an.

---

## 🎨 3D-Projekt-Artikel anpassen

### Bestehende Projekte bearbeiten

Öffne `/components/Projects.tsx` und finde das `projectDetails` Array:

```typescript
const projectDetails = [
  {
    id: 'quantum-sphere',                    // Eindeutige ID (muss mit Gallery übereinstimmen)
    title: 'Quantum Sphere',                 // Projekt-Titel
    subtitle: 'Digital Sculpture',           // Untertitel
    category: '3D Design',                   // Kategorie
    date: 'October 2024',                    // Datum
    description: '...',                      // Kurzbeschreibung
    challenge: '...',                        // Die Herausforderung
    solution: '...',                         // Deine Lösung
    results: [                               // Ergebnisse (4 Punkte)
      'Ergebnis 1',
      'Ergebnis 2',
      'Ergebnis 3',
      'Ergebnis 4',
    ],
    images: [                                // Bilder (3-4 URLs)
      'https://...',
      'https://...',
      'https://...',
    ],
    technologies: [                          // Verwendete Tools
      'Blender', 
      'Cycles Renderer', 
      'Substance Painter', 
      'After Effects'
    ],
    show3DModel: true,                       // true = 3D-Modell zeigen, false = Bild zeigen
  },
];
```

### Neues Projekt hinzufügen

1. Kopiere einen bestehenden Projekt-Block
2. Ändere die `id` zu einem neuen eindeutigen Namen (z.B. `mein-neues-projekt`)
3. Fülle alle Felder mit deinen Informationen aus
4. Füge das gleiche Projekt in `/components/Gallery3D.tsx` zum `galleryProjects` Array hinzu:

```typescript
export const galleryProjects = [
  // ... bestehende Projekte
  {
    id: 'mein-neues-projekt',               // Gleiche ID wie in Projects.tsx
    url: 'https://dein-bild-url.jpg',       // Vorschaubild
    title: 'Mein Neues Projekt',
    subtitle: 'Projekt Untertitel',
  },
];
```

---

## 🎨 Grafikdesign-Artikel anpassen

Öffne `/components/GraphicDesign.tsx` und finde das `graphicDesignProjects` Array:

```typescript
const graphicDesignProjects = [
  {
    id: 'urban-beats',                       // Eindeutige ID
    title: 'Urban Beats Festival',           // Titel
    subtitle: 'Brand Identity & Campaign',   // Untertitel
    category: 'Branding',                    // Kategorie
    date: 'September 2024',                  // Datum
    description: '...',                      // Beschreibung
    challenge: '...',                        // Herausforderung
    solution: '...',                         // Lösung
    results: ['...', '...', '...', '...'],  // 4 Ergebnisse
    images: ['...', '...', '...'],          // 3 Bilder
    technologies: ['Illustrator', '...'],    // Tools
  },
];
```

Um ein neues Grafikdesign-Projekt hinzuzufügen, kopiere einfach einen Block und passe alle Werte an.

---

## 🖼️ Eigene Bilder verwenden

### Methode 1: Unsplash URLs ersetzen

Ersetze einfach die Unsplash-URLs durch deine eigenen Bild-URLs:

```typescript
images: [
  'https://meine-website.com/bilder/projekt1.jpg',
  'https://meine-website.com/bilder/projekt2.jpg',
],
```

### Methode 2: Bilder hochladen (empfohlen)

1. Lade deine Bilder auf einen Hosting-Service hoch:
   - **Imgur**: https://imgur.com
   - **Cloudinary**: https://cloudinary.com
   - **ImgBB**: https://imgbb.com
   - Deine eigene Website

2. Kopiere die direkte Bild-URL

3. Ersetze die URLs im Code:

```typescript
url: 'https://i.imgur.com/DeinBild.jpg',
```

### Bildanforderungen:

- **Hero/Gallery Bilder**: 16:9 Format, mindestens 1920x1080px
- **Projekt-Detail Bilder**: 1920x1080px oder größer
- **Fotografie horizontal**: 16:9 Format
- **Fotografie vertikal**: 9:16 Format
- **Format**: JPG oder PNG
- **Dateigröße**: Unter 2MB für schnellere Ladezeiten

---

## 🎭 Eigene 3D-Modelle verwenden

### Option 1: Model3D Component anpassen

Öffne `/components/Model3D.tsx` und ändere die Geometrie und Farben:

```typescript
// Würfel-Größe ändern
<boxGeometry args={[3, 3, 3]} />  // [Breite, Höhe, Tiefe]

// Farbe ändern
color="#ff6b35"  // Deine Hex-Farbe

// Material ändern
metalness={0.8}   // 0-1 (0 = matt, 1 = metallisch)
roughness={0.2}   // 0-1 (0 = glänzend, 1 = rau)
```

### Option 2: Andere 3D-Formen verwenden

Ersetze `<boxGeometry>` durch andere Formen:

```typescript
// Kugel
<sphereGeometry args={[2, 32, 32]} />

// Zylinder
<cylinderGeometry args={[1, 1, 3, 32]} />

// Torus
<torusGeometry args={[2, 0.5, 16, 100]} />

// Kegel
<coneGeometry args={[2, 3, 32]} />
```

### Option 3: GLB/GLTF Modelle laden (Fortgeschritten)

Für eigene 3D-Modelle aus Blender/Cinema 4D:

1. Exportiere dein Modell als `.glb` oder `.gltf`
2. Lade es auf einen Hosting-Service hoch
3. Verwende den `useGLTF` Hook von `@react-three/drei`:

```typescript
import { useGLTF } from '@react-three/drei';

function MyModel() {
  const { scene } = useGLTF('https://deine-url.com/model.glb');
  return <primitive object={scene} />;
}
```

### 3D-Modell in Projekten aktivieren/deaktivieren

In `/components/Projects.tsx`:

```typescript
{
  id: 'mein-projekt',
  // ... andere Felder
  show3DModel: true,   // true = 3D-Modell, false = Bild
},
```

---

## 📸 Fotografie-Galerie anpassen

Öffne `/components/Photography.tsx` und finde das `photographyImages` Array:

```typescript
const photographyImages = [
  {
    url: 'https://dein-bild.jpg',           // Bild-URL
    title: 'Mountain Vista',                // Titel
    category: 'Landscape',                  // Kategorie
    orientation: 'horizontal',              // 'horizontal' oder 'vertical'
  },
];
```

**Orientierung bestimmen:**
- `horizontal`: Querformat (16:9) - für Landschaften, breite Bilder
- `vertical`: Hochformat (9:16) - für Portraits, Architektur

---

## 🎨 Farben und Stil anpassen

### Gold-Farbe ändern

Öffne `/styles/globals.css` und finde diese Zeilen:

```css
--gold-50: #fdfaf3;
--gold-100: #faf4e6;
--gold-200: #f5e9cd;
--gold-500: #D4AF37;   /* Haupt-Gold-Farbe */
--gold-600: #B8962D;
```

Ändere die Hex-Werte zu deiner gewünschten Farbe.

### Dark Theme Farben

```css
--background: 0 0% 0%;        /* Hintergrund (Schwarz)
--foreground: 0 0% 100%;      /* Text (Weiß)
```

---

## 💡 Tipps

### Bilder optimieren
- Verwende Tools wie **TinyPNG** (https://tinypng.com) zum Komprimieren
- Empfohlene Formate: JPG für Fotos, PNG für Grafiken
- Speichere Bilder in WebP für bessere Performance

### Texte schreiben
- **Challenge**: Beschreibe das Problem/die Aufgabe
- **Solution**: Erkläre deinen kreativen Prozess und Ansatz
- **Results**: Zeige messbare Erfolge (Downloads, Views, Awards)

### Konsistenz
- Verwende ähnliche Bildstile und -qualität
- Halte die Textlängen ähnlich
- Nutze klare, prägnante Sprache

---

## 🆘 Häufige Probleme

**Bild wird nicht angezeigt?**
- Überprüfe die URL (sollte mit `https://` beginnen)
- Stelle sicher, dass die URL direkt zum Bild führt (.jpg, .png, etc.)
- Teste die URL in einem neuen Browser-Tab

**3D-Modell wird nicht angezeigt?**
- Setze `show3DModel: false` und verwende stattdessen ein Bild
- Überprüfe die Browser-Konsole auf Fehler (F12 drücken)

**Änderungen werden nicht angezeigt?**
- Speichere die Datei
- Lade die Seite neu (Strg+Shift+R oder Cmd+Shift+R)
- Leere den Browser-Cache

---

## 📚 Weitere Ressourcen

- **Kostenlose Bilder**: Unsplash, Pexels, Pixabay
- **3D-Modelle**: Sketchfab, TurboSquid, CGTrader
- **Icons**: Lucide Icons (bereits integriert)
- **Farben**: Coolors.co für Farbpaletten

---

Viel Erfolg mit deinem Portfolio! 🚀
