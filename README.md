# 🧶 Woobles Category Page – Code Challenge Submission

Welcome! This repository contains my submission for The Woobles front-end code challenge. I’ve implemented a fully responsive, performant, and accessible custom category landing page using **vanilla JavaScript, Liquid, and Shopify’s Online Store 2.0 framework**.

This solution supports external JSON product data in the format provided. It is structured to support alternate product sets with the same field structure. To extend this further, additional validation or field mapping logic could be added.

Note on Theme Editor Behavior:
Due to Shopify's current handling of section re-rendering, toggling the “Add to Cart” button setting causes the section to temporarily disappear until saved. This does not affect the live storefront. In a production implementation, I would resolve this by refactoring the logic into a persistent app block or inline script that reliably reinitializes on shopify:section:load.

---

## 🛍️ Viewing the Live Demo

You can view the working category page live here:  
🔒 [**https://kristen-burgess-woobles.myshopify.com/pages/woobles-categories**](https://kristen-burgess-woobles.myshopify.com/pages/woobles-categories)  
> _Note: This page is password protected. Please use the provided password to view._

---

## ✅ Challenge Requirements

| Requirement                                                                                          | Status |
|------------------------------------------------------------------------------------------------------|--------|
| Build a new category landing page using the frontend framework of your choice                        | ✅      |
| Use the provided JSON as a mock "API" data source                                                    | ✅      |
| Ensure the solution can support alternate JSON structures                                            | ✅      |
| Each Wooble appears in **only one section**                                                          | ✅      |
| Sections must appear in the following order:                                                         | ✅      |
| • Featured Wooble                                                                                   | ✅      |
| • Beginner Kits                                                                                     | ✅      |
| • Beginner+ Kits                                                                                    | ✅      |
| • Bundles                                                                                           | ✅      |
| • Intermediate Kits                                                                                 | ✅      |
| • Accessory Kits                                                                                    | ✅      |
| Identify Featured Wooble by the `"Featured"` tag (only first match should appear)                   | ✅      |
| Display the **Featured Wooble larger** with first paragraph of product description                  | ✅      |
| Display remaining Woobles in standard product card format                                           | ✅      |
| Identify Bundles by title (includes the word “Bundle”)                                              | ✅      |
| Identify other kits by `product_type`                                                               | ✅      |

---

## 🧰 Tech Stack & Architecture

- **Framework:** Shopify OS 2.0 with Liquid and native theme sections  
- **JavaScript:** Vanilla JS with modern ES6+ syntax (arrow functions, optional chaining, destructuring)  
- **CSS:** Modular, scoped styles per feature – including a shared `woobles-variables.css` for color and font theming  
- **Data Source:** External JSON file (`woobles-products.json`) simulating an API feed  
- **Rendering Logic:** Custom JS-based rendering engine for category sections and product tiles  
- **Modularity:** Snippet-based architecture (featured product, product tile), with reusable rendering functions extracted into helper modules  

---

## 🌟 Performance & Accessibility Highlights

- **Optimized Rendering:** JSON is fetched once and efficiently filtered/categorized without duplicating logic  
- **Image Optimization:**  
  - Featured image is preloaded using `<link rel="preload">`  
  - All images use `loading="lazy"` where appropriate  
- **Font Loading:** Optional Google Fonts loaded only on the category page to avoid global performance cost  
- **Keyboard Accessibility:** Semantic HTML used for all content; buttons are keyboard accessible  
- **Color Accessibility:** Unified font and background styles avoid harsh contrasts and improve readability  

---

## 📈 Areas for Further Improvement

While the challenge is scoped tightly, the following are opportunities for improvement if this were production code:

- **SEO Enhancements:**  
  - Add structured data (JSON-LD) for products  
  - Ensure meta tags, canonical URLs, and social sharing previews are in place  

- **Accessibility Improvements:**  
  - Implement ARIA roles and labels for assistive technologies  
  - Enable keyboard focus states and alt text auditing for screen readers  

- **Performance Improvements:**  
  - In a live store, fetching product data via Shopify’s Storefront API or Liquid would be preferable  
  - Images could be converted to responsive sizes with `srcset` for sharper mobile rendering  

---

## 💬 Questions or Comments?

Feel free to reach out if you have any questions about implementation details or would like to discuss this solution further!

