/* Sakura's menu, shared by all three designs. Edit dishes and prices here once.
   Transcribed from two photos of Sakura's own menus (dine-in menu on Wanderlog,
   take-away menu on TripAdvisor). Those photos may be older than the current
   menu, so prices should be checked with the restaurant before going live. */
window.SAKURA_INFO = {
  address: "36 Boulevard, Weston-super-Mare, BS23 1NF",
  phone: "01934 418388",
  email: "sakurafinestlimited2021@hotmail.com",
  facebook: "https://www.facebook.com/sakurafinestlimited",
  rating: "4.8",
  reviews: "882"
};

window.SAKURA_MENU = [
  {
    title: "Starters", jp: "一品料理",
    items: [
      { name: "Edamame", desc: "Steamed soya beans with sea salt", price: "3.90", v: "V, VG" },
      { name: "Tori Kuwayaki", desc: "Crispy fried chicken thigh in teriyaki sauce with sesame seeds", price: "6.75" },
      { name: "Crispy Squid", desc: "Calamari with chilli pepper and ponzu sauce", price: "5.75" },
      { name: "Softshell Crab Spring Roll", desc: "Softshell crab, minced prawn, spring onion and ginger with wasabi mayonnaise", price: "7.50" },
      { name: "Kakiage Tempura", desc: "Crisp shredded vegetables with light soy and ginger", price: "5.20", v: "V" },
      { name: "Ebi Tempura", desc: "Four battered king prawns with light soy and ginger", price: "9.80" },
      { name: "Spicy Rock Shrimp", desc: "Battered king prawns tossed in spicy garlic mayo with chives", price: "6.50" },
      { name: "Nasu Miso", desc: "Aubergine sautéed in sweet miso with black sesame", price: "5.20", v: "V, VG" },
      { name: "Chicken Gyoza", desc: "Japanese chicken dumplings, five pieces", price: "6.00" },
      { name: "Duck Harumaki", desc: "Duck spring roll with miso teriyaki sauce", price: "5.95" }
    ]
  },
  {
    title: "Salad", jp: "サラダ",
    items: [
      { name: "Kani Avocado", desc: "Crabstick, mango and tobiko with onion dressing", price: "6.80" },
      { name: "Salmon Miso", desc: "Fresh salmon marinated Sakura miso style, with tobiko", price: "7.90" },
      { name: "Rocket Ebi Avocado", desc: "Mixed leaves, steamed king prawns, avocado and tobiko in Sakura onion dressing", price: "8.50" }
    ]
  },
  {
    title: "Sashimi", jp: "刺身", note: "Five slices",
    items: [
      { name: "Shake", desc: "Salmon", price: "7.20" },
      { name: "Suzuki", desc: "Sea bass", price: "7.20" },
      { name: "Saba", desc: "Mackerel", price: "6.80" },
      { name: "Ebi", desc: "Prawn", price: "7.80" },
      { name: "Maguro", desc: "Yellowfin tuna", price: "8.50" },
      { name: "Hamachi", desc: "Yellowtail", price: "9.25" },
      { name: "Hotategai", desc: "Scallop", price: "8.50" },
      { name: "Hokkigai", desc: "Surf clam", price: "8.50" }
    ]
  },
  {
    title: "Nigiri", jp: "握り", note: "Two pieces",
    items: [
      { name: "Shake", desc: "Salmon", price: "4.30" },
      { name: "Suzuki", desc: "Sea bass", price: "4.15" },
      { name: "Saba", desc: "Mackerel", price: "4.15" },
      { name: "Ebi", desc: "Prawn", price: "4.25" },
      { name: "Maguro", desc: "Tuna", price: "4.80" },
      { name: "Hamachi", desc: "Yellowtail", price: "5.15" },
      { name: "Hotategai", desc: "Scallop", price: "4.80" },
      { name: "Hokkigai", desc: "Surf clam", price: "4.50" }
    ]
  },
  {
    title: "Omakase", jp: "おまかせ", note: "Chef's choice assorted sushi",
    items: [
      { name: "Sakura Sashimi Moriawase", desc: "Chef's choice of assorted sashimi, twenty slices", price: "27.50" },
      { name: "Nigiri Take", desc: "Eight pieces of assorted nigiri with three pieces of tekka (tuna) hosomaki", price: "18.50" },
      { name: "Aburi Sushi", desc: "Seared nigiri, eight pieces", price: "15.95" },
      { name: "Mix Maki Roll", desc: "California roll, salmon, cheese and vegetarian rolls", price: "13.50" }
    ]
  },
  {
    title: "Sushi Rolls", jp: "巻き寿司",
    items: [
      { name: "Dragon Roll", desc: "Battered king prawns, lettuce and tobiko, topped with avocado, wasabi mayo and teriyaki", price: "8.00" },
      { name: "Salmon Cheese", desc: "Cream cheese, mango, cucumber and avocado, topped with salmon, wasabi mayo and teriyaki. Eight pieces", price: "7.90" },
      { name: "Age Maki", desc: "Crispy fried roll with BBQ eel, cucumber, mango and crabstick, teriyaki sauce. Six pieces", price: "7.95" },
      { name: "Spider Roll", desc: "Crispy softshell crab, lettuce and spring onion, wasabi mayo and teriyaki. Six pieces", price: "7.50" },
      { name: "Crazy Roll", desc: "Crabstick, wasabi mayo, mango and cucumber with mango sauce. Eight pieces", price: "6.80" },
      { name: "California Maki", desc: "Crabstick, avocado, cucumber, tobiko and Japanese mayo. Eight pieces", price: "6.75" },
      { name: "Sake Kawa Maki", desc: "Crispy salmon skin, spring onion and lettuce, wasabi mayo and teriyaki. Six pieces", price: "5.50" },
      { name: "Vegetarian Maki", desc: "Seasonal vegetables. Six pieces", price: "5.50", v: "V" }
    ]
  },
  {
    title: "Hosomaki & Temaki", jp: "細巻 · 手巻", note: "Hosomaki six pieces · Temaki hand roll, one piece",
    items: [
      { name: "Avocado Hosomaki", desc: "", price: "4.75", v: "V, VG" },
      { name: "Cucumber Hosomaki", desc: "", price: "4.25", v: "V, VG" },
      { name: "Salmon or Tuna Hosomaki", desc: "", price: "4.95" },
      { name: "Tuna or Salmon Temaki", desc: "Cone-shaped hand roll", price: "4.50" },
      { name: "California Temaki", desc: "Crabstick, avocado, cucumber and flying fish roe", price: "4.50" },
      { name: "Unagi Temaki", desc: "Barbecued eel", price: "4.50" }
    ]
  },
  {
    title: "Donburi", jp: "丼", note: "Rice bowls, served with miso soup and Japanese pickles",
    items: [
      { name: "Katsu Don", desc: "Crispy breaded pork cutlet simmered with onion and egg in a sweet savoury broth", price: "11.50" },
      { name: "Tori Katsu Don", desc: "Crispy breaded chicken simmered with onion and egg in a sweet savoury broth", price: "11.50" },
      { name: "Tori Ju", desc: "Grilled chicken teriyaki over rice", price: "11.50" },
      { name: "Spicy Salmon Donburi", desc: "Freshly chopped salmon, Japanese chilli oil, over sushi rice", price: "11.20" },
      { name: "Spicy Tuna Donburi", desc: "Freshly chopped tuna, Japanese chilli oil, over sushi rice", price: "11.50" }
    ]
  },
  {
    title: "Teishoku", jp: "定食", note: "Set meals, served with miso soup and Japanese pickles",
    items: [
      { name: "Chicken Katsu Curry", desc: "With steamed rice", price: "11.50" },
      { name: "Pork Katsu Curry", desc: "With steamed rice", price: "11.50" },
      { name: "Yasai Katsu Curry", desc: "Mixed vegetable katsu curry with steamed rice", price: "9.95", v: "V, VG" },
      { name: "Tonkatsu", desc: "Breaded pork with salad and tonkatsu sauce", price: "11.00" },
      { name: "Tori Katsu", desc: "Breaded chicken with salad and tonkatsu sauce", price: "11.00" },
      { name: "Kamo", desc: "Crispy roasted duck, miso teriyaki, mixed vegetables", price: "13.95" }
    ]
  }
];
