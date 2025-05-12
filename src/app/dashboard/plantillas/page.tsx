"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Plantilla {
  id: number;
  nombre: string;
  tipo: string;
  editable: boolean;
}

const plantillasIniciales: Plantilla[] = [
  { id: 1, nombre: "Informe de Detección de Fugas de Agua", tipo: "Informe", editable: true },
  { id: 2, nombre: "Informe de Inspección de Drenajes con Cámara", tipo: "Informe", editable: true },
  { id: 3, nombre: "Informe de Visita de Evaluación / Levantamiento Técnico", tipo: "Informe", editable: true },
  { id: 4, nombre: "Informe de Reparación realizada", tipo: "Informe", editable: true },
  { id: 5, nombre: "Informe de Mantenimiento preventivo / correctivo", tipo: "Informe", editable: true },
  { id: 6, nombre: "Informe de Trabajos terminados", tipo: "Informe", editable: true },
  { id: 7, nombre: "Modelo de Contrato de trabajo", tipo: "Contrato", editable: true },
  { id: 8, nombre: "Carta de Garantía", tipo: "Documento", editable: true },
];

export default function PlantillasPage() {
  const router = useRouter();
  const [plantillas, setPlantillas] = useState<Plantilla[]>(plantillasIniciales);

  function handleEditar(id: number) {
    alert(`Editar plantilla con ID ${id} - funcionalidad pendiente.`);
  }

  function handleExportarPDF(id: number) {
    alert(`Exportar plantilla con ID ${id} a PDF - funcionalidad pendiente.`);
  }

  function handleEnviarCorreo(id: number) {
    alert(`Enviar plantilla con ID ${id} por correo - funcionalidad pendiente.`);
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-semibold">Plantillas de Informes y Documentos Automatizados</h1>

      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
            <th className="border border-gray-300 px-4 py-2">Editable</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {plantillas.map((plantilla) => (
            <tr key={plantilla.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{plantilla.nombre}</td>
              <td className="border border-gray-300 px-4 py-2">{plantilla.tipo}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {plantilla.editable ? "Sí" : "No"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-600 hover:underline mr-2"
                  onClick={() => handleEditar(plantilla.id)}
                >
                  Editar
                </button>
                <button
                  className="text-green-600 hover:underline mr-2"
                  onClick={() => handleExportarPDF(plantilla.id)}
                >
                  Exportar PDF
                </button>
                <button
                  className="text-purple-600 hover:underline"
                  onClick={() => handleEnviarCorreo(plantilla.id)}
                >
                  Enviar por Correo
                </button>
              </td>
            </tr>
          ))}
          {plantillas.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No hay plantillas disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
