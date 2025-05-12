"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Cita {
  id: number;
  cliente: string;
  tecnico: string;
  servicio: string;
  fecha: string;
  hora: string;
  estado: string;
}

const citasIniciales: Cita[] = [
  {
    id: 1,
    cliente: "Juan Pérez",
    tecnico: "Juan Técnico",
    servicio: "Reparación de Tuberías",
    fecha: "2023-12-10",
    hora: "10:00",
    estado: "Programada",
  },
  {
    id: 2,
    cliente: "Empresa XYZ SRL",
    tecnico: "María Técnica",
    servicio: "Mantenimiento Preventivo",
    fecha: "2023-12-11",
    hora: "14:00",
    estado: "Programada",
  },
];

export default function CitasPage() {
  const router = useRouter();
  const [citas] = useState<Cita[]>(citasIniciales);
  const [filtroFecha, setFiltroFecha] = useState<string>("");

  const citasFiltradas = filtroFecha
    ? citas.filter((cita) => cita.fecha === filtroFecha)
    : citas;

  function handleReprogramar(id: number) {
    // Placeholder for reprogramming logic
    alert(`Reprogramar cita con ID ${id}`);
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Agendamiento y Control de Citas</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => router.push("/dashboard/citas/nueva")}
        >
          Nueva Cita
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="fechaFiltro" className="block mb-1 font-medium">
          Filtrar por fecha:
        </label>
        <input
          type="date"
          id="fechaFiltro"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Cliente</th>
            <th className="border border-gray-300 px-4 py-2">Técnico</th>
            <th className="border border-gray-300 px-4 py-2">Servicio</th>
            <th className="border border-gray-300 px-4 py-2">Fecha</th>
            <th className="border border-gray-300 px-4 py-2">Hora</th>
            <th className="border border-gray-300 px-4 py-2">Estado</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citasFiltradas.map((cita) => (
            <tr key={cita.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{cita.cliente}</td>
              <td className="border border-gray-300 px-4 py-2">{cita.tecnico}</td>
              <td className="border border-gray-300 px-4 py-2">{cita.servicio}</td>
              <td className="border border-gray-300 px-4 py-2">{cita.fecha}</td>
              <td className="border border-gray-300 px-4 py-2">{cita.hora}</td>
              <td className="border border-gray-300 px-4 py-2">{cita.estado}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleReprogramar(cita.id)}
                >
                  Reprogramar
                </button>
              </td>
            </tr>
          ))}
          {citasFiltradas.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-4 text-gray-500">
                No hay citas para la fecha seleccionada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
