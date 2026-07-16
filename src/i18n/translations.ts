export const SUPPORTED_LANGUAGES = ["en", "ru", "ro"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  ru: "RU",
  ro: "RO",
};

export const LOCALE_TAGS: Record<Language, string> = {
  en: "en-US",
  ru: "ru-RU",
  ro: "ro-RO",
};

export interface OfferDate {
  /** e.g. "Iulie" or "27.07.2026" */
  date: string;
  /** e.g. "2329€" */
  price: string;
}

export interface Offer {
  /** File name only — drop a matching image into public/offers/ to replace it. */
  photo: string;
  emoji: string;
  destination: string;
  hotel: string;
  tagline: string;
  duration: string;
  meal: string;
  includes: string[];
  dates: OfferDate[];
  note?: string;
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    offers: string;
    stats: string;
    why: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: [string, string];
    sub: string;
    facts: string[];
    scrollCue: string;
  };
  offers: {
    eyebrow: string;
    headline: [string, string];
    lede: string;
    priceLabel: string;
    items: Offer[];
  };
  stats: {
    eyebrow: string;
    headline: [string, string];
    lede: string;
    labels: {
      experience: string;
      vacations: string;
      destinations: string;
      avgPrice: string;
    };
  };
  why: {
    eyebrow: string;
    headline: [string, string];
    lede: string;
    items: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    headline: [string, string];
    lede: string;
    footerOperator: string;
    hoursLabel: string;
    openNow: string;
    closedNow: string;
    days: [string, string, string, string, string, string, string];
    closedWord: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    instagramLabel: string;
    facebookLabel: string;
  };
  reviews: {
    label: string;
    items: { quote: string; name: string; title: string }[];
  };
}

