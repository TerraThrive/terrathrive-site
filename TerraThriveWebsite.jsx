export default function TerraThriveWebsite() {
  return (
    <div className="font-serif bg-beige text-brown min-h-screen">
      <header className="sticky top-0 bg-beige border-b border-brown p-4 flex justify-between items-center">
        <div className="text-xl font-bold">TerraThrive India LLP</div>
        <nav className="space-x-4 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
        </nav>
      </header>

      <section id="home" className="p-10 text-center bg-beige">
        <h1 className="text-4xl mb-2">Rooted in India. Reaching the World.</h1>
        <h2 className="text-xl mb-6">Exporting Earth’s Finest — Spices, Superfoods, Handicrafts & More</h2>
        <p className="max-w-3xl mx-auto mb-6">
          At TerraThrive India LLP, we bridge India’s timeless heritage with global markets. From the highland aroma
          of hand-picked spices to the woven soul of handlooms, every product we export carries the story of tradition,
          purity, and purpose.
        </p>
        <p className="max-w-3xl mx-auto mb-6">
          Our sourcing is direct—from tribal artisans, organic farms, and rural makers. Our operations are precise—powered
          by smart logistics, clean documentation, and traceable supply chains. When you trade with TerraThrive,
          you don’t just receive a product. You receive a piece of living culture.
        </p>
        <div className="space-x-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded">Explore Our Products</button>
          <button className="bg-orange-700 text-white px-4 py-2 rounded">Partner With Us</button>
        </div>
      </section>

      <section id="about" className="p-10 bg-[#f5f0e6] text-center">
        <h1 className="text-3xl mb-4">Where Tradition Trades Forward</h1>
        <p className="max-w-3xl mx-auto mb-6">
          TerraThrive India LLP is a logistics-forward, export-focused startup born from the soil of India’s deep cultural
          and ecological wealth.
        </p>
        <p className="max-w-3xl mx-auto mb-6">
          We specialize in authentic Indian products:
          <br />Spices with stories
          <br />Superfoods grown with care
          <br />Handicrafts and handlooms woven with legacy
          <br />Herbs sourced from wild wisdom
        </p>
        <p className="max-w-3xl mx-auto mb-6">
          What sets us apart is our commitment to clean trade. We work directly with indigenous producers and rural
          collectives, ensuring fair value, sustainable practices, and ethical sourcing. Our logistics system is crafted
          for global efficiency—seamless delivery, compliance, and traceability.
        </p>
        <p className="italic max-w-3xl mx-auto mb-6">
          We believe commerce can uplift. That supply chains can be sacred. That the Earth thrives when we trade with heart.
        </p>
        <div className="mt-6">
          <p><strong>Mission:</strong> To create global access to India’s finest, while empowering grassroots producers.</p>
          <p><strong>Vision:</strong> To be a world-trusted export house rooted in cultural authenticity and logistics excellence.</p>
        </div>
      </section>

      <section id="products" className="p-10 text-center bg-beige">
        <h1 className="text-3xl mb-6">Nature. Craft. Nourishment.</h1>
        <p className="max-w-3xl mx-auto mb-6">
          Every TerraThrive product is chosen not just for quality—but for origin. We ensure purity, tradition, and soul
          in every shipment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#f5f0e6] p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">🍃 Spices</h2>
            <p>
              Cardamom, turmeric, black pepper, cumin & more—sourced from organic farms in Kerala, Tamil Nadu, and
              the Northeast. Sorted for aroma, graded for export, packed for purity.
            </p>
          </div>
          <div className="bg-[#f5f0e6] p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">🌿 Superfoods & Herbs</h2>
            <p>
              Moringa, ashwagandha, giloy, tulsi—ancient Indian health allies, harvested naturally and processed with care.
            </p>
          </div>
          <div className="bg-[#f5f0e6] p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">🧵 Handicrafts & Handlooms</h2>
            <p>
              Sustainable, handmade crafts and textiles from rural artisans. Each piece carries a lineage of skill and meaning.
            </p>
          </div>
        </div>

        <p className="mt-6">Browse our catalog or get in touch for custom sourcing. TerraThrive adapts to your market needs—with the Earth in mind.</p>
        <div className="mt-4 space-x-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded">Download Product Catalog</button>
          <button className="bg-orange-700 text-white px-4 py-2 rounded">Contact for Wholesale Inquiries</button>
        </div>
      </section>
    </div>
  );
}