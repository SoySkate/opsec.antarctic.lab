# 🚀 Despliegue del Chatbot con Supabase

## 📋 Pasos para Configurar

### 1. Crear Proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea cuenta y nuevo proyecto
3. Copia la URL y la Anon Key desde Settings → API

### 2. Actualizar Variables de Entorno
En tu archivo `.env`:
```env
VITE_SUPABASE_URL=https://tu-proyecto-id.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

### 3. Configurar API Key en Supabase
1. Ve a tu dashboard de Supabase
2. Settings → Edge Functions
3. En "Secrets", agrega:
   - Name: `GROQ_API_KEY`
   - Value: `tu-groq-api-key-aqui`

### 4. Desplegar la Función

#### Opción A: CLI (Recomendado)
```bash
# Instalar CLI de Supabase
npm install -g supabase

# Login
supabase login

# Link al proyecto
supabase link --project-ref tu-proyecto-id

# Desplegar función
supabase functions deploy chat
```

#### Opción B: Dashboard
1. Ve a Edge Functions en Supabase
2. Crea nueva función llamada "chat"
3. Pega el contenido de `supabase/functions/chat/index.ts`
4. Guarda y despliega

### 5. Probar Localmente
```bash
# Iniciar servidor local
supabase functions serve --env-file .env

# Probar con curl
curl -X POST 'http://localhost:54321/functions/v1/chat' \
  -H 'Authorization: Bearer tu-anon-key' \
  -H 'Content-Type: application/json' \
  -d '{"mensaje": "Hola Kowalski"}'
```

## 🔧 Estructura de Archivos

```
tu-proyecto/
├── supabase/
│   └── functions/
│       └── chat/
│           └── index.ts          # Backend en Supabase
├── src/
│   ├── components/
│   │   └── ChatKowalski.tsx     # Frontend actualizado
│   └── lib/
│       └── supabase.ts          # Cliente Supabase
└── .env                          # Variables de entorno
```

## ✅ Verificación

1. **Frontend**: El chatbot debe llamar a la función de Supabase
2. **Backend**: La función debe procesar con Groq
3. **Logs**: Revisa los logs en Supabase Dashboard
4. **API Keys**: Nunca deben exponerse en el frontend

## 🎯 Ventajas

- ✅ **Seguro**: API keys protegidas
- ✅ **Rápido**: Edge functions globales
- ✅ **Gratis**: Plan generoso de Supabase
- ✅ **Escalable**: Crece automáticamente
- ✅ **Profesional**: Backend real

## 🚨 Notas Importantes

- La API key de Groq está segura en Supabase
- El frontend solo usa la anon key de Supabase
- Los logs están disponibles en Supabase Dashboard
- Puedes monitorear el uso y rendimiento
