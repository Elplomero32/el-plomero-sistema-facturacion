"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Cuenta {
  id: number;
  nombre: string;
  tipo: string;
  saldo: number;
}

interface Movimiento {
  id: number;
  cuentaId: number;
  fecha: string;
  descripcion: string;
  monto: number;
  tipo: "Ingreso" | "Egreso";
}

const cuentasIniciales: Cuenta[] = [
  { id: 1, nombre: "Cuenta de Cobros", tipo: "Cobros", saldo: 50000 },
  { id: 2, nombre: "Cuenta de Pagos", tipo: "Pagos", saldo: 20000 },
  { id: 3, nombre: "Cuenta de Cierre Diario", tipo: "Cierre Diario", saldo: 15000 },
  { id: 4, nombre: "Cuenta de Corte de Caja", tipo: "Corte de Caja", saldo: 10000 },
];

const movimientosIniciales: Movimiento[] = [
  {
    id: 1,
    cuentaId: 1,
    fecha: "2023-12-01",
    descripcion: "Pago factura #F-2023001",
    monto: 15000,
    tipo: "Ingreso",
  },
  {
    id: 2,
    cuentaId: 2,
    fecha: "2023-12-02",
    descripcion: "Compra materiales",
    monto: 5000,
    tipo: "Egreso",
  },
];

export default function CuentasPage() {
  const router = useRouter();
  const [cuentas, setCuentas] = useState<Cuenta[]>(cuentasIniciales);
  const [movimientos, setMovimientos] = useState<Movimiento[]>(movimientosIniciales);
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState<number | null>(null);

  const movimientosFiltrados = cuentaSeleccionada
    ? movimientos.filter((m) => m.cuentaId === cuentaSeleccionada)
    : movimientos;

  function handleAgregarMovimiento() {
    alert("Funcionalidad para agregar movimiento pendiente de implementar.");
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Tipos de Cuentas y Movimientos Internos</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => router.push("/dashboard/cuentas/nueva")}
        >
          Nueva Cuenta
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="cuentaSelect" className="block mb-1 font-medium">
          Seleccionar Cuenta:
        </label>
        <select
          id="cuentaSelect"
          className="border rounded px-3 py-2"
          value={cuentaSeleccionada ?? ""}
          onChange={(e) => setCuentaSeleccionada(Number(e.target.value))}
        >
          <option value="">Todas las cuentas</option>
          {cuentas.map((cuenta) => (
            <option key={cuenta.id} value={cuenta.id}>
              {cuenta.nombre}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Fecha</th>
            <th className="border border-gray-300 px-4 py-2">Descripción</th>
            <th className="border border-gray-300 px-4 py-2">Monto</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {movimientosFiltrados.map((mov) => (
            <tr key={mov.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{mov.fecha}</td>
              <td className="border border-gray-300 px-4 py-2">{mov.descripcion}</td>
              <td className="border border-gray-300 px-4 py-2">
                RD$ {mov.monto.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">{mov.tipo}</td>
            </tr>
          ))}
          {movimientosFiltrados.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No hay movimientos para la cuenta seleccionada.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={handleAgregarMovimiento}
        >
          Agregar Movimiento
        </button>
      </div>
    </div>
  );
}
