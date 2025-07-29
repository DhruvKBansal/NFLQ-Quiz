// ===================================================================================
// NFLQ 2025 - Section 3: Slogan & Tagline Identification
// ===================================================================================

const questions_slogans = [
  {
    id: 651,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The World's Local Bank\" - Which bank uses this tagline?",
    answer: "HSBC"
  },
  {
    id: 652,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Hum Hai Na, Khayal Aapka\" - This is the slogan of which financial services company?",
    answer: "ICICI Prudential Life Insurance"
  },
  {
    id: 653,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Name You Can Bank Upon\" - Which public sector bank is this?",
    answer: "Punjab National Bank (PNB)"
  },
  {
    id: 654,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"India's International Bank\" - Identify the bank.",
    answer: "Bank of Baroda"
  },
  {
    id: 655,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Badhti ka Naam Zindagi\" - Which private sector bank uses this slogan?",
    answer: "Axis Bank"
  },
  {
    id: 656,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Zindagi ke Saath bhi, Zindagi ke Baad bhi\" - Which iconic insurance company's slogan is this?",
    answer: "Life Insurance Corporation of India (LIC)"
  },
  {
    id: 657,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Pure Banking, Nothing Else\" - Which is India's largest public sector bank with this tagline?",
    answer: "State Bank of India (SBI)"
  },
  {
    id: 658,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Experience our Expertise\" - Identify this private sector bank.",
    answer: "Yes Bank"
  },
  {
    id: 659,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"A Tradition of Trust\" - This slogan belongs to which bank that merged with Bank of Baroda?",
    answer: "Vijaya Bank"
  },
  {
    id: 660,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Smart Way to Bank\" - Which bank is associated with this tagline?",
    answer: "Karur Vysya Bank"
  },
  {
    id: 661,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Bank Aisa, Dost Jaisa\" - Identify the bank.",
    answer: "IDBI Bank"
  },
  {
    id: 662,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Together We Can\" - Which public sector bank uses this slogan?",
    answer: "Canara Bank"
  },
  {
    id: 663,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Apno ka Bank\" - Which bank uses this tagline?",
    answer: "RBL Bank"
  },
  {
    id: 664,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Trusted Family Bank\" - Identify the bank.",
    answer: "Dena Bank (now merged with Bank of Baroda)"
  },
  {
    id: 665,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Good People to Grow With\" - This is the slogan of which public sector bank?",
    answer: "Indian Overseas Bank"
  },
  {
    id: 666,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Honours Your Trust\" - Which public sector bank uses this tagline?",
    answer: "UCO Bank"
  },
  {
    id: 667,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"A Faithful & Friendly Financial Partner\" - Identify the bank.",
    answer: "Syndicate Bank (now merged with Canara Bank)"
  },
  {
    id: 668,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Bank That Begins With U\" - This slogan belongs to which bank?",
    answer: "United Bank of India (now merged with PNB)"
  },
  {
    id: 669,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Relationship beyond banking\" - Which public sector bank is this?",
    answer: "Bank of India"
  },
  {
    id: 670,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"We Understand Your World\" - Which private sector bank uses this slogan?",
    answer: "HDFC Bank"
  },
  {
    id: 671,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Let's make money simple\" - Which private sector bank uses this tagline?",
    answer: "Kotak Mahindra Bank"
  },
  {
    id: 672,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"One Family One Bank\" - Identify the bank.",
    answer: "Bank of Maharashtra"
  },
  {
    id: 673,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Your Perfect Banking Partner\" - This slogan belongs to which private sector bank?",
    answer: "Federal Bank"
  },
  {
    id: 674,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Support All the Way\" - Which public sector bank is this?",
    answer: "Corporation Bank (now merged with Union Bank)"
  },
  {
    id: 675,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Aao Sochein Bada\" - Which private sector bank uses this slogan?",
    answer: "IDFC First Bank"
  },
  {
    id: 676,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Live More, Bank Less\" - Which foreign bank uses this tagline in India?",
    answer: "DBS Bank"
  },
  {
    id: 677,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Central to You Since 1911\" - Identify the bank.",
    answer: "Central Bank of India"
  },
  {
    id: 678,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Changing Face of Prosperity\" - This slogan belongs to which housing finance company?",
    answer: "HDFC Ltd. (now merged with HDFC Bank)"
  },
  {
    id: 679,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Sar Utha Ke Jiyo\" - Which life insurance company uses this tagline?",
    answer: "HDFC Life"
  },
  {
    id: 680,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Breaking Barriers\" - Which private sector life insurance company is this?",
    answer: "Bajaj Allianz Life Insurance"
  },
  {
    id: 681,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Jeeyo Befikar\" - Which general insurance company uses this slogan?",
    answer: "Royal Sundaram General Insurance"
  },
  {
    id: 682,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Take it easy\" - Which general insurance company's tagline is this?",
    answer: "ICICI Lombard"
  },
  {
    id: 683,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Nibhao Vaade\" - Identify the life insurance company.",
    answer: "Tata AIA Life Insurance"
  },
  {
    id: 684,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Power of a Simple Idea\" - This slogan belongs to which stockbroking firm?",
    answer: "Zerodha"
  },
  {
    id: 685,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Invest Right\" - Which mutual fund company uses this tagline?",
    answer: "HDFC Mutual Fund"
  },
  {
    id: 686,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Paytm Karo\" - Which digital payments company is this?",
    answer: "Paytm"
  },
  {
    id: 687,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Simply Save\" - Which payment service by Google uses this tagline?",
    answer: "Google Pay (formerly Tez)"
  },
  {
    id: 688,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"One Life. Many Dreams.\" - Which payment network's tagline is this?",
    answer: "RuPay"
  },
  {
    id: 689,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"There are some things money can't buy. For everything else, there's...\" - Complete the slogan for which card company?",
    answer: "Mastercard"
  },
  {
    id: 690,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Future of Money\" - This slogan is associated with which asset management company?",
    answer: "Franklin Templeton"
  },
  {
    id: 691,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Bharose ka prateek\" - Which general insurance company uses this tagline?",
    answer: "United India Insurance"
  },
  {
    id: 692,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"A new way of living\" - Which life insurance company is this?",
    answer: "Exide Life Insurance (now merged with HDFC Life)"
  },
  {
    id: 693,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Your welfare is our responsibility\" - Which public sector insurance company uses this slogan?",
    answer: "Oriental Insurance Company"
  },
  {
    id: 694,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Aam Aadmi ka Adhikaar\" - This slogan is associated with which government scheme?",
    answer: "Right to Information (RTI) Act"
  },
  {
    id: 695,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Desh Ka Aam Naagrik\" - This slogan is part of which government aviation scheme?",
    answer: "UDAN Scheme"
  },
  {
    id: 696,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Har Ghar Jal\" - Which government mission uses this tagline?",
    answer: "Jal Jeevan Mission"
  },
  {
    id: 697,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Swachh Bharat, Swasth Bharat\" - This slogan is for which national mission?",
    answer: "Swachh Bharat Mission"
  },
  {
    id: 698,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Beti Bachao, Beti Padhao\" - This is a campaign for the welfare of whom?",
    answer: "The girl child"
  },
  {
    id: 699,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Sabka Saath, Sabka Vikas, Sabka Vishwas\" - This is a governance principle often stated by which political leader?",
    answer: "Narendra Modi"
  },
  {
    id: 700,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Think Different\" - Which global technology company used this iconic slogan?",
    answer: "Apple"
  },
  {
    id: 701,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Connecting People\" - Which mobile phone brand was famous for this tagline?",
    answer: "Nokia"
  },
  {
    id: 702,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Best a Man Can Get\" - Which men's grooming brand uses this slogan?",
    answer: "Gillette"
  },
  {
    id: 703,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Just Do It\" - Which sportswear brand is famous for this tagline?",
    answer: "Nike"
  },
  {
    id: 704,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"I'm Lovin' It\" - Which fast-food chain uses this slogan?",
    answer: "McDonald's"
  },
  {
    id: 705,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Ultimate Driving Machine\" - Which luxury car brand uses this tagline?",
    answer: "BMW"
  },
  {
    id: 706,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Because You're Worth It\" - Which cosmetics brand is this?",
    answer: "L'Oréal"
  },
  {
    id: 707,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Taste of India\" - Which dairy brand is famous for this slogan?",
    answer: "Amul"
  },
  {
    id: 708,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Har Ghar Kuch Kehta Hai\" - Which paint company uses this tagline?",
    answer: "Asian Paints"
  },
  {
    id: 709,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Desh ki Dhadkan\" - Which two-wheeler brand used this iconic slogan?",
    answer: "Hero Honda"
  },
  {
    id: 710,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Complete Man\" - Which textile and apparel brand is this?",
    answer: "Raymond"
  },
  {
    id: 711,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Thanda Matlab...\" - Complete the slogan for which beverage brand.",
    answer: "Coca-Cola"
  },
  {
    id: 712,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Utterly Butterly Delicious\" - Which brand is this?",
    answer: "Amul"
  },
  {
    id: 713,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"No-nonsense\" - Which airline used this as its tagline?",
    answer: "Air Deccan"
  },
  {
    id: 714,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The King of Good Times\" - Which now-defunct airline was associated with this slogan?",
    answer: "Kingfisher Airlines"
  },
  {
    id: 715,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Har ek friend zaroori hota hai\" - Which telecom company used this popular jingle?",
    answer: "Airtel"
  },
  {
    id: 716,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"What an idea, Sirji!\" - Which telecom company's campaign featured this line?",
    answer: "Idea Cellular"
  },
  {
    id: 717,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"An idea can change your life\" - Which business reality TV show uses this tagline?",
    answer: "Shark Tank India"
  },
  {
    id: 718,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The World On Time\" - Which logistics and courier company uses this slogan?",
    answer: "FedEx"
  },
  {
    id: 719,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Power of Dreams\" - Which automobile company is this?",
    answer: "Honda"
  },
  {
    id: 720,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Innovation that excites\" - Which car manufacturer uses this tagline?",
    answer: "Nissan"
  },
  {
    id: 721,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Go Further\" - Which American automaker uses this slogan?",
    answer: "Ford"
  },
  {
    id: 722,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Das Auto\" - Which German car company used this famous tagline?",
    answer: "Volkswagen"
  },
  {
    id: 723,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Best or Nothing\" - Which luxury car brand is this?",
    answer: "Mercedes-Benz"
  },
  {
    id: 724,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Imagination at Work\" - Which multinational conglomerate uses this slogan?",
    answer: "General Electric (GE)"
  },
  {
    id: 725,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Don't be evil\" - Which tech company had this as its informal corporate motto?",
    answer: "Google"
  },
  {
    id: 726,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The world's online marketplace\" - Which e-commerce company is this?",
    answer: "eBay"
  },
  {
    id: 727,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Broadcast Yourself\" - Which video-sharing platform was launched with this slogan?",
    answer: "YouTube"
  },
  {
    id: 728,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Happiest Place on Earth\" - Which theme park is known by this tagline?",
    answer: "Disneyland"
  },
  {
    id: 729,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"It's finger lickin' good\" - Which fast-food chain is this?",
    answer: "KFC"
  },
  {
    id: 730,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Have it your way\" - Which burger chain uses this slogan?",
    answer: "Burger King"
  },
  {
    id: 731,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Eat Fresh\" - Which sandwich chain is famous for this tagline?",
    answer: "Subway"
  },
  {
    id: 732,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Think outside the bun\" - Which fast-food chain used this slogan?",
    answer: "Taco Bell"
  },
  {
    id: 733,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Open Happiness\" - Which beverage brand used this campaign?",
    answer: "Coca-Cola"
  },
  {
    id: 734,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Quicker Picker Upper\" - Which paper towel brand is this?",
    answer: "Bounty"
  },
  {
    id: 735,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Melts in Your Mouth, Not in Your Hand\" - Which candy brand is this?",
    answer: "M&M's"
  },
  {
    id: 736,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"A Diamond Is Forever\" - Which company popularized this phrase?",
    answer: "De Beers"
  },
  {
    id: 737,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The World's Most Trusted Airline\" - Which airline has used this tagline?",
    answer: "British Airways"
  },
  {
    id: 738,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Fly the Good Times\" - Which Indian airline used this slogan?",
    answer: "Kingfisher Airlines"
  },
  {
    id: 739,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Low Cost Airline\" - Which Indian airline is known by this description?",
    answer: "IndiGo"
  },
  {
    id: 740,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"SimplyFly\" - Which airline, founded by Capt. Gopinath, used this tagline?",
    answer: "Air Deccan"
  },
  {
    id: 741,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Your Family's Bank. Across India.\" - Which public sector bank uses this slogan?",
    answer: "Indian Bank"
  },
  {
    id: 742,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"We make you feel richer\" - Which private sector bank has this tagline?",
    answer: "IndusInd Bank"
  },
  {
    id: 743,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"A passion to perform\" - Which German multinational investment bank is this?",
    answer: "Deutsche Bank"
  },
  {
    id: 744,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The bank for a changing world\" - Which French international banking group uses this slogan?",
    answer: "BNP Paribas"
  },
  {
    id: 745,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Here for good\" - Which British multinational bank uses this tagline?",
    answer: "Standard Chartered"
  },
  {
    id: 746,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The right relationship is everything\" - Which American investment bank used this slogan?",
    answer: "JPMorgan Chase"
  },
  {
    id: 747,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Let's build a better working world\" - Which professional services firm is this?",
    answer: "Ernst & Young (EY)"
  },
  {
    id: 748,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The New Equation\" - Which professional services network uses this tagline?",
    answer: "PwC (PricewaterhouseCoopers)"
  },
  {
    id: 749,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Making an impact that matters\" - Which professional services firm is this?",
    answer: "Deloitte"
  },
  {
    id: 750,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Cutting through complexity\" - Which professional services company uses this slogan?",
    answer: "KPMG"
  },
  {
    id: 751,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Investment Zaroori Hai\" - This investor awareness campaign was launched by which regulator?",
    answer: "SEBI"
  },
  {
    id: 752,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Mutual Funds Sahi Hai\" - This investor awareness campaign was launched by which industry body?",
    answer: "AMFI (Association of Mutual Funds in India)"
  },
  {
    id: 753,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Jago Grahak Jago\" - This is a consumer awareness campaign by which entity?",
    answer: "Government of India (Department of Consumer Affairs)"
  },
  {
    id: 754,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"India's Most Trusted Brand\" - This has been used by various brands, but is strongly associated with which conglomerate's salt brand?",
    answer: "Tata Salt"
  },
  {
    id: 755,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Desh Ka Namak\" - Which brand uses this tagline?",
    answer: "Tata Salt"
  },
  {
    id: 756,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Why should boys have all the fun?\" - Which two-wheeler brand launched this famous campaign?",
    answer: "Hero Pleasure"
  },
  {
    id: 757,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Zing Thing\" - Which soft drink brand was this?",
    answer: "Gold Spot"
  },
  {
    id: 758,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Happy to help\" - Which telecom company used this as its customer service motto?",
    answer: "Vodafone"
  },
  {
    id: 759,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Express Yourself\" - Which telecom brand used this tagline?",
    answer: "Airtel"
  },
  {
    id: 760,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Sab Kuch Try Karo, Phir Sahi Chuno\" - Which insurance aggregator's campaign is this?",
    answer: "Policybazaar"
  },
  {
    id: 761,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Kal ki taiyari, aaj\" - Which insurance company uses this slogan?",
    answer: "SBI Life Insurance"
  },
  {
    id: 762,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Zimmedari ka Humsafar\" - Which general insurance company is this?",
    answer: "SBI General Insurance"
  },
  {
    id: 763,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Get a life\" - Which life insurance company had this provocative tagline?",
    answer: "Aviva Life Insurance"
  },
  {
    id: 764,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"No Ullu Banaoing\" - This campaign was for which financial product comparison website?",
    answer: "Policybazaar"
  },
  {
    id: 765,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The mint with the hole\" - Which candy brand is this?",
    answer: "Polo"
  },
  {
    id: 766,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Taste the Thunder\" - Which beverage brand is this?",
    answer: "Thums Up"
  },
  {
    id: 767,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Connecting aspirations\" - Which conglomerate uses this as its group tagline?",
    answer: "Reliance Industries"
  },
  {
    id: 768,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Leadership with Trust\" - Which conglomerate is this?",
    answer: "Tata Group"
  },
  {
    id: 769,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Taking India to the World\" - Which conglomerate uses this slogan?",
    answer: "Aditya Birla Group"
  },
  {
    id: 770,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Growth is Life\" - Which conglomerate was associated with this motto?",
    answer: "Reliance (under Dhirubhai Ambani)"
  },
  {
    id: 771,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Engineered for a better world\" - Which engineering conglomerate is this?",
    answer: "Larsen & Toubro (L&T)"
  },
  {
    id: 772,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The world's largest two-wheeler manufacturer\" - Which company claims this title?",
    answer: "Hero MotoCorp"
  },
  {
    id: 773,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Uncola\" - Which beverage brand positioned itself with this tagline?",
    answer: "7 Up"
  },
  {
    id: 774,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Obey Your Thirst\" - Which soft drink brand is this?",
    answer: "Sprite"
  },
  {
    id: 775,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"It gives you wings\" - Which energy drink brand is this?",
    answer: "Red Bull"
  },
  {
    id: 776,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The breakfast of champions\" - Which cereal brand is this?",
    answer: "Wheaties"
  },
  {
    id: 777,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Snap, Crackle, Pop\" - Which breakfast cereal is famous for these characters?",
    answer: "Rice Krispies"
  },
  {
    id: 778,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"They're gr-r-reat!\" - Which cereal brand's mascot, Tony the Tiger, says this?",
    answer: "Frosted Flakes"
  },
  {
    id: 779,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Quality never goes out of style\" - Which apparel brand used this slogan?",
    answer: "Levi's"
  },
  {
    id: 780,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Impossible is Nothing\" - Which sportswear brand is this?",
    answer: "Adidas"
  },
  {
    id: 781,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Forever Faster\" - Which sportswear and lifestyle brand uses this tagline?",
    answer: "Puma"
  },
  {
    id: 782,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Citi Never Sleeps\" - Which global bank used this iconic slogan?",
    answer: "Citibank"
  },
  {
    id: 783,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The Bank of New York\" - Which financial institution is known by this name?",
    answer: "BNY Mellon"
  },
  {
    id: 784,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"A Global Force in Financial Services\" - Which insurance company uses this tagline?",
    answer: "MetLife"
  },
  {
    id: 785,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"On Your Side\" - Which insurance company is this?",
    answer: "Nationwide"
  },
  {
    id: 786,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"You're in good hands\" - Which American insurance company uses this slogan?",
    answer: "Allstate"
  },
  {
    id: 787,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Like a good neighbor, [company name] is there\" - Complete the slogan.",
    answer: "State Farm"
  },
  {
    id: 788,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"We know money\" - Which financial services company used this tagline?",
    answer: "New York Life"
  },
  {
    id: 789,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The company you keep\" - Which insurance company is this?",
    answer: "MassMutual"
  },
  {
    id: 790,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Rest Assured\" - Which insurance company uses this pun in its slogan?",
    answer: "New India Assurance"
  },
  {
    id: 791,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Aapke paas, aapke saath\" - Which payment bank launched by the Department of Posts uses this slogan?",
    answer: "India Post Payments Bank"
  },
  {
    id: 792,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Banking Hatke\" - Which payments bank is this?",
    answer: "Fino Payments Bank"
  },
  {
    id: 793,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Simplifying Lives\" - Which digital payments company uses this tagline?",
    answer: "PhonePe"
  },
  {
    id: 794,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"India's most sincere bank\" - Which small finance bank uses this slogan?",
    answer: "Jana Small Finance Bank"
  },
  {
    id: 795,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Your bank at your fingertips\" - Which digital banking initiative could this refer to?",
    answer: "Mobile Banking / UPI"
  },
  {
    id: 796,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"The world is our family\" - This is the tagline of which Indian pharmaceutical company?",
    answer: "Cipla"
  },
  {
    id: 797,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Caring for life\" - Which pharmaceutical company uses this slogan?",
    answer: "Dr. Reddy's Laboratories"
  },
  {
    id: 798,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Driven by science\" - Which pharmaceutical company is this?",
    answer: "Sun Pharma"
  },
  {
    id: 799,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Inspired by patients. Driven by science.\" - Which biopharmaceutical company uses this tagline?",
    answer: "Bristol Myers Squibb"
  },
  {
    id: 800,
    section: "Slogan & Tagline Identification",
    type: "Direct Answer",
    question: "\"Science for a better life\" - Which German multinational pharmaceutical and life sciences company is this?",
    answer: "Bayer"
  }
];
