## Plano: integrar suas fotos ao portfólio

### O que você faz
Anexe as fotos no chat (botão **+** → **Attach** ou arrastando). Limite: 20 MB por arquivo, 10 por mensagem — divida em várias mensagens se precisar. Para cada foto, mande junto:
- **Título** (ex: "Silent Linen")
- **Categoria**: Editorial, Street, Retratos ou Paisagens

Pode mandar em lista no formato: `arquivo1.jpg — Silent Linen — Editorial`.

### O que eu faço

1. **Importar as imagens**
   - Salvo cada foto em `src/assets/portfolio/` com nome normalizado
   - Detecto orientação automaticamente (retrato/paisagem/quadrada) lendo as dimensões — você não precisa informar

2. **Atualizar `src/lib/photos.ts`**
   - Substituo a lista de placeholders Unsplash pelas suas fotos
   - Mantenho só `title` e `category` nas legendas (como pediu); removo local e câmera do `Lightbox` e do tipo `Photo`

3. **Suportar 30+ fotos com elegância**
   - Adiciono **"Carregar mais"** no `Gallery.tsx`: mostra 12 inicialmente, carrega +12 por clique com fade-in suave
   - Mantenho o ritmo assimétrico do grid expandindo o array de padrões de layout para evitar repetição visual em volumes maiores
   - `loading="lazy"` já está nas `<img>`; adiciono `decoding="async"` para performance

4. **Otimização de imagens**
   - Fotos originais ficam como estão (qualidade máxima no lightbox)
   - Vite serve em formato moderno automaticamente; não comprimo nada destrutivamente

### Arquivos afetados
- `src/assets/portfolio/*` (novo, criado a partir dos seus uploads)
- `src/lib/photos.ts` (reescrita)
- `src/components/Gallery.tsx` (adicionar paginação "load more")
- `src/components/Lightbox.tsx` (remover linhas de local/câmera)

### O que **não** muda
Design, tipografia, dark mode, header/footer, páginas Sobre e Contato — tudo permanece.

---

Pode mandar as fotos quando quiser. Se forem muitas, vá enviando em lotes que eu vou processando.