# 📦 Contexto do Projeto

## 🧠 Visão Geral

Este projeto é uma aplicação web desenvolvida com Next.js, focada em interface de hotel / reservas, incluindo funcionalidades como carrinho, exibição de produtos, avaliações e mapa.

O projeto já está funcional, porém **não segue um padrão consistente de código**, e está passando por um processo de **refatoração progressiva**.

---

## ⚙️ Stack Tecnológica

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- Zustand (gerenciamento de estado)
- Framer Motion (animações)

---

## 🎯 Objetivo Atual

Refatorar o projeto para:

- Melhorar legibilidade e manutenção
- Padronizar código
- Aumentar reutilização de componentes
- Adotar boas práticas modernas

---

## 📐 Regras de Código (OBRIGATÓRIAS)

### 🔹 React

- Sempre usar **arrow functions**
- Sempre usar **componentes funcionais**
- Componentes devem ser pequenos e reutilizáveis
- Evitar lógica complexa diretamente no JSX
- Separar lógica em hooks quando necessário

---

### 🔹 TypeScript

- Sempre usar `type` ao invés de `interface`
- Tipar absolutamente tudo (props, estados, funções)
- Evitar `any`
- Preferir tipos explícitos

---

### 🔹 Estrutura

- Sempre componentizar ao máximo
- Evitar arquivos grandes
- Separar responsabilidades (UI, lógica, estado)

---

### 🔹 UI / Estilo

- Usar TailwindCSS
- Evitar CSS customizado desnecessário
- Manter consistência visual

---

## 🚀 Diretriz de Refatoração (MUITO IMPORTANTE)

O projeto atual **não segue essas regras ainda**.

Portanto:

- NÃO reescrever tudo de uma vez
- Refatorar **apenas o que for solicitado**
- Sempre manter compatibilidade com o código existente
- Melhorar incrementalmente

---

## 🧩 ShadCN (Adoção Progressiva)

Objetivo:

- Utilizar componentes do shadcn/ui sempre que possível

Regras:

- Preferir shadcn ao invés de criar componentes do zero
- Substituir componentes existentes gradualmente
- Não quebrar funcionalidades existentes

---

## 🧠 Estado (Zustand)

- Manter stores simples
- Evitar lógica complexa dentro do store
- Separar responsabilidades

---

## ⚡ Performance

- Evitar re-renderizações desnecessárias
- Usar memoização quando necessário
- Preferir Server Components quando possível

---

## ❗ Restrições

- Não adicionar novas dependências sem necessidade
- Não alterar APIs existentes sem motivo
- Não quebrar comportamento atual

---

## 🧠 Como o assistente deve agir

- Ser direto e objetivo
- Priorizar código ao invés de explicação
- Seguir rigorosamente as regras acima
- Respeitar o estado atual do projeto (legado)
- Sempre sugerir melhorias incrementais

---
