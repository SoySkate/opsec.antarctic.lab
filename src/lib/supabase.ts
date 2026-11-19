import { createClient } from '@supabase/supabase-js'

const DEFAULT_URL = 'https://cmbxvdkscuobzxgotecz.supabase.co'
const DEFAULT_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtYnh2ZGtzY3VvYnp4Z290ZWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MDY5NjAsImV4cCI6MjA4NTA4Mjk2MH0.Qo9GChylBTCJ64vCGtP64zPGaeUCdP6L9ZNbuI0cMng'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// Usamos valores por defecto seguros para que createClient no lance y tumbe toda la app
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)
