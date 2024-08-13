export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface Menu {
  [key: string]: MenuItem[];
}

const menu: Menu = {
  hamburguer: [
    {
      id: 1,
      name: "x-burguer",
      price: 15,
      description: "pão de hamburguer, hamburguer, presunto, queijo",
    },
    {
      id: 2,
      name: "x-salada",
      price: 18,
      description:
        "pão de hamburguer, hamburguer, presunto, queijo, tomate, alface",
    },
    {
      id: 3,
      name: "x-bacon",
      price: 22,
      description:
        "pão de hamburguer, hamburguer, presunto, queijo, tomate, alface, bacon",
    },
    {
      id: 4,
      name: "x-egg",
      price: 24,
      description:
        "pão de hamburguer, hamburguer, presunto, queijo, tomate, alface, bacon, ovo",
    },
    {
      id: 5,
      name: "x-tudo",
      price: 25,
      description:
        "pão de hamburguer, hamburguer, presunto, queijo, tomate, alface, bacon, ovo, milho, calabresa",
    },
    {
      id: 6,
      name: "x-barbecue",
      price: 25,
      description:
        "pão de hamburguer, hamburguer, presunto, queijo, tomate, alface, bacon, barbecue",
    },
    {
      id: 7,
      name: "x-salada especial",
      price: 22,
      description:
        "pão de hamburguer, hamburguer, presunto, queijo, tomate, alface, catupiry, milho",
    },
    {
      id: 8,
      name: "x-burguer especial",
      price: 25,
      description: "pão de hamburguer, hamburguer, presunto, queijo, catupiry",
    },
    {
      id: 9,
      name: "x-bacon cheddar",
      price: 24,
      description: "pão de hamburguer, hamburguer, cheddar, bacon",
    },
    {
      id: 10,
      name: "x-calabresa",
      price: 20,
      description: "pão de hamburguer, hamburguer, calabresa, alface, tomate",
    },
  ],
  frances: [
    {
      id: 17,
      name: "churrasco",
      price: 27,
      description: "pão francês, contra-filé, queijo",
    },
    {
      id: 18,
      name: "churrasco salada",
      price: 30,
      description: "pão francês, contra-filé, queijo, alface, tomate",
    },
    {
      id: 19,
      name: "churrasco tudo",
      price: 38,
      description:
        "pão francês, contra-filé, queijo, alface, tomate, bacon, ovo, calabresa",
    },
    {
      id: 20,
      name: "churrasco especial",
      price: 34,
      description: "pão francês, contra-filé, queijo, alface, tomate, bacon",
    },
    {
      id: 21,
      name: "boca de anjo",
      price: 33,
      description:
        "pão francês, contra-filé, tomate, presunto, queijo, azeitona",
    },
    {
      id: 22,
      name: "americano",
      price: 18,
      description: "pão francês, presunto, queijo, alface, tomate, ovo",
    },
    {
      id: 23,
      name: "bauru",
      price: 14,
      description: "pão francês, presunto, queijo, tomate",
    },
    {
      id: 24,
      name: "misto quente",
      price: 10,
      description: "pão francês, presunto, queijo",
    },
  ],
  frango: [
    {
      id: 25,
      name: "x-frango",
      price: 22,
      description: "pão de hamburguer, hamburguer de frango, presunto, queijo",
    },
    {
      id: 26,
      name: "x-frango saladão",
      price: 25,
      description:
        "pão de hamburguer, hamburguer de frango, presunto, queijo, alface, tomate",
    },
    {
      id: 27,
      name: "x-frango tudo",
      price: 35,
      description:
        "pão de hamburguer, hamburguer de frango, presunto, queijo, alface, tomate, ovo, bacon, calabresa",
    },
    {
      id: 28,
      name: "x-frango bacon",
      price: 28,
      description:
        "pão de hamburguer, hamburguer de frango, presunto, queijo, alface, tomate, bacon",
    },
    {
      id: 29,
      name: "framburguer",
      price: 27,
      description:
        "pão de hamburguer, hamburguer de frango, hamburguer, presunto, queijo",
    },
    {
      id: 30,
      name: "framburguer salada",
      price: 28,
      description:
        "pão de hamburguer, hamburguer de frango, hamburguer, presunto, queijo, alface, tomate",
    },
  ],
  gourmet: [
    {
      id: 31,
      name: "salada gourmet",
      price: 28,
      description:
        "pão de hamburguer especial, hamburguer artesanal, queijo, alface, tomate, cebola roxa",
    },
    {
      id: 32,
      name: "bacon gourmet",
      price: 30,
      description:
        "pão de hamburguer especial, hamburguer artesanal, queijo, alface, tomate, bacon, cebola roxa",
    },
    {
      id: 33,
      name: "rings gourmet",
      price: 30,
      description:
        "pão de hamburguer especial, hamburguer artesanal, queijo, bacon, cebola empanada",
    },
    {
      id: 34,
      name: "max gourmet",
      price: 38,
      description:
        "pão de hamburguer especial, hamburguer artesanal, queijo, bacon, cebola empanada, catupiry empanado, alface, tomate",
    },
    {
      id: 35,
      name: "cheddar gourmet",
      price: 32,
      description:
        "pão de hamburguer especial, hamburguer artesanal, cheddar, bacon",
    },
  ],
  hotdog: [
    {
      id: 11,
      name: "dog básico",
      price: 18,
      description:
        "pão de hot-dog, salsicha, purê, maionese, mostarda, batata palha, milho, ervilha",
    },
    {
      id: 12,
      name: "dog duplo",
      price: 20,
      description:
        "pão de hot-dog, 2 salsichas, purê, maionese, mostarda, batata palha, milho, ervilha",
    },
    {
      id: 13,
      name: "dog bacon",
      price: 18,
      description:
        "pão de hot-dog, salsicha, purê, maionese, mostarda, batata palha, milho, ervilha, bacon",
    },
    {
      id: 14,
      name: "dog completo",
      price: 20,
      description:
        "pão de hot-dog, salsicha, purê, maionese, mostarda, batata palha, bacon, milho, ervilha, catupiry",
    },
    {
      id: 15,
      name: "dog com catupiry",
      price: 20,
      description:
        "pão de hot-dog, salsicha, purê, maionese, mostarda, batata palha, milho, ervilha, catupiry",
    },
    {
      id: 16,
      name: "dog com cheddar",
      price: 20,
      description:
        "pão de hot-dog, salsicha, purê, maionese, mostarda, batata palha, milho, ervilha, cheddar",
    },
  ],
  porcoes: [
    {
      id: 36,
      name: "fritas",
      price: 25,
      description: "batatas frescas bem fritinhas e sequinhas",
    },
    {
      id: 37,
      name: "fritas com cheddar e bacon",
      price: 30,
      description:
        "batatas frescas bem fritinhas e sequinhas acompanhadas de cheddar e bacon",
    },
    {
      id: 38,
      name: "fritas com catupiry e bacon",
      price: 30,
      description:
        "batatas frescas bem fritinhas e sequinhas acompanhadas de catupiry e bacon",
    },
    {
      id: 39,
      name: "fritas com queijo e bacon",
      price: 30,
      description:
        "batatas frescas bem fritinhas e sequinhas acompanhadas de queijo e bacon",
    },
    {
      id: 40,
      name: "polenta frita",
      price: 26,
      description: "polentas bem fritinhas e sequinhas",
    },
    {
      id: 41,
      name: "mandioca frita",
      price: 28,
      description: "mandiocas bem fritinhas e sequinhas",
    },
    {
      id: 75,
      name: "mini fritas",
      price: 25,
      description: "250g de batatas frescas bem fritinhas e sequinhas ",
    },
    {
      id: 76,
      name: "mini fritas com cheddar e bacon",
      price: 30,
      description:
        "250g de batatas frescas bem fritinhas e sequinhas acompanhadas de cheddar e bacon",
    },
    {
      id: 77,
      name: "mini fritas com catupiry e bacon",
      price: 30,
      description:
        "250g de batatas frescas bem fritinhas e sequinhas acompanhadas de catupiry e bacon",
    },
    {
      id: 78,
      name: "mini fritas com queijo e bacon",
      price: 30,
      description:
        "250g de batatas frescas bem fritinhas e sequinhas acompanhadas de queijo e bacon",
    },
    {
      id: 79,
      name: "mini polenta frita",
      price: 26,
      description: "300g de polentas bem fritinhas e sequinhas",
    },
    {
      id: 80,
      name: "mini mandioca frita",
      price: 28,
      description: "300g de mandiocas bem fritinhas e sequinhas",
    },
  ],
  sucos: [
    {
      id: 42,
      name: "laranja",
      price: 6,
      description: "laranjas escolhidas para o seu suco perfeito",
    },
    {
      id: 43,
      name: "morango",
      price: 8,
      description: "morangos escolhidos para o seu suco perfeito",
    },
    {
      id: 44,
      name: "limão",
      price: 5,
      description: "limões escolhidos para o seu suco perfeito",
    },
    {
      id: 45,
      name: "melancia",
      price: 5,
      description: "melancias escolhidos para o seu suco perfeito",
    },
    {
      id: 46,
      name: "maracujá",
      price: 7,
      description: "maracujás escolhidos para o seu suco perfeito",
    },
    {
      id: 47,
      name: "abacaxi",
      price: 9,
      description: "abacaxis escolhidos para o seu suco perfeito",
    },
    {
      id: 59,
      name: "água",
      price: 4,
      description: "água geladinha",
    },
    {
      id: 60,
      name: "água com gás",
      price: 4.5,
      description: "água com gás geladinha",
    },
  ],
  refrigerantes: [
    {
      id: 48,
      name: "coca-cola 2 litros",
      price: 14,
      description: "nossa coca-cola sempre vai trincando para você",
    },
    {
      id: 49,
      name: "coca-cola 600 ml",
      price: 8,
      description: "nossa coca-cola sempre vai trincando para você",
    },
    {
      id: 50,
      name: "coca-cola lata",
      price: 5,
      description: "nossa coca-cola sempre vai trincando para você",
    },
    {
      id: 51,
      name: "coca-cola caçulinha",
      price: 2,
      description: "nossa coca-cola sempre vai trincando para você",
    },
    {
      id: 52,
      name: "fanta 2 litros",
      price: 12,
      description: "escolha o sabor de fanta que você mais gosta",
    },
    {
      id: 53,
      name: "fanta 600 ml",
      price: 7,
      description: "escolha o sabor de fanta que você mais gosta",
    },
    {
      id: 54,
      name: "fanta lata",
      price: 5,
      description: "escolha o sabor de fanta que você mais gosta",
    },
    {
      id: 55,
      name: "guaraná 2 litros",
      price: 12,
      description: "o queridinho de muitos",
    },
    {
      id: 56,
      name: "guaraná 600 ml",
      price: 7,
      description: "o queridinho de muitos",
    },
    {
      id: 57,
      name: "guaraná lata",
      price: 5,
      description: "o queridinho de muitos",
    },
    {
      id: 58,
      name: "schweppes lata",
      price: 6,
      description: "o suco de limão mais querido",
    },
    {
      id: 61,
      name: "H2OH",
      price: 4.5,
      description: "H2OH bem gelada",
    },
  ],
  drinks: [
    {
      id: 81,
      name: "caipirinha de limão",
      price: 22,
      description: "caipirinha de limão com vodka",
    },
    {
      id: 82,
      name: "caipirinha de morango",
      price: 22,
      description: "caipirinha de morango com vodka",
    },
    {
      id: 83,
      name: "caipirinha de kiwi",
      price: 22,
      description: "caipirinha de kiwi com vodka",
    },
    {
      id: 84,
      name: "negroni",
      price: 22,
      description: "negroni clássico que leva gin, vermute e campari",
    },
    {
      id: 85,
      name: "gin tônica",
      price: 22,
      description: "gin com tônica refrescante",
    },
  ],
  cervejas: [
    {
      id: 68,
      name: "skol lata",
      price: 6,
      description: "uma skol bem gelada",
    },
    {
      id: 69,
      name: "skol garrafa",
      price: 10,
      description: "uma skol bem gelada",
    },
    {
      id: 70,
      name: "brahma lata",
      price: 6,
      description: "uma brahma bem gelada",
    },
    {
      id: 71,
      name: "brahma garrafa",
      price: 10,
      description: "uma brahma bem gelada",
    },
    {
      id: 72,
      name: "heineken garrafa",
      price: 14,
      description: "uma heineken bem gelada",
    },
    {
      id: 73,
      name: "budweiser garrafa",
      price: 14,
      description: "uma budweiser bem gelada",
    },
    {
      id: 74,
      name: "corona garrafa",
      price: 16,
      description: "uma corona bem gelada",
    },
  ],
  sobremesas: [
    {
      id: 62,
      name: "bolo de pote de ninho",
      price: 12,
      description: "um bolo de pote caprichado para você apreciar",
    },
    {
      id: 63,
      name: "bolo de pote de nutella",
      price: 12,
      description: "um bolo de pote caprichado para você apreciar",
    },
    {
      id: 64,
      name: "bolo de pote de ninho com nutella",
      price: 15,
      description: "um bolo de pote caprichado para você apreciar",
    },
    {
      id: 65,
      name: "trufa de morango com chocolate",
      price: 15,
      description: "trufa de morango com chocolate feito com bastante carinho",
    },
    {
      id: 66,
      name: "trufa de chocolate",
      price: 6,
      description: "uma trufa no capricho",
    },
    {
      id: 67,
      name: "trufa de brigadeiro",
      price: 6,
      description: "uma trufa no capricho",
    },
  ],
  acrescimos: [
    {
      id: 86,
      name: "presunto",
      price: 4,
      description: "adicione presunto ao seu lanche",
    },
    {
      id: 87,
      name: "queijo",
      price: 4,
      description: "adicione queijo ao seu lanche",
    },
    {
      id: 88,
      name: "cheddar",
      price: 6,
      description: "adicione cheddar ao seu lanche",
    },
    {
      id: 89,
      name: "catupiry",
      price: 6,
      description: "adicione catupiry ao seu lanche",
    },
    {
      id: 90,
      name: "milho",
      price: 3,
      description: "adicione milho ao seu lanche",
    },
    {
      id: 91,
      name: "alface",
      price: 2,
      description: "adicione alface ao seu lanche",
    },
    {
      id: 92,
      name: "tomate",
      price: 2,
      description: "adicione tomate ao seu lanche",
    },
    {
      id: 93,
      name: "vinagrete",
      price: 2,
      description: "adicione vinagrete ao seu lanche",
    },
    {
      id: 94,
      name: "cebola caramelizada",
      price: 2,
      description: "adicione cebola caramelizada ao seu lanche",
    },
    {
      id: 95,
      name: "batata palha",
      price: 2,
      description: "adicione batata palha ao seu lanche",
    },
    {
      id: 96,
      name: "ovo",
      price: 2,
      description: "adicione ovo ao seu lanche",
    },
    {
      id: 97,
      name: "bacon",
      price: 2,
      description: "adicione bacon ao seu lanche",
    },
    {
      id: 98,
      name: "purê",
      price: 2,
      description: "adicione purê ao seu lanche",
    },
    {
      id: 99,
      name: "hamburguer",
      price: 2,
      description: "adicione hamburguer ao seu lanche",
    },
    {
      id: 100,
      name: "maionese adicional",
      price: 2,
      description: "adicione purê ao seu lanche",
    },
  ],
};

export default menu;
