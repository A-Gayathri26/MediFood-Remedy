// Medicinal Foods Dataset with Online Images
const medicinalFoods = [
    {
        id: 1,
        name: "Chamomile Tea",
        problem: "Insomnia",
        nutrients: "Apigenin, Antioxidants",
        recipe: "Steep chamomile flowers in hot water for 5 minutes. Drink 30 minutes before bedtime.",
        ingredients: "Chamomile flowers, water",
        time: "5 mins",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 2,
        name: "Spinach & Seed Salad",
        problem: "Headache",
        nutrients: "Magnesium, Iron, Antioxidants",
        recipe: "Toss fresh spinach with pumpkin seeds, chia seeds, and light vinaigrette dressing. Serve immediately for maximum nutritional benefits.",
        ingredients: "Spinach, pumpkin seeds, chia seeds, olive oil, lemon juice",
        time: "15 mins",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 3,
        name: "Ginger Tea",
        problem: "Headache",
        nutrients: "Gingerols, Shogaols",
        recipe: "Steep 1-2 tsp fresh grated ginger in hot water for 5-10 minutes. Add honey to taste for additional benefits.",
        ingredients: "Fresh ginger, honey, water",
        time: "10 mins",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 4,
        name: "Spinach & Seed Salad",
        problem: "stomach pain",
        nutrients: "Magnesium, Iron, Antioxidants",
        recipe: "Toss fresh spinach with pumpkin seeds, chia seeds, and light vinaigrette dressing. Serve immediately for maximum nutritional benefits.",
        ingredients: "Spinach, pumpkin seeds, chia seeds, olive oil, lemon juice",
        time: "15 mins",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        type: "veg"
    },
     {
        id: 5,
        name: "Salmon with Turmeric",
        problem: "Joint Pain",
        nutrients: "Omega-3, Curcumin",
        recipe: "Bake salmon with turmeric and black pepper at 375°F for 15-20 minutes. Serve with steamed vegetables.",
        ingredients: "Salmon, turmeric, black pepper",
        time: "20 mins",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        type: "non-veg"
    },
    {
        id: 6,
        name: "BRAT Diet (Banana)",
        problem: "Stomach Pain",
        nutrients: "Potassium, Pectin",
        recipe: "Eat ripe banana as is or mash with a fork. Choose bananas with brown spots for easier digestion.",
        ingredients: "Ripe banana",
        time: "2 mins",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        type: "veg"
    },
   {
        id: 7,
        name: "Olive Oil Dressing",
        problem: "Heart Health",
        nutrients: "Monounsaturated Fats, Antioxidants",
        recipe: "Mix olive oil with lemon juice and herbs. Use on salads and vegetables.",
        ingredients: "Olive oil, lemon juice, herbs",
        time: "5 mins",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 8,
        name: "Chicken Soup",
        problem: "Fever",
        nutrients: "Protein, Cysteine, Electrolytes",
        recipe: "Simmer chicken, carrots, celery, onion in broth for 1-2 hours. Strain and drink the broth or eat as a complete meal.",
        ingredients: "Chicken, carrots, celery, onion, broth",
        time: "90 mins",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        type: "non-veg"
    },
    {
        id: 9,
        name: "Cinnamon Oatmeal",
        problem: "Diabetes",
        nutrients: "Chromium, Fiber",
        recipe: "Cook oats with cinnamon and nuts. Sweeten with stevia if needed.",
        ingredients: "Oats, cinnamon, walnuts",
        time: "15 mins",
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 10,
        name: "Salmon with Turmeric",
        problem: "Joint Pain",
        nutrients: "Omega-3, Curcumin",
        recipe: "Bake salmon with turmeric and black pepper at 375°F for 15-20 minutes. Serve with steamed vegetables.",
        ingredients: "Salmon, turmeric, black pepper",
        time: "20 mins",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        type: "non-veg"
    },
    {
        id: 11,
        name: "Ashwagandha Milk",
        problem: "Anxiety",
        nutrients: "Withanolides, Calcium",
        recipe: "Heat milk with ashwagandha powder and honey. Simmer for 5 minutes and drink warm before bedtime.",
        ingredients: "Milk, ashwagandha powder, honey",
        time: "10 mins",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 12,
        name: "Non-veg Soup",
        problem: "Fever",
        nutrients: "Protein, Cysteine, Electrolytes",
        recipe: "Simmer chicken, carrots, celery, onion in broth for 1-2 hours. Strain and drink the broth or eat as a complete meal.",
        ingredients: "Chicken, carrots, celery, onion, broth",
        time: "90 mins",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        type: "non-veg"
    },
    {
        id: 13,
        name: "Garlic Onion Soup",
        problem: "Respiratory Health",
        nutrients: "Allicin, Quercetin",
        recipe: "Simmer garlic and onions in vegetable broth. Add thyme for extra flavor.",
        ingredients: "Garlic, onions, broth, thyme",
        time: "35 mins",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 14,
        name: "Turmeric Golden Milk",
        problem: "Cold/Flu",
        nutrients: "Curcumin, Antioxidants",
        recipe: "Heat milk with turmeric, ginger, black pepper. Simmer for 10 minutes and sweeten with honey.",
        ingredients: "Milk, turmeric, ginger, black pepper, honey",
        time: "10 mins",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop",
        type: "veg"
    },
   {
        id: 15,
        name: "Chamomile Tea",
        problem: "headache",
        nutrients: "Apigenin, Antioxidants",
        recipe: "Steep chamomile flowers in hot water for 5 minutes. Drink 30 minutes before bedtime.",
        ingredients: "Chamomile flowers, water",
        time: "5 mins",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
        type: "veg"
    },

    {
        id: 16,
        name: "Garlic Honey",
        problem: "Cold/Flu",
        nutrients: "Allicin, Antioxidants",
        recipe: "Infuse raw garlic in honey for 24 hours. Take 1 teaspoon every few hours during illness.",
        ingredients: "Garlic, raw honey",
        time: "1440 mins",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
        type: "veg"
    },
   {
        id: 17,
        name: "Ginger Candy",
        problem: "Nausea",
        nutrients: "Gingerols, Shogaols",
        recipe: "Candied ginger pieces - consume small pieces as needed. Can be store-bought or homemade.",
        ingredients: "Ginger, sugar",
        time: "2 mins",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 18,
        name: "Warm Milk with Honey",
        problem: "Insomnia",
        nutrients: "Tryptophan, Calcium",
        recipe: "Heat milk gently, stir in honey. Avoid boiling to preserve nutrients. Drink warm before bed.",
        ingredients: "Milk, honey",
        time: "5 mins",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 19,
        name: "Prune Juice",
        problem: "Constipation",
        nutrients: "Sorbitol, Fiber",
        recipe: "Drink 1/2 cup prune juice in the morning on empty stomach. Can be warmed for better effect.",
        ingredients: "Prunes, water",
        time: "2 mins",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
        type: "veg"
    },
    {
        id: 20,
        name: "Plain Rice Congee",
        problem: "Stomach Pain",
        nutrients: "Carbohydrates, Electrolytes",
        recipe: "Cook rice in 6-8 parts water until it forms a soft porridge. Add salt to taste and eat warm.",
        ingredients: "White rice, water, salt",
        time: "45 mins",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
        type: "veg"
    }
   
    // Continue adding more foods following the same structure...
];

// Note: I've included 20 foods as examples. You would continue adding all foods from your dataset.
// Each food object should have: id, name, problem, nutrients, recipe, ingredients, time, image, type