const en: Translation = {
  meta: {
    title: "Bee Voyage — Travel Agency in Chișinău",
    description:
      "Bee Voyage — a Chișinău travel agency run by Dumitru. Handpicked all-inclusive vacation deals at a fair price.",
  },
  nav: {
    offers: "Offers",
    stats: "About us",
    why: "Why us",
    contact: "Contact",
    cta: "Contact",
  },
  hero: {
    eyebrow: "BEE VOYAGE · TRAVEL AGENCY",
    headline: ["Your vacation,", "planned with care."],
    sub: "Bee Voyage is a Chișinău travel agency built around one thing: honest advice from someone who has actually seen the hotel. Tell us what you're after, and we'll find the deal that fits — no guesswork, no upselling.",
    facts: [
      "Founder Dumitru, 5+ years of experience in tourism",
      "Over 1000 hotels personally visited across 34 cities worldwide",
      "HOT deals at a fair price ❗",
    ],
    scrollCue: "Scroll for offers",
  },
  offers: {
    eyebrow: "CURRENT OFFERS",
    headline: ["A few deals", "worth booking now."],
    lede: "A rolling selection of the vacation packages we're actively booking — swipe through for hotels, dates, and prices.",
    priceLabel: "Price:",
    items: [
      {
        photo: "corendon-hydros-club-kemer.jpg",
        emoji: "🐝",
        destination: "Kemer, Turkey",
        hotel: "Corendon Hydros Club Kemer 5★",
        tagline: "Recommended hotel — best rates by month 💛🖤",
        duration: "6 nights",
        meal: "Ultra All Inclusive",
        includes: [
          "Round-trip flight",
          "Airport – hotel – airport transfer",
          "Medical insurance",
        ],
        dates: [
          { date: "July", price: "2329€" },
          { date: "August", price: "2319€" },
          { date: "September", price: "2109€" },
          { date: "October", price: "1619€" },
        ],
        note: "Price for 2 adults. Don't see the hotel or dates you want? Get in touch for more options.",
      },
      {
        photo: "kirman-belazur-resort.jpg",
        emoji: "🌊",
        destination: "Belek, Turkey",
        hotel: "Kirman Belazur Resort 5★",
        tagline: "A favourite on the Turkish Riviera 🌺",
        duration: "6 nights",
        meal: "Ultra All Inclusive",
        includes: [
          "Round-trip flight",
          "Airport – hotel – airport transfer",
          "Medical insurance",
        ],
        dates: [
          { date: "26.06", price: "2559€" },
          { date: "01.07", price: "2569€" },
          { date: "27.07", price: "2659€" },
          { date: "16.08", price: "2659€" },
          { date: "31.08", price: "2649€" },
          { date: "09.09", price: "2589€" },
          { date: "21.09", price: "2509€" },
          { date: "16.10", price: "2269€" },
        ],
        note: "Price for 2 adults.",
      },
      {
        photo: "selectum-family-belek.jpg",
        emoji: "🏝️",
        destination: "Belek, Turkey",
        hotel: "Selectum Family Belek 5★",
        tagline: "Great for families, great value 😍",
        duration: "6 nights",
        meal: "Ultra All Inclusive",
        includes: [
          "Round-trip flight",
          "Airport – hotel – airport transfer",
          "Medical insurance",
        ],
        dates: [
          { date: "27.06", price: "2319€" },
          { date: "01.07", price: "2349€" },
          { date: "27.07", price: "2359€" },
          { date: "16.08", price: "2409€" },
          { date: "31.08", price: "2269€" },
          { date: "09.09", price: "2229€" },
          { date: "21.09", price: "2119€" },
          { date: "16.10", price: "1839€" },
        ],
        note: "Price for 2 adults.",
      },
      {
        photo: "kaya-belek-hotel.jpg",
        emoji: "⛵️",
        destination: "Belek, Turkey",
        hotel: "Kaya Belek Hotel 5★",
        tagline: "Beautiful grounds, unbeatable rates 🧿",
        duration: "6 nights",
        meal: "Ultra All Inclusive",
        includes: [
          "Round-trip flight",
          "Airport – hotel – airport transfer",
          "Medical insurance",
        ],
        dates: [
          { date: "27.06", price: "2079€" },
          { date: "01.07", price: "2009€" },
          { date: "27.07", price: "2349€" },
          { date: "16.08", price: "2519€" },
          { date: "31.08", price: "2189€" },
          { date: "09.09", price: "2159€" },
          { date: "21.09", price: "1969€" },
          { date: "16.10", price: "1779€" },
        ],
        note: "Price for 2 adults.",
      },
    ],
  },
  stats: {
    eyebrow: "ABOUT US",
    headline: ["Numbers you can", "check with the founder."],
    lede: "Approximate figures from nine years of booking, flying, and personally inspecting hotels — not projections, just how the agency has grown.",
    labels: {
      experience: "years of experience",
      vacations: "vacations booked",
      destinations: "cities visited",
      avgPrice: "average price per vacation",
    },
  },
  why: {
    eyebrow: "WHY US",
    headline: ["The details that", "make the difference."],
    lede: "Booking a vacation should feel simple. Here's what that looks like at Bee Voyage, offer after offer.",
    items: [
      {
        title: "5+ years of experience",
        body: "Founder Dumitru has spent nine years in tourism, matching real travelers to real hotels — not just reading brochures.",
      },
      {
        title: "1000+ hotels seen firsthand",
        body: "Over 1000 hotels visited across 34 cities worldwide, so recommendations come from first-hand experience, not just a catalogue.",
      },
      {
        title: "HOT deals, fair prices",
        body: "We're always hunting for the best seasonal and last-minute rates, and we pass them on at an honest, correct price.",
      },
      {
        title: "A real answer on Telegram/Email",
        body: "Message us directly for details, availability, or a custom quote — a person answers, not a bot.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    headline: ["Tell us where.", "We'll handle the rest."],
    lede: "Send the basics and we'll follow up with hotel options, pricing, and dates — no account, no obligation.",

    footerOperator: "Bee Voyage · Travel agency, Chișinău",
    hoursLabel: "Business hours",
    openNow: "Open now",
    closedNow: "Closed now",
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    closedWord: "Closed",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    instagramLabel: "Telegram",
    facebookLabel: "Facebook",
  },
  reviews: {
    label: "What clients say",
      items: [
        {
          quote:
            "Best of best",
          name: "talmatski anton",
          title: "2 reviews",
        },
        {
          quote:
            "I was very satisfied with the services offered by BeeVoyage. Everything was well organized, and the staff was kind and attentive to my questions. They provided me with the information I needed and helped me choose the most suitable option. I highly recommend this travel agency!",
          name: "Porcescu Andriana",
          title: "2 reviews",
        },
        {
          quote:
            "I highly recommend Bee Voyage! The staff is friendly, responsive and offers professional advice. The agency offers a variety of offers, tailored to different preferences and budgets. The communication between the client and the staff is open. A pleasant experience and quality services.",
          name: "Laura Casapu",
          title: "1 review",
        },
        {
          quote:
            "I was very satisfied with the collaboration with Bee Voyage. The employees were friendly and attentive to our requirements. Everything was well organized, and the information provided was clear and useful. It was a pleasant experience and I would definitely use the services of this agency again.",
          name: "Victoria Iacubov",
          title: "2 reviews",
        },
        {
          quote:
            "I had a very good impression of Bee Voyage. The agency has friendly staff, responds quickly and helps with choosing the right offers. Everything seems well organized, and the offers are affordable and interesting for different types of vacations.",
          name: "Onorina Pruteanu",
          title: "1 review",
        },
        {
          quote:
            "I really enjoyed my experience with Bee Voyage. Everything was well organized and the employees were very nice and responsive. I would definitely use them again 💛🐝",
          name: "Valerica Bubliţchi",
          title: "1 review",
        },
        {
          quote:
            "The people here are very kind and helped us find exactly what we wanted. Everything was very well organized, from the tickets to the hotel, so we just enjoyed our vacation, without any stress. We will definitely travel with them again!",
          name: "Iana Gherta",
          title: "1 review",
        },
        {
          quote:
            "An unforgettable vacation, thank you Dumitru for everything, I highly recommend it 💋❤️❤️",
          name: "Mariana Crudu",
          title: "1 review · 1 photo",
        },
        {
          quote:
            "I come back every time with pleasure. Dumitru and his team are always kind and welcoming, and the service is at a high level. I recommend with confidence!",
          name: "Alexandra Beregoi",
          title: "2 reviews",
        },
        {
          quote:
            "I had an excellent experience with Bee Voyage! Everything was perfectly organized, from choosing the hotel to returning. I highly recommend them for their fast service, attention to detail, and support throughout the vacation!",
          name: "Anastasia Andreeva",
          title: "1 review",
        },
        {
          quote:
            "It was a pleasure to benefit from the services of this agency. Quality services and a consultancy that gave me confidence. Qualified staff who take into account the label and customers.",
          name: "Turcan Ana Maria",
          title: "1 review",
        },
        {
          quote:
            "Excellent service and very friendly staff. Everything was organized quickly and without any problems. I highly recommend Bee Voyage!",
          name: "Andreea Gudima",
          title: "3 reviews",
        },
        {
          quote:
            "I had a very nice experience with Bee Voyage. The vacation was very well organized, everything went smoothly. Communication was fast, and the team was very kind. I highly recommend!",
          name: "Mereacre Loredana",
          title: "1 review",
        },
        {
          quote:
            "I highly recommend Bee Voyage agency! I had a wonderful experience, from choosing the offer to returning home. 😊",
          name: "Vitalia Cojocari",
          title: "1 review",
        },
        {
          quote:
            "Very friendly staff, clean place and good service. Highly recommend!🐝❤️",
          name: "Natalia Malairau",
          title: "1 review · 1 photo",
        },
        {
          quote:
            "We had a wonderful vacation, a special thank you to Miss Ruslana for her kindness and attention! ❤️",
          name: "Iuna Mancos",
          title: "2 reviews · 3 photos",
        },
        {
          quote:
            "Merry Christmas with the Bee Voyage team, Dumitru, well done, next Children's Day holiday with you 🌷🌷🌷",
          name: "Gherman Mariana",
          title: "1 review",
        },
        {
          quote:
            "A 10-star travel agency with an energetic team and a very pleasant atmosphere, I recommend it))))!!!!",
          name: "Gaby",
          title: "1 review",
        },
        {
          quote:
            "I want to thank you for everything, the most beautiful landscapes and unforgettable emotions, Dumitru the best 🍺🍺🍺",
          name: "Trofim Gherman",
          title: "1 review",
        },
        {
          quote:
            "A reliable travel agency with good service and proper organization. I recommend Bee Voyage.",
          name: "Daniela Ciorici",
          title: "1 review",
        },
        {
          quote:
            "I highly recommend, many beautiful memories only with you, 10+ rating 💗💗💗",
          name: "gherman patricia",
          title: "1 review",
        },
        {
          quote:
            "Thank you very much to the Bee Voyage team, all the vacations are only with you, we had unforgettable memories. We will always call.",
          name: "Vasile Daud",
          title: "1 review · 1 photo",
        },
        {
          quote:
            "The best vacation of my life! Everything was perfectly organized by BeeVoyage! From accommodation to excursions and local restaurants – I had no worries. I can't wait for my next trip with them!",
          name: "Madalina Bragaru",
          title: "4 reviews",
        },
        {
          quote:
            "A beautiful vacation spent with the help of our friend Bee Voyage. Thank you for the beautiful memories and moments spent in Kemer..🏖️🚤🌞🕶️👒🌞",
          name: "Jurjiu Elena",
          title: "7 reviews · 24 photos",
        },
        {
          quote:
            "I used Bee Voyage for my beach vacation and it was an excellent experience! Everything was perfectly organized, from transportation to accommodation. The agency staff is friendly, professional and always ready to help. I highly recommend Bee Voyage for a worry-free vacation! 🌊✨🤍",
          name: "Nicoleta Cociobanu",
          title: "2 reviews · 6 photos",
        },
        {
          quote:
            "I used this agency for a vacation in Greece, I was consulted by an excellent and kind team. The vacation was extraordinary, I will definitely use them again in the future. I highly recommend!",
          name: "Coach Andrew",
          title: "1 review",
        },
        {
          quote:
            "Thanks to the BeeVoyage team for organizing this wonderful trip to the Mediterranean coast, the region, the hotel, the services were at the highest level.",
          name: "Maxim Stratenco",
          title: "1 review",
        },
        {
          quote:
            "When you say Bee Voyage, you mean fun, impeccable organization and experiences that stay in your heart! I chose this agency out of curiosity, but they won me over from the first interaction. Everything was simple, clear and very well organized – from booking to returning home.",
          name: "Girsteoaga Evelina",
          title: "1 review",
        },
        {
          quote:
            "I was very satisfied with the services provided by Bee Voyage. Everything went smoothly and the vacation was exactly as we wanted. The prices are very affordable. The chosen hotel was clean, comfortable. I highly recommend!",
          name: "Macari Alexandra",
          title: "5 reviews",
        },
        {
          quote:
            "Top company, the vacation in Bulgaria was unforgettable, organization at the highest level, thank you from the bottom of my heart, everything we did - we took the passports and luggage, Bee Voyage did everything else, thank you from the bottom of my heart!!!!",
          name: "Ирина Верич",
          title: "1 review",
        },
        {
          quote:
            "We recently returned from vacation with Bee Voyage, very satisfied, Quattro Beach a phenomenal hotel, thanks for the recommendation Dumitru Pogor",
          name: "Denis Birca",
          title: "2 reviews · 3 photos",
        },
        {
          quote:
            "We had a fantastic experience with Bee Voyage! Everything was organized flawlessly, from transportation to accommodation. Our guide was extremely friendly and the itinerary was perfectly balanced, allowing us to enjoy all the attractions without rushing. I highly recommend Bee Voyage for a memorable vacation!",
          name: "Gabriela Cirlan",
          title: "2 reviews",
        },
        {
          quote:
            "A beautiful vacation with many memories, I recommend Bee Voyage, we didn't expect it to be so great for such a budget, Dumitru, you are the best",
          name: "Ion Tulbu",
          title: "1 review",
        },
        {
          quote:
            "The agency team really showed responsibility and professionalism, taking into account all the requirements and successfully fulfilling them. 😃🐝 I recommend this agency and its offers, being sure that anyone's trip will go well!!! ❤️❤️❤️",
          name: "Maxim Bucliş",
          title: "3 reviews",
        },
        {
          quote:
            "Thank you to the Bee Voyage team for helping me have a pleasant and unforgettable vacation. The team helped me make the right choices for myself and my family 🐝.",
          name: "Doina Cebotari",
          title: "1 review",
        },
        {
          quote:
            "Thank you very much for the trip you organized, we had an unforgettable experience. Thank you for your help in choosing the destination and hotel, the best vacation so far)",
          name: "Bjorn Ironside",
          title: "1 review",
        },
        {
          quote:
            "Thank you to Bee Voyage for a wonderful vacation! Everything was organized perfectly, from the tour selection to the support throughout the trip.",
          name: "Дорина Дювенжи",
          title: "1 review",
        },
        {
          quote:
            "A 10+ rating agency, our family was very satisfied!!",
          name: "Viorel",
          title: "2 reviews · 1 photo",
        },
        {
          quote:
            "Thank you very much Dumitru Pogor for the organized vacation, the chosen hotel was what we needed, the happiest children",
          name: "Cristina Nistoraş",
          title: "1 review",
        },
        {
          quote:
            "Throughout the entire trip, the Bee Voyage team was available 24/7 to provide assistance. Any questions or problems were resolved quickly and efficiently, allowing us to enjoy our vacation without any worries. I highly recommend them!!",
          name: "Tatiana Sirbu",
          title: "2 reviews",
        },
        {
          quote:
            "It's a very good agency ❤️",
          name: "Popa Dimitrița",
          title: "2 reviews",
        },
        {
          quote:
            "I highly recommend Bee Voyage agency. It is truly a trustworthy one. I have traveled twice with this team and had a pleasant experience👍🏻",
          name: "Labuneţ Ecaterina",
          title: "3 reviews",
        },
        {
          quote:
            "The team stood out for their professionalism and the vacation was superb and I was surprised, thank you Bee Voyage ☀️🐝 I highly recommend 🫶🏼",
          name: "Romanciuc Daniela",
          title: "2 reviews",
        },
        {
          quote:
            "If the girls spoke Russian, it would have been 4⭐️, if they had told us more about the hotel where we went, it would have been 5⭐️, but they didn't know anything about the hotel, and what they did know, they couldn't really explain in Russian, and well, they took the wrong seats on the bus that we asked for in advance, despite the fact that the bus was 60% full both ways, there was plenty to choose from...",
          name: "Сергей",
          title: "Local Guide · 28 reviews · 4 photos",
        },
        {
          quote:
            "I had a very nice vacation, Turkey, 5* hotel, all good. The same hotel at another agency was 80 euros more expensive. At a good price, I had a very good rest.",
          name: "Irina Constantin",
          title: "Local Guide · 13 reviews · 49 photos",
        },
        {
          quote:
            "We booked a vacation with this company, Dumitru always offered us support.",
          name: "Dumitru Guzun",
          title: "Local Guide · 226 reviews · 178 photos",
        },
        {
          quote:
            "Bee Voyage you are the most reliable agency on the tourism market! We always call you with great confidence 🤗 Thank you for the unforgettable holidays!💕",
          name: "Olga Novicova",
          title: "1 review",
        },
        {
          quote:
            "Bee Voyage Agency is an agency with a very pleasant staff, I had a wonderful vacation with my family and the hotel was chosen especially for us😍😌",
          name: "Alexandra Salimova",
          title: "8 reviews · 7 photos",
        },
        {
          quote:
            "Thank you, brother, for the beautiful vacation and for everything, you are the best 👍👍👍",
          name: "Stefan Braghis",
          title: "3 reviews",
        },
        {
          quote:
            "An unforgettable experience with this agency, affordable prices for everyone and the services are quality 🤗",
          name: "constantin evelina",
          title: "5 reviews",
        },
        {
          quote:
            "I recommend a trustworthy agency",
          name: "Nicu Iacub",
          title: "2 reviews",
        },
        {
          quote:
            "I recommend, the best agency, thank you Dumitru for everything ❤️❤️❤️",
          name: "Daniela Ungureanu",
          title: "2 reviews",
        },
        {
          quote:
            "Great! Fast, clear and cheap, very pleasant and understanding staff! 100 out of 100",
          name: "Iulian Melnic",
          title: "3 reviews",
        },
        {
          quote:
            "Thank you Bee Voyage, you are the best 😎😎😎❤️❤️❤️",
          name: "Denis Birca",
          title: "Local Guide · 18 reviews · 6 photos",
        },
        {
          quote:
            "Thank you very much, as always 👍 I recommend it with confidence!!!",
          name: "Mitel Vergiliu",
          title: "3 reviews · 1 photo",
        },
        {
          quote:
            "They organized everything at a high level! I will definitely be back!🔥",
          name: "Dan Semenciuc",
          title: "2 reviews",
        },
        {
          quote:
            "I was very satisfied with the services of this company, professional attitude towards the customer",
          name: "Eugeniu Chian",
          title: "3 reviews",
        },
        {
          quote:
            "Thank you for the organized vacation, we recommend it with confidence",
          name: "Moraru Irina",
          title: "2 reviews",
        },
        {
          quote:
            "A reliable agency. We had a wonderful holiday.",
          name: "Adelina Gurschi",
          title: "1 review",
        },
        {
          quote:
            "Kind and friendly. Good prices. I recommend!",
          name: "Kate",
          title: "Local Guide · 66 reviews · 263 photos",
        },
        {
          quote:
            "The best 🫡🫡🫡",
          name: "ciuvalschi liubomir",
          title: "1 review",
        },
        {
          quote:
            "Very bad. 5 star hotel, not even 3 star",
          name: "Tanasescu Mariana",
          title: "4 reviews",
        },
        {
          quote:
            "A 10-star agency 🫶",
          name: "Anna Arzumanyan",
          title: "1 review",
        },
        {
          quote:
            "Receptive and operative 😎",
          name: "sasha",
          title: "3 reviews",
        },
        {
          quote:
            "I highly recommend BeVoyage Turkey! We had a wonderful holiday, carefully organized from start to finish. Everything went perfectly and the team was very professional, kind and always available to answer any questions. Thank you for an unforgettable experience! We will definitely choose BeVoyage again for our next holidays and we highly recommend them to everyone!",
          name: "Vera Vataman",
          title: "1 review · 5 photos",
        },
        {
          quote:
            "A 10-star company! I was consulted by Miss Ivana, very kind, she provided me with all the necessary information. Throughout my stay I had support from the company for any question. I recommend with confidence👍🏼",
          name: "Nicolae Cuturba",
          title: "6 reviews",
        },
        {
          quote:
            "Very good offers and specialists, I recommend!",
          name: "Vasile Glagolevschi",
          title: "8 reviews",
        },
        {
          quote:
            "We had a very nice vacation with the help of the bee voyage team. We received a quick response to any question, they were very responsive and we had an easy and very pleasant communication 🥰 Thank you and we will definitely be back☺️",
          name: "Penu Tatiana",
          title: "3 reviews · 4 photos",
        },
        {
          quote:
            "10/10 service! Professional, organized and very open people. I recommend Bee Voyage for safe and successful trips!",
          name: "Adelina Plamadeala",
          title: "1 review",
        },
        {
          quote:
            "Bee Voyage is the best travel agency, standing out for its top professionalism, personalized offers and total support throughout the entire trip. It is the perfect choice for an impeccably organized vacation!!!",
          name: "Macrina Cojocari",
          title: "1 review",
        },
        {
          quote:
            "Trusted travel agency, we had an unforgettable experience with Bee.Voyage",
          name: "Арина Романенко",
          title: "1 review",
        },
        {
          quote:
            "Excellent service, friendly staff and impeccable organization. Everything went perfectly and the vacation was wonderful. I highly recommend!",
          name: "Andreea Tomșa",
          title: "1 review",
        },
        {
          quote:
            "Bee Voyage is a travel agency that offers a wide range of services: holidays abroad, plane tickets, city breaks and personalized travel packages for each client.",
          name: "Adriana Sajin",
          title: "1 review",
        },
        {
          quote:
            "I highly recommend Bee Voyage! The vacation in Egypt at the Jaz Belvedere hotel was wonderful, everything was very well organized. We thank Anastasia for her kindness and responsiveness, she quickly helped us with all the details and choosing the perfect offer. We will definitely use this agency again!",
          name: "Leontean Iurie",
          title: "3 reviews",
        },
        {
          quote:
            "They have varied offers, good communication with customers and you can learn a lot about reservations and travel organization, especially through practice✨️🎀",
          name: "Alina Romaniuc",
          title: "3 reviews",
        },
        {
          quote:
            "Bee Voyage is a travel agency in Chisinau that offers various tourist services and access to attractive holiday offers. The agency stands out for its seriousness, promptness and attention to customers. The staff is friendly and provides clear information about destinations, helping customers choose the most suitable tourist packages.",
          name: "Postolachi Mihai",
          title: "1 review",
        },
      ],
  },
};

const ru: Translation = {
  meta: {
    title: "Bee Voyage — Туристическое агентство в Кишинёве",
    description:
      "Bee Voyage — туристическое агентство в Кишинёве под руководством Думитру. Подобранные туры all inclusive по честной цене.",
  },
  nav: {
    offers: "Предложения",
    stats: "О нас",
    why: "Почему мы",
    contact: "Контакты",
    cta: "Контакты",
  },
  hero: {
    eyebrow: "BEE VOYAGE · ТУРАГЕНТСТВО",
    headline: ["Ваш отпуск,", "продуманный до мелочей."],
    sub: "Bee Voyage — туристическое агентство в Кишинёве, построенное вокруг одного принципа: честный совет от человека, который сам видел этот отель. Скажите, что вам нужно, и мы подберём подходящий тур — без догадок и без навязывания.",
    facts: [
      "Основатель Думитру, 5+ лет опыта в туризме",
      "Более 1000 отелей, лично посещённых в 34 городах мира",
      "Горящие предложения по честной цене ❗",
    ],
    scrollCue: "Прокрутите к предложениям",
  },
  offers: {
    eyebrow: "АКТУАЛЬНЫЕ ПРЕДЛОЖЕНИЯ",
    headline: ["Несколько туров,", "которые стоит забронировать сейчас."],
    lede: "Подборка туров, которые мы бронируем прямо сейчас — листайте, чтобы увидеть отели, даты и цены.",
    priceLabel: "Цена:",
    items: [
      {
        photo: "corendon-hydros-club-kemer.jpg",
        emoji: "🐝",
        destination: "Кемер, Турция",
        hotel: "Corendon Hydros Club Kemer 5★",
        tagline: "Рекомендуемый отель — лучшие цены по месяцам 💛🖤",
        duration: "6 ночей",
        meal: "Ultra All Inclusive",
        includes: [
          "Перелёт туда-обратно",
          "Трансфер аэропорт – отель – аэропорт",
          "Медицинская страховка",
        ],
        dates: [
          { date: "Июль", price: "2329€" },
          { date: "Август", price: "2319€" },
          { date: "Сентябрь", price: "2109€" },
          { date: "Октябрь", price: "1619€" },
        ],
        note: "Цена за 2 взрослых. Не нашли подходящий отель или даты? Свяжитесь с нами для других вариантов.",
      },
      {
        photo: "kirman-belazur-resort.jpg",
        emoji: "🌊",
        destination: "Белек, Турция",
        hotel: "Kirman Belazur Resort 5★",
        tagline: "Один из фаворитов Турецкой Ривьеры 🌺",
        duration: "6 ночей",
        meal: "Ultra All Inclusive",
        includes: [
          "Перелёт туда-обратно",
          "Трансфер аэропорт – отель – аэропорт",
          "Медицинская страховка",
        ],
        dates: [
          { date: "26.06", price: "2559€" },
          { date: "01.07", price: "2569€" },
          { date: "27.07", price: "2659€" },
          { date: "16.08", price: "2659€" },
          { date: "31.08", price: "2649€" },
          { date: "09.09", price: "2589€" },
          { date: "21.09", price: "2509€" },
          { date: "16.10", price: "2269€" },
        ],
        note: "Цена за 2 взрослых.",
      },
      {
        photo: "selectum-family-belek.jpg",
        emoji: "🏝️",
        destination: "Белек, Турция",
        hotel: "Selectum Family Belek 5★",
        tagline: "Отлично подходит для семей, хорошая цена 😍",
        duration: "6 ночей",
        meal: "Ultra All Inclusive",
        includes: [
          "Перелёт туда-обратно",
          "Трансфер аэропорт – отель – аэропорт",
          "Медицинская страховка",
        ],
        dates: [
          { date: "27.06", price: "2319€" },
          { date: "01.07", price: "2349€" },
          { date: "27.07", price: "2359€" },
          { date: "16.08", price: "2409€" },
          { date: "31.08", price: "2269€" },
          { date: "09.09", price: "2229€" },
          { date: "21.09", price: "2119€" },
          { date: "16.10", price: "1839€" },
        ],
        note: "Цена за 2 взрослых.",
      },
      {
        photo: "kaya-belek-hotel.jpg",
        emoji: "⛵️",
        destination: "Белек, Турция",
        hotel: "Kaya Belek Hotel 5★",
        tagline: "Красивая территория, отличные цены 🧿",
        duration: "6 ночей",
        meal: "Ultra All Inclusive",
        includes: [
          "Перелёт туда-обратно",
          "Трансфер аэропорт – отель – аэропорт",
          "Медицинская страховка",
        ],
        dates: [
          { date: "27.06", price: "2079€" },
          { date: "01.07", price: "2009€" },
          { date: "27.07", price: "2349€" },
          { date: "16.08", price: "2519€" },
          { date: "31.08", price: "2189€" },
          { date: "09.09", price: "2159€" },
          { date: "21.09", price: "1969€" },
          { date: "16.10", price: "1779€" },
        ],
        note: "Цена за 2 взрослых.",
      },
    ],
  },
  stats: {
    eyebrow: "О НАС",
    headline: ["Цифры, которые", "можно проверить у основателя."],
    lede: "Приблизительные цифры за девять лет бронирований, перелётов и личных проверок отелей — не прогноз, а то, как выросло агентство.",
    labels: {
      experience: "лет опыта",
      vacations: "проданных туров",
      destinations: "посещённых городов",
      avgPrice: "средняя цена тура",
    },
  },
  why: {
    eyebrow: "ПОЧЕМУ МЫ",
    headline: ["Детали, которые", "имеют значение."],
    lede: "Бронирование отпуска должно быть простым. Вот как это выглядит в Bee Voyage, предложение за предложением.",
    items: [
      {
        title: "5+ лет опыта",
        body: "Основатель Думитру девять лет работает в туризме, подбирая реальным путешественникам реальные отели — а не просто читая буклеты.",
      },
      {
        title: "1000+ отелей лично",
        body: "Более 1000 отелей, посещённых лично в 34 городах мира, поэтому рекомендации основаны на личном опыте, а не на каталоге.",
      },
      {
        title: "Горящие туры, честные цены",
        body: "Мы постоянно ищем лучшие сезонные и горящие тарифы и предлагаем их по честной, правильной цене.",
      },
      {
        title: "Настоящий ответ в Telegram/Email",
        body: "Пишите напрямую за деталями, наличием мест или индивидуальным расчётом — отвечает человек, а не бот.",
      },
    ],
  },
  contact: {
    eyebrow: "КОНТАКТЫ",
    headline: ["Скажите куда.", "Остальное сделаем мы."],
    lede: "Отправьте основные данные, и мы свяжемся с вами с вариантами отелей, ценами и датами — без регистрации и без обязательств.",

    footerOperator: "Bee Voyage · Туристическое агентство, Кишинёв",
    hoursLabel: "Часы работы",
    openNow: "Сейчас открыто",
    closedNow: "Сейчас закрыто",
    days: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    closedWord: "Выходной",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    instagramLabel: "Telegram",
    facebookLabel: "Facebook",
  },
  reviews: {
    label: "Отзывы клиентов",
      items: [
        {
          quote:
            "Лучшие из лучших",
          name: "talmatski anton",
          title: "2 отзыва",
        },
        {
          quote:
            "Я была очень довольна услугами, предоставленными BeeVoyage. Всё было хорошо организовано, а персонал был добрым и внимательным к моим вопросам. Мне предоставили всю нужную информацию и помогли выбрать наиболее подходящий вариант. Всем рекомендую это турагентство!",
          name: "Porcescu Andriana",
          title: "2 отзыва",
        },
        {
          quote:
            "Настоятельно рекомендую Bee Voyage! Персонал дружелюбный, отзывчивый и даёт профессиональные советы. Агентство предлагает разнообразные предложения под разные предпочтения и бюджеты. Общение между клиентом и сотрудниками открытое. Приятный опыт и качественные услуги.",
          name: "Laura Casapu",
          title: "1 отзыв",
        },
        {
          quote:
            "Я была очень довольна сотрудничеством с Bee Voyage. Сотрудники были дружелюбны и внимательны к нашим требованиям. Всё было хорошо организовано, а предоставленная информация была ясной и полезной. Это был приятный опыт, и я обязательно снова воспользуюсь услугами этого агентства.",
          name: "Victoria Iacubov",
          title: "2 отзыва",
        },
        {
          quote:
            "У меня осталось очень хорошее впечатление о Bee Voyage. В агентстве дружелюбный персонал, быстро отвечают и помогают выбрать подходящие предложения. Всё кажется хорошо организованным, а предложения доступны и интересны для разных видов отдыха.",
          name: "Onorina Pruteanu",
          title: "1 отзыв",
        },
        {
          quote:
            "Мне очень понравился опыт с Bee Voyage. Всё было хорошо организовано, а сотрудники были очень милыми и отзывчивыми. Обязательно обращусь к ним снова 💛🐝",
          name: "Valerica Bubliţchi",
          title: "1 отзыв",
        },
        {
          quote:
            "Люди здесь очень добрые и помогли нам найти именно то, что мы хотели. Всё было очень хорошо организовано, от билетов до отеля, поэтому мы просто наслаждались отпуском без всякого стресса. Обязательно снова поедем с ними!",
          name: "Iana Gherta",
          title: "1 отзыв",
        },
        {
          quote:
            "Незабываемый отпуск, спасибо Дмитрию за всё, очень рекомендую 💋❤️❤️",
          name: "Mariana Crudu",
          title: "1 отзыв · 1 фото",
        },
        {
          quote:
            "Возвращаюсь каждый раз с удовольствием. Дмитрий и его команда всегда добры и приветливы, а сервис на высоком уровне. Рекомендую с уверенностью!",
          name: "Alexandra Beregoi",
          title: "2 отзыва",
        },
        {
          quote:
            "У меня был отличный опыт с Bee Voyage! Всё было прекрасно организовано, от выбора отеля до возвращения домой. Рекомендую их за быстрый сервис, внимание к деталям и поддержку на протяжении всего отпуска!",
          name: "Anastasia Andreeva",
          title: "1 отзыв",
        },
        {
          quote:
            "Было приятно воспользоваться услугами этого агентства. Качественные услуги и консультация, вызвавшая доверие. Квалифицированный персонал, учитывающий этикет и клиентов.",
          name: "Turcan Ana Maria",
          title: "1 отзыв",
        },
        {
          quote:
            "Отличный сервис и очень дружелюбный персонал. Всё было организовано быстро и без проблем. Настоятельно рекомендую Bee Voyage!",
          name: "Andreea Gudima",
          title: "3 отзыва",
        },
        {
          quote:
            "У меня был очень приятный опыт с Bee Voyage. Отпуск был очень хорошо организован, всё прошло гладко. Общение было быстрым, а команда очень доброй. Настоятельно рекомендую!",
          name: "Mereacre Loredana",
          title: "1 отзыв",
        },
        {
          quote:
            "Настоятельно рекомендую агентство Bee Voyage! У меня был замечательный опыт, от выбора предложения до возвращения домой. 😊",
          name: "Vitalia Cojocari",
          title: "1 отзыв",
        },
        {
          quote:
            "Очень дружелюбный персонал, чисто и хороший сервис. Очень рекомендую!🐝❤️",
          name: "Natalia Malairau",
          title: "1 отзыв · 1 фото",
        },
        {
          quote:
            "У нас был замечательный отпуск, особая благодарность госпоже Руслане за доброту и внимание! ❤️",
          name: "Iuna Mancos",
          title: "2 отзыва · 3 фото",
        },
        {
          quote:
            "С Рождеством от команды Bee Voyage, Дмитрий, молодец, до встречи на следующий праздник Дня защиты детей 🌷🌷🌷",
          name: "Gherman Mariana",
          title: "1 отзыв",
        },
        {
          quote:
            "Турагентство на 10 звёзд с энергичной командой и очень приятной атмосферой, рекомендую))))!!!!",
          name: "Gaby",
          title: "1 отзыв",
        },
        {
          quote:
            "Хочу поблагодарить за всё, самые красивые пейзажи и незабываемые эмоции, Дмитрий лучший 🍺🍺🍺",
          name: "Trofim Gherman",
          title: "1 отзыв",
        },
        {
          quote:
            "Надёжное турагентство с хорошим сервисом и правильной организацией. Рекомендую Bee Voyage.",
          name: "Daniela Ciorici",
          title: "1 отзыв",
        },
        {
          quote:
            "Очень рекомендую, много прекрасных воспоминаний только с вами, оценка 10+ 💗💗💗",
          name: "gherman patricia",
          title: "1 отзыв",
        },
        {
          quote:
            "Огромное спасибо команде Bee Voyage, все отпуска только с вами, у нас незабываемые воспоминания. Будем обращаться всегда.",
          name: "Vasile Daud",
          title: "1 отзыв · 1 фото",
        },
        {
          quote:
            "Лучший отпуск в моей жизни! Всё было идеально организовано BeeVoyage! От проживания до экскурсий и местных ресторанов – никаких забот. Не могу дождаться следующей поездки с ними!",
          name: "Madalina Bragaru",
          title: "4 отзыва",
        },
        {
          quote:
            "Прекрасный отпуск, проведённый с помощью нашего друга Bee Voyage. Спасибо за прекрасные воспоминания и моменты, проведённые в Кемере..🏖️🚤🌞🕶️👒🌞",
          name: "Jurjiu Elena",
          title: "7 отзывов · 24 фото",
        },
        {
          quote:
            "Я воспользовалась Bee Voyage для пляжного отдыха, и это был отличный опыт! Всё было прекрасно организовано, от транспорта до проживания. Персонал агентства дружелюбный, профессиональный и всегда готов помочь. Настоятельно рекомендую Bee Voyage для отдыха без забот! 🌊✨🤍",
          name: "Nicoleta Cociobanu",
          title: "2 отзыва · 6 фото",
        },
        {
          quote:
            "Я обратился в это агентство по поводу отпуска в Греции, меня консультировала отличная и добрая команда. Отпуск был потрясающим, обязательно обращусь к ним снова в будущем. Очень рекомендую!",
          name: "Coach Andrew",
          title: "1 отзыв",
        },
        {
          quote:
            "Спасибо команде BeeVoyage за организацию этой прекрасной поездки на Средиземноморское побережье, регион, отель, услуги были на высшем уровне.",
          name: "Maxim Stratenco",
          title: "1 отзыв",
        },
        {
          quote:
            "Когда говоришь Bee Voyage, имеешь в виду веселье, безупречную организацию и впечатления, которые остаются в сердце! Я выбрала это агентство из любопытства, но они покорили меня с первого же общения. Всё было просто, понятно и очень хорошо организовано – от бронирования до возвращения домой.",
          name: "Girsteoaga Evelina",
          title: "1 отзыв",
        },
        {
          quote:
            "Я была очень довольна услугами, предоставленными Bee Voyage. Всё прошло гладко, и отпуск был именно таким, каким мы хотели. Цены очень доступные. Выбранный отель был чистым и удобным. Очень рекомендую!",
          name: "Macari Alexandra",
          title: "5 отзывов",
        },
        {
          quote:
            "Компания на высоте, отпуск в Болгарии был незабываемым, организация на высшем уровне, благодарю от всего сердца, всё, что мы делали - взяли паспорта и багаж, всё остальное сделала Bee Voyage, спасибо от всего сердца!!!!",
          name: "Ирина Верич",
          title: "1 отзыв",
        },
        {
          quote:
            "Недавно вернулись из отпуска с Bee Voyage, очень довольны, Quattro Beach феноменальный отель, спасибо за рекомендацию Dumitru Pogor",
          name: "Denis Birca",
          title: "2 отзыва · 3 фото",
        },
        {
          quote:
            "У нас был потрясающий опыт с Bee Voyage! Всё было организовано безупречно, от транспорта до проживания. Наш гид был очень дружелюбным, а маршрут был идеально сбалансирован, что позволило нам насладиться всеми достопримечательностями без спешки. Настоятельно рекомендую Bee Voyage для незабываемого отпуска!",
          name: "Gabriela Cirlan",
          title: "2 отзыва",
        },
        {
          quote:
            "Прекрасный отпуск с множеством воспоминаний, рекомендую Bee Voyage, не ожидали, что при таком бюджете будет так хорошо, Дмитрий, ты лучший",
          name: "Ion Tulbu",
          title: "1 отзыв",
        },
        {
          quote:
            "Команда агентства показала настоящую ответственность и профессионализм, учтя все требования и успешно их выполнив. 😃🐝 Рекомендую это агентство и его предложения, уверен, что поездка у любого пройдёт хорошо!!! ❤️❤️❤️",
          name: "Maxim Bucliş",
          title: "3 отзыва",
        },
        {
          quote:
            "Спасибо команде Bee Voyage за то, что помогли мне провести приятный и незабываемый отпуск. Команда помогла мне сделать правильный выбор для себя и своей семьи 🐝.",
          name: "Doina Cebotari",
          title: "1 отзыв",
        },
        {
          quote:
            "Большое спасибо за организованную поездку, у нас был незабываемый опыт. Спасибо за помощь в выборе направления и отеля, лучший отпуск на данный момент)",
          name: "Bjorn Ironside",
          title: "1 отзыв",
        },
        {
          quote:
            "Спасибо Bee Voyage за прекрасный отпуск! Всё было организовано идеально, от выбора тура до поддержки на протяжении всей поездки.",
          name: "Дорина Дювенжи",
          title: "1 отзыв",
        },
        {
          quote:
            "Агентство на оценку 10+, наша семья была очень довольна!!",
          name: "Viorel",
          title: "2 отзыва · 1 фото",
        },
        {
          quote:
            "Огромное спасибо Dumitru Pogor за организованный отпуск, выбранный отель был именно тем, что нам нужно, самые счастливые дети",
          name: "Cristina Nistoraş",
          title: "1 отзыв",
        },
        {
          quote:
            "На протяжении всей поездки команда Bee Voyage была доступна круглосуточно для оказания помощи. Любые вопросы или проблемы решались быстро и эффективно, что позволило нам наслаждаться отпуском без забот. Очень рекомендую!!",
          name: "Tatiana Sirbu",
          title: "2 отзыва",
        },
        {
          quote:
            "Очень хорошее агентство ❤️",
          name: "Popa Dimitrița",
          title: "2 отзыва",
        },
        {
          quote:
            "Настоятельно рекомендую агентство Bee Voyage. Оно действительно заслуживает доверия. Я путешествовала с этой командой дважды, и оба раза опыт был приятным👍🏻",
          name: "Labuneţ Ecaterina",
          title: "3 отзыва",
        },
        {
          quote:
            "Команда отличилась профессионализмом, а отпуск был превосходным, я была приятно удивлена, спасибо Bee Voyage ☀️🐝 Очень рекомендую 🫶🏼",
          name: "Romanciuc Daniela",
          title: "2 отзыва",
        },
        {
          quote:
            "Если бы девушки говорили по-русски, было бы 4⭐️, если бы они рассказали нам больше об отеле, куда мы ехали, было бы 5⭐️, но они ничего не знали об отеле, а то, что знали, не могли толком объяснить по-русски, и, ну, нам дали не те места в автобусе, которые мы заказывали заранее, хотя автобус был заполнен на 60% в обе стороны, было из чего выбрать...",
          name: "Сергей",
          title: "Местный гид · 28 отзывов · 4 фото",
        },
        {
          quote:
            "Отдохнул очень хорошо, Турция, отель 5*, всё отлично. Тот же отель в другом агентстве стоил на 80 евро дороже. По хорошей цене отдохнул очень хорошо.",
          name: "Irina Constantin",
          title: "Местный гид · 13 отзывов · 49 фото",
        },
        {
          quote:
            "Мы бронировали отпуск через эту компанию, Дмитрий всегда оказывал нам поддержку.",
          name: "Dumitru Guzun",
          title: "Местный гид · 226 отзывов · 178 фото",
        },
        {
          quote:
            "Bee Voyage, вы самое надёжное агентство на туристическом рынке! Мы всегда обращаемся к вам с большим доверием 🤗 Спасибо за незабываемый отдых!💕",
          name: "Olga Novicova",
          title: "1 отзыв",
        },
        {
          quote:
            "Агентство Bee Voyage отличается очень приятным персоналом, у меня был замечательный отпуск с семьёй, а отель был выбран специально для нас😍😌",
          name: "Alexandra Salimova",
          title: "8 отзывов · 7 фото",
        },
        {
          quote:
            "Спасибо, брат, за прекрасный отпуск и за всё, ты лучший 👍👍👍",
          name: "Stefan Braghis",
          title: "3 отзыва",
        },
        {
          quote:
            "Незабываемый опыт с этим агентством, доступные цены для всех и качественные услуги 🤗",
          name: "constantin evelina",
          title: "5 отзывов",
        },
        {
          quote:
            "Рекомендую надёжное агентство",
          name: "Nicu Iacub",
          title: "2 отзыва",
        },
        {
          quote:
            "Рекомендую, лучшее агентство, спасибо Дмитрию за всё ❤️❤️❤️",
          name: "Daniela Ungureanu",
          title: "2 отзыва",
        },
        {
          quote:
            "Отлично! Быстро, понятно и недорого, очень приятный и понимающий персонал! 100 из 100",
          name: "Iulian Melnic",
          title: "3 отзыва",
        },
        {
          quote:
            "Спасибо, Bee Voyage, вы лучшие 😎😎😎❤️❤️❤️",
          name: "Denis Birca",
          title: "Местный гид · 18 отзывов · 6 фото",
        },
        {
          quote:
            "Большое спасибо, как всегда 👍 Рекомендую с уверенностью!!!",
          name: "Mitel Vergiliu",
          title: "3 отзыва · 1 фото",
        },
        {
          quote:
            "Организовали всё на высоком уровне! Обязательно вернусь!🔥",
          name: "Dan Semenciuc",
          title: "2 отзыва",
        },
        {
          quote:
            "Я был очень доволен услугами этой компании, профессиональное отношение к клиенту",
          name: "Eugeniu Chian",
          title: "3 отзыва",
        },
        {
          quote:
            "Спасибо за организованный отпуск, рекомендуем с уверенностью",
          name: "Moraru Irina",
          title: "2 отзыва",
        },
        {
          quote:
            "Надёжное агентство. У нас был замечательный отдых.",
          name: "Adelina Gurschi",
          title: "1 отзыв",
        },
        {
          quote:
            "Добрые и дружелюбные. Хорошие цены. Рекомендую!",
          name: "Kate",
          title: "Местный гид · 66 отзывов · 263 фото",
        },
        {
          quote:
            "Лучшие 🫡🫡🫡",
          name: "ciuvalschi liubomir",
          title: "1 отзыв",
        },
        {
          quote:
            "Очень плохо. 5-звёздочный отель, а не дотягивал даже до 3 звёзд",
          name: "Tanasescu Mariana",
          title: "4 отзыва",
        },
        {
          quote:
            "Агентство на 10 звёзд 🫶",
          name: "Anna Arzumanyan",
          title: "1 отзыв",
        },
        {
          quote:
            "Отзывчивые и оперативные 😎",
          name: "sasha",
          title: "3 отзыва",
        },
        {
          quote:
            "Очень рекомендую BeVoyage Турция! У нас был прекрасный отдых, тщательно организованный от начала до конца. Всё прошло идеально, а команда была очень профессиональной, доброй и всегда готова ответить на любые вопросы. Спасибо за незабываемые впечатления! Мы обязательно снова выберем BeVoyage для следующего отдыха и всем его рекомендуем!",
          name: "Vera Vataman",
          title: "1 отзыв · 5 фото",
        },
        {
          quote:
            "Компания на 10 звёзд! Меня консультировала госпожа Ивана, очень добрая, предоставила всю необходимую информацию. На протяжении всего пребывания у меня была поддержка компании по любому вопросу. Рекомендую с уверенностью👍🏼",
          name: "Nicolae Cuturba",
          title: "6 отзывов",
        },
        {
          quote:
            "Очень хорошие предложения и специалисты, рекомендую!",
          name: "Vasile Glagolevschi",
          title: "8 отзывов",
        },
        {
          quote:
            "У нас был очень приятный отдых с помощью команды bee voyage. Мы быстро получали ответы на любые вопросы, они были очень отзывчивы, и общение было лёгким и очень приятным 🥰 Спасибо, обязательно вернёмся☺️",
          name: "Penu Tatiana",
          title: "3 отзыва · 4 фото",
        },
        {
          quote:
            "Сервис 10/10! Профессиональные, организованные и очень открытые люди. Рекомендую Bee Voyage для безопасных и успешных поездок!",
          name: "Adelina Plamadeala",
          title: "1 отзыв",
        },
        {
          quote:
            "Bee Voyage – лучшее турагентство, выделяющееся высочайшим профессионализмом, персонализированными предложениями и полной поддержкой на протяжении всей поездки. Это идеальный выбор для безупречно организованного отпуска!!!",
          name: "Macrina Cojocari",
          title: "1 отзыв",
        },
        {
          quote:
            "Надёжное турагентство, у нас был незабываемый опыт с Bee.Voyage",
          name: "Арина Романенко",
          title: "1 отзыв",
        },
        {
          quote:
            "Отличный сервис, дружелюбный персонал и безупречная организация. Всё прошло идеально, а отпуск был прекрасен. Очень рекомендую!",
          name: "Andreea Tomșa",
          title: "1 отзыв",
        },
        {
          quote:
            "Bee Voyage – турагентство, предлагающее широкий спектр услуг: отдых за границей, авиабилеты, city break и индивидуальные туристические пакеты для каждого клиента.",
          name: "Adriana Sajin",
          title: "1 отзыв",
        },
        {
          quote:
            "Настоятельно рекомендую Bee Voyage! Отпуск в Египте в отеле Jaz Belvedere был прекрасен, всё было очень хорошо организовано. Благодарим Анастасию за доброту и отзывчивость, она быстро помогла нам со всеми деталями и выбором идеального предложения. Обязательно снова воспользуемся услугами этого агентства!",
          name: "Leontean Iurie",
          title: "3 отзыва",
        },
        {
          quote:
            "У них разнообразные предложения, хорошее общение с клиентами, и можно многому научиться о бронировании и организации поездок, особенно на практике✨️🎀",
          name: "Alina Romaniuc",
          title: "3 отзыва",
        },
        {
          quote:
            "Bee Voyage – турагентство в Кишинёве, предлагающее различные туристические услуги и доступ к привлекательным предложениям на отдых. Агентство отличается серьёзностью, оперативностью и вниманием к клиентам. Персонал дружелюбный и предоставляет ясную информацию о направлениях, помогая клиентам выбрать наиболее подходящие туристические пакеты.",
          name: "Postolachi Mihai",
          title: "1 отзыв",
        },
      ],
  },
};

const ro: Translation = {
  meta: {
    title: "Bee Voyage — Agenție de turism Chișinău",
    description:
      "Bee Voyage — agenție de turism în Chișinău, condusă de Dumitru. Oferte de vacanță all inclusive alese cu grijă, la preț corect.",
  },
  nav: {
    offers: "Oferte",
    stats: "Despre noi",
    why: "De ce noi",
    contact: "Contact",
    cta: "Contact",
  },
  hero: {
    eyebrow: "BEE VOYAGE · AGENȚIE DE TURISM",
    headline: ["Vacanța ta,", "organizată cu grijă."],
    sub: "Bee Voyage este o agenție de turism din Chișinău construită în jurul unui singur lucru: un sfat sincer din partea cuiva care chiar a văzut hotelul. Spune-ne ce îți dorești, iar noi găsim oferta potrivită — fără presupuneri, fără presiuni.",
    facts: [
      "Fondator Dumitru, 9 ani experiență în turism",
      "Peste 1000 de hoteluri vizitate în lume și 34 de orașe",
      "Oferte HOT la preț corect ❗",
    ],
    scrollCue: "Derulează pentru oferte",
  },
  offers: {
    eyebrow: "OFERTE ACTUALE",
    headline: ["Câteva oferte", "care merită rezervate acum."],
    lede: "O selecție a pachetelor de vacanță pe care le rezervăm chiar acum — derulează pentru hoteluri, date și prețuri.",
    priceLabel: "Preț:",
    items: [
      {
        photo: "corendon-hydros-club-kemer.jpg",
        emoji: "🐝",
        destination: "Kemer, Turcia",
        hotel: "Corendon Hydros Club Kemer 5★",
        tagline: "Hotel recomandat — cele mai bune prețuri pe luni 💛🖤",
        duration: "6 nopți",
        meal: "Ultra All Inclusive",
        includes: [
          "Zbor tur-retur",
          "Transfer aeroport – hotel – aeroport",
          "Asigurare medicală",
        ],
        dates: [
          { date: "Iulie", price: "2329€" },
          { date: "August", price: "2319€" },
          { date: "Septembrie", price: "2109€" },
          { date: "Octombrie", price: "1619€" },
        ],
        note: "Preț pentru 2 adulți. Nu găsești hotelul sau perioada potrivită? Contactează-ne pentru mai multe opțiuni.",
      },
      {
        photo: "kirman-belazur-resort.jpg",
        emoji: "🌊",
        destination: "Belek, Turcia",
        hotel: "Kirman Belazur Resort 5★",
        tagline: "Unul dintre preferatele de pe Riviera Turcească 🌺",
        duration: "6 nopți",
        meal: "Ultra All Inclusive",
        includes: [
          "Zbor tur-retur",
          "Transfer aeroport – hotel – aeroport",
          "Asigurare medicală",
        ],
        dates: [
          { date: "26.06", price: "2559€" },
          { date: "01.07", price: "2569€" },
          { date: "27.07", price: "2659€" },
          { date: "16.08", price: "2659€" },
          { date: "31.08", price: "2649€" },
          { date: "09.09", price: "2589€" },
          { date: "21.09", price: "2509€" },
          { date: "16.10", price: "2269€" },
        ],
        note: "Preț pentru 2 adulți.",
      },
      {
        photo: "selectum-family-belek.jpg",
        emoji: "🏝️",
        destination: "Belek, Turcia",
        hotel: "Selectum Family Belek 5★",
        tagline: "Ideal pentru familii, preț foarte bun 😍",
        duration: "6 nopți",
        meal: "Ultra All Inclusive",
        includes: [
          "Zbor tur-retur",
          "Transfer aeroport – hotel – aeroport",
          "Asigurare medicală",
        ],
        dates: [
          { date: "27.06", price: "2319€" },
          { date: "01.07", price: "2349€" },
          { date: "27.07", price: "2359€" },
          { date: "16.08", price: "2409€" },
          { date: "31.08", price: "2269€" },
          { date: "09.09", price: "2229€" },
          { date: "21.09", price: "2119€" },
          { date: "16.10", price: "1839€" },
        ],
        note: "Preț pentru 2 adulți.",
      },
      {
        photo: "kaya-belek-hotel.jpg",
        emoji: "⛵️",
        destination: "Belek, Turcia",
        hotel: "Kaya Belek Hotel 5★",
        tagline: "Teritoriu frumos, prețuri excelente 🧿",
        duration: "6 nopți",
        meal: "Ultra All Inclusive",
        includes: [
          "Zbor tur-retur",
          "Transfer aeroport – hotel – aeroport",
          "Asigurare medicală",
        ],
        dates: [
          { date: "27.06", price: "2079€" },
          { date: "01.07", price: "2009€" },
          { date: "27.07", price: "2349€" },
          { date: "16.08", price: "2519€" },
          { date: "31.08", price: "2189€" },
          { date: "09.09", price: "2159€" },
          { date: "21.09", price: "1969€" },
          { date: "16.10", price: "1779€" },
        ],
        note: "Preț pentru 2 adulți.",
      },
    ],
  },
  stats: {
    eyebrow: "DESPRE NOI",
    headline: ["Cifre pe care le poți", "verifica cu fondatorul."],
    lede: "Cifre aproximative din nouă ani de rezervări, zboruri și hoteluri verificate personal — nu o proiecție, ci felul în care a crescut agenția.",
    labels: {
      experience: "ani de experiență",
      vacations: "vacanțe vândute",
      destinations: "orașe vizitate",
      avgPrice: "preț mediu per vacanță",
    },
  },
  why: {
    eyebrow: "DE CE NOI",
    headline: ["Detaliile care", "chiar contează."],
    lede: "Rezervarea unei vacanțe ar trebui să fie simplă. Iată cum arată asta la Bee Voyage, ofertă după ofertă.",
    items: [
      {
        title: "9 ani de experiență",
        body: "Fondatorul Dumitru are nouă ani de experiență în turism, potrivind călători reali cu hoteluri reale — nu doar citind broșuri.",
      },
      {
        title: "Peste 1000 de hoteluri văzute personal",
        body: "Peste 1000 de hoteluri vizitate în 34 de orașe din lume, așa că recomandările vin din experiență directă, nu dintr-un catalog.",
      },
      {
        title: "Oferte HOT, prețuri corecte",
        body: "Căutăm mereu cele mai bune tarife de sezon și de ultim moment și le oferim la un preț corect și onest.",
      },
      {
        title: "Răspuns real pe Telegram/Email",
        body: "Scrie-ne direct pentru detalii, disponibilitate sau o ofertă personalizată — răspunde o persoană, nu un robot.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    headline: ["Spune-ne unde.", "Ne ocupăm noi de rest."],
    lede: "Trimite datele de bază și te contactăm cu opțiuni de hoteluri, prețuri și date disponibile — fără cont, fără obligații.",

    footerOperator: "Bee Voyage · Agenție de turism, Chișinău",
    hoursLabel: "Program",
    openNow: "Deschis acum",
    closedNow: "Închis acum",
    days: [
      "Duminică",
      "Luni",
      "Marți",
      "Miercuri",
      "Joi",
      "Vineri",
      "Sâmbătă",
    ],
    closedWord: "ÎNCHIS",
    addressLabel: "Adresă",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    instagramLabel: "Telegram",
    facebookLabel: "Facebook",
  },
  reviews: {
    label: "Ce spun clienții",
      items: [
        {
          quote:
            "Cel mai bun dintre cei mai buni",
          name: "talmatski anton",
          title: "2 recenzii",
        },
        {
          quote:
            "Am fost foarte mulțumită de serviciile oferite de BeeVoyage. Totul a fost bine organizat, iar personalul a fost amabil și atent la întrebările mele. Mi-au oferit informațiile de care aveam nevoie și m-au ajutat să aleg cea mai potrivită opțiune. Recomand cu căldură această agenție de turism!",
          name: "Porcescu Andriana",
          title: "2 recenzii",
        },
        {
          quote:
            "Recomand cu încredere Bee Voyage! Personalul este prietenos, receptiv și oferă sfaturi profesioniste. Agenția are o varietate de oferte, adaptate diferitelor preferințe și bugete. Comunicarea între client și personal este deschisă. O experiență plăcută și servicii de calitate.",
          name: "Laura Casapu",
          title: "1 recenzie",
        },
        {
          quote:
            "Am fost foarte mulțumită de colaborarea cu Bee Voyage. Angajații au fost prietenoși și atenți la cerințele noastre. Totul a fost bine organizat, iar informațiile oferite au fost clare și utile. A fost o experiență plăcută și cu siguranță voi mai apela la serviciile acestei agenții.",
          name: "Victoria Iacubov",
          title: "2 recenzii",
        },
        {
          quote:
            "Am avut o impresie foarte bună despre Bee Voyage. Agenția are personal prietenos, răspunde rapid și ajută la alegerea ofertelor potrivite. Totul pare bine organizat, iar ofertele sunt accesibile și interesante pentru diferite tipuri de vacanțe.",
          name: "Onorina Pruteanu",
          title: "1 recenzie",
        },
        {
          quote:
            "Mi-a plăcut mult experiența cu Bee Voyage. Totul a fost bine organizat, iar angajații au fost foarte drăguți și receptivi. Cu siguranță voi mai apela la ei 💛🐝",
          name: "Valerica Bubliţchi",
          title: "1 recenzie",
        },
        {
          quote:
            "Oamenii de aici sunt foarte amabili și ne-au ajutat să găsim exact ce ne doream. Totul a fost foarte bine organizat, de la bilete la hotel, așa că ne-am bucurat de vacanță fără niciun stres. Cu siguranță vom mai călători cu ei!",
          name: "Iana Gherta",
          title: "1 recenzie",
        },
        {
          quote:
            "O vacanță de neuitat, mulțumesc Dumitru pentru tot, recomand cu drag 💋❤️❤️",
          name: "Mariana Crudu",
          title: "1 recenzie · 1 fotografie",
        },
        {
          quote:
            "Revin de fiecare dată cu plăcere. Dumitru și echipa lui sunt mereu amabili și primitori, iar serviciul este la un nivel înalt. Recomand cu încredere!",
          name: "Alexandra Beregoi",
          title: "2 recenzii",
        },
        {
          quote:
            "Am avut o experiență excelentă cu Bee Voyage! Totul a fost organizat perfect, de la alegerea hotelului până la întoarcere. Îi recomand pentru serviciul rapid, atenția la detalii și sprijinul oferit pe tot parcursul vacanței!",
          name: "Anastasia Andreeva",
          title: "1 recenzie",
        },
        {
          quote:
            "A fost o plăcere să beneficiez de serviciile acestei agenții. Servicii de calitate și o consultanță care mi-a dat încredere. Personal calificat care ține cont de eticheta și de clienți.",
          name: "Turcan Ana Maria",
          title: "1 recenzie",
        },
        {
          quote:
            "Serviciu excelent și personal foarte prietenos. Totul a fost organizat rapid și fără probleme. Recomand cu căldură Bee Voyage!",
          name: "Andreea Gudima",
          title: "3 recenzii",
        },
        {
          quote:
            "Am avut o experiență foarte plăcută cu Bee Voyage. Vacanța a fost foarte bine organizată, totul a decurs fără probleme. Comunicarea a fost rapidă, iar echipa a fost foarte amabilă. Recomand cu căldură!",
          name: "Mereacre Loredana",
          title: "1 recenzie",
        },
        {
          quote:
            "Recomand cu încredere agenția Bee Voyage! Am avut o experiență minunată, de la alegerea ofertei până la întoarcerea acasă. 😊",
          name: "Vitalia Cojocari",
          title: "1 recenzie",
        },
        {
          quote:
            "Personal foarte prietenos, spațiu curat și servicii bune. Recomand cu căldură!🐝❤️",
          name: "Natalia Malairau",
          title: "1 recenzie · 1 fotografie",
        },
        {
          quote:
            "Am avut o vacanță minunată, mulțumim în mod special domnișoarei Ruslana pentru amabilitate și atenție! ❤️",
          name: "Iuna Mancos",
          title: "2 recenzii · 3 fotografii",
        },
        {
          quote:
            "Crăciun fericit alături de echipa Bee Voyage, Dumitru, bravo, la anul de Ziua Copilului tot cu voi 🌷🌷🌷",
          name: "Gherman Mariana",
          title: "1 recenzie",
        },
        {
          quote:
            "O agenție de turism de 10 stele, cu o echipă energică și o atmosferă foarte plăcută, o recomand))))!!!!",
          name: "Gaby",
          title: "1 recenzie",
        },
        {
          quote:
            "Vreau să vă mulțumesc pentru tot, cele mai frumoase peisaje și emoții de neuitat, Dumitru cel mai bun 🍺🍺🍺",
          name: "Trofim Gherman",
          title: "1 recenzie",
        },
        {
          quote:
            "O agenție de turism de încredere, cu servicii bune și organizare corectă. Recomand Bee Voyage.",
          name: "Daniela Ciorici",
          title: "1 recenzie",
        },
        {
          quote:
            "Recomand cu căldură, multe amintiri frumoase doar cu voi, notă 10+ 💗💗💗",
          name: "gherman patricia",
          title: "1 recenzie",
        },
        {
          quote:
            "Vă mulțumim mult echipei Bee Voyage, toate vacanțele doar cu voi, am avut amintiri de neuitat. Vom apela mereu.",
          name: "Vasile Daud",
          title: "1 recenzie · 1 fotografie",
        },
        {
          quote:
            "Cea mai bună vacanță din viața mea! Totul a fost organizat perfect de BeeVoyage! De la cazare la excursii și restaurante locale – nu am avut nicio grijă. Abia aștept următoarea călătorie cu ei!",
          name: "Madalina Bragaru",
          title: "4 recenzii",
        },
        {
          quote:
            "O vacanță frumoasă petrecută cu ajutorul prietenei noastre, Bee Voyage. Mulțumim pentru amintirile și momentele frumoase petrecute în Kemer..🏖️🚤🌞🕶️👒🌞",
          name: "Jurjiu Elena",
          title: "7 recenzii · 24 fotografii",
        },
        {
          quote:
            "Am apelat la Bee Voyage pentru vacanța mea la mare și a fost o experiență excelentă! Totul a fost organizat perfect, de la transport la cazare. Personalul agenției este prietenos, profesionist și mereu gata să ajute. Recomand cu căldură Bee Voyage pentru o vacanță fără griji! 🌊✨🤍",
          name: "Nicoleta Cociobanu",
          title: "2 recenzii · 6 fotografii",
        },
        {
          quote:
            "Am apelat la această agenție pentru o vacanță în Grecia, am fost consultată de o echipă excelentă și amabilă. Vacanța a fost extraordinară, cu siguranță voi mai apela la ei în viitor. Recomand cu căldură!",
          name: "Coach Andrew",
          title: "1 recenzie",
        },
        {
          quote:
            "Mulțumim echipei BeeVoyage pentru organizarea acestei călătorii minunate pe coasta Mediteranei, regiunea, hotelul, serviciile au fost la cel mai înalt nivel.",
          name: "Maxim Stratenco",
          title: "1 recenzie",
        },
        {
          quote:
            "Când spui Bee Voyage, spui distracție, organizare impecabilă și experiențe care rămân în inimă! Am ales această agenție din curiozitate, dar m-au cucerit din prima interacțiune. Totul a fost simplu, clar și foarte bine organizat – de la rezervare până la întoarcerea acasă.",
          name: "Girsteoaga Evelina",
          title: "1 recenzie",
        },
        {
          quote:
            "Am fost foarte mulțumită de serviciile oferite de Bee Voyage. Totul a decurs fără probleme, iar vacanța a fost exact așa cum ne-am dorit. Prețurile sunt foarte accesibile. Hotelul ales a fost curat și confortabil. Recomand cu căldură!",
          name: "Macari Alexandra",
          title: "5 recenzii",
        },
        {
          quote:
            "Companie de top, vacanța în Bulgaria a fost de neuitat, organizare la cel mai înalt nivel, vă mulțumesc din suflet, tot ce am făcut a fost să luăm pașapoartele și bagajele, restul l-a făcut Bee Voyage, vă mulțumesc din suflet!!!!",
          name: "Ирина Верич",
          title: "1 recenzie",
        },
        {
          quote:
            "Ne-am întors recent din vacanță cu Bee Voyage, foarte mulțumiți, Quattro Beach un hotel fenomenal, mulțumim pentru recomandare Dumitru Pogor",
          name: "Denis Birca",
          title: "2 recenzii · 3 fotografii",
        },
        {
          quote:
            "Am avut o experiență fantastică cu Bee Voyage! Totul a fost organizat impecabil, de la transport la cazare. Ghidul nostru a fost extrem de prietenos, iar itinerarul a fost perfect echilibrat, permițându-ne să ne bucurăm de toate atracțiile fără grabă. Recomand cu căldură Bee Voyage pentru o vacanță memorabilă!",
          name: "Gabriela Cirlan",
          title: "2 recenzii",
        },
        {
          quote:
            "O vacanță frumoasă, cu multe amintiri, recomand Bee Voyage, nu ne așteptam să fie atât de reușită la un asemenea buget, Dumitru, ești cel mai bun",
          name: "Ion Tulbu",
          title: "1 recenzie",
        },
        {
          quote:
            "Echipa agenției a dat dovadă de responsabilitate și profesionalism, ținând cont de toate cerințele și îndeplinindu-le cu succes. 😃🐝 Recomand această agenție și ofertele ei, fiind sigur că orice călătorie va decurge bine!!! ❤️❤️❤️",
          name: "Maxim Bucliş",
          title: "3 recenzii",
        },
        {
          quote:
            "Mulțumesc echipei Bee Voyage pentru că m-a ajutat să am o vacanță plăcută și de neuitat. Echipa m-a ajutat să fac alegerile potrivite pentru mine și familia mea 🐝.",
          name: "Doina Cebotari",
          title: "1 recenzie",
        },
        {
          quote:
            "Vă mulțumesc mult pentru călătoria organizată, am avut o experiență de neuitat. Mulțumesc pentru ajutorul acordat la alegerea destinației și a hotelului, cea mai bună vacanță de până acum)",
          name: "Bjorn Ironside",
          title: "1 recenzie",
        },
        {
          quote:
            "Mulțumesc Bee Voyage pentru o vacanță minunată! Totul a fost organizat perfect, de la alegerea turului până la sprijinul oferit pe parcursul călătoriei.",
          name: "Дорина Дювенжи",
          title: "1 recenzie",
        },
        {
          quote:
            "O agenție cu notă 10+, familia noastră a fost foarte mulțumită!!",
          name: "Viorel",
          title: "2 recenzii · 1 fotografie",
        },
        {
          quote:
            "Mulțumesc mult Dumitru Pogor pentru vacanța organizată, hotelul ales a fost exact ce ne trebuia, cei mai fericiți copii",
          name: "Cristina Nistoraş",
          title: "1 recenzie",
        },
        {
          quote:
            "Pe tot parcursul călătoriei, echipa Bee Voyage a fost disponibilă non-stop pentru a oferi asistență. Orice întrebare sau problemă a fost rezolvată rapid și eficient, permițându-ne să ne bucurăm de vacanță fără griji. Le recomand cu căldură!!",
          name: "Tatiana Sirbu",
          title: "2 recenzii",
        },
        {
          quote:
            "Este o agenție foarte bună ❤️",
          name: "Popa Dimitrița",
          title: "2 recenzii",
        },
        {
          quote:
            "Recomand cu încredere agenția Bee Voyage. Este într-adevăr una de încredere. Am călătorit de două ori cu această echipă și am avut o experiență plăcută👍🏻",
          name: "Labuneţ Ecaterina",
          title: "3 recenzii",
        },
        {
          quote:
            "Echipa s-a remarcat prin profesionalism, iar vacanța a fost superbă și m-a surprins plăcut, mulțumesc Bee Voyage ☀️🐝 Recomand cu căldură 🫶🏼",
          name: "Romanciuc Daniela",
          title: "2 recenzii",
        },
        {
          quote:
            "Dacă fetele ar fi vorbit rusă, ar fi fost 4⭐️, dacă ne-ar fi spus mai multe despre hotelul unde am mers, ar fi fost 5⭐️, dar nu știau nimic despre hotel, iar ce știau nu prea reușeau să explice în rusă, iar pe autobuz ni s-au dat alte locuri decât cele cerute în avans, deși autobuzul era ocupat 60% pe ambele sensuri și era de unde alege...",
          name: "Сергей",
          title: "Ghid local · 28 recenzii · 4 fotografii",
        },
        {
          quote:
            "Am avut o vacanță foarte plăcută, Turcia, hotel 5*, totul bine. Același hotel la o altă agenție era cu 80 de euro mai scump. La un preț bun, m-am odihnit foarte bine.",
          name: "Irina Constantin",
          title: "Ghid local · 13 recenzii · 49 fotografii",
        },
        {
          quote:
            "Am rezervat o vacanță cu această companie, Dumitru ne-a oferit mereu sprijin.",
          name: "Dumitru Guzun",
          title: "Ghid local · 226 recenzii · 178 fotografii",
        },
        {
          quote:
            "Bee Voyage, sunteți cea mai de încredere agenție de pe piața turismului! Vă apelăm mereu cu multă încredere 🤗 Mulțumim pentru vacanțele de neuitat!💕",
          name: "Olga Novicova",
          title: "1 recenzie",
        },
        {
          quote:
            "Agenția Bee Voyage are un personal foarte plăcut, am avut o vacanță minunată cu familia mea, iar hotelul a fost ales special pentru noi😍😌",
          name: "Alexandra Salimova",
          title: "8 recenzii · 7 fotografii",
        },
        {
          quote:
            "Mulțumesc, frate, pentru vacanța frumoasă și pentru tot, ești cel mai bun 👍👍👍",
          name: "Stefan Braghis",
          title: "3 recenzii",
        },
        {
          quote:
            "O experiență de neuitat cu această agenție, prețuri accesibile pentru toată lumea și servicii de calitate 🤗",
          name: "constantin evelina",
          title: "5 recenzii",
        },
        {
          quote:
            "Recomand o agenție de încredere",
          name: "Nicu Iacub",
          title: "2 recenzii",
        },
        {
          quote:
            "Recomand, cea mai bună agenție, mulțumesc Dumitru pentru tot ❤️❤️❤️",
          name: "Daniela Ungureanu",
          title: "2 recenzii",
        },
        {
          quote:
            "Excelent! Rapid, clar și ieftin, personal foarte plăcut și înțelegător! 100 din 100",
          name: "Iulian Melnic",
          title: "3 recenzii",
        },
        {
          quote:
            "Mulțumesc Bee Voyage, sunteți cei mai buni 😎😎😎❤️❤️❤️",
          name: "Denis Birca",
          title: "Ghid local · 18 recenzii · 6 fotografii",
        },
        {
          quote:
            "Mulțumesc mult, ca întotdeauna 👍 Recomand cu încredere!!!",
          name: "Mitel Vergiliu",
          title: "3 recenzii · 1 fotografie",
        },
        {
          quote:
            "Au organizat totul la un nivel înalt! Cu siguranță voi reveni!🔥",
          name: "Dan Semenciuc",
          title: "2 recenzii",
        },
        {
          quote:
            "Am fost foarte mulțumit de serviciile acestei companii, atitudine profesionistă față de client",
          name: "Eugeniu Chian",
          title: "3 recenzii",
        },
        {
          quote:
            "Mulțumim pentru vacanța organizată, o recomandăm cu încredere",
          name: "Moraru Irina",
          title: "2 recenzii",
        },
        {
          quote:
            "O agenție de încredere. Am avut o vacanță minunată.",
          name: "Adelina Gurschi",
          title: "1 recenzie",
        },
        {
          quote:
            "Amabili și prietenoși. Prețuri bune. Recomand!",
          name: "Kate",
          title: "Ghid local · 66 recenzii · 263 fotografii",
        },
        {
          quote:
            "Cei mai buni 🫡🫡🫡",
          name: "ciuvalschi liubomir",
          title: "1 recenzie",
        },
        {
          quote:
            "Foarte rău. Hotel de 5 stele, nici măcar 3 stele nu era",
          name: "Tanasescu Mariana",
          title: "4 recenzii",
        },
        {
          quote:
            "O agenție de 10 stele 🫶",
          name: "Anna Arzumanyan",
          title: "1 recenzie",
        },
        {
          quote:
            "Receptivi și operativi 😎",
          name: "sasha",
          title: "3 recenzii",
        },
        {
          quote:
            "Recomand cu căldură BeVoyage Turcia! Am avut o vacanță minunată, organizată cu grijă de la început până la sfârșit. Totul a decurs perfect, iar echipa a fost foarte profesionistă, amabilă și mereu disponibilă să răspundă la orice întrebare. Mulțumim pentru o experiență de neuitat! Vom alege cu siguranță din nou BeVoyage pentru următoarele vacanțe și îi recomandăm tuturor!",
          name: "Vera Vataman",
          title: "1 recenzie · 5 fotografii",
        },
        {
          quote:
            "O companie de 10 stele! Am fost consultată de domnișoara Ivana, foarte amabilă, mi-a oferit toate informațiile necesare. Pe tot parcursul sejurului am avut sprijinul companiei pentru orice întrebare. Recomand cu încredere👍🏼",
          name: "Nicolae Cuturba",
          title: "6 recenzii",
        },
        {
          quote:
            "Oferte și specialiști foarte buni, recomand!",
          name: "Vasile Glagolevschi",
          title: "8 recenzii",
        },
        {
          quote:
            "Am avut o vacanță foarte plăcută cu ajutorul echipei bee voyage. Am primit răspuns rapid la orice întrebare, au fost foarte receptivi și am avut o comunicare ușoară și foarte plăcută 🥰 Mulțumim și cu siguranță vom reveni☺️",
          name: "Penu Tatiana",
          title: "3 recenzii · 4 fotografii",
        },
        {
          quote:
            "Serviciu 10/10! Oameni profesioniști, organizați și foarte deschiși. Recomand Bee Voyage pentru călătorii sigure și reușite!",
          name: "Adelina Plamadeala",
          title: "1 recenzie",
        },
        {
          quote:
            "Bee Voyage este cea mai bună agenție de turism, remarcându-se prin profesionalism de top, oferte personalizate și sprijin total pe parcursul întregii călătorii. Este alegerea perfectă pentru o vacanță organizată impecabil!!!",
          name: "Macrina Cojocari",
          title: "1 recenzie",
        },
        {
          quote:
            "Agenție de turism de încredere, am avut o experiență de neuitat cu Bee.Voyage",
          name: "Арина Романенко",
          title: "1 recenzie",
        },
        {
          quote:
            "Serviciu excelent, personal prietenos și organizare impecabilă. Totul a decurs perfect, iar vacanța a fost minunată. Recomand cu căldură!",
          name: "Andreea Tomșa",
          title: "1 recenzie",
        },
        {
          quote:
            "Bee Voyage este o agenție de turism care oferă o gamă largă de servicii: vacanțe în străinătate, bilete de avion, city break-uri și pachete de călătorie personalizate pentru fiecare client.",
          name: "Adriana Sajin",
          title: "1 recenzie",
        },
        {
          quote:
            "Recomand cu încredere Bee Voyage! Vacanța în Egipt la hotelul Jaz Belvedere a fost minunată, totul a fost foarte bine organizat. Îi mulțumim Anastasiei pentru amabilitate și promptitudine, ne-a ajutat rapid cu toate detaliile și alegerea ofertei perfecte. Cu siguranță vom mai apela la această agenție!",
          name: "Leontean Iurie",
          title: "3 recenzii",
        },
        {
          quote:
            "Au oferte variate, o comunicare bună cu clienții și poți învăța multe despre rezervări și organizarea călătoriilor, mai ales prin practică✨️🎀",
          name: "Alina Romaniuc",
          title: "3 recenzii",
        },
        {
          quote:
            "Bee Voyage este o agenție de turism din Chișinău care oferă diverse servicii turistice și acces la oferte de vacanță atractive. Agenția se remarcă prin seriozitate, promptitudine și atenție față de clienți. Personalul este prietenos și oferă informații clare despre destinații, ajutând clienții să aleagă cele mai potrivite pachete turistice.",
          name: "Postolachi Mihai",
          title: "1 recenzie",
        },
      ],
  },
};

export const TRANSLATIONS: Record<Language, Translation> = { en, ru, ro };
