import Teste from "../../teste/page";

export default function ExerciciosParaEmagrecer(){
  const listaResumidaDeExerciciosParaEmagrecer = [
    { name: "Corrida Intervalada (HIIT)", number: "1" },
    { name: "Agachamento com Salto", number: "2" },
    { name: "Burpee", number: "3" },
  ];

  const listaDeExerciciosParaEmagrecer = [
    {
      descriptionName:
        "A corrida intervalada, ou HIIT (High-Intensity Interval Training) aplicado à corrida, alterna curtos períodos de corrida de alta intensidade com períodos de descanso ou corrida leve. Essa variação mantém o corpo constantemente desafiado, elevando o gasto calórico durante e após o exercício.",
      listName: "1. Corrida Intervalada (HIIT)",
      imageList: "/images/listas/exercicio1.jfif", // Substitua pelo caminho da imagem
      beneficios:
        "Altamente eficaz para queimar um grande número de calorias em um período relativamente curto. Melhora a capacidade cardiovascular, aumenta o metabolismo e promove a queima de gordura corporal de forma eficiente.",
      comoConsumir:
        "Aquecimento (5 minutos): Caminhada leve ou trote suave.\nIntervalos de Alta Intensidade (30-60 segundos): Corra o mais rápido que conseguir (ou em um ritmo muito desafiador).\nIntervalos de Descanso/Baixa Intensidade (igual ou o dobro do tempo do intervalo de alta intensidade): Caminhe ou trote levemente para recuperar o fôlego.\nRepita: Alterne entre os intervalos de alta e baixa intensidade por 15-30 minutos.\nResfriamento (5 minutos): Caminhada leve e alongamentos suaves.",
    },
    {
      descriptionName:
        "O agachamento com salto é um exercício composto que trabalha intensamente os músculos das pernas e glúteos, ao mesmo tempo em que eleva a frequência cardíaca, promovendo um alto gasto calórico.",
      listName: "2. Agachamento com Salto",
      imageList: "/images/listas/exercicio2.jfif", // Substitua pelo caminho da imagem
      beneficios:
        "Fortalece os músculos inferiores (quadríceps, isquiotibiais, glúteos e panturrilhas), melhora a potência e a explosão muscular, e queima muitas calorias devido à intensidade do movimento.",
      comoConsumir:
        "Posição Inicial: Fique em pé com os pés afastados na largura dos ombros, braços ao lado do corpo.\nAgachamento: Abaixe o corpo flexionando os joelhos e quadris, como se fosse sentar em uma cadeira. Mantenha as costas retas e o peito aberto.\nSalto: Ao atingir a parte mais baixa do agachamento, impulsione-se para cima com força, saltando do chão.\nAterrissagem: Aterre suavemente com os joelhos levemente flexionados para absorver o impacto.\nRepita: Realize o movimento de forma controlada por 10-15 repetições em 3-4 séries, com descanso entre as séries.",
    },
    {
      descriptionName:
        "O burpee é um exercício de corpo inteiro que combina agachamento, flexão, salto e elevação dos braços. É um movimento dinâmico e intenso que trabalha diversos grupos musculares e eleva rapidamente a frequência cardíaca.",
      listName: "3. Burpee",
      imageList: "/images/listas/exercicio3.jfif", // Substitua pelo caminho da imagem
      beneficios:
        "Trabalha praticamente todos os principais grupos musculares, melhora a força, a resistência cardiovascular e a coordenação motora. É um excelente queimador de calorias.",
      comoConsumir:
        "Posição Inicial: Fique em pé com os pés afastados na largura dos ombros e braços ao lado do corpo. \nAgachamento: Abaixe o corpo em um agachamento, colocando as mãos no chão à frente dos pés.\nPrancha: Jogue os pés para trás com um salto, estendendo as pernas e ficando em posição de prancha alta (apoio nas mãos e ponta dos pés, corpo reto).\nFlexão (opcional): Se desejar, faça uma flexão de braço nessa posição.\nVolta à Posição de Agachamento: Com um salto, traga os pés de volta para a posição de agachamento, entre as mãos.\nSalto Vertical: Impulsione-se para cima com um salto explosivo, elevando os braços acima da cabeça.\nRepita: Realize o movimento de forma fluida por 8-12 repetições em 3-4 séries, com descanso entre as séries.",
    },
  ];


    

    return(
        <Teste
         ListAlimentos={listaDeExerciciosParaEmagrecer}
         Titulo="Guia de Exercícios de Alta Eficácia para Emagrecimento"
         TituloDesc="Incorporar exercícios físicos à rotina é fundamental para quem busca emagrecer de forma saudável e sustentável. As atividades apresentadas a seguir são reconhecidas por sua alta capacidade de queima calórica e por seus benefícios adicionais para o condicionamento físico geral. Este guia oferece uma visão geral de três exercícios poderosos que podem ser incluídos em seu plano de treinamento."
         TituloIntroduc="Este guia detalha três exercícios altamente eficazes para auxiliar no processo de emagrecimento, abordando diferentes aspectos do condicionamento físico e promovendo um elevado gasto energético:"
         TituloNum="A seguir os melhores exercicios"
         capa="/images/capas/capaparaexercicio.jfif"
         listas={listaResumidaDeExerciciosParaEmagrecer}
        />
    )
}