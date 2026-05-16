import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Add a quick console.log here to debug if it fails again
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env variables are missing!")
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey)