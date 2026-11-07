# Central de Gestão

## 1. Banco de dados e login (Supabase, gratuito)
1. Crie um projeto em https://supabase.com.
2. Abra **SQL Editor**, cole o conteúdo de `supabase/schema.sql` e execute.
3. Em **Authentication > Users > Add user**, crie o e-mail e a senha do administrador.
4. Em **Authentication > Sign In / Providers**, desative **Allow new users to sign up** (para ninguém mais criar conta).
5. Em **Project Settings > API**, copie a **Project URL** e a chave **anon public**.

## 2. Publicar na Vercel
1. Envie esta pasta para um repositório no GitHub (a pasta raiz deve ter `package.json`).
2. Na Vercel: **Add New > Project**, escolha o repositório. Framework: **Other**. O `vercel.json` já define build e saída.
3. Em **Settings > Environment Variables** adicione `SUPABASE_URL` e `SUPABASE_ANON_KEY`.
4. Faça o deploy (ou **Redeploy**).

## Testar localmente
    SUPABASE_URL=... SUPABASE_ANON_KEY=... npm run build && npm start

## Estrutura
- `src/index.html` aplicação completa
- `build.js` gera `dist/` e `config.js` com as variáveis
- `vercel.json` build e pasta de saída
- `supabase/schema.sql` tabela, segurança (RLS) e dados fictícios

## Backup
Menu **Histórico > Baixar backup**. O Supabase também faz backups do banco no painel do projeto.
