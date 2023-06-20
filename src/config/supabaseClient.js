import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabseKey = import.meta.env.VITE_REACT_APP_ANON_KEY;

const supabase = createClient(supabaseUrl, supabseKey);

export default supabase;
