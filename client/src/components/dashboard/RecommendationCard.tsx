function RecommendationCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <h2 className="text-xl font-semibold">
        AI Recommendation
      </h2>

      <p className="mt-4 text-gray-600">
        Resize EC2 instance from t3.large to t3.micro
      </p>

      <p className="mt-2 font-bold text-green-600">
        Estimated Saving: ₹3500/month
      </p>
    </div>
  );
}

export default RecommendationCard;