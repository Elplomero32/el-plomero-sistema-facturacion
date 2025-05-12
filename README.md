# El Plomero de Santiago - Sistema de Facturación

Sistema profesional de facturación desarrollado para El Plomero de Santiago SRL, cumpliendo con las normativas de la DGII en República Dominicana.

## Características Principales

- ✅ Emisión de facturas con NCF (e-CF)
- 📱 Versión web y móvil sincronizadas
- 💼 Gestión de clientes y servicios
- 📊 Reportes para DGII (606, 607, IT-1)
- 👥 Control de usuarios y permisos
- 🔄 Sincronización en tiempo real

## Requisitos Técnicos

- Node.js 18.0 o superior
- NPM o Yarn
- Conexión a Internet
- Navegador web moderno

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/el-plomero/sistema-facturacion.git
cd sistema-facturacion
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```
Editar el archivo `.env` con las credenciales necesarias.

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

El sistema estará disponible en `http://localhost:8000`

## Estructura del Proyecto

```
src/
├── app/                    # Páginas y rutas de la aplicación
│   ├── dashboard/         # Panel de administración
│   ├── login/            # Autenticación
│   └── layout.tsx        # Layout principal
├── components/            # Componentes reutilizables
└── lib/                  # Utilidades y configuraciones
```

## Módulos Principales

### Facturación
- Emisión de facturas con NCF
- Cálculo automático de ITBIS
- Envío por correo electrónico
- Impresión de comprobantes

### Clientes
- Registro de clientes
- Validación de RNC/Cédula
- Historial de facturación
- Gestión de contactos

### Servicios
- Catálogo de servicios
- Precios y descripciones
- Categorización
- Control de inventario

### Reportes
- Generación de reportes DGII
- Estadísticas de ventas
- Análisis financiero
- Exportación de datos

## Soporte

Para soporte técnico, contactar a:
- 📞 +1(829)406-3681
- 📞 +1(829)294-3939
- 📍 Calle 4, #21, Villa Olímpica, Santiago de los Caballeros, RD

## Licencia

Este software es privado y de uso exclusivo para El Plomero de Santiago SRL.
Todos los derechos reservados.
