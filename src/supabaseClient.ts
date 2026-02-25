import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hviraibnbivfgiemburw.supabase.co';
const supabaseAnonKey = 'sb_publishable_sjEgVRCw4nAAbabJiKx0VA_vMAN4oEo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
