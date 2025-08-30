import { createClient, SupabaseClient } from '@supabase/supabase-js';

// A factory function to create a Supabase client instance
export function createSupabaseClient(
  supabaseUrl: string,
  supabaseAnonKey: string
): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and anon key are required');
  }
  console.log('supabaseUrl: ',{
    a: supabaseUrl,
    b: supabaseAnonKey
  })
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Optional: Re-export core types for convenience
export * from '@supabase/supabase-js';