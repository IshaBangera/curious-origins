// ═══════════════════════════════════════════════════════════════
//  script.js  —  Curious Origins · Site Logic (reference)
//
//  NOTE: All site logic is inlined inside index.html in the
//  <script> block near the top of <body>.
//  This file is kept as a reference/documentation copy only.
// ═══════════════════════════════════════════════════════════════
//
//  FUNCTIONS AVAILABLE IN index.html:
//
//  showPage(name)
//    Navigates to a page by id suffix.
//    e.g. showPage('home') → shows #page-home
//    e.g. showPage('article-coffee') → shows #page-article-coffee
//
//  openRandomArticle()
//    Picks a random article from the articles array and navigates to it.
//    Called by the "Random" button in the nav bar.
//
//  toggleDarkMode()
//    Toggles dark/light mode. Saves preference to localStorage.
//    Called by the moon/sun button in the nav bar.
//
//  handleSearch(val)
//    Filters articles by title or tags and renders results.
//    Called by oninput on the nav search field.
//
//  showTagResults(category, label)
//    Shows all articles matching a category on the tag results page.
//    Called when a tag pill is clicked on an article card.
//
//  submitContact()
//    Validates and "submits" the contact form (client-side only).
//    Wire to a real backend or Formspree when ready.
//
//  updateCategoryCounters()
//    Reads articles array, counts per category, updates all
//    [data-category] and [data-category-desc] elements.
//    Runs automatically on DOMContentLoaded.
//
//  renderLatestStories()
//    Populates #latest-stories-grid from the articles array.
//    Runs automatically on DOMContentLoaded.
//
//  renderCategoryPages()
//    Populates all [data-cat-page] grids from the articles array.
//    Runs automatically on DOMContentLoaded.
//
//  renderRelatedStories(pageId, category)
//    Populates the .related-grid inside #related-{pageId}.
//    Called for each article page on DOMContentLoaded.
//    Add a new call here when you add a new article page.
//
// ═══════════════════════════════════════════════════════════════
