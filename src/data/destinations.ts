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
    }
];
