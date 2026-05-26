# DCA Travel Frontend

Frontend construido con Vite, React, TypeScript, Tailwind CSS y componentes shadcn/ui.

## Requisitos

- Node.js 20.19+ o Node.js 22.12+
- pnpm 11+ recomendado

## Instalación

```bash
corepack enable
corepack prepare pnpm@11.3.0 --activate
pnpm install
```

## Scripts

```bash
pnpm dev        # desarrollo local
pnpm build      # build de producción
pnpm preview    # vista previa del build
pnpm lint       # revisión de ESLint
pnpm typecheck  # revisión de TypeScript
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores reales del sitio:

```bash
cp .env.example .env
```

## Notas de actualización

- Se retiraron dependencias de plantilla/plataforma que no eran necesarias para el frontend final.
- Se actualizó el stack principal a React 19, Vite 8 y React Router 7.
- Se conservó Tailwind CSS 3.4.17 porque el proyecto usa configuración shadcn/ui estilo Tailwind v3. Migrar a Tailwind v4 requiere cambiar PostCSS/configuración CSS.
- Se eliminó el lockfile anterior porque quedó obsoleto; `pnpm install` generará uno nuevo.
