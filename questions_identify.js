// ===================================================================================
// NFLQ 2025 - Section 5: Identify the Person/Logo/Concept
// ===================================================================================

const questions_identify = [
  {
    id: 901,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He served as the Governor of the RBI and later became the Prime Minister of India in 1991, ushering in economic reforms. Who is he?",
    answer: "Dr. Manmohan Singh"
  },
  {
    id: 902,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) This Indian payment interface, developed by NPCI, features the Devanagari letter 'Ru' with a tricolor swoosh. What is it?",
    answer: "RuPay"
  },
  {
    id: 903,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This economic principle, illustrated by a curve, suggests that as a government's tax rates increase from 0%, tax revenue increases, but only up to a certain point, after which revenue begins to fall. What is this curve called?",
    answer: "Laffer Curve"
  },
  {
    id: 904,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) Known as the 'Big Bull' of the Indian stock market, this late investor co-founded the airline Akasa Air. Who was he?",
    answer: "Rakesh Jhunjhunwala"
  },
  {
    id: 905,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) This public sector bank's logo features a stylized 'diya' or lamp, symbolizing light and prosperity. Which bank is it?",
    answer: "Indian Bank"
  },
  {
    id: 906,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is a type of financial derivative that obligates the parties to transact an asset at a predetermined future date and price. What is it?",
    answer: "Futures Contract"
  },
  {
    id: 907,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Nobel laureate in Economics is famous for his work on behavioral economics and co-authored the book 'Nudge'. Who is he?",
    answer: "Richard Thaler"
  },
  {
    id: 908,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this government initiative features a lion made of gear wheels, symbolizing manufacturing and national pride. What is the initiative?",
    answer: "Make in India"
  },
  {
    id: 909,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This two-word term describes a fraudulent investment operation that pays returns to its investors from their own money or the money paid by subsequent investors, rather than from profit earned by the individual or organization running the operation.",
    answer: "Ponzi Scheme"
  },
  {
    id: 910,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the co-founder of India's largest stockbroker, Zerodha. Who is he?",
    answer: "Nithin Kamath"
  },
  {
    id: 911,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) This logo, featuring two interlocking circles (one red, one yellow), represents a global payment technology company. Which company?",
    answer: "Mastercard"
  },
  {
    id: 912,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the name for the stock market index of the 50 largest companies listed on the Hong Kong Stock Exchange.",
    answer: "Hang Seng Index"
  },
  {
    id: 913,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He was the founder of Apple Inc., known for his innovation in personal computers, music players, and smartphones.",
    answer: "Steve Jobs"
  },
  {
    id: 914,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational investment bank and financial services company is its name written in a distinctive blue font. It is one of the \"Big Four\" banks in the US.",
    answer: "JPMorgan Chase"
  },
  {
    id: 915,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the economic system in which trade and industry are controlled by private owners for profit, rather than by the state.",
    answer: "Capitalism"
  },
  {
    id: 916,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian business magnate is the chairman of the Aditya Birla Group.",
    answer: "Kumar Mangalam Birla"
  },
  {
    id: 917,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Indian conglomerate features a stylized sun, representing a new beginning and growth.",
    answer: "Aditya Birla Group"
  },
  {
    id: 918,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of security that signifies ownership in a corporation and represents a claim on part of the corporation's assets and earnings.",
    answer: "Stock (or Share or Equity)"
  },
  {
    id: 919,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This American investor and CEO of Berkshire Hathaway is known as the \"Oracle of Omaha\".",
    answer: "Warren Buffett"
  },
  {
    id: 920,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Indian payment gateway company features a stylized 'P' that resembles a bird.",
    answer: "Razorpay"
  },
  {
    id: 921,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a government taking private industry into public ownership.",
    answer: "Nationalization"
  },
  {
    id: 922,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) She is the current CEO of Citigroup, and the first woman to head a major Wall Street bank.",
    answer: "Jane Fraser"
  },
  {
    id: 923,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this public sector insurance company features a pair of hands sheltering a lamp, symbolizing protection.",
    answer: "Life Insurance Corporation of India (LIC)"
  },
  {
    id: 924,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a financial crisis that occurs when a country is unable to pay its sovereign debt.",
    answer: "Sovereign Debt Crisis"
  },
  {
    id: 925,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian economist and Nobel laureate is known for his work on welfare economics and social choice theory.",
    answer: "Amartya Sen"
  },
  {
    id: 926,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this German sportswear company features three parallel stripes.",
    answer: "Adidas"
  },
  {
    id: 927,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of investment fund that pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.",
    answer: "Mutual Fund"
  },
  {
    id: 928,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian-American business executive is the current Chairman and CEO of Microsoft.",
    answer: "Satya Nadella"
  },
  {
    id: 929,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational technology company features a four-color window.",
    answer: "Microsoft"
  },
  {
    id: 930,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the interest rate that commercial banks charge their most creditworthy customers.",
    answer: "Prime Rate"
  },
  {
    id: 931,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the e-commerce giant Amazon.",
    answer: "Jeff Bezos"
  },
  {
    id: 932,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this e-commerce company features a smile that goes from 'a' to 'z', indicating they sell everything.",
    answer: "Amazon"
  },
  {
    id: 933,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of corporate action where a company divides its existing shares into multiple shares to boost the liquidity of the shares.",
    answer: "Stock Split"
  },
  {
    id: 934,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) She is the founder of the biopharmaceutical company Biocon.",
    answer: "Kiran Mazumdar-Shaw"
  },
  {
    id: 935,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Indian airline features a stylized 'sun' motif.",
    answer: "SpiceJet"
  },
  {
    id: 936,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of retirement plan in which an employee contributes a percentage of their salary, and the employer may match the contribution.",
    answer: "401(k) (in the US) or Provident Fund (in India)"
  },
  {
    id: 937,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian business tycoon is the chairman of the Mahindra Group.",
    answer: "Anand Mahindra"
  },
  {
    id: 938,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this social media company is a blue bird.",
    answer: "Twitter (now X)"
  },
  {
    id: 939,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the financial gain realized when the selling price of an asset exceeds its purchase price.",
    answer: "Capital Gain"
  },
  {
    id: 940,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the social media platform Facebook (now Meta).",
    answer: "Mark Zuckerberg"
  },
  {
    id: 941,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this car company is a prancing horse on a yellow background.",
    answer: "Ferrari"
  },
  {
    id: 942,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a situation in which a company's liabilities exceed its assets.",
    answer: "Negative Equity (or Insolvency)"
  },
  {
    id: 943,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian banker was the former MD and CEO of ICICI Bank.",
    answer: "Chanda Kochhar"
  },
  {
    id: 944,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Indian airline features a stylized 'chakra' or wheel.",
    answer: "Air India"
  },
  {
    id: 945,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of investment that is made with the intention of generating a positive social and environmental impact alongside a financial return.",
    answer: "Impact Investing"
  },
  {
    id: 946,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian business leader is the chairman of Wipro Limited.",
    answer: "Rishad Premji (Azim Premji is the founder)"
  },
  {
    id: 947,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American coffeehouse chain is a twin-tailed mermaid or siren.",
    answer: "Starbucks"
  },
  {
    id: 948,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of loan used to purchase a home or other real estate.",
    answer: "Mortgage"
  },
  {
    id: 949,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian industrialist was the founder of the Tata Group.",
    answer: "Jamsetji Tata"
  },
  {
    id: 950,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Indian conglomerate is a stylized 'T' that represents trust, leadership, and a tree.",
    answer: "Tata Group"
  },
  {
    id: 951,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the practice of a company paying an external provider to handle certain business functions.",
    answer: "Outsourcing"
  },
  {
    id: 952,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) She is the current Managing Director of the International Monetary Fund (IMF).",
    answer: "Kristalina Georgieva"
  },
  {
    id: 953,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this international organization features a globe surrounded by olive branches.",
    answer: "United Nations (UN)"
  },
  {
    id: 954,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of business that is owned and run by one person.",
    answer: "Sole Proprietorship"
  },
  {
    id: 955,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian banker is the current chairman of the National Bank for Financing Infrastructure and Development (NaBFID).",
    answer: "K. V. Kamath"
  },
  {
    id: 956,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this food delivery company is a stylized 'Z' that looks like a person on a scooter.",
    answer: "Zomato"
  },
  {
    id: 957,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of investment vehicle that is created to pool capital from a number of investors to invest in securities such as stocks, bonds, and real estate.",
    answer: "Investment Fund"
  },
  {
    id: 958,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the chairman of the Adani Group.",
    answer: "Gautam Adani"
  },
  {
    id: 959,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this ride-sharing company is its name in a simple, black font. It competes with Uber in India.",
    answer: "Ola"
  },
  {
    id: 960,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of business that is owned by two or more people.",
    answer: "Partnership"
  },
  {
    id: 961,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian-American business executive is the former CEO of PepsiCo.",
    answer: "Indra Nooyi"
  },
  {
    id: 962,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American fast-food chain features two golden arches.",
    answer: "McDonald's"
  },
  {
    id: 963,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company's shares being removed from a stock exchange.",
    answer: "Delisting"
  },
  {
    id: 964,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the Virgin Group, which includes ventures in travel, entertainment, and telecommunications.",
    answer: "Richard Branson"
  },
  {
    id: 965,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Japanese automaker features three overlapping ellipses.",
    answer: "Toyota"
  },
  {
    id: 966,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of financial security that represents a debt owed by the issuer to the investor.",
    answer: "Bond (or Debenture)"
  },
  {
    id: 967,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) She is the founder of the beauty and lifestyle retail company Nykaa.",
    answer: "Falguni Nayar"
  },
  {
    id: 968,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American electric vehicle and clean energy company is a stylized 'T'.",
    answer: "Tesla"
  },
  {
    id: 969,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of business that is legally separate from its owners.",
    answer: "Corporation (or Company)"
  },
  {
    id: 970,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the Chinese e-commerce giant Alibaba.",
    answer: "Jack Ma"
  },
  {
    id: 971,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American oil and gas company is a red pegasus.",
    answer: "Mobil (now part of ExxonMobil)"
  },
  {
    id: 972,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company selling assets to raise cash.",
    answer: "Divestment (or Divestiture)"
  },
  {
    id: 973,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the current President of the World Bank.",
    answer: "Ajay Banga"
  },
  {
    id: 974,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this Indian IT services company is a stylized, colorful 'W'.",
    answer: "Wipro"
  },
  {
    id: 975,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of business that is owned and operated by its members for their mutual benefit.",
    answer: "Cooperative"
  },
  {
    id: 976,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian banker is the former chairman of HDFC Bank.",
    answer: "Deepak Parekh"
  },
  {
    id: 977,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational financial services corporation is a blue box with its name inside.",
    answer: "American Express"
  },
  {
    id: 978,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company reducing its workforce.",
    answer: "Downsizing (or Layoffs)"
  },
  {
    id: 979,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the investment firm Bridgewater Associates and author of \"Principles\".",
    answer: "Ray Dalio"
  },
  {
    id: 980,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational conglomerate is a simple blue circle with its name inside.",
    answer: "General Electric (GE)"
  },
  {
    id: 981,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for a type of business that is licensed to operate as a franchisee of a larger company.",
    answer: "Franchise"
  },
  {
    id: 982,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian business magnate is the founder and chairman of Sun Pharmaceutical Industries.",
    answer: "Dilip Shanghvi"
  },
  {
    id: 983,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational courier delivery services company features a hidden arrow between the 'E' and 'x'.",
    answer: "FedEx"
  },
  {
    id: 984,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company expanding its operations into new markets.",
    answer: "Market Expansion"
  },
  {
    id: 985,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the investment management firm Vanguard Group, known for popularizing index funds.",
    answer: "John C. Bogle"
  },
  {
    id: 986,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational food, snack, and beverage corporation features a red, white, and blue globe.",
    answer: "PepsiCo"
  },
  {
    id: 987,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company developing new products or services.",
    answer: "Product Development"
  },
  {
    id: 988,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) This Indian banker is the former Governor of the RBI and served from 2008 to 2013.",
    answer: "D. Subbarao"
  },
  {
    id: 989,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational technology company features a bitten apple.",
    answer: "Apple"
  },
  {
    id: 990,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company improving its existing products or services.",
    answer: "Product Improvement"
  },
  {
    id: 991,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the hedge fund Pershing Square Capital Management.",
    answer: "Bill Ackman"
  },
  {
    id: 992,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational investment bank and financial services company features its name in a distinctive font, often associated with its \"I ♥ NY\" campaign designer.",
    answer: "Goldman Sachs"
  },
  {
    id: 993,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company entering a new market with its existing products.",
    answer: "Market Development"
  },
  {
    id: 994,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the investment firm Citadel LLC.",
    answer: "Ken Griffin"
  },
  {
    id: 995,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational financial services company features a red umbrella.",
    answer: "Travelers Insurance"
  },
  {
    id: 996,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company creating a new product for a new market.",
    answer: "Diversification"
  },
  {
    id: 997,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the investment firm Soros Fund Management.",
    answer: "George Soros"
  },
  {
    id: 998,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Logo) The logo of this American multinational investment management corporation is its name, often in black, and it is the world's largest asset manager.",
    answer: "BlackRock"
  },
  {
    id: 999,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Concept) This is the term for the process of a company focusing on a specific segment of the market.",
    answer: "Niche Marketing"
  },
  {
    id: 1000,
    section: "Identify the Person/Logo/Concept",
    type: "Direct Answer",
    question: "(Person) He is the founder of the investment firm Icahn Enterprises.",
    answer: "Carl Icahn"
  }
];
