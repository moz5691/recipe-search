const recipes = [
  {
    id: 1,
    img: `/assets/img1.jpeg`,
    name: 'Teriyaki Chicken with Mushrooms and Broccoli',
    ingredients: ['chicken', 'mushroom', 'broccoli', 'soy sauce', 'sesame oil'],
    instructions: [
      'Mix all the sauce ingredients in a medium size bowl until completely smooth.',
      'Add the olive oil to the bottom of a fry pan and heat to medium high. Add the cut-up chicken and cook until the chicken is golden brown and almost cooked through, about 10 minutes',
      'Add the sauce to the chicken and toss until all the chicken is coated. Add the broccoli floret pieces and sliced mushrooms to the chicken mixture; stir until coated. Let the chicken and veggie mixture simmer for about 10 minutes.'
    ]
  },
  {
    id: 2,
    img: `/assets/img2.jpeg`,
    name: 'Kulcha',
    ingredients: [
      '3 cups all-purpose flour',
      '1 tablespoon sugar',
      '1 teaspoon fine salt',
      '1/2 teaspoon baking powder',
      '1/8 teaspoon baking soda',
      '1/2 cup plain yogurt',
      '1/2 cup water',
      '1/4 cup vegetable oil'
    ],
    instructions: [
      'In a large bowl, whisk the flour with the sugar, salt, baking powder and baking soda. Using a wooden spoon, stir in the yogurt, water and oil until the dough starts to come together. Using your hands, knead the dough in the bowl until smooth. Wrap the dough in plastic and let rest at room temperature for 2 hours.',
      'In a medium bowl, mix the shallots with the scallions, serrano, ginger, sesame seeds, fennel, cumin and oregano.',
      'cut some celery',
      'Unwrap the dough and roll it into an 8-inch log, then cut the log into 8 pieces.'
    ]
  },
  {
    id: 3,
    img: `/assets/img3.jpeg`,
    name: 'Lamb Burgers with Green Harissa ',
    ingredients: [
      '1 poud ground lamb',
      '1/2 cup cooked white rice',
      '1 large egg',
      '1/2 cup chopped cilantro',
      'kosher salt'
    ],
    instructions: [
      'Light a grill or preheat a grill pan. In a medium bowl, combine the ground lamb with the cooked rice, egg and 1/4 cup of the cilantro',
      'Grill the patties over moderate heat, turning occasionally, until browned and cooked through, about 6 minutes.',
      'cut some celery'
    ]
  },
  {
    id: 4,
    img: `/assets/img4.jpeg`,
    name: 'Turkey pot in Greek style',
    ingredients: ['turkey', 'mustard', 'greens', 'celery', 'potato'],
    instructions: [
      'pre-heat over to 350',
      'tickle the turkey',
      'Wrap the lamb in the warm naan with tomatoes and feta. Spoon some of the green harissa on top and serve.'
    ]
  },
  {
    id: 5,
    img: `/assets/img5.jpeg`,
    name: 'Israeli Roast Eggplant, Hummus and Pickle Sandwiches',
    ingredients: [
      '1 large baking potato',
      'salt',
      '1 medium eggplant, sliced 1/2 inch thick',
      '3 tablespoons extra-virgin olive oil, plus more for brushing',
      '1 cucumber—peeled, halved, seeded and cut into 1/2-inch dice',
      '1 large tomato, cut into 1/2-inch dice'
    ],
    instructions: [
      'Preheat the oven to 425°. In a small saucepan, cover the potato with 2 inches of water and bring to a boil. ',
      'Season with salt and bake for about 10 minutes, until browned and tender.',
      'Toss with the lemon juice and 3 tablespoons of olive oil and season with salt and pepper.'
    ]
  },
  {
    id: 6,
    img: `/assets/img6.jpeg`,
    name: 'Strozzapreti with Lamb Ragù',
    ingredients: [
      '1 tablespoon fennel seeds',
      '1 tablespoon cumin seeds',
      '1 teaspoon whole black peppercorns',
      '1 tablespoon extra-virgin olive oil'
    ],
    instructions: [
      'In a large enameled cast-iron casserole, combine the fennel, cumin, Aleppo pepper and peppercorns and cook over moderate heat until fragrant, 2 minutes.',
      'transfer the lamb to a bowl. Repeat with the remaining lamb.',
      'Pour off all but 2 tablespoons of the fat from the casserole.'
    ]
  },
  {
    id: 7,
    img: `/assets/img7.jpeg`,
    name: 'Ethiopian Spiced Lamb Stew',
    ingredients: [
      '2 tablespoons red wine',
      '1 tablespoon fresh lemon juice',
      '1 tablespoon berbere ',
      '1 teaspoon smoked paprika'
    ],
    instructions: [
      'In a small bowl, whisk the wine with the lemon juice, berbere, paprika and mustard.',
      'Season the lamb with salt and pepper. In a large enameled cast-iron casserole, heat the olive oil until shimmering. ',
      'Add the onions, garlic, rosemary, thyme and a generous pinch each of salt and pepper to the casserole and cook over moderate heat, stirring occasionally, until the onions have softened, about 8 minutes.'
    ]
  },
  {
    id: 8,
    img: `/assets/img8.jpeg`,
    name: 'Beef Stew in Red Wine Sauce',
    ingredients: [
      '1 tablespoon unsalted butter',
      '2 tablespoons olive oil',
      '2 pounds trimmed beef flatiron steak or chuck, cut into 8 pieces'
    ],
    instructions: [
      'Preheat the oven to 350°. In a large enameled cast-iron casserole, melt the butter in 1 tablespoon of the olive oil. ',
      'Cover the casserole and transfer it to the oven. Cook the stew for 1 1/2 hours, until the meat is very tender and the sauce is flavorful',
      'In a large skillet, combine the pancetta, pearl onions, mushrooms and carrots'
    ]
  },
  {
    id: 9,
    img: `/assets/img9.jpeg`,
    name: 'Fluffy French Toast',
    ingredients: [
      '1/4 cup all-purpose flour',
      '1 cup milk',
      '1 pinch salt',
      '3 eggs',
      '1 teaspoon vanilla extract',
      '12 thick sliced bread'
    ],
    instructions: [
      'Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt, eggs, cinnamon, vanilla extract and sugar until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium heat.',
      'Soak bread slices in mixture until saturated. Cook bread on each side until golden brown. Serve hot.'
    ]
  },
  {
    id: 10,
    img: `/assets/img10.jpeg`,
    name: 'Cabbage Rolls II',
    ingredients: [
      '12 leaves cabbage',
      '1 cup cooked white rice',
      '1 egg, beaten',
      '1/4 cup milk',
      '1/4 cup minced onion',
      '1 pound extra-lean ground beef'
    ],
    instructions: [
      'Bring a large pot of water to a boil. Boil cabbage leaves 2 minutes; drain.',
      'In large bowl, combine 1 cup cooked rice, egg, milk, onion, ground beef, salt, and pepper. Place about 1/4 cup of meat mixture in center of each cabbage leaf, and roll up, tucking in ends. Place rolls in slow cooker.',
      'In a small bowl, mix together tomato sauce, brown sugar, lemon juice, and Worcestershire sauce. Pour over cabbage rolls.'
    ]
  },
  {
    id: 11,
    img: `/assets/img11.jpeg`,
    name: 'Slow Cooker Carnitas',
    ingredients: [
      '1 teaspoon salt',
      '1 teaspoon garlic powder',
      '1 teaspoon ground cumin',
      '1/2 teaspoon crumbled dried oregano',
      '1/2 teaspoon ground coriander',

      '1/4 teaspoon ground cinnamon',
      '1 (4 pound) boneless pork shoulder roast',
      '2 bay leaves',
      '2 cups chicken broth'
    ],
    instructions: [
      'Mix together salt, garlic powder, cumin, oregano, coriander, and cinnamon in a bowl. Coat pork with the spice mixture. Place the bay leaves in the bottom of a slow cooker and place the pork on top. Pour the chicken broth around the sides of the pork, being careful not to rinse off the spice mixture.',
      'Cover and cook on Low until the pork shreds easily with a fork, about 10 hours. Turn the meat after it has cooked for 5 hours. When the pork is tender, remove from slow cooker, and shred with two forks. Use cooking liquid as needed to moisten the meat.',
      'Enjoy it!'
    ]
  },
  {
    id: 12,
    img: `/assets/img12.jpeg`,
    name: 'Frijoles a la Charra',
    ingredients: [
      '1 pound dry pinto beans',
      '5 cloves garlic, chopped',
      '1 teaspoon salt',
      '1/2 pound bacon, diced',
      '1 onion, chopped',
      '2 fresh tomatoes, diced',
      '1 (3.5 ounce) can sliced jalapeno peppers',
      '1 (12 fluid ounce) can beer',
      '1/3 cup chopped fresh cilantro'
    ],
    instructions: [
      'Place pinto beans in a slow cooker, and completely cover with water. Mix in garlic and salt. Cover, and cook 1 hour on High.',
      'Cook the bacon in a skillet over medium high heat until evenly brown, but still tender. Drain about half the fat. Place onion in the skillet, and cook until tender. Mix in tomatoes and jalapenos, and cook until heated through. Transfer to the slow cooker, stirring into the beans.',
      'Cover slow cooker, and continue cooking 4 hours on Low. Mix in the beer and cilantro about 30 minutes before the end of the cook time.'
    ]
  },
  {
    id: 13,
    img: `/assets/img13.jpeg`,
    name: 'Slow Cooker Zuppa Toscana',
    ingredients: [
      '1 pound bulk pork sausage',
      '1 large yellow onion, chopped',
      '2 tablespoons minced garlic',
      '4 large russet potatoes, chopped',
      '1/2 teaspoon salt',
      '1/4 teaspoon ground black pepper'
    ],
    instructions: [
      'Heat a large skillet over medium-high heat. Cook and stir sausage in the hot skillet until browned and crumbly, 5 to 7 minutes. Add onion and garlic; saute until onion is translucent, 3 to 5 minutes. Drain and discard grease.',
      'Place potatoes in a slow cooker (such as Crock Pot(R)). Add the cooked sausage and onion mixture. Season with salt, black pepper, and red pepper flakes. Pour chicken broth on top. Add up to 2 cups water to cover potatoes fully. Stir soup gently. Cover and cook on Low until potatoes are fork-tender, 5 to 6 hours.',
      'Pour heavy cream into the soup. Stir in kale to combine. Cover and cook on High until flavors are incorporated, about 30 minutes more. Garnish with Parmesan cheese.',
      'Enjoy it!'
    ]
  },
  {
    id: 14,
    img: `/assets/img14.jpeg`,
    name: 'Baked Dijon Salmon',
    ingredients: [
      '1/4 cup butter, melted',
      '3 tablespoons Dijon mustard',
      '1 1/2 tablespoons honey',
      '1/4 cup dry bread crumbs',
      '1/4 cup finely chopped pecans',

      '4 teaspoons chopped fresh parsley',
      '4 (4 ounce) fillets salmon',
      'salt and pepper to taste',
      '1 lemon, for garnish'
    ],
    instructions: [
      'Preheat oven to 400 degrees F (200 degrees C).',
      'In a small bowl, stir together butter, mustard, and honey. Set aside. In another bowl, mix together bread crumbs, pecans, and parsley.',
      'Brush each salmon fillet lightly with honey mustard mixture, and sprinkle the tops of the fillets with the bread crumb mixture.',
      'Bake salmon 12 to 15 minutes in the preheated oven, or until it flakes easily with a fork. Season with salt and pepper, and garnish with a wedge of lemon.'
    ]
  },
  {
    id: 15,
    img: `/assets/img15.jpeg`,
    name: 'Home-Style Macaroni and Cheese',
    ingredients: [
      '7 ounces elbow macaroni',
      '1/4 cup butter',
      '3 tablespoons all-purpose flour',
      '2 cups milk',
      '1 (8 ounce) package cream cheese',
      '4 slices canned jalapeno peppers, chopped',
      '2 teaspoons Dijon mustard'
    ],
    instructions: [
      'Preheat oven to 400 degrees F (200 degrees C).',
      'Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 to 10 minutes. Drain.',
      'Melt 1/4 cup butter in a 3-quart saucepan over medium heat. Stir flour into melted butter and cook until smooth and bubbling, about 1 minute. Mix milk, cream cheese, jalapeno peppers, Dijon mustard, black pepper, and salt into flour-butter mixture; cook, stirring occasionally, until sauce is thickened, about 5 minutes. Mix macaroni and Cheddar cheese into sauce; pour into a 2-quart casserole dish.',
      'Mix bread crumbs, 2 tablespoons butter, and parsley together in a bowl; spread over macaroni and cheese.'
    ]
  },
  {
    id: 16,
    img: `/assets/img16.jpeg`,
    name: 'Cajun Seafood Pasta',
    ingredients: [
      '2 cups heavy whipping cream',
      '1 tablespoon chopped fresh basil',
      '1 tablespoon chopped fresh thyme',
      '2 teaspoons salt',
      '2 teaspoons ground black pepper',
      '1 1/2 teaspoons crushed red pepper flakes',
      '1 teaspoon ground white pepper'
    ],
    instructions: [
      'Cook pasta in a large pot of boiling salted water until al dente.',
      'Meanwhile, pour cream into large skillet. Cook over medium heat, stirring constantly, until just about boiling. Reduce heat, and add herbs, salt, peppers, onions, and parsley. Simmer 7 to 8 minutes, or until thickened.',
      'Stir in seafood, cooking until shrimp is no longer transparent. Stir in cheeses, blending well.',
      'Drain pasta. Serve sauce over noodles.'
    ]
  },
  {
    id: 17,
    img: `/assets/img17.jpeg`,
    name: 'Jays Jerk Chicken',
    ingredients: [
      '6 green onions, chopped',
      '1 onion, chopped',
      '1 jalapeno pepper, seeded and minced',
      '3/4 cup soy sauce',
      '1/2 cup distilled white vinegar',
      '1/4 cup vegetable oil'
    ],
    instructions: [
      'In a food processor or blender, combine the green onions, onion, jalapeno pepper, soy sauce, vinegar, vegetable oil, brown sugar, thyme, cloves, nutmeg and allspice. Mix for about 15 seconds',
      'Place the chicken in a medium bowl, and coat with the marinade. Refrigerate for 4 to 6 hours, or overnight.',
      'Preheat grill for high heat.',
      'Lightly oil grill grate. Cook chicken on the prepared grill 6 to 8 minutes, until juices run clear.'
    ]
  },
  {
    id: 18,
    img: `/assets/img18.jpeg`,
    name: 'Shredded Beef Enchiladas',
    ingredients: [
      '3 pounds beef chuck roast',
      '1/4 cup water',
      '1 1/2 cups beef broth',
      '3 tablespoons red wine vinegar',
      '2 tablespoons chili powder',
      '1 tablespoon ground cumin',
      '1 large onion, chopped'
    ],
    instructions: [
      'Place roast in a large saucepan that has a tight-fitting lid. Pour in water, cover, and simmer on low for 30 minutes. Increase heat to medium/high, and brown the roast on all sides. Once the water has boiled away, pour in the beef broth, vinegar, chili powder and 1 tablespoon of cumin. Cover tightly and reduce heat to low. Simmer for 1 1/2 to 2 hours or until the beef falls apart when you try to pick it up. Shred the beef, using 2 forks or your fingers. Place shredded beef back into the saucepan with all the juices, and let cool to room temperature.',
      'In a large skillet, saute the onion until just soft, not browned. Mix in flour and green chilies. Stir constantly for 2 minutes to cook the flour taste out. Stir in sour cream and 2 cups of Monterey Jack cheese. Cook on low for 10 minutes, stirring often, until the cheese is all melted and mixed. Set aside and let cool.',
      'In a large heavy skillet, heat the olive oil. Using tongs dip the tortillas, one at a time, into the oil for 30 seconds each side. Drain on paper towels.'
    ]
  },
  {
    id: 19,
    img: `/assets/img19.jpeg`,
    name: 'Baked Ziti II',
    ingredients: [
      '1 (16 ounce) package ziti pasta',
      '24 ounces ricotta cheese',
      '1 pound shredded mozzarella cheese',

      '1 egg, beaten',
      '1 (32 ounce) jar spaghetti sauce',
      '1/4 cup grated Parmesan cheese'
    ],
    instructions: [
      'Bring a large pot of lightly salted water to a boil. Add ziti and cook for 8 to 10 minutes or until al dente; drain and rinse.',
      'In a medium bowl, mix ziti, ricotta cheese, mozzarella cheese, egg and 1 1/2 cups spaghetti sauce.',
      'Preheat oven to 375 degrees F (190 degrees C).',
      'Lightly grease a 9x13 inch baking dish and spoon in ziti mixture. Top with remaining spaghetti sauce, followed by Parmesan cheese.',
      'Bake in preheated oven for 30 minutes; let stand for 15 minutes before serving.'
    ]
  },
  {
    id: 20,
    img: `/assets/img20.jpeg`,
    name: 'Awesome Ham Pasta Salad',
    ingredients: [
      '8 ounces ziti pasta',
      '1 pound cooked ham, cubed',
      '1 large red bell pepper, cut into 1 inch pieces',
      '1 large green bell pepper, cut into 1 inch pieces',
      '1 large red onion, coarsely chopped',
      '15 small sweet pickles, chopped, juice reserved',
      '1 cup cherry tomatoes, halved'
    ],
    instructions: [
      'Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.',
      'In a large bowl, mix together the drained pasta, ham, peppers, onion, pickles and tomatoes.',
      'In a small bowl, whisk together the mayonnaise, sour cream, beef bouillon granules, vinegar, salt, pepper, garlic and 1/2 cup of reserved pickle juice.',
      ' Fold into the salad and toss gently until evenly coated. Chill overnight to allow the flavors to blend. Serve near room temperature.'
    ]
  }
];

export function getRecipes() {
  return recipes;
}
