# Manual de Rastreamento e Estratégia de Marketing Digital
## Brivanna Hotel — Meta (Facebook) Ads

---

## 1. O Funil do Site Oficial: O Que Cada Evento Significa Para o Negócio

Imagine o site do Brivanna como um funil. Em cada etapa, configuramos um "sensor" para contar quantas pessoas passaram por ali e o que fizeram. Esses dados chegam diretamente ao Gerenciador de Anúncios da Meta.

---

### Evento 1 — PageView (Visualização de Página)

**O que acontece:** Toda vez que qualquer pessoa abre o site do Brivanna Hotel, esse evento é disparado automaticamente.

**O que isso significa para o negócio:** É a entrada no funil. Esse número representa o tamanho total do público que o site está alcançando. A Meta usa esses dados para entender o perfil de quem visita o hotel — idade, localização, interesses — e encontrar pessoas com perfil parecido para exibir os anúncios (o chamado Público Semelhante ou Lookalike).

**Onde visualizar:** Gerenciador de Anúncios → Eventos do Pixel → PageView

---

### Evento 2 — InitiateCheckout (Intenção de Reserva)

**O que acontece:** Disparado em dois momentos: quando o hóspede clica em "Reserve agora" no menu do site, e quando ele clica em "Buscar" para ser redirecionado ao Motor de Reservas.

**O que isso significa para o negócio:** Este é o visitante mais valioso do funil — alguém que levantou a mão e disse: *"Quero reservar."* Ele foi além da curiosidade e tomou uma ação concreta em direção à reserva. Esse público representa **alta intenção de compra** e é a base das estratégias de remarketing.

**Onde visualizar:** Gerenciador de Anúncios → Eventos do Pixel → InitiateCheckout

---

## 2. A Ponte de Dados — O Ponto Crítico Para Medir o Retorno do Investimento

Esta é a informação mais importante deste manual. Leia com atenção.

O site do Brivanna funciona como uma vitrine: ele apresenta o hotel, desperta o desejo e direciona o hóspede ao **Motor de Reservas** — o sistema externo onde a reserva é, de fato, concluída e o pagamento realizado.

Isso significa que **o evento de "Compra" (Purchase) — que registra o valor em R$ de cada reserva e nos permite calcular o ROAS (Retorno sobre o Investimento em Anúncios) — acontece fora do nosso site**, em um sistema de terceiros.

**A consequência direta:** sem a configuração abaixo, todo o investimento em anúncios será gerenciado parcialmente às cegas. Saberemos quantas pessoas clicaram e quantas demonstraram intenção, mas não saberemos quantas efetivamente reservaram nem quanto dinheiro cada campanha gerou.

---

### O Que Precisa Ser Feito (Ação Urgente)

A equipe responsável pelo Motor de Reservas (Bitz Softwares) precisa ser acionada para **instalar o ID do Pixel do Facebook diretamente no painel administrativo do Motor de Reservas**.

**Por que isso resolve o problema:** Uma vez configurado, sempre que um hóspede concluir uma reserva no Motor e o pagamento for confirmado, o evento `Purchase` será disparado automaticamente para a Meta, enviando:

- O **valor exato** da reserva em R$
- As datas de check-in e check-out
- Todos os dados necessários para calcular o **ROAS real** de cada campanha

**O que passar para o suporte do Motor de Reservas:**

> *"Precisamos instalar o Facebook/Meta Pixel no sistema para rastrear conversões. O ID do nosso Pixel é: [inserir o ID aqui]. Precisamos que o evento `Purchase` seja disparado ao final de uma reserva confirmada, com o valor total em BRL."*

---

## 3. Estratégias de Remarketing — Convertendo Intenção em Reserva

Com os dados já sendo coletados no site, podemos usar duas estratégias para recuperar hóspedes que demonstraram interesse mas não concluíram a reserva.

---

### Estratégia 1 — Campanha "Quase Lá": Remarketing de Abandono

**Para quem:** Pessoas que clicaram para ir ao Motor de Reservas (evento `InitiateCheckout`) mas não concluíram a reserva (sem evento `Purchase`).

**Como configurar o público no Gerenciador de Anúncios:**
> Pessoas que realizaram **InitiateCheckout nos últimos 14 dias**, excluindo quem realizou **Purchase nos últimos 14 dias**.

**Mensagem sugerida para os anúncios:**
> *"Você estava tão perto! Seu quarto no Brivanna ainda pode estar disponível. Reserve agora antes que alguém leve."*

**Formatos recomendados:** Carrossel mostrando os quartos e a estrutura do hotel, com botão "Reserve agora" levando diretamente ao Motor de Reservas.

**Frequência recomendada:** 2 a 3 exibições por dia nos primeiros 3 dias após o abandono. Reduza a frequência gradualmente na segunda semana.

---

### Estratégia 2 — Campanha "Oferta Especial": Incentivo com Benefício Exclusivo

**Para quem:** O mesmo público da Estratégia 1, porém com uma janela maior — **30 dias** — para alcançar quem demorou mais para decidir.

**Lógica:** Parte desse público não converteu por questão de preço ou indecisão. Um incentivo adicional pode ser o empurrão final para fechar a reserva.

**Mensagem sugerida para os anúncios:**
> *"Uma vantagem exclusiva para você: reserve o Brivanna agora com [benefício: desconto, café da manhã incluso, upgrade de quarto] e garanta sua estadia no coração de Campo Grande."*

**Formatos recomendados:** Story e Reels com vídeo curto mostrando os diferenciais do hotel — café da manhã, localização central, estrutura — com chamada direta para reserva.

**Atenção:** Defina o benefício com a gestão do hotel antes de ativar a campanha. As opções mais eficazes são: desconto percentual na diária, café da manhã incluso, ou upgrade de quarto mediante disponibilidade.

---

*Este manual deve ser revisado a cada 3 meses ou sempre que houver alterações no Motor de Reservas ou nas configurações do Pixel.*
