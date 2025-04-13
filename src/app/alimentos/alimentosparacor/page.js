import Teste from "../../teste/page";

export default function MelhoresAlimentosParaOCora(){
    const listaResumidaAlimentosCoracaoSimples = [
        { name: "Salmão", number: "1" },
        { name: "Aveia", number: "2" },
        { name: "Mirtilos", number: "3" },
        { name: "Azeite de Oliva Extra Virgem", number: "4" },
        { name: "Espinafre", number: "5" },
        { name: "Nozes", number: "6" },
        { name: "Feijão Preto", number: "7" },
        { name: "Abacate", number: "8" },
        { name: "Sementes de Chia", number: "9" },
        { name: "Alho", number: "10" },
      ];
    const listaDeAlimentosParaOCoracao = [
        {
          descriptionName:
            "O salmão é um peixe gordo rico em ácidos graxos ômega-3, como EPA e DHA, essenciais para a saúde cardiovascular.",
          listName: "1. Salmão",
          imageList: "/images/listas/salmao.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Reduz os níveis de triglicerídeos. Diminui a pressão arterial. Ajuda a prevenir a formação de coágulos sanguíneos. Possui propriedades anti-inflamatórias.",
          comoConsumir:
            "Assado, grelhado, cozido no vapor, defumado ou em preparações como sushi e sashimi.",
        },
        {
          descriptionName:
            "A aveia é um cereal integral rico em fibras solúveis, especialmente a beta-glucana, que auxilia na saúde do coração.",
          listName: "2. Aveia",
          imageList: "/images/listas/aveia.jpg", // Substitua pelo caminho da imagem
          beneficios:
            "Ajuda a reduzir o colesterol LDL (ruim). Contribui para a regulação do açúcar no sangue. Promove a sensação de saciedade.",
          comoConsumir:
            "Mingau, adicionada a iogurtes, frutas, smoothies ou utilizada em receitas de pães e bolos integrais.",
        },
        {
          descriptionName:
            "Os mirtilos são pequenas frutas repletas de antioxidantes, como as antocianinas, que beneficiam a saúde vascular.",
          listName: "3. Mirtilos",
          imageList: "/images/listas/miritlo.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Protegem contra o estresse oxidativo. Melhoram a função vascular. Podem ajudar a reduzir a pressão arterial.",
          comoConsumir:
            "In natura, em saladas de frutas, iogurtes, cereais, smoothies ou em receitas de muffins e panquecas.",
        },
        {
          descriptionName:
            "O azeite de oliva extra virgem é rico em gorduras monoinsaturadas e antioxidantes, que protegem o coração.",
          listName: "4. Azeite de Oliva Extra Virgem",
          imageList: "/images/listas/azeite.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Melhora o perfil lipídico (reduz LDL e aumenta HDL). Possui ação anti-inflamatória. Protege contra a oxidação do colesterol LDL.",
          comoConsumir:
            "Para temperar saladas, finalizar pratos, em marinadas e para cozinhar em temperaturas baixas a médias.",
        },
        {
          descriptionName:
            "O espinafre é um vegetal folhoso verde escuro rico em vitaminas, minerais e nitratos, que podem beneficiar a pressão arterial.",
          listName: "5. Espinafre",
          imageList: "/images/listas/espinafre.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Rico em nitratos que podem melhorar o fluxo sanguíneo. Fonte de folato importante para a saúde cardiovascular. Possui ação antioxidante.",
          comoConsumir:
            "Cru em saladas, refogado, cozido no vapor, adicionado a sopas, omeletes e smoothies.",
        },
        {
          descriptionName:
            "As nozes são frutos secos oleaginosos ricos em gorduras insaturadas, ômega-3 ALA, fibras e vitamina E, benéficos para o coração.",
          listName: "6. Nozes",
          imageList: "/images/listas/nozes.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Melhoram o perfil lipídico. Fornecem ômega-3 ALA. Possuem ação antioxidante. Podem melhorar a função vascular.",
          comoConsumir:
            "Como lanche, adicionadas a saladas, iogurtes, cereais ou em receitas de bolos e pães integrais.",
        },
        {
          descriptionName:
            "O feijão preto é uma leguminosa rica em fibras, proteínas vegetais, ferro e folato, contribuindo para a saúde cardiovascular.",
          listName: "7. Feijão Preto",
          imageList: "/images/listas/feijao.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Ajuda a controlar o colesterol. Regula o açúcar no sangue. Contribui para o controle da pressão arterial.",
          comoConsumir:
            "Cozido em sopas, ensopados, chili, saladas ou como acompanhamento do arroz.",
        },
        {
          descriptionName:
            "O abacate é uma fruta cremosa rica em gorduras monoinsaturadas, potássio e fibras, que são ótimos para o coração.",
          listName: "8. Abacate",
          imageList: "/images/listas/abacates.jpg", // Substitua pelo caminho da imagem
          beneficios:
            "Melhora o perfil lipídico. Rico em potássio que ajuda a regular a pressão arterial. Fonte de fibras.",
          comoConsumir:
            "Puro com sal e limão, em guacamole, adicionado a saladas, sanduíches e smoothies.",
        },
        {
          descriptionName:
            "As sementes de chia são pequenas, mas poderosas, ricas em fibras, ômega-3 ALA e antioxidantes, que beneficiam o coração.",
          listName: "9. Sementes de Chia",
          imageList: "/images/listas/chia.jpg", // Substitua pelo caminho da imagem
          beneficios:
            "Fonte de ômega-3 ALA. Ricas em fibras que auxiliam na redução do colesterol e controle do açúcar no sangue. Possuem ação antioxidante.",
          comoConsumir:
            "Adicionadas a iogurtes, smoothies, sucos, mingaus ou como pudim de chia.",
        },
        {
          descriptionName:
            "O alho é um tempero com compostos sulfurados que podem ajudar a reduzir a pressão arterial e melhorar os níveis de colesterol.",
          listName: "10. Alho",
          imageList: "/images/listas/alho.webp", // Substitua pelo caminho da imagem
          beneficios:
            "Pode ajudar a reduzir a pressão arterial. Pode melhorar os níveis de colesterol. Possui ação antiplaquetária e anti-inflamatória.",
          comoConsumir:
            "Cru picado ou amassado em molhos e temperos, refogado em preparações quentes ou assado.",
        },
      ];

    return(

        <Teste 
        Titulo="10 Melhores alimentos para a saúde do coração"
        TituloDesc="Cuidar do seu coração começa com as escolhas alimentares. Uma dieta rica em nutrientes específicos 
        pode fortalecer o músculo cardíaco, melhorar a circulação e reduzir o risco de doenças cardiovasculares."
        ListAlimentos={listaDeAlimentosParaOCoracao}
        capa="/images/capas/capadealimentos.jfif"
        TituloIntroduc="Abaixo, apresentamos 10 alimentos poderosos que, incorporados em uma dieta equilibrada e um estilo de vida saudável, 
        podem contribuir significativamente para a saúde do seu coração."
        TituloNum="Os 10 alimentos para o coração"
        listas={listaResumidaAlimentosCoracaoSimples}
        />
    )
}