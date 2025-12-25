# Portfolio Alexandre Talles

Portfólio profissional desenvolvido com Next.js 15, TypeScript e padrões modernos de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **CSS Modules** - Estilos com suporte a animações e efeitos
- **Boxicons** - Biblioteca de ícones

## 📁 Estrutura do Projeto

```
portfolio-ale/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx        # Layout principal com metadados SEO
│   │   └── page.tsx          # Página principal
│   ├── components/          # Componentes React modulares
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── BlackHole.tsx
│   ├── hooks/               # Hooks customizados
│   │   └── useAnimations.ts # Hooks para animações e efeitos
│   └── types/               # Definições TypeScript
│       └── index.ts         # Interfaces e tipos
└── public/
    └── assets/              # Assets estáticos (vídeos, imagens)
```

## ✨ Características

### Padrões Next.js Implementados:
- ✅ **Client Components** - Uso de 'use client' apenas onde necessário
- ✅ **TypeScript** - Tipagem completa em todo o projeto
- ✅ **Componentes Modulares** - Separação de responsabilidades
- ✅ **Hooks Customizados** - Lógica reutilizável e organizada
- ✅ **Metadata API** - SEO otimizado com Next.js metadata
- ✅ **Estrutura de Pastas** - Organização seguindo convenções do Next.js

### Funcionalidades:
- 🎨 Design moderno com tema escuro
- 🌊 Animações suaves e efeitos de hover
- 📱 Totalmente responsivo
- ♿ Acessível (aria-labels, navegação por teclado)
- 🎭 Efeitos de parallax e tilt em cards
- 🎯 Navegação smooth scroll
- 💫 Animações de entrada com Intersection Observer

## 🎯 Componentes

### Header
- Navegação fixa com efeito de scroll
- Links sociais
- Menu responsivo

### Hero
- Seção principal com apresentação
- Botões de call-to-action
- Badge animado

### About
- Cards informativos com efeito tilt
- Ícones animados
- Grid responsivo

### Projects
- Showcase de projetos
- Tags de tecnologias
- Links externos

### Skills
- Categorias de habilidades
- Ícones interativos
- Animações de entrada

### Contact
- Métodos de contato
- Efeito ripple ao clicar
- Links diretos

## 🎨 Customização

Para personalizar o portfólio:

1. **Dados Pessoais**: Edite as constantes em `src/app/page.tsx`
2. **Cores**: Modifique as variáveis CSS em `src/app/globals.css`
3. **Componentes**: Ajuste os componentes em `src/components/`
4. **Tipos**: Atualize as interfaces em `src/types/index.ts`

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📝 Notas Importantes

- **Vídeo de Fundo**: Adicione o arquivo `blackhole.mp4` em `public/assets/`
- **Layout Idêntico**: O layout foi mantido 100% idêntico ao example.tsx
- **TypeScript**: Todos os componentes agora possuem tipagem adequada
- **Performance**: Hooks otimizados para evitar re-renders desnecessários

## 🔧 Melhorias Implementadas

Comparado ao example.tsx original:

1. **TypeScript**: Tipos e interfaces para todos os dados
2. **Componentes**: Separação em arquivos modulares
3. **Hooks**: Lógica de efeitos extraída para hooks reutilizáveis
4. **Metadata**: SEO otimizado com Next.js Metadata API
5. **Organização**: Estrutura de pastas seguindo padrões do Next.js
6. **Manutenibilidade**: Código mais fácil de manter e escalar

## 📄 Licença

© 2025 Alexandre Talles. Todos os direitos reservados.
