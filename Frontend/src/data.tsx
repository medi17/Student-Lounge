
// Main foods
import Tasty from "./assets/Main_foods/tasty-soya.svg"
import Pasta from "./assets/Main_foods/Pasta.svg"
import Tegabino from "./assets/Main_foods/Tegabino.svg"
import Firfir from "./assets/Main_foods/Firfir.svg"
import Dinich from "./assets/Main_foods/Dinich.svg"
import Beyeaynet from "./assets/Main_foods/Beyeaynet.svg"

// Street foods
import Ertib from "./assets/Street_foods/Ertib.svg"
import Chips from "./assets/Street_foods/Chips.svg"
import Falafel from "./assets/Street_foods/Falafel.svg"
import Sambusa from "./assets/Street_foods/Sambusa.svg"
import Bombolino from "./assets/Street_foods/Bombolino.svg"
import Chornake from "./assets/Street_foods/Chornake.svg"

// Drinks
import Tea from "./assets/Drinks/Tea.svg"
import Coffee from "./assets/Drinks/Coffee.svg"
import Macchiato from "./assets/Drinks/Macchiato.svg"
import GreenTea from "./assets/Drinks/Green_tea.svg"
import AlmondTea from "./assets/Drinks/Almond_tea.svg"
import Sprite from "./assets/Drinks/Sprite.svg"
import Fanta from "./assets/Drinks/Fanta.svg"
import Predator from "./assets/Drinks/Predator.svg"

export const foodItems = [
     {
          id: 1,
          name: 'Pasta', 
          duration: '30',
          description: 'Fresh, hand-made pasta tossed in a rich, sun-dried tomato and basil sauce. A true culinary delight.',
          price: '50',
          image: Pasta,
          quantity: 1,
          catagory: 'main'    
     },
     {
          id: 2,
          name: 'Fir-fir', 
          duration: '25',
          description: 'Ethiopian Firfir, featuring shredded injera with flavorful berbere, onions, and spiced clarified butter.',
          price: '45',
          image: Firfir,
          quantity: 1,
          catagory: 'main'
     },
     {
          id: 3,
          name: 'Dinich', 
          duration: '30',
          description: 'Potato stew, simmered with aromatic spices, onions, and peppers, creating a flavorful dish.',
          price: '50',
          image: Dinich,
          quantity: 1,
          catagory: 'main'
     },
     {
          id: 4,
          name: 'Beyeaynet', 
          duration: '40',
          description: 'A Special Ethiopian dish combining diverse stews, vegetables, and injera. A flavorful medley of tastes.',
          price: '50',
          image: Beyeaynet,
          quantity: 1,
          catagory: 'main'
     },
     {
          id: 5,
          name: 'Tegabino', 
          duration: '50',
          description: 'A rich, flavorful stew made from ground chickpeas, spices, and served with injera.',
          price: '50',
          image: Tegabino,
          quantity: 1,
          catagory: 'main'
     },
     {
          id: 6,
          name: 'Tasty Soya', 
          duration: '40',
          description: 'A Tasty soya dish made with tasty soya it self, pepper, onion and other delicious spices.',
          price: '50',
          image: Tasty,
          quantity: 1,
          catagory: 'main'
     },
     {
          id: 7,
          name: 'Ertib', 
          duration: '50',
          description: 'Ertib, an Ethiopian dish blending tender potatoes, aromatic spices, and soft bread.',
          price: '45',
          image: Ertib,
          quantity: 1,
          catagory: 'street'
     },
     {
          id: 8,
          name: 'Chips', 
          duration: '20',
          description: 'Freshly made chips, made with spcial ingredients. Taste the difference in every bite.',
          price: '20',
          image: Chips,
          quantity: 1,
          catagory: 'street'
     },
     {
          id: 9,
          name: 'Chornake', 
          duration: '20',
          description: "Crafted with simple ingredients and baked to be golden. It's rustic and smoky flavor.",
          price: '15',
          image: Chornake,
          quantity: 1,
          catagory: 'street'
     },
     {
          id: 10,
          name: 'Sambusa', 
          duration: '45',
          description: 'Crispy, golden Sambusa filled with savory lentils, onions and a unique flavor.',
          price: '20',
          image: Sambusa,
          quantity: 1,
          catagory: 'street'
     },
     {
          id: 11,
          name: 'Bombolino', 
          duration: '20',
          description: 'A unique local delight. Delicate, lightly sweetened, offering a comforting warmth',
          price: '20',
          image: Bombolino,
          quantity: 1,
          catagory: 'street'
     },
     {
          id: 12,
          name: 'Falafel', 
          duration: '30',
          description: 'Crispy, golden falafel balls, packed with herbs and spices. Served with fresh ketchup.',
          price: '60',
          image: Falafel,
          quantity: 1,
          catagory: 'street'
     },
     {
          id: 13,
          name: 'Tea', 
          duration: '10',
          description: 'Our tea offers a soothing blend of aromatic leaves. Enjoy a warm, comforting cup, rich in flavor and tradition.',
          price: '5',
          image: Tea,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 14,
          name: 'Coffee', 
          duration: '20',
          description: 'Rich, aromatic coffee, brewed from premium beans, offering a smooth, robust flavor with hints of chocolate and spice.',
          price: '15',
          image: Coffee,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 15,
          name: 'Macchiato', 
          duration: '20',
          description: 'A Macchiato, layered with bold espresso and velvety steamed milk, offering a sweet, subtly strong coffee experience.',
          price: '30',
          image: Macchiato,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 16,
          name: 'Almond Tea', 
          duration: '10',
          description: 'Delicate almond tea, infused with subtle nutty notes and soothing warmth, crafted for a serene and comforting experience.',
          price: '45',
          image: AlmondTea,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 17,
          name: 'Green Tea', 
          duration: '10',
          description: 'A soothing GreenTea blend, lightly steeped with fresh mint, lemon zest, and delicate floral notes. Perfect for relaxation.',
          price: '20',
          image: GreenTea,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 18,
          name: 'Fanta', 
          duration: 'none',
          description: 'A refreshing Fanta, bursting with fruity flavors and a hint of fizz. Perfect for quenching your thirst on a hot day.',
          price: '60',
          image: Fanta,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 19,
          name: 'Predator', 
          duration: 'none',
          description: 'A Predator drink, a unique blend of flavors, offering a refreshing and energizing experience. Perfect for any occasion.',
          price: '60',
          image: Predator,
          quantity: 1,
          catagory: 'drink'
     },
     {
          id: 20,
          name: 'Sprite', 
          duration: 'none',
          description: 'A Sprite drink, a crisp and refreshing beverage with a zesty lemon-lime flavor. Perfect for any occasion.',
          price: '60',
          image: Sprite,
          quantity: 1,
          catagory: 'drink'
     },     
]