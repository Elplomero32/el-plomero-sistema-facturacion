"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ServiciosPage() {
  const router = useRouter()

  const servicios = [
    {
      id: 1,
      nombre: "Reparación de Tuberías",
      categoria: "Reparación",
      precio: 2500,
      duracion: "2-3 horas",
      descripcion: "Reparación de tuberías dañadas o con fugas",
      estado: "Disponible"
    },
    {
      id: 2,
      nombre: "Instalación de Inodoro",
      categoria: "Instalación",
      precio: 3500,
      duracion: "3-4 horas",
      descripcion: "Instalación completa de inodoro nuevo",
      estado: "Disponible"
    },
    {
      id: 3,
      nombre: "Mantenimiento Preventivo",
      categoria: "Mantenimiento",
      precio: 1800,
      duracion: "1-2 horas",
      descripcion: "Revisión general del sistema de plomería",
      estado: "Disponible"
    },
    {
      id: 4,
      nombre: "Curso Básico de Plomería",
      categoria: "Capacitación",
      precio: 5000,
      duracion: "16 horas",
      descripcion: "Curso técnico para principiantes",
      estado: "Próximamente"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Servicios</h1>
        <Button 
          onClick={() => router.push("/dashboard/servicios/nuevo")}
          className="px-6"
        >
          Nuevo Servicio
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-2xl font-bold">24</div>
          <div className="text-sm text-gray-500">Servicios Activos</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold">156</div>
          <div className="text-sm text-gray-500">Servicios Este Mes</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold">RD$ 245,800</div>
          <div className="text-sm text-gray-500">Ingresos por Servicios</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold">4.8/5</div>
          <div className="text-sm text-gray-500">Calificación Promedio</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <Input 
            placeholder="Buscar servicios..." 
            className="max-w-sm"
          />
          <Select defaultValue="todos">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas las categorías</SelectItem>
              <SelectItem value="reparacion">Reparación</SelectItem>
              <SelectItem value="instalacion">Instalación</SelectItem>
              <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
              <SelectItem value="capacitacion">Capacitación</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Filtrar</Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre del Servicio</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Precio Base</TableHead>
                <TableHead>Duración Est.</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {servicios.map((servicio) => (
                <TableRow key={servicio.id}>
                  <TableCell className="font-medium">{servicio.nombre}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      {
                        'Reparación': 'bg-red-100 text-red-800',
                        'Instalación': 'bg-blue-100 text-blue-800',
                        'Mantenimiento': 'bg-green-100 text-green-800',
                        'Capacitación': 'bg-purple-100 text-purple-800'
                      }[servicio.categoria]
                    }`}>
                      {servicio.categoria}
                    </span>
                  </TableCell>
                  <TableCell>RD$ {servicio.precio.toLocaleString()}</TableCell>
                  <TableCell>{servicio.duracion}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {servicio.descripcion}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      servicio.estado === "Disponible"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {servicio.estado}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => router.push(`/dashboard/servicios/${servicio.id}`)}
                      >
                        Editar
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => router.push(`/dashboard/facturas/nueva?servicio=${servicio.id}`)}
                      >
                        Facturar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Mostrando 1-4 de 24 servicios
          </p>
          <div className="flex gap-2">
            <Button variant="outline" disabled>Anterior</Button>
            <Button variant="outline">Siguiente</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
