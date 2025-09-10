"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Crear usuario en auth
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setErrorMsg(signUpError.message);
      return;
    }

    // 2. Recuperar usuario de la sesión
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      setErrorMsg("No se pudo obtener el usuario después del registro.");
      return;
    }

    const user = userData.user;

    // 3. Insertar en empleados
    const { error: insertError } = await supabase.from("empleados").insert({
      id: user.id, // 👈 mismo id que auth.users
      nombre: nombre,
      email: user.email,
      rol: "empleado",
    });

    if (insertError) {
      setErrorMsg("Error al crear empleado: " + insertError.message);
      return;
    }

    // 4. Redirigir a paso 2: registro facial
    router.push("/registro-facial");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
      >
        <h1 className="text-xl font-bold">Registro de empleado</h1>
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Paso 1: Registrarse
        </button>
      </form>
    </div>
  );
}
