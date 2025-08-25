const HomePage = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-6 text-justify space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-2">
          Automated Review Rating System for Food Products
        </h2>
        <p>
          An intelligent system that analyzes customer reviews and predicts star ratings (1–5) using
          a Transformer-based BERT model for food products.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Dataset Overview</h2>
        <p>Dataset size: 1.6 lakh rows</p>
        <ul className="list-disc pl-6">
          <li>1 <span className="text-green-600">★</span>: 29,893</li>
          <li>2 <span className="text-green-600">★</span>: 16,234</li>
          <li>3 <span className="text-green-600">★</span>: 24,260</li>
          <li>4 <span className="text-green-600">★</span>: 42,517</li>
          <li>5 <span className="text-green-600">★</span>: 50,000</li>
        </ul>
        <p>No. of Products: 40,704</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Sample Reviews</h2>
        <div className="space-y-2">
          <p><strong>Review:</strong> Worst cookies, absolutely disgusting taste <br /> <strong>Output:</strong> 1</p>
          <p><strong>Review:</strong> Overpaid for this cereal box <br /> <strong>Output:</strong> 2</p>
          <p><strong>Review:</strong> Energy drink tasted okay <br /> <strong>Output:</strong> 3</p>
          <p><strong>Review:</strong> Imaginative sauce, uplifted my meal <br /> <strong>Output:</strong> 4</p>
          <p><strong>Review:</strong> Superb chocolate, heavenly and addictive <br /> <strong>Output:</strong> 5</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
