/* One menu, shared by all three designs. Edit dishes and prices here once. */
window.SAKURA_MENU = [
  {
    title: "Omakase", jp: "おまかせ",
    note: "Served at the counter · please reserve ahead",
    items: [
      { name: "Sakura Omakase", jp: "桜", desc: "Twelve courses: seasonal starters, chef's nigiri selection, miso soup and dessert", price: "85" },
      { name: "Chef's Seasonal Omakase", jp: "旬", desc: "Eighteen courses built around the day's catch, finished with hand-roll and tamago", price: "125" },
      { name: "Sake Pairing", jp: "日本酒", desc: "Five pours chosen to follow the omakase", price: "45" }
    ]
  },
  {
    title: "Nigiri", jp: "握り", note: "Two pieces",
    items: [
      { name: "Otoro", jp: "大トロ", desc: "Fatty bluefin belly, lightly brushed with nikiri", price: "14" },
      { name: "Chutoro", jp: "中トロ", desc: "Medium-fat bluefin", price: "11" },
      { name: "Sake", jp: "サーモン", desc: "Salmon, seared or raw, with yuzu zest", price: "7" },
      { name: "Hamachi", jp: "はまち", desc: "Yellowtail with sudachi and sea salt", price: "8" },
      { name: "Hotate", jp: "帆立", desc: "Hokkaido scallop", price: "9" },
      { name: "Unagi", jp: "鰻", desc: "Grilled freshwater eel, sweet tare", price: "9" },
      { name: "Ebi", jp: "海老", desc: "Poached prawn", price: "7" },
      { name: "Tamago", jp: "玉子", desc: "House-made sweet omelette", price: "5" }
    ]
  },
  {
    title: "Sashimi", jp: "刺身",
    items: [
      { name: "Sashimi Moriawase", jp: "盛り合わせ", desc: "Chef's selection of five fish, fifteen slices", price: "32" },
      { name: "Salmon Sashimi", jp: "サーモン", desc: "Six slices, fresh wasabi", price: "16" },
      { name: "Tuna Tataki", jp: "たたき", desc: "Seared tuna, ponzu, spring onion", price: "18" }
    ]
  },
  {
    title: "Maki & Rolls", jp: "巻き",
    items: [
      { name: "Sakura Roll", jp: "桜巻き", desc: "Salmon, avocado and cucumber, topped with seared salmon and ikura", price: "16" },
      { name: "Spicy Tuna", jp: "", desc: "Tuna, chilli mayo, tempura flakes", price: "14" },
      { name: "Dragon Roll", jp: "", desc: "Prawn tempura, unagi, avocado", price: "17" },
      { name: "Kappa Maki", jp: "かっぱ", desc: "Cucumber and sesame", price: "6" }
    ]
  },
  {
    title: "From the Kitchen", jp: "台所",
    items: [
      { name: "Miso Soup", jp: "味噌汁", desc: "Tofu, wakame, spring onion", price: "5" },
      { name: "Edamame", jp: "枝豆", desc: "Sea salt or chilli garlic", price: "6" },
      { name: "Gyoza", jp: "餃子", desc: "Pan-fried pork dumplings, five pieces", price: "9" },
      { name: "Ebi Tempura", jp: "天ぷら", desc: "Prawn and seasonal vegetables, tentsuyu", price: "14" },
      { name: "Agedashi Tofu", jp: "揚げ出し", desc: "Crisp tofu in dashi broth", price: "8" }
    ]
  },
  {
    title: "Dessert", jp: "甘味",
    items: [
      { name: "Matcha Ice Cream", jp: "抹茶", desc: "With black sesame tuile", price: "7" },
      { name: "Mochi Trio", jp: "餅", desc: "Sakura, yuzu and mango", price: "8" },
      { name: "Yuzu Tart", jp: "柚子", desc: "Torched meringue", price: "9" }
    ]
  }
];
