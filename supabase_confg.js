const supabase_url = 'https://droabquslsnmgiazqqsk.supabase.co';
const supabase_key = 'sb_publishable_csZKUtyP88vQeg4wV7Lxsw_D9rACesy';

const supabaseClient = typeof window.supabase !== 'undefined'
    ? window.supabase.createClient(supabase_url, supabase_key)
    : null;

if (!supabaseClient) {
    console.error('Não foi possível inicializar o Supabase. Verifique o carregamento do script da CDN.');
}