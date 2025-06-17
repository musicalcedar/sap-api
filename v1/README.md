# SAP Service Layer API

API REST que proporciona una interfaz moderna y segura para interactuar con SAP Service Layer, implementada con Clean Architecture y TypeScript.

## Características

- 🏗️ Clean Architecture con Screaming Architecture
- 🔒 Autenticación y autorización robusta
- 🔄 Gestión automática de sesiones SAP
- 📦 ORM Prisma para gestión de base de datos
- 🚀 TypeScript para mejor mantenibilidad
- 🧪 Tests unitarios, de integración y e2e
- 🐳 Contenedores Docker para desarrollo y producción

## Estructura del Proyecto

```
src/
├── auth/                    # Autenticación y autorización
├── sap-integration/        # Integración con SAP Service Layer
├── users/                  # Gestión de usuarios
└── shared/                # Código compartido
```

## Requisitos Previos

- Node.js >= 18
- PostgreSQL
- Redis
- SAP Service Layer

## Configuración

1. Clonar el repositorio
2. Copiar `.env.example` a `.env` y configurar las variables
3. Instalar dependencias: `npm install`
4. Ejecutar migraciones: `npm run prisma:migrate`
5. Iniciar en desarrollo: `npm run dev`

## Scripts Disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo
- `npm run build`: Compila el proyecto
- `npm run start`: Inicia el servidor en producción
- `npm run test`: Ejecuta los tests
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código

## Documentación

- [Guía de Desarrollo](./docs/development.md)
- [API Reference](./docs/api.md)
- [Arquitectura](./docs/architecture.md)
