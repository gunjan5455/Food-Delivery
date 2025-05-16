import salad from "./salad.png";
import pizza from "./pizza.png";
import burger from "./burger.png";
import pasta from "./pasta.png";
import sushi from "./sushi.png";
import taco from "./taco.png";
import soup from "./soup.png";
import dessert from "./dessert.png";
import drinks from "./drink.png";
import vegetable_curry from "./curry.png";
import paneer_tikka from "./paneer.png";
import spinach_lasagna from "./Lasagna.png";

export const menuList = [
  {
    menu_name: "Salad",
    menu_image: salad,
  },
  {
    menu_name: "Pizza",
    menu_image: pizza,
  },
  {
    menu_name: "Burger",
    menu_image: burger,
  },
  {
    menu_name: "Pasta",
    menu_image: pasta,
  },
  {
    menu_name: "Sushi",
    menu_image: sushi,
  },
  {
    menu_name: "Taco",
    menu_image: taco,
  },
  {
    menu_name: "Soup",
    menu_image: soup,
  },
  {
    menu_name: "Dessert",
    menu_image: dessert,
  },
  {
    menu_name: "Drinks",
    menu_image: drinks,
  },
  {
    menu_name: "Vegetable Curry",
    menu_image: vegetable_curry,
  },
  {
    menu_name: "Paneer Tikka",
    menu_image: paneer_tikka,
  },
  {
    menu_name: "Spinach and Ricotta Lasagna",
    menu_image: spinach_lasagna,
  },
];
export const food_list = [
  {
    id: 1,
    name: "Caesar Salad",
    img: salad,
    price: 8.99,
    description:
      "Crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing.",
    category: "Salad",
  },
  {
    id: 2,
    name: "Greek Salad",
    img: salad,
    price: 7.99,
    description:
      "Fresh cucumbers, tomatoes, olives, feta cheese, and red onions tossed in olive oil.",
    category: "Salad",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    img: pizza,
    price: 11.99,
    description:
      "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    category: "Pizza",
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    img: pizza,
    price: 13.99,
    description:
      "Traditional pizza loaded with spicy pepperoni slices and mozzarella cheese.",
    category: "Pizza",
  },
  {
    id: 5,
    name: "Cheeseburger",
    img: burger,
    price: 9.99,
    description:
      "Juicy beef patty with melted cheese, lettuce, tomato, and pickles in a toasted bun.",
    category: "Burger",
  },
  {
    id: 6,
    name: "Veggie Burger",
    img: burger,
    price: 8.99,
    description:
      "Grilled vegetable patty with lettuce, tomato, and vegan mayo in a whole-grain bun.",
    category: "Burger",
  },
  {
    id: 7,
    name: "Spaghetti Carbonara",
    img: pasta,
    price: 12.99,
    description:
      "Traditional Italian pasta with creamy egg-based sauce, pancetta, and parmesan.",
    category: "Pasta",
  },
  {
    id: 8,
    name: "Penne Arrabbiata",
    img: pasta,
    price: 11.99,
    description:
      "Spicy tomato sauce with garlic and chili flakes over penne pasta.",
    category: "Pasta",
  },
  {
    id: 9,
    name: "California Roll",
    img: sushi,
    price: 10.99,
    description:
      "Sushi roll with crab meat, avocado, and cucumber wrapped in seaweed and rice.",
    category: "Sushi",
  },
  {
    id: 10,
    name: "Spicy Tuna Roll",
    img: sushi,
    price: 11.99,
    description:
      "Sushi roll filled with spicy tuna mix and cucumber, topped with sesame seeds.",
    category: "Sushi",
  },
  {
    id: 11,
    name: "Beef Taco",
    img: taco,
    price: 3.99,
    description:
      "Soft tortilla filled with seasoned beef, lettuce, cheese, and salsa.",
    category: "Taco",
  },
  {
    id: 12,
    name: "Fish Taco",
    img: taco,
    price: 4.99,
    description:
      "Grilled fish with cabbage slaw and creamy sauce in a corn tortilla.",
    category: "Taco",
  },
  {
    id: 13,
    name: "Tomato Soup",
    img: soup,
    price: 6.99,
    description:
      "Smooth and creamy tomato soup garnished with basil and croutons.",
    category: "Soup",
  },
  {
    id: 14,
    name: "Minestrone Soup",
    img: soup,
    price: 7.99,
    description:
      "Hearty Italian soup with vegetables, beans, and pasta in a tomato broth.",
    category: "Soup",
  },
  {
    id: 15,
    name: "Chocolate Lava Cake",
    img: dessert,
    price: 5.99,
    description:
      "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    category: "Dessert",
  },
  {
    id: 16,
    name: "Tiramisu",
    img: dessert,
    price: 6.99,
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    category: "Dessert",
  },
  {
    id: 17,
    name: "Mango Smoothie",
    img: drinks,
    price: 4.99,
    description: "Refreshing smoothie made with ripe mangoes and yogurt.",
    category: "Drinks",
  },
  {
    id: 18,
    name: "Iced Coffee",
    img: drinks,
    price: 3.99,
    description: "Chilled coffee served over ice with a splash of milk.",
    category: "Drinks",
  },
  {
    id: 19,
    name: "Vegetable Curry",
    img: vegetable_curry,
    price: 9.99,
    description:
      "Mixed vegetables simmered in a spicy and flavorful curry sauce.",
    category: "Vegetable Curry",
  },
  {
    id: 20,
    name: "Paneer Tikka",
    img: paneer_tikka,
    price: 10.99,
    description:
      "Chunks of paneer marinated in spices and grilled to perfection.",
    category: "Paneer Tikka",
  },
  {
    id: 21,
    name: "Spinach and Ricotta Lasagna",
    img: spinach_lasagna,
    price: 12.99,
    description:
      "Layers of pasta with creamy ricotta cheese and spinach, baked with tomato sauce.",
    category: "Spinach and Ricotta Lasagna",
  },
];
