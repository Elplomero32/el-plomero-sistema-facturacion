"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  const stats = [
    {
      title: "Facturas del Mes",
      value: "32",
      description: "12% más que el mes anterior"
    },
    {
      title: "Ingresos del Mes",
      value: "RD$ 156,420",
      description: "8% más que el mes anterior"
    },
    {
      title: "Clientes Activos",
      value: "148",
      description: "3 nuevos este mes"
    },
    {
      title: "Servicios Pendientes",
      value: "8",
      description: "Para esta semana"
    }
  ]

  const quickActions = [
    {
      title: "Nueva Factura",
      description: "Crear factura electrónica (e-CF)",
      path: "/dashboard/facturas/nueva"
    },
    {
      title: "Nuevo Cliente",
      description: "Registrar cliente en el sistema",
      path: "/dashboard/clientes/nuevo"
    },
    {
      title: "Reportes DGII",
      description: "Generar reportes 606, 607, IT-1",
      path: "/dashboard/reportes/dgii"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold">{action.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{action.description}</p>
            <Button 
              className="mt-4 w-full"
              onClick={() => router.push(action.path)}
            >
              Iniciar
            </Button>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Últimas Facturas</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Factura #F-{2023100 + index}</p>
                  <p className="text-sm text-gray-500">Cliente Example {index + 1}</p>
                </div>
                <p className="font-semibold">RD$ {(1500 * (index + 1)).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="mt-4 w-full"
            onClick={() => router.push("/dashboard/facturas")}
          >
            Ver Todas las Facturas
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Servicios Pendientes</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Mantenimiento #{index + 1}</p>
                  <p className="text-sm text-gray-500">Programado para hoy</p>
                </div>
                <Button size="sm">Ver Detalles</Button>
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="mt-4 w-full"
            onClick={() => router.push("/dashboard/servicios")}
          >
            Ver Todos los Servicios
          </Button>
        </Card>
      </div>
    </div>
  )
}
