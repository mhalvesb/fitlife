import Teste from "@/app/teste/page";

export default function EvitarGorduraNoSangue(){
    const listaDeFormasParaEvitarGorduraNoSangue = [
        {
          descriptionName:
            "Consiste em priorizar o consumo de alimentos integrais, frutas, verduras, legumes e grãos ricos em fibras solúveis e insolúveis. Reduzir a ingestão de gorduras saturadas e trans, colesterol e alimentos ultraprocessados.",
          listName: "1. Adoção de uma Dieta Balanceada e Rica em Fibras",
          imageList: "/images/listas/dietaricaebalanceada.jfif", // Substitua pelo caminho da imagem
          beneficios:
            "Ajuda a reduzir o colesterol LDL ('ruim') e triglicerídeos. Contribui para o aumento do colesterol HDL ('bom'). Promove a saciedade, auxiliando no controle do peso. Melhora a saúde intestinal e a absorção de nutrientes. Estabiliza os níveis de açúcar no sangue.",
          comoConsumir:
            "Incluir diariamente diversas porções de frutas e vegetais frescos, cereais integrais (aveia, quinoa, arroz integral), leguminosas (feijão, lentilha, grão de bico) e sementes (chia, linhaça). Limitar o consumo de carnes vermelhas gordurosas, embutidos, frituras, alimentos industrializados e doces.",
        },
        {
          descriptionName:
            "Envolve a incorporação de exercícios aeróbicos (caminhada, corrida, natação, bicicleta) e de força (musculação, pilates) na rotina semanal.",
          listName: "2. Prática Regular de Atividade Física",
          imageList: "/images/listas/praticarexercicios.jfif", // Substitua pelo caminho da imagem
          beneficios:
            "Ajuda a elevar o colesterol HDL e reduzir os triglicerídeos. Contribui para a perda de peso e manutenção de um peso saudável. Melhora a circulação sanguínea e a saúde cardiovascular em geral. Reduz o estresse e a pressão arterial. Aumenta a sensibilidade à insulina.",
          comoConsumir:
            "Buscar realizar pelo menos 150 minutos de atividade aeróbica de intensidade moderada por semana, ou 75 minutos de intensidade vigorosa, além de exercícios de fortalecimento muscular pelo menos duas vezes por semana.",
        },
        {
          descriptionName:
            "Incluir na dieta alimentos ricos em ácidos graxos ômega-3, como peixes gordurosos (salmão, sardinha, atum), sementes de linhaça e chia, e nozes.",
          listName: "3. Consumo Adequado de Ômega-3",
          imageList: "/images/listas/consumiromega3.jfif", // Substitua pelo caminho da imagem
          beneficios:
            "Ajuda a reduzir os níveis de triglicerídeos. Pode contribuir para uma leve redução do colesterol LDL e aumento do HDL. Possui propriedades anti-inflamatórias e antitrombóticas. Beneficia a saúde cardiovascular e cerebral.",
          comoConsumir:
            "Consumir peixe gorduroso pelo menos duas vezes por semana. Adicionar sementes de linhaça ou chia trituradas em iogurtes, saladas ou vitaminas. Incluir um punhado de nozes como lanche. Em alguns casos, suplementação de ômega-3 pode ser recomendada sob orientação médica.",
        },
        {
          descriptionName:
            "Limitar a ingestão de bebidas alcoólicas, seguindo as recomendações de consumo moderado (geralmente até uma dose por dia para mulheres e até duas doses por dia para homens).",
          listName: "4. Moderação no Consumo de Álcool",
          imageList: "/images/listas/moderarnoalcool.jfif", // Substitua pelo caminho da imagem
          beneficios:
            "O consumo excessivo de álcool pode elevar os níveis de triglicerídeos no sangue. A moderação ajuda a evitar esse aumento. Pode contribuir para a manutenção de um peso saudável, já que bebidas alcoólicas são calóricas. Beneficia a saúde do fígado e outros órgãos.",
          comoConsumir:
            "Controlar a frequência e a quantidade de álcool consumido. Optar por não beber ou beber em ocasiões especiais e em quantidades limitadas.",
        },
        {
          descriptionName: "Interromper completamente o hábito de fumar.",
          listName: "5. Abandono do Tabagismo",
          imageList: "/images/listas/abandonartabagismo.jfif", // Substitua pelo caminho da imagem
          beneficios:
            "Fumar prejudica os vasos sanguíneos e reduz o colesterol HDL ('bom'). Parar de fumar melhora esses aspectos. Reduz significativamente o risco de doenças cardiovasculares, incluindo infarto e acidente vascular cerebral (AVC). Melhora a circulação sanguínea e a oxigenação do corpo. Traz inúmeros benefícios para a saúde respiratória e geral.",
          comoConsumir:
            "Buscar ajuda médica e psicológica para auxiliar no processo de abandono do tabagismo. Utilizar métodos comprovados, como terapias de reposição de nicotina, medicamentos e grupos de apoio.",
        },
      ];

      const listaResumidaFormasEvitarGorduraNoSangue = [
        { name: "Dieta Balanceada e Rica em Fibras", number: "1" },
        { name: "Prática Regular de Atividade Física", number: "2" },
        { name: "Consumo Adequado de Ômega-3", number: "3" },
        { name: "Moderação no Consumo de Álcool", number: "4" },
        { name: "Abandono do Tabagismo", number: "5" },
      ];

    return(
        <Teste
        ListAlimentos={listaDeFormasParaEvitarGorduraNoSangue}
        Titulo="5 Melhores Formas para Evitar Gordura no Sangue"
        TituloDesc="Manter os níveis de gordura no sangue sob controle é 
        crucial para a saúde cardiovascular. Adotar hábitos saudáveis que 
        envolvem desde a alimentação até o estilo de vida pode ser fundamental 
        para prevenir complicações e promover um coração mais forte e saudável."
        TituloIntroduc="A seguir, exploramos 5 abordagens eficazes que, integradas ao seu dia a dia, podem desempenhar um papel vital na manutenção de níveis saudáveis de gordura no sangue e na promoção de um sistema cardiovascular robusto."
        TituloNum="As 5 formas de evitar gordura no sangue"
        capa="/images/capas/capagordura.jfif"
        listas={listaResumidaFormasEvitarGorduraNoSangue}
        />
    )
}