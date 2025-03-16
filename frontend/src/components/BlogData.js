const blogData = [
    {
        id: "blog-1",
        title: "Top Home Buying Tips for 2025",
        date: "10.03.2025",
        category: "Real Estate Tips",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Set a Realistic Budget", text: "Before you start looking for a home, determine your budget based on your income, savings, and loan eligibility. Consider factors like down payments, closing costs, and future expenses to avoid financial stress." },
            { subtitle: "2. Get Mortgage Pre-Approval", text: "A mortgage pre-approval helps you understand how much you can afford and makes your offer more attractive to sellers. It speeds up the buying process and gives you confidence while negotiating." },
            { subtitle: "3. Research the Market", text: "Check recent sales, market trends, and future property value predictions in the areas you're considering. A well-informed decision can save you from financial loss." },
            { subtitle: "4. Work with a Real Estate Agent", text: "An experienced agent can help you find properties that match your needs, negotiate better prices, and handle legal documentation efficiently." },
            { subtitle: "5. Inspect the Property Thoroughly", text: "Always conduct a home inspection to identify potential repairs, structural issues, or hidden costs before making an offer." }
        ]
    },
    {
        id: "blog-2",
        title: "Real Estate Market Trends You Should Know",
        date: "15.03.2025",
        category: "Market Trends",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Demand and Supply", text: "The real estate market fluctuates based on economic conditions, interest rates, and demand-supply balance." },
            { subtitle: "2. Investment Opportunities", text: "Emerging neighborhoods and commercial spaces provide great investment potential." },
            { subtitle: "3. Rise of Smart Homes", text: "More homebuyers are looking for properties with smart technology integration, such as automation and energy-efficient solutions." },
            { subtitle: "4. Work-From-Home Impact", text: "Remote work has shifted buyer preferences towards larger homes with dedicated office spaces in suburban areas." },
            { subtitle: "5. Sustainability and Green Buildings", text: "Eco-friendly homes with solar panels and sustainable materials are gaining traction among buyers." }
        ]
    },
    {
        id: "blog-3",
        title: "How to Increase Your Property Value",
        date: "20.03.2025",
        category: "Property Improvement",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Renovation Tips", text: "Upgrading kitchen and bathrooms significantly boosts property value." },
            { subtitle: "2. Curb Appeal", text: "Well-maintained exteriors and landscaping can make a great first impression." },
            { subtitle: "3. Energy Efficiency Improvements", text: "Adding insulation, smart thermostats, and solar panels increases home value and reduces energy costs." },
            { subtitle: "4. Home Automation", text: "Smart home features like security systems and automated lighting attract modern buyers." },
            { subtitle: "5. Expanding Living Space", text: "Adding an extra room, finishing a basement, or creating an outdoor entertainment space can enhance property worth." }
        ]
    },
    {
        id: "blog-4",
        title: "Mistakes to Avoid When Buying a Home",
        date: "25.03.2025",
        category: "Home Buying",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Ignoring Pre-Approval", text: "Without mortgage pre-approval, your home search may face challenges." },
            { subtitle: "2. Overlooking Hidden Costs", text: "Consider taxes, maintenance, and closing fees in your budget." },
            { subtitle: "3. Skipping Home Inspection", text: "Neglecting to inspect a home before purchase can lead to unexpected repair expenses." },
            { subtitle: "4. Not Researching the Neighborhood", text: "Ensure the area has good schools, safety, and future development plans before buying." },
            { subtitle: "5. Making Emotional Decisions", text: "Avoid falling in love with a property too soon; always compare options and negotiate wisely." }
        ]
    },
    {
        id: "blog-5",
        title: "The Future of Smart Homes in Real Estate",
        date: "01.04.2025",
        category: "Smart Homes",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Home Automation", text: "Smart lighting, security systems, and voice-controlled appliances are shaping modern homes." },
            { subtitle: "2. Energy Efficiency", text: "Smart thermostats and solar panels reduce utility bills and environmental impact." },
            { subtitle: "3. AI-Driven Home Assistance", text: "AI-powered systems like Alexa and Google Home are becoming central to home automation." },
            { subtitle: "4. Smart Security Features", text: "Biometric locks, motion-detecting cameras, and remote monitoring improve home security." },
            { subtitle: "5. Integration with IoT", text: "The Internet of Things (IoT) is making homes more interconnected and convenient for homeowners." }
        ]
    },
    {
        id: "blog-6",
        title: "A Guide to Renting vs. Buying a Home",
        date: "05.04.2025",
        category: "Home Ownership",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Cost Comparison", text: "Compare monthly rent with mortgage payments to determine financial viability." },
            { subtitle: "2. Long-Term Investment", text: "Buying a home builds equity over time, while renting provides flexibility." },
            { subtitle: "3. Maintenance Responsibilities", text: "Homeowners bear repair and maintenance costs, while renters rely on landlords." },
            { subtitle: "4. Mobility and Stability", text: "Renting is ideal for those who move frequently, while homeownership provides stability." },
            { subtitle: "5. Tax Benefits", text: "Homeowners may benefit from mortgage tax deductions, unlike renters." }
        ]
    },
    {
        id: "blog-7",
        title: "Luxury Homes: What Makes Them Special?",
        date: "10.04.2025",
        category: "Luxury Real Estate",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. High-End Features", text: "Smart technology, home theaters, and premium materials define luxury homes." },
            { subtitle: "2. Exclusive Locations", text: "Waterfront properties and penthouses in prime locations attract buyers." },
            { subtitle: "3. Personalized Architecture", text: "Luxury homes often feature custom-built designs to meet individual preferences." },
            { subtitle: "4. Premium Security", text: "Gated communities and advanced security systems ensure privacy and safety." },
            { subtitle: "5. Wellness and Entertainment Spaces", text: "Luxury homes include private gyms, spas, and outdoor recreational areas." }
        ]
    },
    {
        id: "blog-8",
        title: "Real Estate Investment Strategies for Beginners",
        date: "15.04.2025",
        category: "Investment Strategies",
        image: "/img/product1.jpeg",
        content: [
            { subtitle: "1. Buy and Hold", text: "Purchase properties and rent them out for steady income." },
            { subtitle: "2. Fix and Flip", text: "Renovate undervalued properties and sell for a profit." },
            { subtitle: "3. Real Estate Crowdfunding", text: "Invest in property development projects with minimal capital." },
            { subtitle: "4. Short-Term Rentals", text: "Earn high returns by listing properties on platforms like Airbnb." },
            { subtitle: "5. REITs", text: "Invest in Real Estate Investment Trusts for passive income without direct property ownership." }
        ]
    },
    {
        id: "blog-9",
        title: "How to Sell Your Home Fast: Expert Tips",
        date: "20.04.2025",
        category: "Home Selling",
        image: "/img/product1.jpeg",
        content: [
            { 
                subtitle: "1. Price It Right", 
                text: "Setting the right price is crucial. Overpricing can drive buyers away, while underpricing may lead to financial loss. Research market trends and consult a real estate agent for a competitive price." 
            },
            { 
                subtitle: "2. Improve Curb Appeal", 
                text: "First impressions matter. Enhance your home’s exterior by painting the front door, maintaining the lawn, and adding fresh flowers to attract buyers." 
            },
            { 
                subtitle: "3. Stage Your Home", 
                text: "Declutter, depersonalize, and arrange furniture to make spaces look larger and more inviting. A well-staged home can sell faster and at a higher price." 
            },
            { 
                subtitle: "4. Use High-Quality Photos and Videos", 
                text: "In today’s digital world, buyers first explore homes online. Professional photos and virtual tours can make your listing stand out." 
            },
            { 
                subtitle: "5. Market Effectively", 
                text: "List your property on popular real estate websites, social media, and local classifieds. Consider hosting open houses and offering incentives to attract more buyers." 
            }
        ]
    }
    
];

export default blogData;
