
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://feovjqhrpxhmeraryfgs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlb3ZqcWhycHhobWVyYXJ5ZmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyODk2OTMsImV4cCI6MjA1Njg2NTY5M30.euwZtFz_Ya_bba2Y4HNfO8US1bHDu5bQaU5A9giLnB0";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
