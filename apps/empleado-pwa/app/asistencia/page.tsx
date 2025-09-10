"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AsistenciaPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const marcarAsistencia = async () => {
    setLoading(true);
    setMessage(null);

    // obtenemos el usuario actual
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setMessage("❌ No se pudo obtener el usuario.");
      setLoading(false);
      return;
    }

    // insertamos en la tabla asistencias
    const { error } = await supabase.from("asistencias").insert({
      empleado_id: user.id,
      // por ahora solo hora, luego añadimos GPS y foto
    });

    if (error) {
      setMessage("❌ Error: " + error.message);
    } else {
      setMessage("✅ Asistencia registrada!");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center">
        <h1 className="text-xl font-bold mb-4">Marcar asistencia</h1>

        <button
          onClick={marcarAsistencia}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Registrando..." : "Marcar asistencia"}
        </button>

        {message && <p className="mt-3 text-sm">{message}</p>}
      </div>
    </div>
  );
}
