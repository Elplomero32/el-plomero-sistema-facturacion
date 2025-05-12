"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const clienteSchema = z.object({
  tipo: z.enum(["personal", "empresa"], {
    required_error: "Seleccione el tipo de cliente",
  }),
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  rnc: z.string().min(9, {
    message: "El RNC/Cédula debe tener al menos 9 caracteres",
  }),
  telefono: z.string().min(10, {
    message: "Ingrese un número de teléfono válido",
  }),
  email: z.string().email({
    message: "Ingrese un correo electrónico válido",
  }),
  direccion: z.string().min(10, {
    message: "Ingrese una dirección válida",
  }),
})

export default function NuevoClientePage() {
  const router = useRouter()
  
  const form = useForm<z.infer<typeof clienteSchema>>({
    resolver: zodResolver(clienteSchema),
    defaultValues: {
      tipo: "personal",
      nombre: "",
      rnc: "",
      telefono: "",
      email: "",
      direccion: "",
    },
  })

  function onSubmit(values: z.infer<typeof clienteSchema>) {
    // TODO: Implement client creation
    console.log(values)
    router.push("/dashboard/clientes")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Nuevo Cliente</h1>
        <Button variant="outline" onClick={() => router.back()}>
          Cancelar
        </Button>
      </div>

      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="tipo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Cliente</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione el tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="empresa">Empresa</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rnc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RNC/Cédula</FormLabel>
                    <FormControl>
                      <Input placeholder="000-0000000-0" {...field} />
                    </FormControl>
                    <FormDescription>
                      RNC para empresas, cédula para personas
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre/Razón Social</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre completo o razón social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="(809) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="ejemplo@dominio.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="direccion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Dirección completa" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" size="lg">
                Registrar Cliente
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  )
}
