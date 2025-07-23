# 📝 Guía de Personalización del Portafolio

Esta guía te ayudará a personalizar completamente el portafolio para que refleje tu información y estilo personal.

## 🎯 Información Personal

### 1. Datos Básicos
**Archivo:** `index.html`

Busca y reemplaza la siguiente información:

```html
<!-- Cambiar en el <title> y meta tags -->
<title>TU-NOMBRE | Tu Título Profesional</title>
<meta name="description" content="Tu descripción personal...">

<!-- Cambiar en la sección Hero -->
<h1 class="text-5xl md:text-7xl font-bold mb-4">
    <span class="text-primary">TU-NOMBRE</span>
</h1>
<h2 class="text-2xl md:text-3xl font-semibold mb-6">
    Tu Título Profesional
</h2>
<p class="text-xl md:text-2xl mb-8">
    "Tu frase personal llamativa"
</p>
```

### 2. Información de Contacto
**Archivos:** `index.html`

```html
<!-- Buscar y reemplazar en la sección de contacto -->
<p class="text-gray-600 dark:text-gray-300">tu-email@ejemplo.com</p>
<p class="text-gray-600 dark:text-gray-300">+52 123 456 7890</p>
<p class="text-gray-600 dark:text-gray-300">linkedin.com/in/tu-perfil</p>
<p class="text-gray-600 dark:text-gray-300">github.com/tu-usuario</p>
```

## 🎨 Personalización Visual

### 1. Colores
**Archivo:** `assets/css/style.css`

```css
:root {
    --primary-color: #TU-COLOR-PRIMARIO;
    --secondary-color: #TU-COLOR-SECUNDARIO;
    --accent-color: #TU-COLOR-ACENTO;
}
```

También cambiar en `index.html`:
```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: '#TU-COLOR-PRIMARIO',
                    secondary: '#TU-COLOR-SECUNDARIO',
                    accent: '#TU-COLOR-ACENTO',
                }
            }
        }
    }
</script>
```

### 2. Fuentes
**Archivo:** `index.html`

```html
<!-- Cambiar Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=TU-FUENTE:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 📷 Imágenes

### 1. Foto de Perfil
- **Ubicación:** `assets/images/profile.jpg`
- **Tamaño recomendado:** 400x400px
- **Formato:** JPG o PNG
- **Cambiar en:** Reemplaza el ícono en la sección Hero

### 2. Imágenes de Proyectos
- **Ubicación:** `assets/images/project1.jpg` a `project6.jpg`
- **Tamaño recomendado:** 600x400px
- **Formato:** JPG
- **Herramienta:** Usa `image-generator.html` para crear placeholders

### 3. Favicons
- **Ubicación:** `assets/images/`
- **Archivos necesarios:**
  - `favicon.ico` (32x32px)
  - `apple-touch-icon.png` (180x180px)
  - `icon-192.png` (192x192px)
  - `icon-512.png` (512x512px)

## 📄 Contenido

### 1. Sección "Sobre mí"
**Archivo:** `index.html`

```html
<!-- Personaliza tu descripción -->
<p>
    Tu descripción personal aquí. Habla sobre tu formación,
    pasiones, objetivos y lo que te motiva en la tecnología.
</p>
```

### 2. Habilidades Técnicas
**Archivo:** `index.html` y `assets/js/script.js`

En `script.js`:
```javascript
skills: {
    frontend: [
        { name: 'Tu-Tecnología', level: 90, icon: 'fab fa-icono', color: 'text-color' },
        // Agrega más habilidades
    ],
    // Modifica las categorías según tus habilidades
}
```

### 3. Proyectos
**Archivo:** `index.html`

Para cada proyecto, modifica:
```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/tu-proyecto.jpg" alt="Tu Proyecto">
        <div class="project-overlay">
            <div class="project-actions">
                <a href="URL-DEMO" class="project-btn">
                <a href="URL-GITHUB" class="project-btn">
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción del proyecto...</p>
        <div class="project-tech">
            <span class="tech-tag">Tecnología 1</span>
            <span class="tech-tag">Tecnología 2</span>
        </div>
    </div>
</div>
```

### 4. Formación Académica
**Archivo:** `index.html`

Modifica la timeline educativa:
```html
<div class="education-card">
    <h3>Tu Carrera/Certificación</h3>
    <p>Tu Institución</p>
    <p>Año - Año</p>
    <p>Descripción de tu formación...</p>
