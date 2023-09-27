import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gjlbtvocoxqojhmugcax.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqbGJ0dm9jb3hxb2pobXVnY2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNjE5NDgsImV4cCI6MjAxMDYzNzk0OH0.bGtCoU54P-T6AEsKnnY6i6kYGO99kRe8DuCdTghv0HA'
const supabase = createClient(supabaseUrl, supabaseKey)