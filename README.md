# CineApp — Catálogo de Filmes

**Aluno:** Camila Machado de Souza \
**RA:** 2991392513020 \
**Aplicativo:** CineApp \
**Disciplina:** Programação para Dispositivos Móveis I \

---

## Descrição

O **CineApp** é uma aplicação mobile desenvolvida com **React Native + Expo Router**
que apresenta um catálogo de filmes e animes. O usuário pode navegar entre telas,
visualizar detalhes de cada título, favoritar seus preferidos e consultar
informações sobre o aplicativo.

O projeto foi desenvolvido como atividade avaliativa da disciplina
**Programação para Dispositivos Móveis I**, aplicando exclusivamente os conceitos
estudados até a Aula 09.

---

## Funcionalidades

- **Tela inicial** com logotipo, descrição e botão de acesso ao catálogo
- **Catálogo** com títulos cadastrados diretamente no código, cada um com:
  - Imagem                 - Consultas: catálogo, detalhes 
  - Nome                   - Consultas: catálogo, detalhes
  - Gêneros (array)        - Consultas: catálogo, detalhes
  - Ano                    - Consultas: detalhes
  - Nota (rating)          - Consultas: detalhes
  - Status de favorito     - Consultas: catálogo, detalhes
  - Sinopse / review geral - Consultas: detalhes
- **Sistema de favoritos** com `useState` — o botão alterna entre
  `☆ Favoritar` e `★ Favorito`, com mudança visual imediata
- **Tela de detalhes** com pôster grande e metadados completos
- **Tela "Sobre"** com nome, finalidade, versão, disciplina e identificação do aluno
- **Navegação entre telas** com Expo Router
- **Menu de navegação** reutilizável, presente em todas as telas
- **`useEffect`** em duas situações:
  1. No catálogo, para simular carregamento e registrar mensagem no console
  2. No card de filme, para sincronizar o estado de favorito com o array de dados

---

## Tecnologias e conceitos aplicados

- **React Native** com **Expo**
- **TypeScript** (`.tsx`)
- **Expo Router** para navegação entre telas
- **Componentes fundamentais:** `View`, `Text`, `Image`
- **`StyleSheet`** para estilos centralizados
- **Flexbox** para layout (`flexDirection`, `flex`, `justifyContent`, `alignItems`, `gap`)
- **`Pressable`** com feedback visual via `({ pressed }) => [...]`
- **`useState`** para o estado de favorito
- **`useEffect`** para carregamento e sincronização
- **Componentes reutilizáveis** com **Props**

---

## Componentes reutilizáveis

| Componente | Arquivo | Descrição |
|------------|---------|-----------|
| `MovieCard` | `components/MovieCard.tsx` | Apresenta um filme no catálogo |
| `Button` | `components/Button.tsx` | Botão com variantes e feedback de toque |
| `Menu` | `components/Menu.tsx` | Barra de navegação entre telas |

---

## Estrutura do projeto

```txt
CineApp/
├── app/
│   ├── index.tsx          # Tela inicial
│   ├── list.tsx           # Tela de catálogo
│   ├── details.tsx        # Tela de detalhes
│   └── about.tsx          # Tela "Sobre"
├── components/
│   ├── MovieCard.tsx      # Card reutilizável de filme
│   ├── Button.tsx         # Botão reutilizável
│   └── Menu.tsx           # Menu de navegação reutilizável
├── data/
│   └── movies.ts          # Dados dos filmes + tipo Movie
├── styles/
│   └── styles.ts          # Estilos centralizados
├── assets/                # Imagens dos filmes e do app
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Scripts disponíveis

| Comando | Descrição | 
|---------|-----------|
|**npm start**	| Inicia o servidor Expo|
|**npm run android** | Abre no emulador Android|
|**npm run ios** | Abre no simulador iOS|
|**npm run web** | Abre no navegador|
|**npm run format** | Formata o código com Prettier|