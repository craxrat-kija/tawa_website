export const destinations = [
    {
        id: "selous",
        name: "Selous Game Reserve",
        image: "/images/dest-1.jpg",
        area: "50,000 km²",
        highlight: "Largest in Africa",
        description: "The Selous Game Reserve is one of the largest faunal reserves of the world, located in the south of Tanzania. It was designated a UNESCO World Heritage Site in 1982 due to its wildlife diversity and undisturbed nature.",
        aboutContent: "Established in 1922, the Selous encompasses a wide variety of habitats including grasslands, Miombo woodlands, and swampy wetlands. It is home to significant populations of African wild dogs, lions, and over 400 species of birds. The Rufiji River system is the reserve's lifeblood.",
        attractions: ["Rufiji River", "Stiegler's Gorge", "Hot Springs", "Diverse Wildlife"],
        tours: ["Rufiji River Boat Safari", "Stiegler's Gorge Fly-In", "Walking Wilderness Trek"],
        gallery: ["/images/dest-1.jpg", "/images/dest-2.jpg", "/images/dest-3.jpg"],
        news: [
            { title: "New Ranger Post Opened", date: "Jan 15, 2026" },
            { title: "Rare Wild Dog Pack Spotted", date: "Feb 02, 2026" }
        ]
    },
    {
        id: "ikorongo-grumeti",
        name: "Ikorongo & Grumeti",
        image: "/images/dest-2.jpg",
        area: "5,000 km²",
        highlight: "Great Migration",
        description: "Located in the western corridor of the Serengeti ecosystem, Ikorongo and Grumeti are crucial for the annual Great Migration of wildebeests and zebras. It offers remote and exclusive safari experiences.",
        aboutContent: "These reserves play a critical role in the Serengeti-Mara ecosystem. During June and July, the Great Migration crosses the Grumeti River here, providing some of the most dramatic wildlife spectacles on earth. The area is managed with a focus on high-end, low-impact tourism.",
        attractions: ["Great Wildebeest Migration", "Grumeti River", "Nile Crocodiles", "Lion Prides"],
        tours: ["Migration Tracking", "Grumeti River Bank Walk", "Hot Air Balloon Safari"],
        gallery: ["/images/dest-2.jpg", "/images/dest-4.jpg", "/images/dest-6.jpg"],
        news: [
            { title: "Migration Hits Grumeti Early", date: "May 20, 2025" },
            { title: "Anti-Poaching Tech Success", date: "Dec 10, 2025" }
        ]
    },
    {
        id: "maswa",
        name: "Maswa Game Reserve",
        image: "/images/dest-3.jpg",
        area: "2,200 km²",
        highlight: "Big Five",
        description: "Maswa Game Reserve acts as a buffer zone for the Serengeti National Park. It is known for its dense thickets and rocky outcrops (kopjes), providing excellent habitats for leopards and the Big Five.",
        aboutContent: "Maswa provides a vital dry-season refuge for many Serengeti species. Its diverse terrain ranging from open plains to acacia woodlands makes it a prime spot for predator sightings, particularly leopards who favor the granite kopjes. It offers a more secluded alternative to the main park.",
        attractions: ["Kopjes", "The Big Five", "Bird Watching", "Walking Safaris"],
        tours: ["Big Five Tracking", "Kopje Climbing & Viewpoints", "Night Game Drives"],
        gallery: ["/images/dest-3.jpg", "/images/dest-5.jpg", "/images/dest-1.jpg"],
        news: [
            { title: "Leopard Research Project Update", date: "Feb 28, 2026" },
            { title: "Community Water Project Launch", date: "Jan 12, 2026" }
        ]
    },
    {
        id: "moyowosi",
        name: "Moyowosi Reserve",
        image: "/images/dest-4.jpg",
        area: "6,000 km²",
        highlight: "Wetland Ecosystems",
        description: "Moyowosi is recognized for its vast wetland ecosystems, which support significant bird populations and exceptional aquatic life including shoebill storks and sitatunga antelope.",
        aboutContent: "This reserve is a paradise for water-bird enthusiasts and those seeking rare semi-aquatic mammals. The complex network of swamps and rivers provides a unique habitat that remains largely unexplored, offering a true sense of discovery for visitors.",
        attractions: ["Shoebill Storks", "Swamp Safaris", "Sitatunga", "Hippo Pools"],
        tours: ["Canoe Birding Expedition", "Sitatunga Swamp Trek", "Sundowner River Cruise"],
        gallery: ["/images/dest-4.jpg", "/images/dest-2.jpg", "/images/dest-6.jpg"],
        news: [
            { title: "New Bird Hide Completed", date: "Mar 01, 2026" }
        ]
    },
    {
        id: "pande",
        name: "Pande Game Reserve",
        image: "/images/dest-5.jpg",
        area: "120 km²",
        highlight: "Coastal Wildlife",
        description: "Situated near Dar es Salaam, Pande is a unique coastal forest reserve that protects endemic and endangered species. It's an excellent day trip destination from the city.",
        aboutContent: "Pande is one of the few remaining patches of coastal forest in Tanzania. It serves as a vital 'green lung' for the Dar es Salaam region and provides a sanctuary for rare monkeys, butterflies, and unique coastal flora. Its accessibility makes it a key site for environmental education.",
        attractions: ["Endemic Species", "Coastal Forest", "Bird Watching", "Hiking Trails"],
        tours: ["Forest Canopy Walk", "Botany & Butterfly Tour", "Weekend Family Picnic"],
        gallery: ["/images/dest-5.jpg", "/images/dest-3.jpg", "/images/dest-1.jpg"],
        news: [
            { title: "Educational Trail Renovated", date: "Feb 10, 2026" }
        ]
    },
    {
        id: "lukwati-piti",
        name: "Lukwati & Piti",
        image: "/images/dest-6.jpg",
        area: "3,146 km²",
        highlight: "Untouched Wilderness",
        description: "These reserves offer a remote, off-the-beaten-path safari experience in western Tanzania. The varied topography includes miombo woodlands and vital river systems.",
        aboutContent: "Lukwati and Piti represent the raw essence of the African wild. Far from the tourist circuits, these reserves offer solitude and a chance to see rare antelope species in their natural, undisturbed habitat. The management focuses on preserving this pristine state.",
        attractions: ["Remote Wilderness", "Miombo Woodlands", "Robe Antelope", "Birding"],
        tours: ["Deep Wilderness Camping", "Miombo Woodland Hike", "Riverine Kayaking"],
        gallery: ["/images/dest-6.jpg", "/images/dest-4.jpg", "/images/dest-2.jpg"],
        news: [
            { title: "Biodiversity Survey Results", date: "Dec 15, 2025" }
        ]
    },
    {
        id: "rungwa",
        name: "Rungwa Game Reserve",
        image: "https://images.unsplash.com/photo-1602497673551-ea62c5e5ba37?auto=format&fit=crop&w=1600&q=80",
        area: "9,000 km²",
        highlight: "Rugged Terrain",
        description: "Located in central Tanzania, Rungwa features rugged terrain with hills and riverine valleys. It forms a large ecosystem connected to Ruaha National Park.",
        aboutContent: "Rungwa is a rugged jewel in central Tanzania. Its hills and valleys provide a dramatic backdrop for viewing large herds of buffalo and the elusive wild dogs. It's a key migratory path for wildlife moving between the central and southern circuits.",
        attractions: ["Roan Antelope", "Greater Kudu", "Wild Dogs", "Walking Safaris"],
        tours: ["Rugged Terrain 4x4", "Wild Dog Tracking", "Hilltop Viewpoint Trek"],
        gallery: [
            "https://images.unsplash.com/photo-1602497673551-ea62c5e5ba37?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&w=800&q=80"
        ],
        news: []
    },
    {
        id: "kizigo",
        name: "Kizigo Game Reserve",
        image: "https://images.unsplash.com/photo-1577464332911-3de78ba70b4c?auto=format&fit=crop&w=1600&q=80",
        area: "4,000 km²",
        highlight: "Miombo Woodlands",
        description: "Adjacent to Ruaha National Park, Kizigo largely consists of miombo woodland and is drained by the Kizigo River. It supports significant populations of elephants and buffaloes.",
        aboutContent: "Kizigo's vast miombo woodlands are a stronghold for African elephants. The Kizigo River provides a reliable water source, making it a critical area during the dry season. It offers a more rustic and quiet experience than neighboring parks.",
        attractions: ["Elephant Herds", "Buffalo", "Birding", "Miombo Ecosystem"],
        tours: ["Elephant Corridor Tour", "Miombo Forest Walk", "River Bank Camping"],
        gallery: [
            "https://images.unsplash.com/photo-1577464332911-3de78ba70b4c?auto=format&fit=crop&w=800&q=80"
        ],
        news: []
    },
    {
        id: "muhesi",
        name: "Muhesi Game Reserve",
        image: "https://images.unsplash.com/photo-1582207968994-e35cfa32e6ab?auto=format&fit=crop&w=1600&q=80",
        area: "2,000 km²",
        highlight: "Exclusive Safari",
        description: "Part of the greater Ruaha ecosystem, Muhesi is known for its exclusivity and low tourist volumes, providing a truly wild and private safari experience.",
        aboutContent: "Muhesi offers one of the most private safari experiences in East Africa. It is a critical corridor for predators including lions and leopards. Visitors here can enjoy untamed landscapes that feel like Africa a century ago, with almost no other vehicles in sight.",
        attractions: ["Private Safaris", "Large Predators", "Untouched Landscapes"],
        tours: ["Exclusive Predator Patrol", "Mobile Fly-Camping", "Night Sky Observation"],
        gallery: ["https://images.unsplash.com/photo-1582207968994-e35cfa32e6ab?auto=format&fit=crop&w=800&q=80"],
        news: []
    },
    {
        id: "kigosi",
        name: "Kigosi Game Reserve",
        image: "https://images.unsplash.com/photo-1510344473855-46f90dcfc43a?auto=format&fit=crop&w=1600&q=80",
        area: "7,460 km²",
        highlight: "Floodplains",
        description: "Kigosi features extensive floodplains and swamp forests. It is renowned for its large wetland areas and populations of water-loving species.",
        aboutContent: "The Kigosi Game Reserve is a massive wetland paradise. Its complex ecosystem of floodplains and swamp forests is home to many rare water-loving animals. During the rainy season, the area transforms into a vast internal delta, attracting incredible numbers of migratory birds.",
        attractions: ["Wetland Birds", "Swamp Excursions", "Fishing", "Situtunga"],
        tours: ["Airboat Swamp Tour", "Fishing Expedition", "Wetland Birding Walk"],
        gallery: ["https://images.unsplash.com/photo-1510344473855-46f90dcfc43a?auto=format&fit=crop&w=800&q=80"],
        news: []
    },
    {
        id: "ugalla-river",
        name: "Ugalla River Reserve",
        image: "https://images.unsplash.com/photo-1621217643577-789a50cd3ff3?auto=format&fit=crop&w=1600&q=80",
        area: "5,000 km²",
        highlight: "Slow Flowing Rivers",
        description: "The Ugalla River is a broad, slow-flowing river of seasonal swamps. The river is the lifeblood of the reserve, attracting vast herds of wildlife during the dry season.",
        aboutContent: "The Ugalla River is a seasonal sanctuary. During the dry months, the river dries into a series of large pools which become magnets for thousands of animals. It's famous for its giant crocodiles and large herds of elephants that congregate along the river banks.",
        attractions: ["River Safaris", "Crocodiles", "Hippo Pools", "Sable Antelope"],
        tours: ["River Pool Safari", "Crocodile Observation", "Elephant Sand River Walk"],
        gallery: ["https://images.unsplash.com/photo-1621217643577-789a50cd3ff3?auto=format&fit=crop&w=800&q=80"],
        news: []
    },
    {
        id: "mkungunero",
        name: "Mkungunero Reserve",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=1600&q=80",
        area: "800 km²",
        highlight: "Tarangire Ecosystem",
        description: "A crucial part of the Tarangire-Manyara ecosystem, serving as an important dry season refuge and migratory corridor for enormous herds of elephants and other herbivores.",
        aboutContent: "Mkungunero is a vital link in the northern circuit. Its proximity to Tarangire ensures that it sees massive movement of elephants. The reserve is characterized by ancient baobab trees and rocky hills, providing stunning vistas of the surrounding plains.",
        attractions: ["Elephant Migration", "Baobab Trees", "Large Herds", "Bird Diversity"],
        tours: ["Baobab Valley Hike", "Migration Photography", "Savanna Sunset Drive"],
        gallery: ["https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800&q=80"],
        news: []
    },
    {
        id: "uwanda",
        name: "Uwanda Game Reserve",
        image: "https://images.unsplash.com/photo-1549643194-e90fa2cde3fd?auto=format&fit=crop&w=1600&q=80",
        area: "5,000 km²",
        highlight: "Lake Rukwa",
        description: "Located on the shores of Lake Rukwa in southwestern Tanzania, Uwanda is unique for its large population of the endemic puku antelope and massive crocodile numbers.",
        aboutContent: "Uwanda is a remote lakeshore paradise. The combination of Lake Rukwa's alkaline waters and the surrounding grasslands creates a unique microclimate. It's one of the few places to see the rare puku antelope and witness one of the highest concentrations of crocodiles in Africa.",
        attractions: ["Lake Rukwa Views", "Puku Antelope", "Crocodiles", "Waterbirds"],
        tours: ["Lakeshore Safari", "Rukwa Boat Tour", "Puku Tracking Hike"],
        gallery: ["https://images.unsplash.com/photo-1549643194-e90fa2cde3fd?auto=format&fit=crop&w=800&q=80"],
        news: []
    }
];
