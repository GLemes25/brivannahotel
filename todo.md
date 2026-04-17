# 📌 Backlog de Melhorias – Site do Hotel

🧩 1. Nova Seção: Empresas / Profissionais / Transitórios

Objetivo: Captar parcerias corporativas

Criar seção: “Para Empresas / Profissionais / Transitórios”
Adicionar botão CTA: “Seja uma empresa conveniada”
Redirecionamento para nova página (/empresas)
Página deve conter:
Formulário com campos:
Nome da empresa
CNPJ
Nome do responsável
Email
Telefone
Mensagem
Integração para envio ao email administrativo\

🏨 2. Página de Quartos (Rooms)

Objetivo: Direcionar conversão para o motor de reservas

Remover ações secundárias (ex: detalhes desnecessários)
Manter apenas 1 CTA principal:
Botão: “Reservar”
Ação do botão:
Redirecionar diretamente para o motor de reservas externo

📍 4. Página: Interesses Próximos

Objetivo: Melhorar experiência e SEO local

Criar página dinâmica: /interesses/[tipo]
Navegação baseada em categorias:

Categorias:

Lavanderias
Hamburguerias
Restaurantes
Pizzarias
Pontos turísticos
Supermercados
Farmácias
Aeroporto

Implementação:

Passar id ou slug na rota
Exemplo:
/interesses/restaurantes
/interesses/farmacias

📌 5. Header (Global)

Objetivo: Maximizar conversão

Adicionar botão fixo:
“Reservar Agora”
Sempre visível (sticky/fixed)
Redireciona para o motor de reservas

📲 7. Contato (Nova abordagem no Footer ou Seção)

Objetivo: Simplificar comunicação

Adicionar:
Links de redes sociais (WhatsApp, Instagram, etc.)
Criar mini formulário:
Nome
Email
Mensagem
Integração:
Envio direto para email administrativo

🧠 Sugestão Técnica (Arquitetura Next.js)
Usar App Router
Criar estrutura:
/app
/empresas
/interesses
/[tipo]
/rooms
Componentização:
CTAReserveButton
CompanyForm
ContactMiniForm
RulesSection
NearbyCategories

🚀 Prioridade Recomendada
Header com botão fixo (impacto direto em conversão)
Ajuste da página Rooms
Página Empresas (captação B2B)
Página de Regras
Interesses Próximos (SEO + UX)
Footer com contato + redes
Remoção da página antiga de contato

Na parte de indicacoes:interesse proximos vai carergar outra pagina provaveleten passando o id :lavandertias, hamburguerias, restaurantes, pizzariuas, pontos turisticos, supermercados, farmacias, aeroporto

+e um pequeno foramulario para cair no email adm
