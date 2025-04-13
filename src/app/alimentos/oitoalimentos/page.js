import Teste from "../../teste/page";


export default function MelhoresAlimentos(){
    const Listas = [
            { name: "Aveia", number: "1" },
            { name: "Ovos", number: "2" },
            { name: "Abacate", number: "3" },
            { name: "Brocolis", number: "4" },
            { name: "Chia", number: "5" },
            { name: "Agrião", number: "6" },
            { name: "Couve", number: "7" },
            { name: "Espinafre", number: "8" },
          ];
          
          const listaDeAlimentos = [
            {
              descriptionName:
                "A aveia é rica em fibras solúveis, que formam um gel no estômago, prolongando a sensação de saciedade e reduzindo a vontade de comer fora de hora. Além disso, ela ajuda a controlar os níveis de açúcar no sangue, evitando picos de insulina que levam ao acúmulo de gordura.",
              listName: "1. Aveia",
              imageList: "/images/capas/aveia.jpg",
              beneficios: "Ajuda a reduzir o colesterol LDL (ruim) devido à beta-glucana.Contribui para a regulação do açúcar no sangue, prevenindo picos de glicemia.Promove a sensação de saciedade, auxiliando no controle do peso. Beneficia a saúde digestiva devido ao alto teor de fibras.",
              comoConsumir: "Mingau, vitaminas, ou adicionada a frutas e iogurtes.",
            },
            {
              descriptionName:
                "Os ovos são uma excelente fonte de proteína de alta qualidade, que aumenta a saciedade e reduz a fome. Estudos mostram que consumir ovos no café da manhã pode ajudar a ingerir menos calorias ao longo do dia.",
              listName: "2. Ovos",
              imageList: "/images/capas/ovos.webp",
              beneficios: "Alto teor de proteína que promove saciedade e auxilia na construção e reparação muscular. A colina é importante para a saúde cerebral. Fornecem nutrientes essenciais para diversas funções do organismo.",
              comoConsumir: "Cozidos, mexidos ou em omeletes com vegetais.",
            },
            {
              descriptionName:
                "Rico em gorduras boas (monoinsaturadas), o abacate ajuda a controlar o colesterol e promove saciedade. Além disso, possui fibras que melhoram o trânsito intestinal.",
              listName: "3. Abacate",
              imageList: "/images/capas/abacate.webp",
              beneficios: "As gorduras monoinsaturadas ajudam a melhorar o perfil lipídico, elevando o colesterol HDL (bom) e reduzindo o LDL. O potássio contribui para a manutenção da pressão arterial saudável. As fibras auxiliam na digestão e promovem a saciedade. Os antioxidantes (vitamina E) protegem as células contra danos.",
              comoConsumir: "Em vitaminas, saladas ou como substituto da manteiga em torradas.",
            },
            {
              descriptionName:
                "Com poucas calorias e muitas fibras, o brócolis é um aliado da perda de peso. Ele também é rico em vitaminas C e K, além de compostos antioxidantes que combatem a inflamação.",
              listName: "4. Brócolis",
              imageList: "/images/capas/brocolis.webp",
              beneficios: "Alto teor de fibras que auxiliam na digestão e controle do colesterol. A vitamina C fortalece o sistema imunológico. A vitamina K é importante para a coagulação sanguínea e saúde óssea. Os antioxidantes combatem o estresse oxidativo e a inflamação.",
              comoConsumir: "Cozido no vapor, refogado ou em sopas.",
            },
            {
              descriptionName:
                "A chia é uma semente poderosa, cheia de fibras e ômega-3, que ajuda a regular o intestino e prolonga a saciedade. Quando hidratada, forma um gel que auxilia no controle da fome.",
              listName: "5. Chia",
              imageList: "/images/capas/chia.webp",
              beneficios: "Alto teor de fibras que auxiliam na regulação intestinal e controle do colesterol e glicemia. Fonte de ômega-3 ALA, importante para a saúde cardiovascular e cerebral (embora a conversão para EPA e DHA seja limitada). Promove a sensação de saciedade devido à sua capacidade de absorver água. Fonte de antioxidantes que protegem as células.",
              comoConsumir: "Em vitaminas, iogurtes ou como pudim de chia.",
            },
            {
              descriptionName:
                "Em primeiro lugar, considerado o alimento mais saudável de todos, o agrião se destaca pela sua riqueza nutritiva. O vegetal de folhas escuras alcançou o topo por conter não apenas as vitamina C e A, mas também ferro, potássio, magnésio, cálcio e componentes antioxidantes. O estudo aponta para a capacidade medicinal da planta de desintoxicar o corpo e purificar o sangue.",
              listName: "6. Agrião",
              imageList: "/images/capas/agriao.jpg",
              beneficios: "Considerado um dos alimentos mais densos em nutrientes por caloria. Alto teor de vitamina K, importante para a coagulação sanguínea e saúde óssea. A vitamina C fortalece o sistema imunológico. Os antioxidantes combatem o dano celular.",
              comoConsumir: "Em saladas, sopas ou sucos verdes.",
            },
            {
              descriptionName:
                "Por último, mas não menos importante, a couve. Sua importância se dá pela presença das vitaminas vitaminas A, C, D, E e K, potássio e antioxidantes. Ela é indicada para a prevenção de doenças cardiovasculares e fortalecimento do sistema imunológico.",
              listName: "7. Couve",
              imageList: "/images/capas/couve.jpg",
              beneficios: "Excelente fonte de vitamina K. Alto teor de vitamina C. As fibras auxiliam na digestão e controle do colesterol. Os antioxidantes protegem contra o estresse oxidativo e podem ter propriedades anti-inflamatórias.",
              comoConsumir: "Em sucos verdes, saladas, refogada ou chips de couve.",
            },
            {
              descriptionName:
                "O espinafre, em quinto lugar, contém nutrientes “semelhantes ao da acelga”, contudo, em menor concentração. Mais um da família das folhas verde-escuras, apresenta as vitaminas do complexo B e C junto aos minerais essenciais ao organismo.",
              listName: "8. Espinafre",
              imageList: "/images/capas/espinafre.jpg",
              beneficios: "Boa fonte de ferro, importante para o transporte de oxigênio no sangue. Rico em vitamina K. O folato é essencial para a saúde celular. Os antioxidantes protegem a visão e combatem o dano celular.",
              comoConsumir: "Em saladas, sopas, omeletes ou refogado.",
            },
          ];

    return(
        <Teste 
        Titulo="8 Alimentos que Ajudam a Emagrecer de Forma Saudável"
        
        capa="/images/capas/alimentosb.png"

        TituloDesc="A chave para um emagrecimento saudável e sustentável está na escolha dos alimentos certos, 
        que aceleram o metabolismo, aumentam a saciedade e fornecem 
        nutrientes essenciais para o corpo."

        TituloNum="Os 8 alimentos"

        TituloIntroduc="Abaixo, listamos 8 alimentos poderosos que podem ajudar no 
        processo de emagrecimento, combinados com uma 
        alimentação equilibrada e hábitos de vida saudáveis."
        
        listas={Listas}

        ListAlimentos={listaDeAlimentos}
        />
    )
}