/* One menu, shared by all three designs. Edit dishes and prices here once.
   SAMPLE MENU for the demo: dishes and prices to be replaced with Sakura's real menu
   (donburi pitched at their £16.90 level). */
window.SAKURA_INFO = {
  address: "36 Boulevard, Weston-super-Mare, BS23 1NF",
  phone: "01934 418388",
  email: "sakurafinestlimited2021@hotmail.com",
  hours: ["Tuesday – Saturday", "Lunch 12:00 – 14:30", "Dinner 18:00 – 22:00", "Closed Sunday & Monday"],
  maps: "https://www.google.com/maps/search/?api=1&query=Sakura+Japanese+Restaurant+36+Boulevard+Weston-super-Mare+BS23+1NF"
};

window.SAKURA_MENU = [
  {
    title: "Small Plates", jp: "前菜",
    items: [
      { name: "Miso Soup", jp: "味噌汁", desc: "Tofu, wakame, spring onion", price: "3.90" },
      { name: "Edamame", jp: "枝豆", desc: "Sea salt, or chilli and garlic", price: "4.90" },
      { name: "Gyoza", jp: "餃子", desc: "Pan-fried pork or vegetable dumplings, five pieces", price: "6.90" },
      { name: "Chicken Karaage", jp: "唐揚げ", desc: "Crisp marinated chicken, yuzu mayonnaise", price: "7.90" },
      { name: "Ebi Tempura", jp: "天ぷら", desc: "King prawns in light batter, tentsuyu", price: "8.90" }
    ]
  },
  {
    title: "Sashimi", jp: "刺身", note: "Fish arrives fresh and is cut to order",
    items: [
      { name: "Sake Sashimi", jp: "サーモン", desc: "Salmon, five slices", price: "9.90" },
      { name: "Maguro Sashimi", jp: "鮪", desc: "Tuna loin, five slices", price: "11.90" },
      { name: "Sashimi Moriawase", jp: "盛り合わせ", desc: "Chef's platter of tuna, salmon, sea bass, octopus and prawn on shiso and ice", price: "24.90" }
    ]
  },
  {
    title: "Nigiri", jp: "握り", note: "Two pieces",
    items: [
      { name: "Sake", jp: "サーモン", desc: "Salmon", price: "5.50" },
      { name: "Maguro", jp: "鮪", desc: "Tuna", price: "6.50" },
      { name: "Suzuki", jp: "鱸", desc: "Sea bass with yuzu", price: "5.90" },
      { name: "Madai", jp: "真鯛", desc: "Sea bream", price: "5.90" },
      { name: "Saba", jp: "鯖", desc: "Cured mackerel", price: "5.50" },
      { name: "Ebi", jp: "海老", desc: "Prawn", price: "5.50" }
    ]
  },
  {
    title: "Sushi Rolls", jp: "巻き", note: "Eight pieces",
    items: [
      { name: "Sakura Roll", jp: "桜", desc: "Prawn and avocado inside, torched salmon on top, sesame and sweet soy", price: "13.90" },
      { name: "Dragon Roll", jp: "龍", desc: "Prawn tempura and cucumber, topped with eel and avocado", price: "14.90" },
      { name: "Spicy Tuna Roll", jp: "", desc: "Tuna, chilli mayo, spring onion, tempura crunch", price: "12.90" },
      { name: "California Roll", jp: "", desc: "Crab, avocado, cucumber, tobiko", price: "11.90" },
      { name: "Vegetable Roll", jp: "", desc: "Avocado, cucumber, pickled radish, asparagus", price: "9.90" }
    ]
  },
  {
    title: "Donburi", jp: "丼", note: "Rice bowls with miso soup",
    items: [
      { name: "Sake Don", jp: "鮭丼", desc: "Salmon sashimi over sushi rice, ikura", price: "16.90" },
      { name: "Chirashi Don", jp: "ちらし", desc: "Chef's selection of sashimi over sushi rice", price: "18.90" },
      { name: "Chicken Katsu Don", jp: "カツ丼", desc: "Breaded chicken, egg and onion over rice", price: "15.90" },
      { name: "Unagi Don", jp: "鰻丼", desc: "Grilled eel, sweet tare, sansho pepper", price: "19.90" }
    ]
  },
  {
    title: "Ramen", jp: "ラーメン",
    items: [
      { name: "Tonkotsu Ramen", jp: "豚骨", desc: "Rich pork broth, chashu, soft egg, nori", price: "15.90" },
      { name: "Spicy Miso Ramen", jp: "味噌", desc: "Miso and chilli broth, minced pork, corn, beansprouts", price: "15.90" },
      { name: "Vegan Shoyu Ramen", jp: "醤油", desc: "Shiitake and kombu broth, tofu, greens", price: "14.90" }
    ]
  },
  {
    title: "Dessert", jp: "甘味",
    items: [
      { name: "Mochi Ice Cream", jp: "餅", desc: "Three flavours", price: "6.50" },
      { name: "Matcha Ice Cream", jp: "抹茶", desc: "With black sesame", price: "5.90" }
    ]
  }
];
