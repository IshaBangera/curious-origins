// ═══════════════════════════════════════════════════════════════
//  articles.js  —  Curious Origins · Article Registry (reference)
//
//  NOTE: The LIVE articles array is inlined inside index.html in
//  the <script> block near the top of <body>. Edit it there.
//  This file is a reference guide showing full field documentation.
// ═══════════════════════════════════════════════════════════════
//
//  HOW TO ADD A NEW ARTICLE (3 steps):
//
//  1. Open index.html. Find "const articles = [" near the top of
//     the <script> block. Add a new object to the array.
//
//  2. If the article has its own page, create the file at the
//     path you put in `url`  e.g. articles/money.html
//
//  3. Save. Everything updates automatically:
//     ✓ Category counters   ✓ Latest Stories
//     ✓ Category pages      ✓ Search
//     ✓ Related Stories     ✓ Tag results
//
// ═══════════════════════════════════════════════════════════════
//
//  SUPPORTED CATEGORY IDs  (use exactly as written):
//
//    plants          →  Plants & Nature Stories
//    animals         →  Animals & Hidden Biology
//    origins         →  How Things Began
//    anime           →  Anime & Pop Culture
//    mind            →  Human Mind & Behaviour
//    everyday        →  Everyday Things We Never Question
//    mysteries       →  Science Mysteries Unsolved
//    technology      →  Evolution of Technology
//    specialists     →  Specialists Behind Discoveries
//    civilizations   →  Evolution of Civilisations
//
// ═══════════════════════════════════════════════════════════════
//
//  FIELD REFERENCE:
//
//    title     Full article title
//    category  One of the category IDs above (must match exactly)
//    url       Path to article HTML: "articles/my-article.html"
//              Page id is auto-derived: "articles/coffee.html" → "article-coffee"
//    tags      Search keywords — array of lowercase strings
//    tagLabel  Human-readable label on the colour pill
//    tagClass  Pill colour: tag-teal | tag-rose | tag-gold | tag-violet | tag-sage
//    icon      Emoji thumbnail
//    bg        CSS gradient e.g. "linear-gradient(135deg, #1a3a35, #2a7c6f)"
//    excerpt   One-sentence teaser for article cards
//    mins      Estimated reading time (number)
//
// ═══════════════════════════════════════════════════════════════
//
//  COPY THIS TEMPLATE when adding a new article:
//
//  {
//    title:    "Your Article Title Here",
//    category: "origins",
//    url:      "articles/your-article.html",
//    tags:     ["keyword1", "keyword2", "keyword3"],
//    tagLabel: "How Things Began",
//    tagClass: "tag-rose",
//    icon:     "💰",
//    bg:       "linear-gradient(135deg, #2a1a10, #8a6a1a)",
//    excerpt:  "One sentence that makes someone want to read this.",
//    mins:     7
//  },
//
// ═══════════════════════════════════════════════════════════════
//
//  CURRENT ARTICLES (6 total as of initial launch):
//
//  plants    → Coffee · Flowers · Wood Wide Web
//  animals   → Octopus
//  origins   → Invention of Writing
//  mysteries → Matter vs Antimatter
//
// ═══════════════════════════════════════════════════════════════
