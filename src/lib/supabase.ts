import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase no configurado: falta VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en .env. ' +
      'El chat y el formulario de leads no funcionarán, pero la web se renderiza igual.'
  )
}

// Usamos valores placeholder cuando faltan las variables para que createClient
// no lance y tumbe toda la app (pantalla en blanco).
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)
