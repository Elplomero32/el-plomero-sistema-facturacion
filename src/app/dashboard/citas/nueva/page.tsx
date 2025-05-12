"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevaCitaPage() {
  const router = useRouter();

  const [cliente, setCliente] = useState("");
  const [tecnico, setTecnico] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for saving the new appointment
    alert(`Cita creada para ${cliente} con ${tecnico} el ${fecha} a las ${hora}`);
    router.push("/dashboard/citas");
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Nueva Cita</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cliente" className="block mb-1 font-medium">Cliente</label>
          <input
            id="cliente"
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Nombre del cliente"
          />
        </div>
        <div>
          <label htmlFor="tecnico" className="block mb-1 font-medium">Técnico</label>
          <input
            id="tecnico"
            type="text"
            value={tecnico}
            onChange={(e) => setTecnico(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Nombre del técnico"
          />
        </div>
        <div>
          <label htmlFor="servicio" className="block mb-1 font-medium">Servicio</label>
          <input
            id="servicio"
            type="text"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Servicio a realizar"
          />
        </div>
        <div>
          <label htmlFor="fecha" className="block mb-1 font-medium">Fecha</label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="hora" className="block mb-1 font-medium">Hora</label>
          <input
            id="hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Guardar Cita
        </button>
      </form>
    </div>
  );
}
