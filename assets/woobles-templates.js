window.WooblesTemplates = {
  
  featuredProductTemplate: (product) => {
    const name = product.title;
    const descriptionHTML = product.body_html?.split("</p>")[0] + "</p>";
    const imageSrc = product.image?.src || "";
    const price = product.variants?.[0]?.price || "";
    // const showAddToCart = document.getElementById('wooble-category-page')?.getAttribute('data-show-add-to-cart') === 'true';

    return `
      <section class="featured-wooble">
        <h2>Featured Wooble - ${name.split(' ')[0]}</h2>
        ${descriptionHTML || ""}
        ${imageSrc ? `
          <img 
            src="${imageSrc}" 
            alt="${name}" 
            width="320" 
            height="320" 
            loading="eager" 
            decoding="async"
            fetchpriority="high"
          />` : ""}
        <h5>${name}</h5>
        ${price ? `<p>$${price}</p>` : ""}
      </section>
    `;
  },

  productTileTemplate: (product, showATC = false) => {
    const price = product.variants?.[0]?.price || "";
    const bg = product.bg_color || "#f6f6f6";
    const gradient = `linear-gradient(135deg, ${bg}33, ${bg}aa)`;
    const width = product.image?.width || 1024;
    const height = product.image?.height || 1024;

    return `
      <div class="wooble-card" style="--bg-gradient: ${gradient};">
        ${product.image?.src ? `
          <div class="wooble-image-wrapper">
            <img 
              src="${product.image.src}" 
              alt="${product.title}" 
              width="${width}" 
              height="${height}" 
              loading="lazy"
            />
          </div>` : ""}
        <h3>${product.title}</h3>
        ${price ? `<p>$${price}</p>` : ""}
        ${showATC ? `
          <br />
          <button class="add-to-cart-button">Add to Cart </button>
        ` : ""}
      </div>
    `;
  }
};
