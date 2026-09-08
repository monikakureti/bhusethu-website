
const articles = [
  {
    category: "PROPERTY DUE DILIGENCE",
    title: "The Essential Checklist for a Clear Property Title in India",
    date: "05 SEP 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "PROPERTY GUIDANCE",
    title: "5 Hidden Risks in Real Estate Due Diligence You Must Know",
    date: "28 AUG 2026",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "REAL ESTATE DEVELOPMENT",
    title: "RERA Approvals: A Simplified Guide for Developers",
    date: "20 AUG 2026",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
  }
];

function Insights() {
  return (
    <section className="insights-section" id="news">
      <div className="insights-heading">
        <div>
          <span>PROPERTY INSIGHTS</span>
          <h2>Latest from Bhusethu</h2>
        </div>
      </div>

      <div className="insights-grid">
        {articles.map((article) => (
          <article className="insight-card" key={article.title}>

            <div className="insight-image">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="insight-info">
              <div className="insight-meta">
                <span>{article.category}</span>
              </div>

              <h3>{article.title}</h3>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Insights;