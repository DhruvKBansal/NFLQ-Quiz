// ===================================================================================
// NFLQ 2025 - Section 4: Jumbled Words
// ===================================================================================

const questions_jumbled_words = [
  {
    id: 801,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T C R E D I (A loan provided by one party to another)",
    answer: "CREDIT"
  },
  {
    id: 802,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "F L I T O O O R P (A collection of financial investments)",
    answer: "PORTFOLIO"
  },
  {
    id: 803,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "V E E L E R A G (Using borrowed capital for an investment)",
    answer: "LEVERAGE"
  },
  {
    id: 804,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T A M O R I Z E (To pay off a debt over time in installments)",
    answer: "AMORTIZE"
  },
  {
    id: 805,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "Y D I L I U T I Q (The ease with which an asset can be converted into cash)",
    answer: "LIQUIDITY"
  },
  {
    id: 806,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D I D E V I N D (A sum of money paid regularly by a company to its shareholders)",
    answer: "DIVIDEND"
  },
  {
    id: 807,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C A L L E R O T A L (Something pledged as security for repayment of a loan)",
    answer: "COLLATERAL"
  },
  {
    id: 808,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "N I F L A T O I N (The rate at which the general level of prices for goods and services is rising)",
    answer: "INFLATION"
  },
  {
    id: 809,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "B U G E T D (An estimate of income and expenditure for a set period of time)",
    answer: "BUDGET"
  },
  {
    id: 810,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C E S S R I O N E (A period of temporary economic decline)",
    answer: "RECESSION"
  },
  {
    id: 811,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S T A S E (A resource with economic value)",
    answer: "ASSET"
  },
  {
    id: 812,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "B I L I T Y L I A (A company's financial debt or obligation)",
    answer: "LIABILITY"
  },
  {
    id: 813,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "Y T I U Q E (The value of the shares issued by a company)",
    answer: "EQUITY"
  },
  {
    id: 814,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "R E V E E N U (Income generated from normal business operations)",
    answer: "REVENUE"
  },
  {
    id: 815,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P E N E S X E (The cost required for something; the money spent on something)",
    answer: "EXPENSE"
  },
  {
    id: 816,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T O R F I P (A financial gain)",
    answer: "PROFIT"
  },
  {
    id: 817,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S O L S (When expenses exceed revenues)",
    answer: "LOSS"
  },
  {
    id: 818,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "H A S C (Money in the physical form of currency)",
    answer: "CASH"
  },
  {
    id: 819,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "N O B D (A fixed income instrument that represents a loan made by an investor to a borrower)",
    answer: "BOND"
  },
  {
    id: 820,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C O K S T (A security that represents the ownership of a fraction of a corporation)",
    answer: "STOCK"
  },
  {
    id: 821,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "K E T A M R (A place where buyers and sellers can gather to facilitate the exchange of goods and services)",
    answer: "MARKET"
  },
  {
    id: 822,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "X A T (A compulsory financial charge imposed by a government)",
    answer: "TAX"
  },
  {
    id: 823,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "N O A L (The lending of money by one or more individuals, organizations, or other entities to other individuals, organizations etc.)",
    answer: "LOAN"
  },
  {
    id: 824,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T E B D (An amount of money owed)",
    answer: "DEBT"
  },
  {
    id: 825,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T E R I N S E T (The charge for the privilege of borrowing money)",
    answer: "INTEREST"
  },
  {
    id: 826,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C I P R I N A L P (The original sum of money borrowed in a loan, or put into an investment)",
    answer: "PRINCIPAL"
  },
  {
    id: 827,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "R O K E R B (An individual or firm that acts as an intermediary between an investor and a securities exchange)",
    answer: "BROKER"
  },
  {
    id: 828,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D E R A T (The action of buying and selling goods and services)",
    answer: "TRADE"
  },
  {
    id: 829,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "V E S T I N (To allocate money with the expectation of a positive benefit/return in the future)",
    answer: "INVEST"
  },
  {
    id: 830,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S A V E (To put money aside for future use)",
    answer: "SAVE"
  },
  {
    id: 831,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "Y C R U R E N C (A system of money in general use in a particular country)",
    answer: "CURRENCY"
  },
  {
    id: 832,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "M O N C E O Y (The wealth and resources of a country or region, especially in terms of the production and consumption of goods and services)",
    answer: "ECONOMY"
  },
  {
    id: 833,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "N A F I C E N (The management of large amounts of money, especially by governments or large companies)",
    answer: "FINANCE"
  },
  {
    id: 834,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C O M E I N (Money received, especially on a regular basis, for work or through investments)",
    answer: "INCOME"
  },
  {
    id: 835,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "W E H A L T (An abundance of valuable possessions or money)",
    answer: "WEALTH"
  },
  {
    id: 836,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P O V E R Y T (The state of being extremely poor)",
    answer: "POVERTY"
  },
  {
    id: 837,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D U F N (A sum of money saved or made available for a particular purpose)",
    answer: "FUND"
  },
  {
    id: 838,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S H A R E (A unit of ownership interest in a corporation or financial asset)",
    answer: "SHARE"
  },
  {
    id: 839,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P O R T I M (To bring goods or services into a country from abroad for sale)",
    answer: "IMPORT"
  },
  {
    id: 840,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P O R T E X (To send goods or services to another country for sale)",
    answer: "EXPORT"
  },
  {
    id: 841,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "F F I R A T (A tax or duty to be paid on a particular class of imports or exports)",
    answer: "TARIFF"
  },
  {
    id: 842,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S U B S I D Y (A sum of money granted by the government to assist an industry or business)",
    answer: "SUBSIDY"
  },
  {
    id: 843,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "B A N K R U P T C Y (A legal proceeding involving a person or business that is unable to repay their outstanding debts)",
    answer: "BANKRUPTCY"
  },
  {
    id: 844,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "M E R G E R (A combination of two things, especially companies, into one)",
    answer: "MERGER"
  },
  {
    id: 845,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "A C Q U I S I T I O N (An asset or object bought or obtained)",
    answer: "ACQUISITION"
  },
  {
    id: 846,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "V E N T U R E (A risky or daring journey or undertaking, especially a new business)",
    answer: "VENTURE"
  },
  {
    id: 847,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C A P I T A L (Wealth in the form of money or other assets owned by a person or organization)",
    answer: "CAPITAL"
  },
  {
    id: 848,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "E N T R E P R E N E U R (A person who sets up a business, taking on financial risks in the hope of profit)",
    answer: "ENTREPRENEUR"
  },
  {
    id: 849,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "I N D U S T R Y (Economic activity concerned with the processing of raw materials and manufacture of goods in factories)",
    answer: "INDUSTRY"
  },
  {
    id: 850,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S E R V I C E (The action of helping or doing work for someone)",
    answer: "SERVICE"
  },
  {
    id: 851,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "G O O D S (Merchandise or possessions)",
    answer: "GOODS"
  },
  {
    id: 852,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C O N S U M E R (A person who purchases goods and services for personal use)",
    answer: "CONSUMER"
  },
  {
    id: 853,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P R O D U C E R (A person, company, or country that makes, grows, or supplies goods or commodities for sale)",
    answer: "PRODUCER"
  },
  {
    id: 854,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S U P P L Y (Make (something needed or wanted) available to someone; provide)",
    answer: "SUPPLY"
  },
  {
    id: 855,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D E M A N D (An insistent and peremptory request, made as if by right)",
    answer: "DEMAND"
  },
  {
    id: 856,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P R I C E (The amount of money expected, required, or given in payment for something)",
    answer: "PRICE"
  },
  {
    id: 857,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C O S T (An amount that has to be paid or spent to buy or obtain something)",
    answer: "COST"
  },
  {
    id: 858,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "V A L U E (The regard that something is held to deserve; the importance, worth, or usefulness of something)",
    answer: "VALUE"
  },
  {
    id: 859,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "R I S K (A situation involving exposure to danger)",
    answer: "RISK"
  },
  {
    id: 860,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "R E T U R N (A profit from an investment)",
    answer: "RETURN"
  },
  {
    id: 861,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "G R O W T H (The process of increasing in size)",
    answer: "GROWTH"
  },
  {
    id: 862,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S T A B I L I T Y (The state of being stable)",
    answer: "STABILITY"
  },
  {
    id: 863,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "I N S U R A N C E (A guarantee of compensation for specified loss, damage, illness, or death in return for payment of a premium)",
    answer: "INSURANCE"
  },
  {
    id: 864,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P R E M I U M (An amount to be paid for a contract of insurance)",
    answer: "PREMIUM"
  },
  {
    id: 865,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P O L I C Y (A contract of insurance)",
    answer: "POLICY"
  },
  {
    id: 866,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C L A I M (A demand or request for something considered one's due)",
    answer: "CLAIM"
  },
  {
    id: 867,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D E D U C T I B L E (An amount that is deducted from an insurance payout)",
    answer: "DEDUCTIBLE"
  },
  {
    id: 868,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P E N S I O N (A regular payment made during a person's retirement)",
    answer: "PENSION"
  },
  {
    id: 869,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "R E T I R E M E N T (The action or fact of leaving one's job and ceasing to work)",
    answer: "RETIREMENT"
  },
  {
    id: 870,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S A L A R Y (A fixed regular payment from an employer to an employee)",
    answer: "SALARY"
  },
  {
    id: 871,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "W A G E (A payment for labor or services on an hourly, daily, or weekly basis)",
    answer: "WAGE"
  },
  {
    id: 872,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "E A R N I N G S (Money obtained in return for labor or services)",
    answer: "EARNINGS"
  },
  {
    id: 873,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S P E N D I N G (The action of spending money)",
    answer: "SPENDING"
  },
  {
    id: 874,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "B O R R O W (To take and use something belonging to someone else with the intention of returning it)",
    answer: "BORROW"
  },
  {
    id: 875,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "L E N D (To grant to someone the use of something on the understanding that it shall be returned)",
    answer: "LEND"
  },
  {
    id: 876,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "A U D I T (An official inspection of an organization's accounts)",
    answer: "AUDIT"
  },
  {
    id: 877,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "B A L A N C E (A statement of the assets, liabilities, and capital of a business)",
    answer: "BALANCE"
  },
  {
    id: 878,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "S H E E T (A financial statement, as in Balance...)",
    answer: "SHEET"
  },
  {
    id: 879,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "F L O W (The movement of money, as in Cash...)",
    answer: "FLOW"
  },
  {
    id: 880,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "A C C O U N T (A record or statement of financial expenditure and receipts)",
    answer: "ACCOUNT"
  },
  {
    id: 881,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "L E D G E R (A book of financial accounts)",
    answer: "LEDGER"
  },
  {
    id: 882,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "J O U R N A L (A financial diary or record of transactions)",
    answer: "JOURNAL"
  },
  {
    id: 883,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T R A N S A C T I O N (An instance of buying or selling something)",
    answer: "TRANSACTION"
  },
  {
    id: 884,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "R E C E I P T (A written acknowledgment of having received a specified amount of money)",
    answer: "RECEIPT"
  },
  {
    id: 885,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "I N V O I C E (A bill for goods or services)",
    answer: "INVOICE"
  },
  {
    id: 886,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "P A Y M E N T (The action or process of paying someone or something)",
    answer: "PAYMENT"
  },
  {
    id: 887,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D E P O S I T (A sum of money paid into a bank account)",
    answer: "DEPOSIT"
  },
  {
    id: 888,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "W I T H D R A W A L (The action of taking money out of an account)",
    answer: "WITHDRAWAL"
  },
  {
    id: 889,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "C H E Q U E (A written order to a bank to pay a stated sum)",
    answer: "CHEQUE"
  },
  {
    id: 890,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "D R A F T (A written order to a bank, as in Bank...)",
    answer: "DRAFT"
  },
  {
    id: 891,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "M O R T G A G E (A loan obtained against property)",
    answer: "MORTGAGE"
  },
  {
    id: 892,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "F O R E C L O S U R E (The process of taking possession of a mortgaged property)",
    answer: "FORECLOSURE"
  },
  {
    id: 893,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "I N H E R I T A N C E (A thing that is inherited)",
    answer: "INHERITANCE"
  },
  {
    id: 894,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "E S T A T E (All the money and property owned by a particular person, especially at death)",
    answer: "ESTATE"
  },
  {
    id: 895,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "T R U S T (An arrangement whereby a person holds property for the good of beneficiaries)",
    answer: "TRUST"
  },
  {
    id: 896,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "W I L L (A legal document containing instructions for one's property after death)",
    answer: "WILL"
  },
  {
    id: 897,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "B E N E F I C I A R Y (A person who derives advantage from a will, trust, or insurance policy)",
    answer: "BENEFICIARY"
  },
  {
    id: 898,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "E X E C U T O R (A person appointed by a testator to carry out the terms of their will)",
    answer: "EXECUTOR"
  },
  {
    id: 899,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "G U A R D I A N (A person who legally has the responsibility of looking after someone unable to manage their own affairs)",
    answer: "GUARDIAN"
  },
  {
    id: 900,
    section: "Jumbled Words",
    type: "Jumbled Words",
    question: "N O M I N E E (A person formally entered as a recipient of a grant or award)",
    answer: "NOMINEE"
  }
];
