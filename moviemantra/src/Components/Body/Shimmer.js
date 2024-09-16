const Shimmer = () => {
  const shimmerCount = 6; 
  return (
    <div className="shimmer-wrapper">
      {Array(shimmerCount).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;