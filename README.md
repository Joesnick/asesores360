# Asesores360

Portal web para la plataforma Asesores360, estructurado en un monorepo y enfocado en la visualización y gestión de aplicaciones y servicios.

---

## 1. Descripción Funcional y Objetivo del Proyecto
El sistema proporciona una interfaz web de una sola página (SPA) que permite a los usuarios:
* Navegar por el sitio principal de la plataforma.
* Consultar e interactuar con aplicaciones de asesoría a través de la sección correspondiente.
* Integrar funcionalidades de edición en vivo cuando se ejecuta bajo un entorno compatible con su sistema de complementos (plugins).

---

## 2. Arquitectura General del Repositorio
El repositorio utiliza una estructura de **Monorepo** gestionada mediante **npm workspaces** con la carpeta contenedora `apps/`.

### Estructura de Espacios de Trabajo
* **`apps/web` (Activo):** Contiene la aplicación web cliente construida en React, administrada por Vite.
* **`apps/api` (Inexistente/Configuración Huérfana):** Aunque el archivo `knip.json` de la raíz hace referencia a un espacio de trabajo en `apps/api`, este no existe físicamente en el repositorio actual.

### Propósito de los Archivos `package.json`
* **`package.json` Raíz:** Sirve para centralizar la instalación de dependencias del monorepo mediante npm workspaces y ejecutar scripts agregados globales (desarrollo, compilación, linting) delegando a los subproyectos.
* **`apps/web/package.json`:** Administra las dependencias exclusivas de la aplicación cliente y define los comandos específicos para su ciclo de vida (desarrollo local, construcción de producción y validación de código).

---

## 3. Tecnologías Identificadas
* **Framework y Librería Core:** React (v18.3.1) y React Router DOM (v7.13.0).
* **Compilación y Empaquetado:** Vite (v7.3.1).
* **Estilos:** Tailwind CSS (v3.4.17) y PostCSS (v8.4.49) con la extensión `tailwindcss-animate` (v1.0.7).
* **Diseño y Componentes:** shadcn/ui (v3, según componentes instalados en `src/components/ui/`) apoyado sobre Radix UI y Lucide React para iconografía.
* **Control de Calidad:** ESLint (v9.39.4).

---

## 4. Requisitos Previos e Instalación

### Requisitos Previos
* **Node.js:** Versión v22 (conforme al archivo `.nvmrc`).
* **npm:** Versión compatible con Node.js v22.

### Instalación
Para instalar las dependencias globales y del frontend de forma unificada, ejecuta en la raíz:
```bash
npm run setup
```

---

## 5. Configuración de Entorno
El empaquetador Vite en `apps/web/vite.config.js` hace referencia a las siguientes variables de entorno condicionales para inyecciones en el archivo HTML durante el proceso de compilación de producción:

| Variable de Entorno | Descripción | Estado |
| :--- | :--- | :--- |
| `TEMPLATE_BANNER_SCRIPT_URL` | URL de script del banner de producción | [Pendiente por confirmar] |
| `TEMPLATE_REDIRECT_URL` | URL de redirección del banner | [Pendiente por confirmar] |
| `TEMPLATE_BANNER_MAIN_TEXT` | Texto principal del banner | [Pendiente por confirmar] |
| `TEMPLATE_BANNER_CTA_TEXT` | Texto de acción (CTA) del banner | [Pendiente por confirmar] |
| `TEMPLATE_BANNER_THEME` | Tema de color del banner | [Pendiente por confirmar] |

No se requieren archivos de configuración de variables de entorno `.env` para la ejecución del servidor de desarrollo local básico.

---

## 6. Comandos Disponibles

Ejecutables desde la raíz del repositorio:
* **Inicialización:** `npm run setup` (Ejecuta `npm install`).
* **Desarrollo:** `npm run dev` (Inicia el servidor Vite de `apps/web` en el puerto 3000 con host de red abierto).
* **Construcción (Build):** `npm run build` (Genera el archivo estático `llms.txt` en la carpeta `public` de la app y compila el frontend en la carpeta de salida).
* **Verificación (Lint):** `npm run lint` (Valida reglas de código utilizando ESLint).

---

## 7. Estructura de Carpetas Clave (`apps/web`)
* **`public/`:** Directorio de recursos estáticos. Contiene el archivo de configuración `.htaccess` para servidores Apache de Hostinger.
* **`tools/`:**
  * `generate-llms.js`: Script de compilación que lee metadatos de las páginas para compilar `/public/llms.txt`.
  * `install-missing-components.js`: Utilidad para detectar e instalar componentes shadcn/ui faltantes de forma automatizada.
* **`plugins/`:** Complementos internos para el servidor Vite dedicados a la compatibilidad con el editor visual Horizons y autorización con Pocketbase.
* **`src/`:**
  * `components/`: Contiene componentes de presentación y la subcarpeta `ui/` con componentes atómicos de UI.
  * `hooks/`: Custom hooks locales de la aplicación (`use-mobile.jsx` y `use-toast.js`).
  * `lib/`: Utilidad de estilos compartida (`utils.js`).
  * `pages/`: Vistas de página principales asociadas al enrutador: `HomePage.jsx` y `AplicacionesPage.jsx`.

---

## 8. Proceso de Compilación y Despliegue

### Destino de Compilación (Build Output)
Al ejecutar `npm run build`, los archivos finales listos para distribución se generan en:
* **Ruta de salida:** `dist/apps/web` (en la raíz del proyecto, configurado mediante el parámetro `--outDir ../../dist/apps/web` en el comando del script de compilación).

### Despliegue
Los archivos compilados en la carpeta de salida están listos para ser servidos de forma estática. La redirección para el enrutamiento de la SPA está gestionada de forma predeterminada mediante el archivo de directivas estáticas `.htaccess` de Apache.

---

## 9. Deuda Técnica y Observaciones
* **Script "start" en package.json de la raíz incompleto:** El comando está definido únicamente como `"concurrently --kill-others --raw"`, lo que provocará que falle o termine de inmediato sin arrancar ningún servidor.
* **Configuración obsoleta en `knip.json`:** Hace referencia a un workspace inexistente (`apps/api`), así como a páginas (`PlansPage`, `ProductDetailPage`, `SubscriptionsPage`), hooks e integraciones de clientes (pocketbase, supabase, apiServerClient) que no se encuentran en la estructura física del proyecto actual.