</div>
```

### 5. CV Descargable
**Archivo:** `assets/documents/CV-Edward.pdf`

1. Crea tu CV en formato PDF
2. Nombra el archivo: `CV-TU-NOMBRE.pdf`
3. Actualiza las referencias en `index.html`:

```html
<a href="assets/documents/CV-TU-NOMBRE.pdf" download>
```

## 🔗 Enlaces de Redes Sociales

**Archivo:** `index.html`

Busca todas las referencias a redes sociales y actualiza:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/tu-perfil">

<!-- GitHub -->
<a href="https://github.com/tu-usuario">

<!-- Email -->
<a href="mailto:tu-email@ejemplo.com">

<!-- WhatsApp -->
<a href="https://wa.me/52TUTELEFONO">
```

## 📱 PWA (Progressive Web App)

### 1. Manifest
**Archivo:** `manifest.json`

```json
{
  "name": "Tu Nombre Portfolio",
  "short_name": "Tu Nombre",
  "description": "Tu descripción personalizada",
  "start_url": "/",
  "theme_color": "#TU-COLOR-PRINCIPAL"
}
```

### 2. Meta Tags
**Archivo:** `index.html`

```html
<meta name="theme-color" content="#TU-COLOR">
<meta name="apple-mobile-web-app-title" content="Tu Nombre">
```

## 🎭 Testimonios

**Archivo:** `index.html`

Personaliza los testimonios con personas reales:

```html
<div class="testimonial-card">
    <div class="text-center mb-4">
        <h4 class="font-semibold">Nombre Real</h4>
        <p class="text-sm text-gray-500">Su Cargo/Relación</p>
    </div>
    <p class="text-gray-600 dark:text-gray-300 italic text-center">
        "Testimonial real de esta persona sobre tu trabajo..."
    </p>
</div>
```

## ⚙️ Configuración de Desarrollo

### 1. Servidor Local
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (instalar live-server)
npm install -g live-server
live-server

# Opción 3: PHP
php -S localhost:8000
```

### 2. Variables de Entorno
Crea un archivo `.env.local` para configuraciones locales:

```env
PORTFOLIO_NAME=Tu Nombre
PORTFOLIO_EMAIL=tu-email@ejemplo.com
PORTFOLIO_PHONE=+52-123-456-7890
PORTFOLIO_GITHUB=https://github.com/tu-usuario
PORTFOLIO_LINKEDIN=https://linkedin.com/in/tu-perfil
```

## 🚀 Despliegue

### 1. GitHub Pages
1. Sube tu código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main como source
4. Tu sitio estará en `https://tu-usuario.github.io/portfolio`

### 2. Netlify
1. Conecta tu repositorio de GitHub
2. Netlify desplegará automáticamente
3. Dominio personalizado disponible

### 3. Vercel
1. Importa tu repositorio
2. Despliegue automático con cada push
3. Optimizaciones automáticas

## 📊 Analytics (Opcional)

### Google Analytics
Agrega en `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

## ✅ Checklist de Personalización

- [ ] Cambiar nombre y título profesional
- [ ] Actualizar descripción personal
- [ ] Modificar información de contacto
- [ ] Personalizar colores y fuentes
- [ ] Agregar foto de perfil
- [ ] Crear/agregar imágenes de proyectos
- [ ] Actualizar lista de habilidades
- [ ] Describir proyectos reales
- [ ] Modificar formación académica
- [ ] Agregar testimonios reales
- [ ] Crear CV en PDF
- [ ] Actualizar enlaces de redes sociales
- [ ] Configurar PWA
- [ ] Probar en dispositivos móviles
- [ ] Optimizar para SEO
- [ ] Preparar para despliegue

## 🆘 Solución de Problemas

### Problema: Las animaciones no funcionan
**Solución:** Verifica que AOS.js esté cargando correctamente

### Problema: El modo oscuro no se guarda
**Solución:** Verifica que localStorage funcione en tu navegador

### Problema: Las imágenes no cargan
**Solución:** Verifica las rutas de las imágenes en `assets/images/`

### Problema: El formulario no envía
**Solución:** Implementa un backend o usa un servicio como Formspree

---

¡Listo! Con esta guía puedes personalizar completamente tu portafolio. Si tienes dudas, revisa el código o consulta la documentación de las tecnologías utilizadas.
