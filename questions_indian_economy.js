// ===================================================================================
// NFLQ 2025 - Section A: Indian Economy & Policy
// ===================================================================================

const questions_indian_economy = [
  {
    id: 1,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the term for a situation where economic growth is slow, high unemployment, and rising prices coexist?",
    options: ["Recession", "Deflation", "Stagflation", "Depression"],
    answer: "Stagflation"
  },
  {
    id: 2,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Mahalanobis Model', which focused on rapid industrialization, was central to which of India's Five-Year Plans?",
    options: ["First Five-Year Plan", "Second Five-Year Plan", "Fourth Five-Year Plan", "Sixth Five-Year Plan"],
    answer: "Second Five-Year Plan"
  },
  {
    id: 3,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which committee was formed to review the fiscal responsibility and budget management (FRBM) framework in India?",
    options: ["C. Rangarajan Committee", "Vijay Kelkar Committee", "Urjit Patel Committee", "N.K. Singh Committee"],
    answer: "N.K. Singh Committee"
  },
  {
    id: 4,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What does 'disinvestment' by the government primarily refer to?",
    options: ["Investing in foreign companies", "Selling its shares in Public Sector Undertakings (PSUs)", "Shutting down loss-making units", "Increasing taxes on private companies"],
    answer: "Selling its shares in Public Sector Undertakings (PSUs)"
  },
  {
    id: 5,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Twin Deficit' problem in an economy refers to the simultaneous existence of:",
    options: ["Trade Deficit and Revenue Deficit", "Fiscal Deficit and Primary Deficit", "Fiscal Deficit and Current Account Deficit", "Budget Deficit and Trade Deficit"],
    answer: "Fiscal Deficit and Current Account Deficit"
  },
  {
    id: 6,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which sector is the largest contributor to India's Gross Domestic Product (GDP)?",
    options: ["Agriculture", "Manufacturing", "Services", "Mining"],
    answer: "Services"
  },
  {
    id: 7,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'NITI' in NITI Aayog, the policy think tank of the Government of India, stands for:",
    options: ["National Institution for Transforming India", "National Investment and Technology Initiative", "National Intelligence for Trade in India", "National Institute for Taxable Incomes"],
    answer: "National Institution for Transforming India"
  },
  {
    id: 8,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the base year for the current series of India's GDP and IIP (Index of Industrial Production) calculation?",
    options: ["2004-05", "2010-11", "2011-12", "2014-15"],
    answer: "2011-12"
  },
  {
    id: 9,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The concept of 'Inclusive Growth' was the main objective of which Five-Year Plan?",
    options: ["Ninth Five-Year Plan", "Tenth Five-Year Plan", "Eleventh Five-Year Plan", "Twelfth Five-Year Plan"],
    answer: "Eleventh Five-Year Plan"
  },
  {
    id: 10,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Who is considered the father of the 'White Revolution' in India, which led to the country becoming the world's largest milk producer?",
    options: ["M.S. Swaminathan", "Verghese Kurien", "Sam Pitroda", "Homi Bhabha"],
    answer: "Verghese Kurien"
  },
  {
    id: 11,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Laffer Curve' in economics illustrates the relationship between:",
    options: ["Inflation and unemployment", "Tax rates and tax revenue", "GDP growth and poverty", "Money supply and interest rates"],
    answer: "Tax rates and tax revenue"
  },
  {
    id: 12,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What does MSP stand for in the context of Indian agriculture?",
    options: ["Maximum Sale Price", "Minimum Support Price", "Market Selling Price", "Minimum Supply Protocol"],
    answer: "Minimum Support Price"
  },
  {
    id: 13,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The Goods and Services Tax (GST) in India was implemented from which date?",
    options: ["April 1, 2017", "July 1, 2017", "April 1, 2018", "July 1, 2018"],
    answer: "July 1, 2017"
  },
  {
    id: 14,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which of these is a measure of inflation that tracks the prices of a basket of consumer goods and services?",
    options: ["WPI (Wholesale Price Index)", "CPI (Consumer Price Index)", "IIP (Index of Industrial Production)", "GDP Deflator"],
    answer: "CPI (Consumer Price Index)"
  },
  {
    id: 15,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission for:",
    options: ["Housing for all", "Financial Inclusion", "Skill development", "Digital literacy"],
    answer: "Financial Inclusion"
  },
  {
    id: 16,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "A situation where a country can produce a good at a lower opportunity cost than another country is known as:",
    options: ["Absolute Advantage", "Comparative Advantage", "Economic Efficiency", "Production Superiority"],
    answer: "Comparative Advantage"
  },
  {
    id: 17,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the term for the total value of all goods and services produced within a country's borders in a specific time period?",
    options: ["Gross National Product (GNP)", "Gross Domestic Product (GDP)", "Net National Product (NNP)", "National Income"],
    answer: "Gross Domestic Product (GDP)"
  },
  {
    id: 18,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'demographic dividend' refers to the economic growth potential that can result from shifts in a population’s age structure, mainly when the share of the:",
    options: ["Elderly population is largest", "Working-age population is largest", "Dependent population is largest", "Child population is largest"],
    answer: "Working-age population is largest"
  },
  {
    id: 19,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which body in India approves the Five-Year Plans?",
    options: ["NITI Aayog", "Parliament of India", "National Development Council (NDC)", "Ministry of Finance"],
    answer: "National Development Council (NDC)"
  },
  {
    id: 20,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The economic reforms of 1991 in India are often described by the acronym LPG. What does 'P' stand for?",
    options: ["Public", "Policy", "Privatization", "Production"],
    answer: "Privatization"
  },
  {
    id: 21,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Phillips Curve' suggests a trade-off between:",
    options: ["Economic growth and inequality", "Inflation and unemployment", "Government spending and tax revenue", "Exports and imports"],
    answer: "Inflation and unemployment"
  },
  {
    id: 22,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which organization is responsible for publishing the Economic Survey of India annually?",
    options: ["Reserve Bank of India", "NITI Aayog", "Department of Economic Affairs, Ministry of Finance", "National Statistical Office"],
    answer: "Department of Economic Affairs, Ministry of Finance"
  },
  {
    id: 23,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The term 'Fiscal Deficit' is the difference between the government's total expenditure and its:",
    options: ["Total tax revenue", "Total revenue excluding borrowings", "Total non-tax revenue", "Total capital receipts"],
    answer: "Total revenue excluding borrowings"
  },
  {
    id: 24,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Atal Pension Yojana (APY) is a government scheme targeted at workers in which sector?",
    options: ["Organized sector", "Unorganized sector", "Public sector", "Agricultural sector"],
    answer: "Unorganized sector"
  },
  {
    id: 25,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is 'Core Inflation'?",
    options: ["Inflation in the food and fuel sectors", "The total inflation in an economy", "Inflation excluding volatile items like food and energy prices", "Inflation measured on a weekly basis"],
    answer: "Inflation excluding volatile items like food and energy prices"
  },
  {
    id: 26,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Make in India' initiative was launched in which year?",
    options: ["2012", "2014", "2016", "2018"],
    answer: "2014"
  },
  {
    id: 27,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What does 'Round Tripping' refer to in the context of foreign investment?",
    options: ["A foreign company investing in multiple sectors", "Domestic funds being routed abroad and then reinvested back into the country to avail tax benefits", "An investor selling and buying back the same stock quickly", "A type of circular trading"],
    answer: "Domestic funds being routed abroad and then reinvested back into the country to avail tax benefits"
  },
  {
    id: 28,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Primary Deficit' is calculated by subtracting which component from the Fiscal Deficit?",
    options: ["Tax revenues", "Disinvestment proceeds", "Interest payments", "Subsidies"],
    answer: "Interest payments"
  },
  {
    id: 29,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which of the following is NOT one of the 'Navratna' categories for Public Sector Enterprises in India?",
    options: ["Maharatna", "Navratna", "Miniratna", "Vajraratna"],
    answer: "Vajraratna"
  },
  {
    id: 30,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The slogan 'Garibi Hatao' (Remove Poverty) was associated with which Five-Year Plan?",
    options: ["Fourth Plan", "Fifth Plan", "Sixth Plan", "Seventh Plan"],
    answer: "Fifth Plan"
  },
  {
    id: 31,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the highest slab in the current GST structure in India?",
    options: ["18%", "24%", "28%", "32%"],
    answer: "28%"
  },
  {
    id: 32,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Gini Coefficient' is a measure of:",
    options: ["Economic development", "Income inequality", "Poverty level", "Population density"],
    answer: "Income inequality"
  },
  {
    id: 33,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which scheme was launched by the Government of India to provide free LPG connections to women from below-poverty-line families?",
    options: ["UJALA Scheme", "Ujjwala Yojana", "Saubhagya Scheme", "Deen Dayal Upadhyaya Gram Jyoti Yojana"],
    answer: "Ujjwala Yojana"
  },
  {
    id: 34,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the term for a tax that is levied on goods and services rather than on income or profits?",
    options: ["Direct Tax", "Indirect Tax", "Progressive Tax", "Regressive Tax"],
    answer: "Indirect Tax"
  },
  {
    id: 35,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Bombay Plan' of 1944 was a set of proposals for the post-independence economic development of India put forward by:",
    options: ["British economists", "The Indian National Congress", "A group of influential Indian industrialists", "The Muslim League"],
    answer: "A group of influential Indian industrialists"
  },
  {
    id: 36,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What does the 'F' in FPI stand for in the context of international investment?",
    options: ["Financial", "Foreign", "Fiscal", "Foundational"],
    answer: "Foreign"
  },
  {
    id: 37,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Hindu Rate of Growth' is a term used to refer to the low annual growth rate of the Indian economy before the reforms of 1991. Who coined this term?",
    options: ["Amartya Sen", "Jagdish Bhagwati", "Raj Krishna", "C. Rangarajan"],
    answer: "Raj Krishna"
  },
  {
    id: 38,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which of these is a direct tax?",
    options: ["Goods and Services Tax (GST)", "Customs Duty", "Corporation Tax", "Excise Duty"],
    answer: "Corporation Tax"
  },
  {
    id: 39,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The National Food Security Act was passed in which year, aiming to provide subsidized food grains to approximately two-thirds of India's population?",
    options: ["2011", "2012", "2013", "2014"],
    answer: "2013"
  },
  {
    id: 40,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is 'Helicopter Money'?",
    options: ["Money earned from the aviation industry", "An unconventional monetary policy tool involving printing large sums of money and distributing it to the public", "A term for black money transferred via air", "A fund set up to rescue airline companies"],
    answer: "An unconventional monetary policy tool involving printing large sums of money and distributing it to the public"
  },
  {
    id: 41,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Golden Revolution' in India is associated with the development of:",
    options: ["Oilseeds", "Pulses", "Horticulture and Honey", "Jute"],
    answer: "Horticulture and Honey"
  },
  {
    id: 42,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the full form of AMRUT, a government scheme focused on urban development?",
    options: ["Atal Mission for Rejuvenation and Urban Transformation", "Advanced Mission for Rural and Urban Transit", "Atal Mission for Road and Urban Transport", "Associated Mission for Rejuvenation and Urban Technology"],
    answer: "Atal Mission for Rejuvenation and Urban Transformation"
  },
  {
    id: 43,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "A 'Veblen Good' is a type of luxury good for which the demand increases as the:",
    options: ["Price increases", "Price decreases", "Quality decreases", "Supply increases"],
    answer: "Price increases"
  },
  {
    id: 44,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Angel Tax' in India is a term associated with a tax levied on:",
    options: ["Large corporations' profits", "Capital raised by unlisted companies (startups) via issue of shares in excess of fair market value", "High-net-worth individuals", "Charitable institutions"],
    answer: "Capital raised by unlisted companies (startups) via issue of shares in excess of fair market value"
  },
  {
    id: 45,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which body is responsible for determining the Minimum Support Price (MSP) for various agricultural crops in India?",
    options: ["NITI Aayog", "Ministry of Agriculture", "Commission for Agricultural Costs and Prices (CACP)", "Food Corporation of India (FCI)"],
    answer: "Commission for Agricultural Costs and Prices (CACP)"
  },
  {
    id: 46,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Kuznets Curve' hypothesizes that as an economy develops, market forces first increase and then decrease:",
    options: ["Population growth", "Economic inequality", "Inflation", "Unemployment"],
    answer: "Economic inequality"
  },
  {
    id: 47,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the term for a market structure dominated by a single seller?",
    options: ["Oligopoly", "Monopsony", "Monopoly", "Perfect Competition"],
    answer: "Monopoly"
  },
  {
    id: 48,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Digital India' programme was launched with the vision to transform India into a digitally empowered society and knowledge economy. In which year was it launched?",
    options: ["2014", "2015", "2016", "2017"],
    answer: "2015"
  },
  {
    id: 49,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is 'Green GDP'?",
    options: ["GDP from the agricultural sector", "An index of economic growth with the environmental consequences of that growth factored in", "GDP of the world's top green economies", "A measure of foreign investment in green technologies"],
    answer: "An index of economic growth with the environmental consequences of that growth factored in"
  },
  {
    id: 50,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'TRYSEM' scheme was launched by the Indian government to provide technical skills to:",
    options: ["Urban youth", "Rural youth", "Women entrepreneurs", "School dropouts"],
    answer: "Rural youth"
  },
  {
    id: 51,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the term for a tax system where the tax rate increases as the taxable amount increases?",
    options: ["Regressive Tax", "Proportional Tax", "Progressive Tax", "Value Added Tax"],
    answer: "Progressive Tax"
  },
  {
    id: 52,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'National Sample Survey Office' (NSSO), now part of the National Statistical Office (NSO), primarily conducts surveys on:",
    options: ["Political opinions", "Socio-economic aspects", "Geological formations", "Wildlife population"],
    answer: "Socio-economic aspects"
  },
  {
    id: 53,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the 'Lorenz Curve' used to represent graphically?",
    options: ["The relationship between price and quantity demanded", "The distribution of income or wealth", "The business cycle", "The production possibility frontier"],
    answer: "The distribution of income or wealth"
  },
  {
    id: 54,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'PM-KISAN' scheme provides income support to:",
    options: ["Urban poor families", "Unemployed youth", "All farmer families", "Pregnant women"],
    answer: "All farmer families"
  },
  {
    id: 55,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "In economics, 'dumping' refers to:",
    options: ["Disposing of industrial waste illegally", "A country exporting a product at a price lower than the price it normally charges in its own home market", "A company selling off loss-making assets", "A rapid sell-off of stocks by investors"],
    answer: "A country exporting a product at a price lower than the price it normally charges in its own home market"
  },
  {
    id: 56,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Index of Eight Core Industries' in India does NOT include which of the following?",
    options: ["Coal", "Electricity", "Cement", "Textiles"],
    answer: "Textiles"
  },
  {
    id: 57,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is 'Quantitative Easing' (QE)?",
    options: ["A government policy to reduce the quantity of taxes", "A monetary policy where a central bank purchases government bonds or other financial assets to inject money into the economy", "A method to quantify the quality of exports", "A fiscal policy to increase government spending"],
    answer: "A monetary policy where a central bank purchases government bonds or other financial assets to inject money into the economy"
  },
  {
    id: 58,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Mahatma Gandhi National Rural Employment Guarantee Act' (MGNREGA) guarantees how many days of wage employment in a financial year?",
    options: ["50 days", "75 days", "100 days", "150 days"],
    answer: "100 days"
  },
  {
    id: 59,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is a 'Special Economic Zone' (SEZ)?",
    options: ["An area with special environmental protections", "An area in a country that is subject to different economic regulations than other regions within the same country", "A zone reserved for specific types of industries", "A residential area for government employees"],
    answer: "An area in a country that is subject to different economic regulations than other regions within the same country"
  },
  {
    id: 60,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Sukanya Samriddhi Yojana' is a government savings scheme aimed at the welfare of:",
    options: ["The elderly", "The girl child", "Farmers", "Small business owners"],
    answer: "The girl child"
  },
  {
    id: 61,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is the term for a market structure with a small number of firms?",
    options: ["Monopoly", "Monopsony", "Oligopoly", "Perfect Competition"],
    answer: "Oligopoly"
  },
  {
    id: 62,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Revenue Deficit' is the excess of revenue expenditure over:",
    options: ["Capital receipts", "Revenue receipts", "Total expenditure", "Non-debt capital receipts"],
    answer: "Revenue receipts"
  },
  {
    id: 63,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which five-year plan is also known as the 'Gadgil Yojana'?",
    options: ["Second Plan", "Third Plan", "Fourth Plan", "Fifth Plan"],
    answer: "Fourth Plan"
  },
  {
    id: 64,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The term 'jobless growth' refers to a situation where:",
    options: ["The unemployment rate is zero", "The economy expands but the level of employment does not increase", "Only the service sector creates jobs", "People voluntarily leave their jobs"],
    answer: "The economy expands but the level of employment does not increase"
  },
  {
    id: 65,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'National Infrastructure Pipeline' (NIP) is a government initiative for the period:",
    options: ["2018-2023", "2019-2024", "2020-2025", "2021-2026"],
    answer: "2020-2025"
  },
  {
    id: 66,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What is a 'shadow bank'?",
    options: ["An illegal banking operation", "A financial intermediary that provides services similar to traditional commercial banks but outside normal banking regulations", "A bank that operates only online", "A bank that primarily deals with foreign currency"],
    answer: "A financial intermediary that provides services similar to traditional commercial banks but outside normal banking regulations"
  },
  {
    id: 67,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "The 'Silver Revolution' in India is associated with a significant increase in the production of:",
    options: ["Milk", "Fish", "Eggs", "Cotton"],
    answer: "Eggs"
  },
  {
    id: 68,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "What does 'crowding out' mean in economics?",
    options: ["Too many companies entering a single market", "Increased government borrowing leading to a reduction in private sector investment", "Overpopulation in urban areas", "A situation where exports exceed imports"],
    answer: "Increased government borrowing leading to a reduction in private sector investment"
  },
  {
    id: 69,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "Which of the following is responsible for the compilation of the Index of Industrial Production (IIP) in India?",
    options: ["Reserve Bank of India", "National Statistical Office (NSO)", "NITI Aayog", "Department for Promotion of Industry and Internal Trade"],
    answer: "National Statistical Office (NSO)"
  },
  {
    id: 70,
    section: "Indian Economy & Policy",
    type: "Multiple Choice",
    question: "A 'Regressive Tax' is one where the tax rate:",
    options: ["Increases as the taxable amount increases", "Decreases as the taxable amount increases", "Stays the same regardless of the taxable amount", "Is applied only on luxury goods"],
    answer: "Decreases as the taxable amount increases"
  }
];
