<div align="center">
  <img src="public/brivanna_logo.svg" alt="Logo Brivanna Hotel" width="300" />

# Brivanna Hotel - Site Oficial

![Status](https://img.shields.io/badge/Status-Em_Produção-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

</div>

> Projeto desenvolvido com foco em demonstrar **engenharia de frontend avançada**, UX/UI de alto padrão (Luxury Design) e desenvolvimento focado em conversão para um negócio real do setor hoteleiro em Campo Grande, MS.

---

## 🚀 Demo Online

[![Deploy](https://img.shields.io/badge/Deploy-Production-black?style=for-the-badge&logo=vercel)](https://brivannahotel.com.br/)

👉 **Acesse a aplicação em produção:**
🔗 [https://brivannahotel.com.br/](https://brivannahotel.com.br/)

---

## 📋 Sobre o Projeto

O **Brivanna Hotel** é a plataforma digital oficial de uma empresa de hotelaria real. A aplicação atua como a principal vitrine e motor de conversão do hotel.

Diferente de templates genéricos, esta plataforma foi construída do zero aplicando um **Design System de Luxo** rigoroso (tipografia serifada, paleta dark com dourado, glassmorphism) para traduzir a sofisticação do ambiente físico para o digital.

Além do apelo visual, o sistema resolve problemas reais de hospitalidade, entregando utilidade aos hóspedes durante a estadia.

---

## ✨ Funcionalidades

- 🛎️ **Booking Widget Integrado:** Fluxo otimizado para direcionar o usuário à reserva.
- 🗺️ **Guia Local Inteligente (Indicações Brivanna):** Recomendações dinâmicas de restaurantes, bares, farmácias e turismo.
- 🕒 **Motor de Status em Tempo Real:** Cálculo algorítmico que cruza o horário local (Campo Grande - MS) com os dados dos estabelecimentos para exibir tags de "Aberto", "Fechado" ou "Abre em breve".
- 💬 **Provas Sociais Dinâmicas:** Carrossel infinito integrado a avaliações reais de hóspedes do Booking.com.
- 📱 **Mobile-First UX:** Interações pensadas para o toque (touch-friendly), menus fluidos e botões de contato ágeis.

---

## 🛠️ Tecnologias Utilizadas

### Frontend & Core

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### UI, UX & Animações

- Framer Motion (Animações de entrada, scroll e interações micro-UI)
- Lucide React (Iconografia premium)
- shadcn/ui (Componentes base adaptados para o design proprietário)

### Utilitários

- Day.js (Manipulação de datas e horários em tempo real)

### Infraestrutura

- pnpm
- Vercel (Hospedagem em Produção)

---

## 🧩 Destaques Técnicos

- 🎨 **Luxury Design System em Código:** Criação de um conjunto de regras estritas usando Tailwind CSS para garantir consistência visual extrema (ausência de inline-styles, controle minucioso de opacidade e _backdrop-blur_).
- ⚡ **Otimização de Renderização & Memoization:** Uso de `useMemo` para filtragem de categorias e extração de tags dinâmicas sem re-renderizações desnecessárias.

- 🧠 **Lógica de Tempo Real (Client-side):** Implementação de um hook complexo para interpretar horários de funcionamento em formato string/JSON, transformando-os em status dinâmicos (ex: fecha em menos de 1h) para melhorar a decisão do hóspede.

- 🎢 **Animações Performáticas:** Uso inteligente do `requestAnimationFrame` combinado com Framer Motion para criar sliders infinitos e transições de página fluidas que não bloqueiam a _Main Thread_ do navegador.

---

## 📁 Estrutura do Projeto

```bash
src/
 ├── app/
 │   ├── components/      # Componentes UI (Cards, Headers, Widgets)
 │   ├── data/            # JSONs simulando banco de dados (Feedbacks, Indicações)
 │   └── (routes)/        # Estrutura de rotas do Next.js App Router
 ├── helpers/             # Funções utilitárias globais
 └── lib/                 # Configurações de bibliotecas de terceiros
```

## 🚀 Como Executar o Projeto

```
# Clone o repositório
git clone https://github.com/GLemes25/brivannahotel.git

# Acesse a pasta
cd brivannahotel

# Instale as dependências
pnpm install

# Rodar projeto localmente
pnpm dev
```

> Acesse http://localhost:3000 para visualizar a aplicação.

### 👤 Autor

## Gabriel Lemes de Oliveira

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gabriel-lemes-G25)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabriellemes924@gmail.com)
[![Whatsapp](https://img.shields.io/badge/Whatsapp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5567991179190)
