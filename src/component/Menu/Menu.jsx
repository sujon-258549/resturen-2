import CommonBannerText from "../Main/Common/CommonBannerText"
import Dropdown from "../Main/Common/Dropdown";
import Scorlmenu from "./Scorlmenu";
import SelectComponent from "./SelectComponent";
const menus = [
    { name: "Karaage", category: "Single Item", description: "からあげ", price: 450.00 },
    { name: "Chicken Nanban", category: "Single Item", description: "チキン南蛮", price: 450.00 },
    { name: "Beef Croquette", category: "Single Item", description: "", price: 450.00 },
    { name: "Ebi Chili (Shrimp in Chili Sauce)", category: "Single Item", description: "Sweet and sour chili fried shrimp.", price: 530.00 },
    { name: "Gyu Yakiniku (Grilled Beef)", category: "Single Item", description: "Beef, green peppers, and onions stir-fried with a unique BBQ sauce from Japan.", price: 470.00 },
    { name: "Shoga Yaki", category: "Single Item", description: "Beef, green peppers, and onions stir-fried with ginger BBQ sauce.", price: 470.00 },
    { name: "Hamburger Steak", category: "Single Item", description: "A meat dish made of ground beef mixed with fried onions, breadcrumbs, eggs, and seasonings.", price: 460.00 },
    { name: "Minced Meat Cutlet", category: "Single Item", description: "Ground beef kneaded with chopped onion, salt, and pepper, formed into an oval shape.", price: 460.00 },
    { name: "Chicken Skin Ponzu", category: "Single Item", description: "A classic Japanese izakaya menu item.", price: 500.00 },
    { name: "Healthy Spicy Chicken", category: "Single Item", description: "A hidden favorite product of our store.", price: 680.00 },
    { name: "Gyoza (Dumplings)", category: "Single Item", description: "Aromatic and appetizing smell.", price: 500.00 },
    { name: "Fried Vegetables", category: "Single Item", description: "A golden combination of meat and vegetables.", price: 420.00 },
    { name: "Assorted Tempura", category: "Single Item", description: "Made with shrimp, chicken, eggplant, pumpkin, and okra.", price: 700.00 },
    { name: "Chicken Tempura (Assorted)", category: "Single Item", description: "Made with chicken×2, eggplant, pumpkin, and okra.", price: 650.00 },
    { name: "Onion Slice", category: "Single Item", description: "Sliced onion with sour original soy sauce (ponzu).", price: 300.00 },
    { name: "Takoyaki", category: "Single Item", description: "A snack of octopus and condiments in a flour dough, baked into a ball shape.", price: 500.00 },
    { name: "Gari", category: "Single Item", description: "", price: 50.00 },
    { name: "Dashimaki Tamago", category: "Single Item", description: "An egg dish made by baking well-beaten eggs with dashi (Japanese soup stock).", price: 500.00 },
    { name: "Octopus Karaage", category: "Single Item", description: "Deep-fried octopus.", price: 500.00 },
    { name: "Gyutan (Beef Tongue)", category: "Single Item", description: "Grilled beef tongue.", price: 650.00 },
    { name: "Gyusuji Nikomi", category: "Single Item", description: "A warming and time-consuming stew.", price: 500.00 },
    { name: "Chicken Tataki", category: "Single Item", description: "Moist chicken breast cooked at low temperature served with wasabi soy sauce.", price: 600.00 },
    { name: "French Fry", category: "Single Item", description: "Fried potato product.", price: 500.00 },
    { name: "Nasu no Nibitashi", category: "Single Item", description: "Sizzlingly delicious!", price: 450.00 },
    { name: "ゴーヤチャンプルー", category: "Single Item", description: "", price: 500.00 },
    { name: "Edamame", category: "Single Item", description: "After sushi, edamame is the second most searched Japanese food on Google.", price: 400.00 },
    { name: "Yurinchi", category: "Single Item", description: "油淋鶏", price: 450.00 },
    { name: "Yama-Natto", category: "Single Item", description: "", price: 120.00 },
    { name: "Shoyu Ramen", category: "Single Item", description: "Ramen noodles made with soy sauce flavored soup.", price: 680.00 },
    { name: "Special Shoyu Ramen", category: "Single Item", description: "The difference between Shoyu Ramen and Special Shoyu Ramen.", price: 980.00 },
    { name: "Creamy Ramen", category: "Single Item", description: "Creamy chicken soup made by slowly stewing whole chicken and bones, making it thick.", price: 680.00 },
    { name: "Special Creamy Ramen", category: "Single Item", description: "The difference between Creamy Chicken Ramen and Special Creamy Chicken Ramen.", price: 980.00 },
    { name: "Zhasai Tantanmen", category: "Single Item", description: "", price: 860.00 },
    { name: "Tantan Men", category: "Single Item", description: "A spicy noodle dish filled with sesame seeds.", price: 800.00 },
    { name: "Soupless Tantan Men", category: "Single Item", description: "Soupless Tantanmen.", price: 800.00 },
    { name: "Spicy Shoyu Ramen", category: "Single Item", description: "", price: 680.00 },
    { name: "Spicy Special Shoyu Ramen", category: "Single Item", description: "", price: null }, // Price not listed
    { name: "Spicy Creamy Ramen", category: "Single Item", description: "", price: 680.00 },
    { name: "Spicy Special Creamy Ramen", category: "Single Item", description: "", price: 980.00 },
    { name: "Iekei Ramen", category: "Single Item", description: "家系風ラーメン。", price: 680.00 },
    { name: "Special Iekei Ramen", category: "Single Item", description: "", price: 980.00 },
    { name: "Tempura Shoyu Ramen", category: "Single Item", description: "醤油ラーメンに海老の天ぷらがtoppingされたラーメン。", price: 850.00 },
    { name: "Maze Soba (Normal)", category: "Single Item", description: "まぜそば", price: 800.00 },
    { name: "Special Maze Soba", category: "Single Item", description: "", price: 950.00 },
    { name: "Hiyashi Chuka (Japanese Style Cold Noodles)", category: "Single Item", description: "冷やし中華", price: 650.00 },
    { name: "Mini Ramen (Shoyu, Creamy, Iekei, Tantan)", category: "Single Item", description: "", price: 450.00 },
    { name: "Mini Special Ramen (Shoyu, Creamy, Iekei, Tantan)", category: "Single Item", description: "", price: 650.00 },
    { name: "Yakiniku Bento", category: "Set Menu (Bento)", description: "Beef, green peppers, and onions stir-fried with a unique BBQ sauce from Japan.", price: 680.00 },
    { name: "Karaage Bento", category: "Set Menu (Bento)", description: "Karaage is a Japanese-style fried chicken.", price: 650.00 },
    { name: "Shogayaki Bento", category: "Set Menu (Bento)", description: "Beef, green peppers, and onions stir-fried with ginger BBQ sauce.", price: 680.00 },
    { name: "Yu-rin-chi Bento", category: "Set Menu (Bento)", description: "I want meat!", price: 650.00 },
    { name: "Gyoza Bento", category: "Set Menu (Bento)", description: "Gyōza are half-moon-shaped dumplings filled with ground meat and diced vegetables.", price: 650.00 },
    { name: "Teriyaki Chicken Bento", category: "Set Menu (Bento)", description: "Chicken grilled with a sauce made from soy sauce and sugar.", price: 650.00 },
    { name: "Beef Croquette Bento", category: "Set Menu (Bento)", description: "A fried bread-crumbed food containing mashed potatoes, beef, and vegetables.", price: 650.00 },
    { name: "Chicken Nanban Bento", category: "Set Menu (Bento)", description: "Fried chicken topped with sweet-and-sour sauce and tartar sauce.", price: 680.00 },
    { name: "Octopus Karaage Bento", category: "Set Menu (Bento)", description: "", price: 650.00 },
    { name: "Special Fried Chicken Bento", category: "Set Menu (Bento)", description: "Chicken breast coated with spicy sauce.", price: 700.00 },
    { name: "Vegetarian Bento", category: "Set Menu (Bento)", description: "Assorted vegetables fried to a crunchy texture.", price: 600.00 },
    { name: "Tonkatsu Bento", category: "Set Menu (Bento)", description: "Breaded and deep-fried pork cutlet.", price: 650.00 },
    { name: "Yakiniku Gyudon", category: "Set Menu (Gyudon)", description: "A bowl of rice topped with grilled beef.", price: 680.00 },
    { name: "Chicken Nanban Don", category: "Set Menu (Don)", description: "Chicken served over rice.", price: 680.00 },
    { name: "Gyudon", category: "Set Menu (Gyudon)", description: "A bowl of rice topped with beef and onion simmered in a mildly sweet sauce.", price: 680.00 },
    { name: "Katsudon", category: "Set Menu (Don)", description: "Rice topped with a breaded deep-fried pork cutlet.", price: 680.00 },
    { name: "Chirashi Sushi", category: "Set Menu (Sushi)", description: "Scattered sushi rice with assorted seafood.", price: 850.00 },
    { name: "Salmon Nigiri", category: "Set Menu (Sushi)", description: "Rice topped with salmon.", price: 800.00 },
    { name: "Ebi Nigiri", category: "Set Menu (Sushi)", description: "Rice topped with shrimp.", price: 800.00 },
    { name: "Sashimi Assorted", category: "Set Menu (Sashimi)", description: "Assorted sashimi.", price: 1000.00 },
    { name: "Tuna Sashimi", category: "Set Menu (Sashimi)", description: "", price: 800.00 },
    { name: "Salmon Sashimi", category: "Set Menu (Sashimi)", description: "", price: 800.00 },
    { name: "Sashimi Moriawase", category: "Set Menu (Sashimi)", description: "", price: 1200.00 },
    { name: "Salmon Temaki", category: "Set Menu (Sushi)", description: "A hand-rolled sushi filled with salmon.", price: 600.00 },
    { name: "Spicy Tuna Temaki", category: "Set Menu (Sushi)", description: "A hand-rolled sushi filled with spicy tuna.", price: 600.00 },
    { name: "Vegetable Tempura", category: "Set Menu (Tempura)", description: "Vegetables dipped in batter and deep-fried.", price: 700.00 },
    { name: "Shrimp Tempura", category: "Set Menu (Tempura)", description: "Shrimp dipped in batter and deep-fried.", price: 800.00 },
    { name: "Assorted Tempura", category: "Set Menu (Tempura)", description: "An assortment of deep-fried seafood and vegetables.", price: 900.00 },
    { name: "Mini Chashu Rice", category: "Side Menu", description: "A small bowl of rice topped with pork belly.", price: 300.00 },
    { name: "Onigiri", category: "Side Menu", description: "Rice balls wrapped in seaweed.", price: 200.00 },
    { name: "Miso Soup", category: "Side Menu", description: "A traditional Japanese soup made from miso paste.", price: 250.00 },
    { name: "Rice", category: "Side Menu", description: "", price: 150.00 },
    { name: "Vegetable Soup", category: "Side Menu", description: "", price: 250.00 },
    { name: "Salad", category: "Side Menu", description: "", price: 300.00 },
    { name: "Gari (Pickled Ginger)", category: "Side Menu", description: "", price: 50.00 },
    { name: "Chili Oil", category: "Side Menu", description: "", price: 50.00 },
    { name: "Sauce", category: "Side Menu", description: "", price: 50.00 },
    { name: "Pickled Vegetables", category: "Side Menu", description: "", price: 150.00 },
    { name: "Natto", category: "Side Menu", description: "Fermented soybeans.", price: 100.00 },
    { name: "Ice Cream", category: "Dessert", description: "Japanese-style ice cream.", price: 300.00 },
    { name: "Cheesecake", category: "Dessert", description: "Japanese-style cheesecake.", price: 350.00 },
    { name: "Mochi Ice Cream", category: "Dessert", description: "Ice cream wrapped in mochi.", price: 400.00 },
    { name: "Daifuku", category: "Dessert", description: "Rice cake filled with sweetened red bean paste.", price: 300.00 },
    { name: "Green Tea", category: "Drinks", description: "Traditional Japanese green tea.", price: 200.00 },
    { name: "Soda", category: "Drinks", description: "", price: 150.00 },
    { name: "Japanese Beer", category: "Drinks", description: "", price: 400.00 },
    { name: "Hot Sake", category: "Drinks", description: "Warm rice wine.", price: 500.00 },
    { name: "Cold Sake", category: "Drinks", description: "Chilled rice wine.", price: 500.00 },
    { name: "Soft Drink", category: "Drinks", description: "", price: 150.00 },
];


const Menu = () => {
    return (
        <div>
            <CommonBannerText bannertext={'Our Menu'} subtext={'Menu'}></CommonBannerText>
            <SelectComponent></SelectComponent>
            <Scorlmenu></Scorlmenu>
            <div className="mx-auto flex justify-center">
                <Dropdown />
            </div>
        </div>
    )
}

export default Menu
