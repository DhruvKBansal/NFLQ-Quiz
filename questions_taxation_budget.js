// ===================================================================================
// NFLQ 2025 - Section E: Taxation & Budget
// ===================================================================================

const questions_taxation_budget = [
  {
    id: 281,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Income Tax in India is a form of:",
    options: ["Direct Tax", "Indirect Tax", "Cess", "Surcharge"],
    answer: "Direct Tax"
  },
  {
    id: 282,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The annual budget of India is also known as the:",
    options: ["Fiscal Policy Statement", "Annual Financial Statement", "Economic Survey", "Finance Bill"],
    answer: "Annual Financial Statement"
  },
  {
    id: 283,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which section of the Income Tax Act deals with deductions for investments in schemes like PPF, NSC, and ELSS?",
    options: ["Section 80D", "Section 80G", "Section 80C", "Section 24"],
    answer: "Section 80C"
  },
  {
    id: 284,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is a 'Surcharge' in the context of income tax?",
    options: ["A penalty for late payment of tax", "An additional tax levied on the amount of income tax for high-income earners", "A discount on the tax payable", "A type of tax refund"],
    answer: "An additional tax levied on the amount of income tax for high-income earners"
  },
  {
    id: 285,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Financial Year' in India for taxation and budgeting purposes runs from:",
    options: ["January 1 to December 31", "April 1 to March 31", "July 1 to June 30", "October 1 to September 30"],
    answer: "April 1 to March 31"
  },
  {
    id: 286,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Tax Deducted at Source' (TDS)?",
    options: ["A tax paid directly by the individual", "A system where the entity responsible for making specified payments deducts tax at the source and remits it to the government", "A type of wealth tax", "A penalty for tax evasion"],
    answer: "A system where the entity responsible for making specified payments deducts tax at the source and remits it to the government"
  },
  {
    id: 287,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'GST Council' in India is headed by the:",
    options: ["Prime Minister of India", "RBI Governor", "Union Finance Minister", "President of India"],
    answer: "Union Finance Minister"
  },
  {
    id: 288,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "'Capital Gains Tax' is levied on the profit from the sale of:",
    options: ["Goods and services", "Assets like property, shares, or gold", "Agricultural produce", "Lottery winnings"],
    answer: "Assets like property, shares, or gold"
  },
  {
    id: 289,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What does 'ITR' stand for in the context of taxation?",
    options: ["Indian Tax Regulations", "Income Tax Return", "Internal Tax Revenue", "Investment Tax Rebate"],
    answer: "Income Tax Return"
  },
  {
    id: 290,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The tax regime where individuals can opt for lower tax rates by forgoing most deductions and exemptions is known as the:",
    options: ["Old Tax Regime", "New Tax Regime", "Simplified Tax Regime", "Standard Tax Regime"],
    answer: "New Tax Regime"
  },
  {
    id: 291,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is a 'Cess'?",
    options: ["A general-purpose tax", "A tax on tax, levied by the government for a specific purpose", "A type of local body tax", "A fee for government services"],
    answer: "A tax on tax, levied by the government for a specific purpose"
  },
  {
    id: 292,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which form is used by employees to declare their investments to their employer for TDS calculation?",
    options: ["Form 16", "Form 26AS", "Form 12BB", "ITR-1"],
    answer: "Form 12BB"
  },
  {
    id: 293,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "'Securities Transaction Tax' (STT) is levied on:",
    options: ["The purchase and sale of real estate", "The purchase and sale of securities like shares and equity mutual funds on a stock exchange", "All banking transactions", "The interest earned on bonds"],
    answer: "The purchase and sale of securities like shares and equity mutual funds on a stock exchange"
  },
  {
    id: 294,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Union Budget' is presented in the Parliament by the:",
    options: ["Prime Minister", "President", "Finance Minister", "RBI Governor"],
    answer: "Finance Minister"
  },
  {
    id: 295,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Advance Tax'?",
    options: ["A tax paid in advance for future purchases", "Paying income tax in installments during the financial year itself, instead of at the end of the year", "A tax on advance payments received", "A type of corporate tax"],
    answer: "Paying income tax in installments during the financial year itself, instead of at the end of the year"
  },
  {
    id: 296,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which section of the Income Tax Act provides deductions for the interest paid on a home loan?",
    options: ["Section 80C", "Section 24(b)", "Section 80D", "Section 80TTA"],
    answer: "Section 24(b)"
  },
  {
    id: 297,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Tax Evasion'?",
    options: ["Using legal methods to reduce tax liability", "Using illegal means to avoid paying taxes", "Delaying the payment of taxes", "Applying for a tax refund"],
    answer: "Using illegal means to avoid paying taxes"
  },
  {
    id: 298,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "'Form 16' is a certificate issued by an employer to an employee, providing details of:",
    options: ["The employee's performance", "The salary paid and the tax deducted at source (TDS)", "The employee's investments", "The employee's leave record"],
    answer: "The salary paid and the tax deducted at source (TDS)"
  },
  {
    id: 299,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Tax Avoidance'?",
    options: ["The legal usage of the tax regime to one's own advantage to reduce the amount of tax that is payable", "The illegal non-payment of taxes", "A government scheme to avoid taxes", "A synonym for tax evasion"],
    answer: "The legal usage of the tax regime to one's own advantage to reduce the amount of tax that is payable"
  },
  {
    id: 300,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Long-Term Capital Gain' (LTCG) on listed equity shares is currently taxed at what rate for gains exceeding a certain limit?",
    options: ["5%", "10%", "15%", "20%"],
    answer: "10%"
  },
  {
    id: 301,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which section of the Income Tax Act provides deductions for health insurance premiums?",
    options: ["Section 80C", "Section 80E", "Section 80D", "Section 80G"],
    answer: "Section 80D"
  },
  {
    id: 302,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "'Form 26AS' is a consolidated annual tax statement that shows details of:",
    options: ["The income declared by the taxpayer", "Tax deducted at source (TDS), tax collected at source (TCS), advance tax paid, etc.", "The taxpayer's bank transactions", "The taxpayer's investments"],
    answer: "Tax deducted at source (TDS), tax collected at source (TCS), advance tax paid, etc."
  },
  {
    id: 303,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'HRA' in the context of salary and taxation?",
    options: ["Housing Rental Agreement", "House Rent Allowance", "High-Risk Asset", "Human Resource Administration"],
    answer: "House Rent Allowance"
  },
  {
    id: 304,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Interim Budget' is presented in a year when:",
    options: ["The economy is in a recession", "A general election is approaching", "There is a change in the Finance Minister", "The government has a large surplus"],
    answer: "A general election is approaching"
  },
  {
    id: 305,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is a 'PAN' card?",
    options: ["A personal identity card", "A Permanent Account Number, a unique ten-character alphanumeric identifier for taxpayers", "A proof of address", "A card for accessing government subsidies"],
    answer: "A Permanent Account Number, a unique ten-character alphanumeric identifier for taxpayers"
  },
  {
    id: 306,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which of these is NOT a component of the GST in India?",
    options: ["CGST", "SGST", "IGST", "RGST"],
    answer: "RGST"
  },
  {
    id: 307,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is the 'Standard Deduction' for salaried individuals and pensioners?",
    options: ["A deduction for specific expenses incurred", "A flat deduction from the gross salary, irrespective of actual expenses", "A deduction for investments", "A deduction for home loan interest"],
    answer: "A flat deduction from the gross salary, irrespective of actual expenses"
  },
  {
    id: 308,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "'Tax Planning' involves:",
    options: ["Illegally hiding income", "Analyzing one's financial situation to maximize tax savings through legal means", "Delaying tax payments", "Filing tax returns on the last day"],
    answer: "Analyzing one's financial situation to maximize tax savings through legal means"
  },
  {
    id: 309,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which section of the Income Tax Act provides deductions for interest on an education loan?",
    options: ["Section 80C", "Section 80E", "Section 80D", "Section 80G"],
    answer: "Section 80E"
  },
  {
    id: 310,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Dividend Distribution Tax' (DDT)?",
    options: ["A tax paid by the person who receives the dividend", "A tax that was formerly levied on companies when they paid dividends (now abolished and dividends are taxed in the hands of the recipient)", "A tax on the distribution of assets", "A type of capital gains tax"],
    answer: "A tax that was formerly levied on companies when they paid dividends (now abolished and dividends are taxed in the hands of the recipient)"
  },
  {
    id: 311,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The concept of 'Fiscal Consolidation' refers to the government's efforts to:",
    options: ["Increase its spending", "Reduce its fiscal deficit and public debt", "Lower the tax rates", "Expand the money supply"],
    answer: "Reduce its fiscal deficit and public debt"
  },
  {
    id: 312,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is the 'Assessment Year' in income tax?",
    options: ["The year in which the income is earned", "The year following the financial year, in which the income earned in the financial year is assessed to tax", "The year the tax return is filed", "A period of two years"],
    answer: "The year following the financial year, in which the income earned in the financial year is assessed to tax"
  },
  {
    id: 313,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which section of the Income Tax Act provides deductions for donations to certain funds and charitable institutions?",
    options: ["Section 80C", "Section 80D", "Section 80G", "Section 80U"],
    answer: "Section 80G"
  },
  {
    id: 314,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Tax Collected at Source' (TCS)?",
    options: ["A tax collected from employees' salaries", "A tax collected by the seller from the buyer at the time of sale of certain goods", "A tax on bank transactions", "A type of indirect tax"],
    answer: "A tax collected by the seller from the buyer at the time of sale of certain goods"
  },
  {
    id: 315,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Finance Bill' contains the government's proposals for:",
    options: ["New laws and regulations", "Taxation and other financial matters for the upcoming financial year", "The five-year plan", "The monetary policy"],
    answer: "Taxation and other financial matters for the upcoming financial year"
  },
  {
    id: 316,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Wealth Tax' in India?",
    options: ["A tax on high incomes", "A tax on luxury goods", "A tax on the net wealth of individuals, which has now been abolished", "A type of property tax"],
    answer: "A tax on the net wealth of individuals, which has now been abolished"
  },
  {
    id: 317,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which ITR form is typically used by salaried individuals with an income up to ₹50 lakh?",
    options: ["ITR-1 (Sahaj)", "ITR-2", "ITR-3", "ITR-4"],
    answer: "ITR-1 (Sahaj)"
  },
  {
    id: 318,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Short-Term Capital Gain' (STCG) on listed equity shares (where STT is paid) is taxed at what rate?",
    options: ["10%", "15%", "20%", "At the individual's slab rate"],
    answer: "15%"
  },
  {
    id: 319,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Angel Tax'?",
    options: ["A tax on charitable donations", "A tax on the capital raised by startups from angel investors if the share price is seen as exceeding the fair market value", "A tax on profits from investments in startups", "A tax exemption for angel investors"],
    answer: "A tax on the capital raised by startups from angel investors if the share price is seen as exceeding the fair market value"
  },
  {
    id: 320,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Consolidated Fund of India' is the main account of the government where:",
    options: ["Only tax revenues are credited", "All revenues received, loans raised, and receipts from recoveries of loans are credited", "Only foreign aid is kept", "Funds for emergency situations are held"],
    answer: "All revenues received, loans raised, and receipts from recoveries of loans are credited"
  },
  {
    id: 321,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Double Taxation Avoidance Agreement' (DTAA)?",
    options: ["An agreement to avoid paying taxes in two countries", "A tax treaty signed between two or more countries to help taxpayers avoid paying double taxes on the same income", "An illegal method to evade taxes", "An agreement between a taxpayer and the tax department"],
    answer: "A tax treaty signed between two or more countries to help taxpayers avoid paying double taxes on the same income"
  },
  {
    id: 322,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Contingency Fund of India' is held by whom on behalf of the President?",
    options: ["The Prime Minister", "The RBI Governor", "The Finance Secretary", "The Comptroller and Auditor General"],
    answer: "The Finance Secretary"
  },
  {
    id: 323,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is a 'Zero-based Budgeting' approach?",
    options: ["Budgeting with zero deficit", "A method of budgeting in which all expenses must be justified for each new period, starting from a 'zero base'", "A budget with no new taxes", "A budget prepared with no prior data"],
    answer: "A method of budgeting in which all expenses must be justified for each new period, starting from a 'zero base'"
  },
  {
    id: 324,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "'Customs Duty' is a tax levied on:",
    options: ["Goods manufactured within the country", "Goods imported into or exported from the country", "Services provided within the country", "Interstate trade"],
    answer: "Goods imported into or exported from the country"
  },
  {
    id: 325,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is 'Tax Harvesting'?",
    options: ["The process of collecting taxes from farmers", "A technique used by investors to book profits or losses to reduce their overall tax liability", "A government drive to increase tax collection", "A method of calculating agricultural income tax"],
    answer: "A technique used by investors to book profits or losses to reduce their overall tax liability"
  },
  {
    id: 326,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Public Account of India' holds money that:",
    options: ["Belongs to the government", "Is held by the government in trust for others, like provident funds and small savings", "Is used for defense expenditure", "Is part of the foreign exchange reserves"],
    answer: "Is held by the government in trust for others, like provident funds and small savings"
  },
  {
    id: 327,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is the 'Goods and Services Tax Identification Number' (GSTIN)?",
    options: ["A 10-digit alphanumeric number", "A 15-digit state-wise, PAN-based number", "An 8-digit numeric code", "A code used for international trade"],
    answer: "A 15-digit state-wise, PAN-based number"
  },
  {
    id: 328,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "What is a 'Capital Budget'?",
    options: ["The part of the budget that deals with revenue and expenditure", "The part of the budget that deals with capital receipts and payments (e.g., loans, investments)", "The budget for the capital city", "A budget focused on human capital development"],
    answer: "The part of the budget that deals with capital receipts and payments (e.g., loans, investments)"
  },
  {
    id: 329,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "The 'Kelkar Committee' was famously associated with recommendations on:",
    options: ["Banking reforms", "Tax reforms", "Insurance sector reforms", "Stock market regulations"],
    answer: "Tax reforms"
  },
  {
    id: 330,
    section: "Taxation & Budget",
    type: "Multiple Choice",
    question: "Which authority in India is responsible for resolving disputes related to the levy and collection of GST?",
    options: ["The Supreme Court", "The High Courts", "The GST Council", "The Central Board of Indirect Taxes and Customs"],
    answer: "The GST Council"
  }
];
