// ===================================================================================
// NFLQ 2025 - Section D: Mutual Funds & Insurance
// ===================================================================================

const questions_mutual_funds_insurance = [
  {
    id: 211,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A mutual fund that invests in a mix of both equity and debt instruments is known as a:",
    options: ["Equity Fund", "Debt Fund", "Hybrid Fund", "Sectoral Fund"],
    answer: "Hybrid Fund"
  },
  {
    id: 212,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What does NAV stand for in the context of mutual funds?",
    options: ["Net Annual Value", "Net Asset Value", "New Allotted Value", "Nominal Asset Valuation"],
    answer: "Net Asset Value"
  },
  {
    id: 213,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A Systematic Investment Plan (SIP) is a method of investing in:",
    options: ["Real Estate", "Mutual Funds", "Government Bonds", "Direct Equity"],
    answer: "Mutual Funds"
  },
  {
    id: 214,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "Which type of mutual fund scheme has a fixed number of units and trades on a stock exchange?",
    options: ["Open-ended Fund", "Closed-ended Fund", "Interval Fund", "Liquid Fund"],
    answer: "Closed-ended Fund"
  },
  {
    id: 215,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The document that provides investors with detailed information about a mutual fund scheme is called the:",
    options: ["KYC Document", "Scheme Information Document (SID)", "PAN Card", "Demat Statement"],
    answer: "Scheme Information Document (SID)"
  },
  {
    id: 216,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "In insurance, the amount of money an individual must pay for a covered service before the insurance company starts to pay is called the:",
    options: ["Premium", "Deductible", "Co-payment", "Sum Assured"],
    answer: "Deductible"
  },
  {
    id: 217,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The principle of 'Utmost Good Faith' (Uberrimae Fidei) in insurance means that:",
    options: ["The insurer must pay all claims", "Both the insured and insurer must disclose all material facts", "The insured can claim from multiple insurers", "The premium must be paid on time"],
    answer: "Both the insured and insurer must disclose all material facts"
  },
  {
    id: 218,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "Which type of insurance provides coverage for a specific period, such as 10 or 20 years?",
    options: ["Whole Life Insurance", "Term Life Insurance", "Endowment Policy", "ULIP"],
    answer: "Term Life Insurance"
  },
  {
    id: 219,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What does TPA stand for in the health insurance industry?",
    options: ["Total Premium Amount", "Third-Party Administrator", "Tax Planning Advisor", "Temporary Policy Approval"],
    answer: "Third-Party Administrator"
  },
  {
    id: 220,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "An Exchange-Traded Fund (ETF) is a type of investment fund that is traded on:",
    options: ["A commodity exchange", "A forex market", "A stock exchange", "An over-the-counter market"],
    answer: "A stock exchange"
  },
  {
    id: 221,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is an 'Open-ended' mutual fund?",
    options: ["A fund with a fixed maturity date", "A fund that is available for subscription and repurchase on a continuous basis", "A fund that invests in a single sector", "A fund that is traded only on stock exchanges"],
    answer: "A fund that is available for subscription and repurchase on a continuous basis"
  },
  {
    id: 222,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The regulator for the mutual fund industry in India is:",
    options: ["RBI", "SEBI", "AMFI", "IRDAI"],
    answer: "SEBI"
  },
  {
    id: 223,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Sectoral Fund' invests predominantly in the stocks of companies in:",
    options: ["Multiple sectors", "A specific sector of the economy", "Only large-cap companies", "Only government-owned companies"],
    answer: "A specific sector of the economy"
  },
  {
    id: 224,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is the 'Sum Assured' in an insurance policy?",
    options: ["The premium paid by the policyholder", "The maturity value of the policy", "The guaranteed amount that the insurer agrees to pay on the occurrence of the insured event", "The cash value of the policy"],
    answer: "The guaranteed amount that the insurer agrees to pay on the occurrence of the insured event"
  },
  {
    id: 225,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'ULIP' is a financial product that offers a combination of:",
    options: ["Savings and Loan", "Insurance and Investment", "Investment and Pension", "Insurance and Health cover"],
    answer: "Insurance and Investment"
  },
  {
    id: 226,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is the primary objective of a 'Liquid Fund'?",
    options: ["High capital appreciation", "To provide high liquidity, safety of principal, and moderate income", "Long-term growth", "Tax saving"],
    answer: "To provide high liquidity, safety of principal, and moderate income"
  },
  {
    id: 227,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The principle of 'Indemnity' in insurance states that the policy should:",
    options: ["Guarantee a profit to the insured", "Restore the insured to the same financial position as before the loss", "Cover all types of losses", "Allow the insured to claim more than the actual loss"],
    answer: "Restore the insured to the same financial position as before the loss"
  },
  {
    id: 228,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is an 'ELSS' mutual fund?",
    options: ["An Exchange Linked Savings Scheme", "An Equity Linked Savings Scheme", "An Electronically Linked Secure Scheme", "An Emergency Liquidity Support Scheme"],
    answer: "An Equity Linked Savings Scheme"
  },
  {
    id: 229,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Free Look Period' in an insurance policy is a period during which:",
    options: ["No premium needs to be paid", "The policyholder can review the policy and return it if not satisfied", "The claim cannot be filed", "The policy has no cash value"],
    answer: "The policyholder can review the policy and return it if not satisfied"
  },
  {
    id: 230,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Systematic Withdrawal Plan' (SWP)?",
    options: ["A plan to systematically invest money", "A facility that allows an investor to withdraw a fixed amount from a mutual fund scheme at regular intervals", "A plan to withdraw money from a bank account", "A type of pension plan"],
    answer: "A facility that allows an investor to withdraw a fixed amount from a mutual fund scheme at regular intervals"
  },
  {
    id: 231,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Solvency Ratio' of an insurance company is a measure of its:",
    options: ["Profitability", "Financial ability to meet its debt obligations and other liabilities", "Market share", "Customer satisfaction"],
    answer: "Financial ability to meet its debt obligations and other liabilities"
  },
  {
    id: 232,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Balanced Advantage Fund' is a type of hybrid fund that:",
    options: ["Maintains a fixed allocation to equity and debt", "Dynamically manages its allocation to equity and debt based on market conditions", "Invests only in balanced companies", "Is suitable only for balanced-risk investors"],
    answer: "Dynamically manages its allocation to equity and debt based on market conditions"
  },
  {
    id: 233,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is 'Reinsurance'?",
    options: ["Renewing an existing insurance policy", "Taking a second insurance policy for the same asset", "The practice where an insurance company transfers a portion of its risk to another insurer", "A type of online insurance"],
    answer: "The practice where an insurance company transfers a portion of its risk to another insurer"
  },
  {
    id: 234,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Assets Under Management' (AUM) of a mutual fund refers to the:",
    options: ["The fund's annual profit", "The total market value of the investments managed by the fund", "The number of investors in the fund", "The age of the fund"],
    answer: "The total market value of the investments managed by the fund"
  },
  {
    id: 235,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Top-up' in a health insurance policy?",
    options: ["An increase in the premium", "A policy that provides additional coverage above a certain threshold limit of an existing policy", "A bonus added to the policy", "A discount on the premium"],
    answer: "A policy that provides additional coverage above a certain threshold limit of an existing policy"
  },
  {
    id: 236,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Contra Fund' follows an investment strategy of investing in stocks that are:",
    options: ["Currently popular and performing well", "Currently out of favor or underperforming, but have long-term potential", "In the same sector", "Only in the NIFTY 50 index"],
    answer: "Currently out of favor or underperforming, but have long-term potential"
  },
  {
    id: 237,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The principle of 'Insurable Interest' means that the insured must:",
    options: ["Have an interest in buying insurance", "Be interested in the financial well-being of the insurer", "Suffer a financial loss if the insured event occurs", "Be the owner of the insured property"],
    answer: "Suffer a financial loss if the insured event occurs"
  },
  {
    id: 238,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Grace Period' in an insurance policy?",
    options: ["A period where no claims can be made", "A specified period after the premium due date during which the policyholder can pay the premium without the policy lapsing", "A waiting period before certain illnesses are covered", "A period where the policyholder gets a discount"],
    answer: "A specified period after the premium due date during which the policyholder can pay the premium without the policy lapsing"
  },
  {
    id: 239,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'AMFI' is an association of:",
    options: ["Insurance companies in India", "Mutual Funds in India", "Stockbrokers in India", "Foreign investors in India"],
    answer: "Mutual Funds in India"
  },
  {
    id: 240,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "An 'Endowment Policy' is a type of life insurance policy that:",
    options: ["Provides coverage only for a specific term", "Pays a lump sum after a specific term or on the death of the insured, whichever is earlier", "Is linked to the stock market", "Covers only accidental death"],
    answer: "Pays a lump sum after a specific term or on the death of the insured, whichever is earlier"
  },
  {
    id: 241,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is an 'Exit Load' in a mutual fund?",
    options: ["A fee charged when you invest in a fund", "A fee charged when you redeem or sell your units from a fund before a certain period", "An annual maintenance charge", "A tax on the capital gains from the fund"],
    answer: "A fee charged when you redeem or sell your units from a fund before a certain period"
  },
  {
    id: 242,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Floater' health insurance policy means:",
    options: ["The premium amount floats or changes every year", "A single policy that covers all members of a family under a single sum insured", "A policy that can be transferred from one person to another", "A policy that covers medical expenses incurred abroad"],
    answer: "A single policy that covers all members of a family under a single sum insured"
  },
  {
    id: 243,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Thematic Fund' invests in stocks that are:",
    options: ["In a single sector", "Centered around a specific idea or theme, which could span across multiple sectors", "Only in large-cap companies", "Only in international companies"],
    answer: "Centered around a specific idea or theme, which could span across multiple sectors"
  },
  {
    id: 244,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The concept of 'Subrogation' in insurance gives the insurer the right to:",
    options: ["Reject a claim without reason", "Step into the shoes of the insured and pursue recovery from a third party who caused the loss", "Increase the premium after a claim", "Cancel the policy at any time"],
    answer: "Step into the shoes of the insured and pursue recovery from a third party who caused the loss"
  },
  {
    id: 245,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Fund of Funds' (FoF)?",
    options: ["A fund that invests directly in stocks and bonds", "A mutual fund scheme that invests in other mutual fund schemes", "The largest mutual fund in terms of AUM", "A government-managed fund"],
    answer: "A mutual fund scheme that invests in other mutual fund schemes"
  },
  {
    id: 246,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Moral Hazard' in insurance refers to the risk that a party:",
    options: ["Is unable to pay the premium", "Has an incentive to take unusual risks in a desperate attempt to earn a profit before a contract settles", "Provides false information on the application", "Is naturally prone to accidents"],
    answer: "Has an incentive to take unusual risks in a desperate attempt to earn a profit before a contract settles"
  },
  {
    id: 247,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Index Funds' are passively managed funds that aim to:",
    options: ["Beat the market returns", "Replicate the performance of a specific market index like the Sensex or Nifty", "Invest in a concentrated portfolio of stocks", "Provide guaranteed returns"],
    answer: "Replicate the performance of a specific market index like the Sensex or Nifty"
  },
  {
    id: 248,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Rider' in an insurance policy is:",
    options: ["The main benefit of the policy", "The nominee of the policy", "An add-on provision to a basic policy that provides additional benefits", "The agent who sold the policy"],
    answer: "An add-on provision to a basic policy that provides additional benefits"
  },
  {
    id: 249,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Gilt Fund'?",
    options: ["A mutual fund that invests in gold", "A mutual fund that invests exclusively in government securities", "A fund that invests in shares of jewelry companies", "An international mutual fund"],
    answer: "A mutual fund that invests exclusively in government securities"
  },
  {
    id: 250,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Lapse' of an insurance policy occurs when:",
    options: ["A claim is filed", "The policy matures", "The policyholder fails to pay the premium within the grace period", "The policyholder surrenders the policy"],
    answer: "The policyholder fails to pay the premium within the grace period"
  },
  {
    id: 251,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Sharpe Ratio' of a mutual fund measures its:",
    options: ["Total return", "Risk-adjusted return", "Expense ratio", "Asset size"],
    answer: "Risk-adjusted return"
  },
  {
    id: 252,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Money-back' policy is a type of life insurance policy where:",
    options: ["The full premium is returned if no claim is made", "A percentage of the sum assured is paid to the insured at periodic intervals during the policy term", "The policy can be cancelled at any time for a full refund", "The investment is linked to the money market"],
    answer: "A percentage of the sum assured is paid to the insured at periodic intervals during the policy term"
  },
  {
    id: 253,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is the role of a 'Fund Manager' in a mutual fund?",
    options: ["To handle customer service", "To make investment decisions for the fund's portfolio", "To market the fund to new investors", "To ensure regulatory compliance"],
    answer: "To make investment decisions for the fund's portfolio"
  },
  {
    id: 254,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Cashless Hospitalization' in a health insurance policy means:",
    options: ["The hospital provides free treatment", "The insurance company directly settles the medical bills with the network hospital", "The policyholder does not need to pay any premium", "The policy covers only expenses paid in cash"],
    answer: "The insurance company directly settles the medical bills with the network hospital"
  },
  {
    id: 255,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Dividend Yield Fund' is a type of equity mutual fund that invests primarily in stocks of companies that have a good track record of paying:",
    options: ["High salaries", "Dividends", "Bonuses", "High returns"],
    answer: "Dividends"
  },
  {
    id: 256,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The principle of 'Contribution' in insurance applies when:",
    options: ["The insured contributes to the loss", "The same subject matter is insured with more than one insurer", "The premium is paid in contributions", "The insurer contributes to a social cause"],
    answer: "The same subject matter is insured with more than one insurer"
  },
  {
    id: 257,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is an 'Arbitrage Fund'?",
    options: ["A fund that speculates on market direction", "A fund that aims to generate returns by capitalizing on the price difference of a stock in the cash and derivatives markets", "A fund that invests in art and collectibles", "A fund that invests in government projects"],
    answer: "A fund that aims to generate returns by capitalizing on the price difference of a stock in the cash and derivatives markets"
  },
  {
    id: 258,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Waiting Period' in a health insurance policy is the time:",
    options: ["It takes to issue the policy", "An insured must wait after buying the policy before some or all of their coverage comes into effect", "It takes to process a claim", "Given to renew the policy"],
    answer: "An insured must wait after buying the policy before some or all of their coverage comes into effect"
  },
  {
    id: 259,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Multi-Cap Fund'?",
    options: ["A fund that invests in multiple countries", "A fund that invests in companies across different market capitalizations (large-cap, mid-cap, small-cap)", "A fund that can be managed by multiple fund managers", "A fund that wears multiple hats"],
    answer: "A fund that invests in companies across different market capitalizations (large-cap, mid-cap, small-cap)"
  },
  {
    id: 260,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Surrender Value' is the amount a policyholder receives if they:",
    options: ["Die during the policy term", "Decide to terminate the policy before its maturity", "Complete the policy term", "File a claim"],
    answer: "Decide to terminate the policy before its maturity"
  },
  {
    id: 261,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Treynor Ratio' is similar to the Sharpe Ratio but uses which measure of risk?",
    options: ["Standard Deviation", "Beta", "Variance", "Alpha"],
    answer: "Beta"
  },
  {
    id: 262,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Group Insurance' policy?",
    options: ["A policy taken by a group of friends", "A single policy that covers a group of people, typically employees of a company or members of an association", "A policy that covers a group of related risks", "A policy sold by a group of insurers"],
    answer: "A single policy that covers a group of people, typically employees of a company or members of an association"
  },
  {
    id: 263,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Value Fund'?",
    options: ["A fund that aims to provide the best value for money", "A fund that invests in stocks that are believed to be trading for less than their intrinsic or book value", "A fund that invests in high-value assets", "A fund with a very high NAV"],
    answer: "A fund that invests in stocks that are believed to be trading for less than their intrinsic or book value"
  },
  {
    id: 264,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Claim Settlement Ratio' of an insurance company indicates the:",
    options: ["Speed at which claims are settled", "Percentage of claims paid out of the total claims received", "Average amount paid per claim", "Number of claims rejected"],
    answer: "Percentage of claims paid out of the total claims received"
  },
  {
    id: 265,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Systematic Transfer Plan' (STP)?",
    options: ["A plan to transfer money between bank accounts", "A plan that allows an investor to periodically transfer a fixed amount from one mutual fund scheme to another", "A plan for transferring ownership of shares", "A government scheme for transferring subsidies"],
    answer: "A plan that allows an investor to periodically transfer a fixed amount from one mutual fund scheme to another"
  },
  {
    id: 266,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Annuity' is a type of insurance product that provides:",
    options: ["A lump sum payment on death", "Coverage for critical illnesses", "A series of payments at regular intervals, typically for retirement income", "A loan facility"],
    answer: "A series of payments at regular intervals, typically for retirement income"
  },
  {
    id: 267,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Benchmark' of a mutual fund is:",
    options: ["The fund manager's performance target", "A standard against which the performance of the fund is measured", "The minimum investment amount in the fund", "The highest NAV achieved by the fund"],
    answer: "A standard against which the performance of the fund is measured"
  },
  {
    id: 268,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Exclusions' in an insurance policy are:",
    options: ["The benefits included in the policy", "The conditions or circumstances that are not covered by the policy", "The list of network hospitals", "The personal details of the policyholder"],
    answer: "The conditions or circumstances that are not covered by the policy"
  },
  {
    id: 269,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Large-Cap Fund' primarily invests in companies with:",
    options: ["A small market capitalization", "A large market capitalization", "A history of rapid growth", "Operations in multiple countries"],
    answer: "A large market capitalization"
  },
  {
    id: 270,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Nominee' in an insurance policy is the person who:",
    options: ["Sells the policy", "Is designated by the policyholder to receive the policy benefits in the event of the insured's death", "Underwrites the policy", "Pays the premium"],
    answer: "Is designated by the policyholder to receive the policy benefits in the event of the insured's death"
  },
  {
    id: 271,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is 'Portfolio Churn Ratio'?",
    options: ["The rate at which investors leave a fund", "A measure of how frequently the assets within a mutual fund are bought and sold by the fund managers", "The ratio of profit to loss in a portfolio", "The number of stocks in a portfolio"],
    answer: "A measure of how frequently the assets within a mutual fund are bought and sold by the fund managers"
  },
  {
    id: 272,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Third-Party Insurance' for vehicles covers damages to:",
    options: ["The vehicle owner", "The insured vehicle", "A third person or property involved in an accident with the insured vehicle", "The driver of the insured vehicle"],
    answer: "A third person or property involved in an accident with the insured vehicle"
  },
  {
    id: 273,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Mid-Cap Fund' invests in companies that are:",
    options: ["The largest in the market", "The smallest in the market", "Positioned between large-cap and small-cap companies in terms of market capitalization", "Based in the middle of the country"],
    answer: "Positioned between large-cap and small-cap companies in terms of market capitalization"
  },
  {
    id: 274,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Adverse Selection' in insurance is the tendency of:",
    options: ["Insurers to select only low-risk individuals", "People with a higher-than-average risk of loss to seek insurance more than others", "Agents to sell unsuitable policies", "Policyholders to select the wrong coverage"],
    answer: "People with a higher-than-average risk of loss to seek insurance more than others"
  },
  {
    id: 275,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Growth Fund'?",
    options: ["A fund that guarantees growth", "A fund that invests in companies expected to grow faster than the overall market", "A fund that invests in agricultural companies", "A fund designed for retired individuals"],
    answer: "A fund that invests in companies expected to grow faster than the overall market"
  },
  {
    id: 276,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Cover Note' in insurance is a:",
    options: ["The main policy document", "A summary of the policy benefits", "A temporary document issued by the insurer as evidence of coverage until the final policy is issued", "A note explaining the exclusions"],
    answer: "A temporary document issued by the insurer as evidence of coverage until the final policy is issued"
  },
  {
    id: 277,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "A 'Small-Cap Fund' invests in companies with:",
    options: ["A large market capitalization", "A stable dividend payout", "A relatively small market capitalization, which are generally considered higher risk", "A global presence"],
    answer: "A relatively small market capitalization, which are generally considered higher risk"
  },
  {
    id: 278,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "'Actuaries' are professionals who deal with the measurement and management of risk and uncertainty, primarily in which industry?",
    options: ["Banking", "Insurance and Pension", "Stock Broking", "Real Estate"],
    answer: "Insurance and Pension"
  },
  {
    id: 279,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "What is a 'Direct Plan' of a mutual fund?",
    options: ["A plan that invests directly in stocks", "A plan that is sold directly by the mutual fund company, without the involvement of a distributor, and has a lower expense ratio", "A plan for direct cash withdrawal", "A plan managed directly by SEBI"],
    answer: "A plan that is sold directly by the mutual fund company, without the involvement of a distributor, and has a lower expense ratio"
  },
  {
    id: 280,
    section: "Mutual Funds & Insurance",
    type: "Multiple Choice",
    question: "The 'Key Information Memorandum' (KIM) is a summary of the:",
    options: ["Scheme Information Document (SID) and Statement of Additional Information (SAI)", "The fund's latest portfolio", "The fund manager's biography", "The annual report of the mutual fund company"],
    answer: "Scheme Information Document (SID) and Statement of Additional Information (SAI)"
  }
];
