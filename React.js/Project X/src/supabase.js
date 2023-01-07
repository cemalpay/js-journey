import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nkfrsvaqfwhdrscsccqj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZnJzdmFxZndoZHJzY3NjY3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwMTI1MDcsImV4cCI6MTk4NzU4ODUwN30.48a_RYFtgAAjqdZKu9LQq5lhRdyu5WzdQXPMQNBE5dI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
