/* orderModel.js initialized */
const menuData = [
  {
    category: "Entrées",
    iconImg: "assets/orders/entree.png.jpg",
    items: [
      { id: "e1", name: "Soupe de Poisson", price: 20, desc: "Traditional sea fish soup cooked with local Mediterranean herbs.", image: "assets/orders/menu/Entrées/soupe_de_poisson.png" },
      { id: "e2", name: "Soupe Chinoise", price: 35, desc: "Savory Asian-style seafood soup with noodles and spices.", image: "assets/orders/menu/Entrées/soupe_chinoise.png" },
      { id: "e3", name: "Soupe de Poisson Royale", price: 35, desc: "Rich seafood bisque with prime fish chunks and shrimp.", image: "assets/orders/menu/Entrées/soupe_de_poisson_royale.png" },
      { id: "e4", name: "Almijas", price: 30, desc: "Fresh clams steamed with garlic, coriander, and olive oil.", image: "assets/orders/menu/Entrées/almijas.png" },
      { id: "e5", name: "Concha", price: 30, desc: "Moroccan-style sea shell delicacy.", image: "assets/orders/menu/Entrées/concha.png" },
      { id: "e6", name: "Coquinas", price: 40, desc: "Sautéed wedge clams cooked with lemon and parsley.", image: "assets/orders/menu/Entrées/coquinas.png" },
      { id: "e7", name: "Mejiyounis", price: 30, desc: "Local Martil style fresh mussels.", image: "assets/orders/menu/Entrées/mejiyounis.png" },
      { id: "e8", name: "Croquette Poisson", price: 40, desc: "Crispy golden croquettes filled with minced fresh fish.", image: "assets/orders/menu/Entrées/croquette_poisson.png" },
      { id: "e9", name: "Paella", price: 50, desc: "Classic Spanish rice loaded with fresh local seafood.", image: "assets/orders/menu/Entrées/paella.png" }
    ]
  },
  {
    category: "Cazuela",
    iconImg: "assets/orders/cazuela.png.jpg",
    items: [
      { id: "c1", name: "Tajine Pil Pil", price: 40, desc: "Sizzling shrimp in sizzling garlic olive oil and hot chili.", image: "assets/orders/menu/Cazuela/tajine_pilpil.jpg" },
      { id: "c2", name: "Tajine Mixte", price: 50, desc: "Mixed seafood baked in traditional spicy tomato stew.", image: "assets/orders/menu/Cazuela/tajine_mixte.jpg" },
      { id: "c3", name: "Tajine Friends", price: 60, desc: "House special casserole loaded with chef's seafood selection.", image: "assets/orders/menu/Cazuela/tajine_friends.jpg" },
      { id: "c4", name: "Tajine Royal", price: 70, desc: "Premium seafood selection baked in rich charmoula reduction.", image: "assets/orders/menu/Cazuela/tajine_royal.jpg" }
    ]
  },
  {
    category: "Fritures de Poisson",
    iconImg: "assets/orders/friture_de_poisson.png.jpg",
    items: [
      { id: "fp1", name: "Friture de Poisson", price: 80, desc: "Crispy fried fresh mixed catch of the day.", image: "assets/orders/menu/Fritures de Poisson/friture_de_poisson.jpg" },
      { id: "fp2", name: "Grillade de Poisson", price: 90, desc: "Fresh fish catch grilled over natural charcoal embers.", image: "assets/orders/menu/Fritures de Poisson/grillade_de_poisson.jpg" },
      { id: "fp3", name: "Friture Royale", price: 120, desc: "Deluxe mixed seafood platter crisp-fried to perfection.", image: "assets/orders/menu/Fritures de Poisson/friture_royal.jpg" }
    ]
  },
  {
    category: "Fritures Royale",
    iconImg: "assets/orders/friture_royal.png.jpg",
    items: [
      { id: "fr1", name: "Langosta", price: 150, desc: "Freshly prepared local spiny lobster.", image: "assets/orders/menu/Fritures Royale/langosta.jpg" },
      { id: "fr2", name: "Homard", price: 200, desc: "Whole roasted or fried lobster served with lemon butter.", image: "assets/orders/menu/Fritures Royale/homard.jpg" },
      { id: "fr3", name: "Sigala", price: 150, desc: "Slipper lobster fried or grilled.", image: "assets/orders/menu/Fritures Royale/sigala.jpg" },
      { id: "fr4", name: "Crevettes Royal", price: 150, desc: "Jumbo king prawns grilled with garlic butter.", image: "assets/orders/menu/Fritures Royale/crevettes_royal.jpg" },
      { id: "fr5", name: "Gambas", price: 100, desc: "Sautéed or fried crisp prawns.", image: "assets/orders/menu/Fritures Royale/gambas.jpg" },
      { id: "fr6", name: "Langostino", price: 120, desc: "Seared Mediterranean langoustines.", image: "assets/orders/menu/Fritures Royale/langostino.jpg" }
    ]
  },
  {
    category: "Poisson au Kg",
    iconImg: "assets/orders/poisson_au_kg.png",
    items: [
      { id: "pkg1", name: "Pargo Boubrados", price: 200, desc: "Fresh red seabream priced per kilogram.", image: "assets/orders/menu/Poisson au Kg/pargo_boubrados.jpg" },
      { id: "pkg2", name: "Dorade", price: 300, desc: "Fresh gilthead seabream prepared grilled or baked.", image: "assets/orders/menu/Poisson au Kg/dorade.jpg" },
      { id: "pkg3", name: "Saint Pierre", price: 300, desc: "Wild John Dory fish per kilogram.", image: "assets/orders/menu/Poisson au Kg/saint_pierre.jpg" },
      { id: "pkg4", name: "Turbot", price: 300, desc: "Prime Mediterranean turbot fish.", image: "assets/orders/menu/Poisson au Kg/turbot.jpg" },
      { id: "pkg5", name: "Loup - Lobina", price: 250, desc: "Fresh European sea bass per kilogram.", image: "assets/orders/menu/Poisson au Kg/loup_lobina.jpg" },
      { id: "pkg6", name: "Sol Lenguado", price: 250, desc: "Fresh Dover sole per kilogram.", image: "assets/orders/menu/Poisson au Kg/sol_lenguado.jpg" },
      { id: "pkg7", name: "Pagou Royal", price: 250, desc: "Royal porgy catch per kilogram.", image: "assets/orders/menu/Poisson au Kg/pagou_royal.jpg" },
      { id: "pkg8", name: "Borassi", price: 250, desc: "Fresh local coastal rockfish per kilogram.", image: "assets/orders/menu/Poisson au Kg/borassi.jpg" },
      { id: "pkg9", name: "Miro", price: 400, desc: "Wild Mediterranean grouper per kilogram.", image: "assets/orders/menu/Poisson au Kg/miro.jpg" },
      { id: "pkg10", name: "Badijo", price: 350, desc: "Prime island grouper catch per kilogram.", image: "assets/orders/menu/Poisson au Kg/badijo.jpg" }
    ]
  },
  {
    category: "Filets de Poisson",
    iconImg: "assets/orders/filet_de_poisson.png.jpg",
    items: [
      { id: "fil1", name: "Espadon", price: 100, desc: "Grilled swordfish fillet seasoned with herbs.", image: "assets/orders/menu/Filets de Poisson/espadon.jpg" },
      { id: "fil2", name: "Sol", price: 100, desc: "Boneless tender sole fillet.", image: "assets/orders/menu/Filets de Poisson/sol.jpg" },
      { id: "fil3", name: "Thon Rouge", price: 120, desc: "Pan-seared red bluefin tuna steak.", image: "assets/orders/menu/Filets de Poisson/thon_rouge.jpg" },
      { id: "fil4", name: "Saumon", price: 120, desc: "Atlantic salmon fillet seared on grill.", image: "assets/orders/menu/Filets de Poisson/saumon.jpg" },
      { id: "fil5", name: "Lotte", price: 120, desc: "Tender monkfish fillet in herbs.", image: "assets/orders/menu/Filets de Poisson/lotte.jpg" },
      { id: "fil6", name: "Saint Pierre", price: 120, desc: "John Dory fillet with light garlic glaze.", image: "assets/orders/menu/Filets de Poisson/saint_pierre.jpg" },
      { id: "fil7", name: "Merou", price: 150, desc: "Premium grouper fillet.", image: "assets/orders/menu/Filets de Poisson/merou.jpg" },
      { id: "fil8", name: "Badijo", price: 150, desc: "Wild island grouper fillet.", image: "assets/orders/menu/Filets de Poisson/badijo.jpg" },
      { id: "fil9", name: "Dorade", price: 120, desc: "Seabream fillet grilled to perfection.", image: "assets/orders/menu/Filets de Poisson/dorade.jpg" },
      { id: "fil10", name: "Turbot", price: 120, desc: "Turbot fillet served with lemon and spices.", image: "assets/orders/menu/Filets de Poisson/turbot.jpg" }
    ]
  },
  {
    category: "Racion de Poisson",
    iconImg: "assets/orders/racion_de_poisson.png.jpg",
    items: [
      { id: "rac1", name: "Crevettes", price: 90, desc: "Generous portion of fresh shrimp.", image: "assets/orders/menu/Racion de Poisson/crevettes.jpg" },
      { id: "rac2", name: "Calamar", price: 100, desc: "Golden rings of fried squid.", image: "assets/orders/menu/Racion de Poisson/calamar.jpg" },
      { id: "rac3", name: "Brochettes Espadon", price: 100, desc: "Swordfish skewers grilled over coals.", image: "assets/orders/menu/Racion de Poisson/brochettes_espadon.jpg" },
      { id: "rac4", name: "Brochettes Lotte", price: 100, desc: "Monkfish skewers with Mediterranean spices.", image: "assets/orders/menu/Racion de Poisson/brochettes_lotte.jpg" },
      { id: "rac5", name: "Puntillas", price: 100, desc: "Deep-fried baby squid.", image: "assets/orders/menu/Racion de Poisson/puntillas.jpg" },
      { id: "rac6", name: "Sol", price: 90, desc: "Whole pan-fried small sole.", image: "assets/orders/menu/Racion de Poisson/sol.jpg" },
      { id: "rac7", name: "Merlan", price: 80, desc: "Fried whiting fish.", image: "assets/orders/menu/Racion de Poisson/merlan.jpg" },
      { id: "rac8", name: "Rouget", price: 80, desc: "Crispy red mullet portion.", image: "assets/orders/menu/Racion de Poisson/rouget.jpg" }
    ]
  },
  {
    category: "Salades",
    iconImg: "assets/orders/Salades.png.jpg",
    items: [
      { id: "s1", name: "Salade Marocaine", variants: [{ name: "Grand", price: 30 }, { name: "Petit", price: 20 }], desc: "Diced tomatoes, cucumbers, onion, and herbs.", image: "assets/orders/menu/Salades/salade_marocaine.jpg" },
      { id: "s2", name: "Salade Niçoise", variants: [{ name: "Grand", price: 35 }, { name: "Petit", price: 25 }], desc: "Tuna, boiled eggs, olives, and fresh greens.", image: "assets/orders/menu/Salades/salade_nicoise.jpg" },
      { id: "s3", name: "Salade Rossa", variants: [{ name: "Grand", price: 40 }, { name: "Petit", price: 30 }], desc: "Beetroot and fresh crunchy vegetables salad.", image: "assets/orders/menu/Salades/salade_rossa.jpg" },
      { id: "s4", name: "Salade Tropicale", variants: [{ name: "Grand", price: 50 }, { name: "Petit", price: 35 }], desc: "Sweet pineapple, fruits, and crispy greens.", image: "assets/orders/menu/Salades/salade_tropicale.jpg" },
      { id: "s5", name: "Salade César", variants: [{ name: "Grand", price: 60 }, { name: "Petit", price: 40 }], desc: "Grilled chicken slices, parmesan, and Caesar dressing.", image: "assets/orders/menu/Salades/salade_cesar.jpg" },
      { id: "s6", name: "Salade Avocat Crevettes", variants: [{ name: "Grand", price: 70 }, { name: "Petit", price: 50 }], desc: "Fresh avocado paired with cocktail shrimp.", image: "assets/orders/menu/Salades/salade_avocat_crevettes.jpg" },
      { id: "s7", name: "Salade Fruits de Mer", variants: [{ name: "Grand", price: 80 }, { name: "Petit", price: 60 }], desc: "Assorted seafood served chilled over crunchy greens.", image: "assets/orders/menu/Salades/salade_fruits_de_mer.jpg" },
      { id: "s8", name: "Salade Friends", variants: [{ name: "Grand", price: 80 }, { name: "Petit", price: 50 }], desc: "House special salad loaded with shrimp and exotic dressing.", image: "assets/orders/menu/Salades/salade_friends.jpg" },
      { id: "s9", name: "Salade Polpos", price: 60, desc: "Tender octopus salad dressed in lemon oil.", image: "assets/orders/menu/Salades/salade_polpos.jpg" },
      { id: "s10", name: "Salade Salamoun", price: 80, desc: "Smoked salmon over mixed green garden salad.", image: "assets/orders/menu/Salades/salade_salamoun.jpg" }
    ]
  },
  {
    category: "Tajine (+ Frites)",
    iconImg: "assets/orders/tajine.png",
    items: [
      { id: "t1", name: "Tajine Viande aux Pruneaux", price: 45, desc: "Beef cooked with sweet prunes and toasted almonds.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_viande_aux_pruneaux.jpg" },
      { id: "t2", name: "Tajine Viande aux Légumes", price: 45, desc: "Tender beef slow cooked with seasonal vegetables.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_viande_aux_legumes.jpg" },
      { id: "t3", name: "Tajine de Chèvre", price: 45, desc: "Traditional Moroccan goat meat stew.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_de_chevre.jpg" },
      { id: "t4", name: "Tajine Viande Hachée", price: 25, desc: "Minced meat meatballs cooked in tomato sauce with egg.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_viande_hachee.jpg" },
      { id: "t5", name: "Tajine Poulet", price: 25, desc: "Chicken cooked with preserved lemon and olives.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_poulet.jpg" },
      { id: "t6", name: "Tajine Poulet aux Légumes", price: 25, desc: "Chicken slow cooked with garden vegetables.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_poulet_aux_legumes.jpg" },
      { id: "t7", name: "Tajine Foie de Bœuf", price: 45, desc: "Sautéed beef liver stew in herbs.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_foie_de_buf.jpg" },
      { id: "t8", name: "Tajine Foie de Dinde", price: 25, desc: "Turkey liver cooked in spices.", image: "assets/orders/menu/Tajine (+ Frites)/tajine_foie_de_dinde.jpg" }
    ]
  },
  {
    category: "Pasticcio",
    iconImg: "assets/orders/pasticcio.png",
    items: [
      { id: "pas1", name: "Pasticcio Poulet", price: 30, desc: "Baked fries topped with chicken, béchamel, and cheese.", image: "assets/orders/menu/Pasticcio/pasticcio_poulet.jpg" },
      { id: "pas2", name: "Pasticcio Dinde Fumée", price: 30, desc: "Smoked turkey pasticcio loaded with melted cheese.", image: "assets/orders/menu/Pasticcio/pasticcio_dinde_fumee.jpg" },
      { id: "pas3", name: "Pasticcio Viande Hachée", price: 35, desc: "Minced meat over crispy fries and béchamel.", image: "assets/orders/menu/Pasticcio/pasticcio_viande_hachee.jpg" },
      { id: "pas4", name: "Pasticcio Mixte", price: 35, desc: "Mixed meat and chicken cheesy pasticcio.", image: "assets/orders/menu/Pasticcio/pasticcio_mixte.jpg" },
      { id: "pas5", name: "Pasticcio Végétarien", price: 25, desc: "Baked vegetables, fries, and creamy cheese sauce.", image: "assets/orders/menu/Pasticcio/pasticcio_vegetarien.jpg" },
      { id: "pas6", name: "Pasticcio Fruits de Mer", price: 45, desc: "Loaded seafood pasticcio gratin.", image: "assets/orders/menu/Pasticcio/pasticcio_fruits_de_mer.jpg" }
    ]
  },
  {
    category: "Pastas",
    iconImg: "assets/orders/pastas.png",
    items: [
      { id: "pst1", name: "Spaghetti Bolonaise", price: 40, desc: "Spaghetti in savory beef minced meat tomato sauce.", image: "assets/orders/menu/Pastas/spaghetti_bolonaise.jpg" },
      { id: "pst2", name: "Spaghetti Poulet", price: 40, desc: "Spaghetti with chicken in white cream or tomato sauce.", image: "assets/orders/menu/Pastas/spaghetti_poulet.jpg" },
      { id: "pst3", name: "Spaghetti Fruits de Mer", price: 45, desc: "Spaghetti tossed with shrimp, squid, and herbs.", image: "assets/orders/menu/Pastas/spaghetti_fruits_de_mer.jpg" },
      { id: "pst4", name: "Tagliatelle Bolonaise", price: 45, desc: "Tagliatelle ribbons in cream or rich tomato ragù.", image: "assets/orders/menu/Pastas/tagliatelle_bolonaise.jpg" },
      { id: "pst5", name: "Tagliatelle Poulet", price: 45, desc: "Ribbon pasta with chicken and cream.", image: "assets/orders/menu/Pastas/tagliatelle_poulet.jpg" },
      { id: "pst6", name: "Tagliatelle Fruits de Mer", price: 50, desc: "Tagliatelle loaded with fresh sea catch.", image: "assets/orders/menu/Pastas/tagliatelle_fruits_de_mer.jpg" },
      { id: "pst7", name: "Lasagne Bolonaise", price: 35, desc: "Layered beef lasagna baked with mozzarella.", image: "assets/orders/menu/Pastas/lasagne_bolonaise.jpg" },
      { id: "pst8", name: "Lasagne Poulet", price: 40, desc: "Chicken lasagna baked with creamy béchamel.", image: "assets/orders/menu/Pastas/lasagne_poulet.jpg" },
      { id: "pst9", name: "Lasagne Fruits de Mer", price: 45, desc: "Seafood lasagna with rich white cheese glaze.", image: "assets/orders/menu/Pastas/lasagne_fruits_de_mer.jpg" }
    ]
  },
  {
    category: "Poulet (Frites + Sauce + Riz)",
    iconImg: "assets/orders/Poulet.png",
    items: [
      { id: "p1", name: "Quart de Poulet", price: 30, desc: "Quarter roasted chicken served with fries, sauce, and rice.", image: "assets/orders/menu/Poulet (Frites + Sauce + Riz)/quart_de_poulet.jpg" },
      { id: "p2", name: "Demi-Poulet", price: 50, desc: "Half roasted chicken served with fries, sauce, and rice.", image: "assets/orders/menu/Poulet (Frites + Sauce + Riz)/demi_poulet.jpg" },
      { id: "p3", name: "Poulet Entier", price: 100, desc: "Whole roasted golden chicken with sides.", image: "assets/orders/menu/Poulet (Frites + Sauce + Riz)/poulet_entier.jpg" }
    ]
  },
  {
    category: "Couscous",
    iconImg: "assets/orders/couscous.png",
    items: [
      { id: "cou1", name: "Couscous Poulet + Lben", price: 35, desc: "Traditional Friday chicken couscous served with fermented milk.", image: "assets/orders/menu/Couscous/couscous_poulet_lben.jpg" },
      { id: "cou2", name: "Couscous Viande + Lben", price: 45, desc: "Beef couscous cooked with 7 vegetables served with Lben.", image: "assets/orders/menu/Couscous/couscous_viande_lben.jpg" }
    ]
  },
  {
    category: "Raciones",
    iconImg: "assets/orders/raciones.png",
    items: [
      { id: "r1", name: "Assiette Viande Hachée", price: 40, desc: "Minced beef kebab platter.", image: "assets/orders/menu/Raciones/assiette_viande_hachee.jpg" },
      { id: "r2", name: "Assiette Foie de Bœuf", price: 45, desc: "Grilled beef liver platter.", image: "assets/orders/menu/Raciones/assiette_foie_de_buf.jpg" },
      { id: "r3", name: "Assiette Mixte", price: 45, desc: "Mixed meat and poultry platter.", image: "assets/orders/menu/Raciones/assiette_mixte.jpg" },
      { id: "r4", name: "Assiette de Dinde", price: 40, desc: "Grilled turkey breast skewers.", image: "assets/orders/menu/Raciones/assiette_de_dinde.jpg" },
      { id: "r5", name: "Assiette de Poulet", price: 40, desc: "Marinated chicken fillet platter.", image: "assets/orders/menu/Raciones/assiette_de_poulet.jpg" },
      { id: "r6", name: "Assiette Saucisse", price: 40, desc: "Moroccan spicy merguez sausage platter.", image: "assets/orders/menu/Raciones/assiette_saucisse.jpg" },
      { id: "r7", name: "Assiette Cuisse Poulet Pané", price: 40, desc: "Crispy breaded chicken thigh platter.", image: "assets/orders/menu/Raciones/assiette_cuisse_poulet_pane.jpg" },
      { id: "r8", name: "Assiette Chicken Crispé", price: 40, desc: "Crispy chicken strips with dip.", image: "assets/orders/menu/Raciones/assiette_chicken_crispe.jpg" },
      { id: "r9", name: "Assiette Emincé Poulet", price: 45, desc: "Sliced chicken breast tossed with herbs.", image: "assets/orders/menu/Raciones/assiette_emince_poulet.jpg" },
      { id: "r10", name: "Assiette Cordon Bleu", price: 40, desc: "Golden chicken cordon bleu with cheese.", image: "assets/orders/menu/Raciones/assiette_cordon_bleu.jpg" },
      { id: "r11", name: "Assiette Nugettes", price: 40, desc: "Crispy chicken nuggets platter.", image: "assets/orders/menu/Raciones/assiette_nugettes.jpg" },
      { id: "r12", name: "Assiette Tortella", price: 25, desc: "Spanish tortilla egg and potato omelet platter.", image: "assets/orders/menu/Raciones/assiette_tortella.jpg" }
    ]
  },
  {
    category: "Jus & Boissons",
    iconImg: "assets/orders/jus_&_boisson.png",
    items: [
      { id: "b1", name: "Zaâzaâ Fruits Secs", price: 30, desc: "Rich smoothie loaded with dried fruits and nuts.", image: "assets/orders/menu/Jus & Boissons/zaazaa_fruits_secs.jpg" },
      { id: "b2", name: "Zaâzaâ Friends", price: 25, desc: "House special blended avocado and fruit layer drink.", image: "assets/orders/menu/Jus & Boissons/zaazaa_friends.jpg" },
      { id: "b3", name: "Jus d'Orange", price: 20, desc: "Freshly squeezed Moroccan orange juice.", image: "assets/orders/menu/Jus & Boissons/jus_d_orange.jpg" },
      { id: "b4", name: "Jus d'Avocat", price: 20, desc: "Creamy fresh avocado shake.", image: "assets/orders/menu/Jus & Boissons/jus_d_avocat.jpg" },
      { id: "b5", name: "Jus Panaché", price: 25, desc: "Mixed tropical fresh fruit shake.", image: "assets/orders/menu/Jus & Boissons/jus_panache.jpg" },
      { id: "b6", name: "Jus de Mangue", price: 25, desc: "Fresh mango smoothie.", image: "assets/orders/menu/Jus & Boissons/jus_de_mangue.jpg" },
      { id: "b7", name: "Jus d'Ananas", price: 25, desc: "Freshly blended pineapple juice.", image: "assets/orders/menu/Jus & Boissons/jus_d_ananas.jpg" },
      { id: "b8", name: "Jus Fraise", price: 20, desc: "Fresh strawberry drink.", image: "assets/orders/menu/Jus & Boissons/jus_fraise.jpg" },
      { id: "b9", name: "Jus de Pomme", price: 15, desc: "Fresh apple shake with milk.", image: "assets/orders/menu/Jus & Boissons/jus_de_pomme.jpg" },
      { id: "b10", name: "Jus de Banane", price: 15, desc: "Sweet banana milk blend.", image: "assets/orders/menu/Jus & Boissons/jus_de_banane.jpg" },
      { id: "b11", name: "Boissons Gazeuses", price: 10, desc: "Chilled soda can.", image: "assets/orders/menu/Jus & Boissons/boissons_gazeuses.jpg" },
      { id: "b12", name: "Eau Minérale Moyen", price: 5, desc: "Medium bottled mineral water.", image: "assets/orders/menu/Jus & Boissons/eau_minerale_moyen.jpg" },
      { id: "b13", name: "Eau Minérale Grand", price: 10, desc: "Large bottled mineral water.", image: "assets/orders/menu/Jus & Boissons/eau_minerale_grand.jpg" },
      { id: "b14", name: "Oulmes", price: 15, desc: "Sparkling natural mineral water.", image: "assets/orders/menu/Jus & Boissons/oulmes.jpg" },
      { id: "b15", name: "Bio", price: 12, desc: "Organic juice blend.", image: "assets/orders/menu/Jus & Boissons/bio.jpg" }
    ]
  },
  {
    category: "Dessert",
    iconImg: "assets/orders/desert.png",
    items: [
      { id: "d1", name: "Flan", price: 8, desc: "Caramel pudding dessert.", image: "assets/orders/menu/Dessert/flan.jpg" },
      { id: "d2", name: "Flan Œuf", price: 12, desc: "Traditional homemade egg caramel flan.", image: "assets/orders/menu/Dessert/flan_uf.jpg" },
      { id: "d3", name: "Flan Royal", price: 15, desc: "Deluxe caramel flan topped with cream.", image: "assets/orders/menu/Dessert/flan_royal.jpg" },
      { id: "d4", name: "M'Hallabiya", price: 10, desc: "Middle Eastern milk pudding with orange blossom.", image: "assets/orders/menu/Dessert/m_hallabiya.jpg" },
      { id: "d5", name: "Cuajada", price: 12, desc: "Sweet milk curd dessert.", image: "assets/orders/menu/Dessert/cuajada.jpg" },
      { id: "d6", name: "Natillas", price: 10, desc: "Spanish custard pudding with cinnamon.", image: "assets/orders/menu/Dessert/natillas.jpg" },
      { id: "d7", name: "Salade Fruits", price: 25, desc: "Fresh seasonal sliced fruit bowl.", image: "assets/orders/menu/Dessert/salade_fruits.jpg" },
      { id: "d8", name: "Tiramisu", price: 20, desc: "Creamy coffee tiramisu.", image: "assets/orders/menu/Dessert/tiramisu.jpg" },
      { id: "d9", name: "Tarte Citron", price: 20, desc: "Zesty lemon meringue pie slice.", image: "assets/orders/menu/Dessert/tarte_citron.jpg" },
      { id: "d10", name: "Tarte Oreo", price: 20, desc: "Crushed Oreo cookies cake slice.", image: "assets/orders/menu/Dessert/tarte_oreo.jpg" }
    ]
  }
];