const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 md:h-80 bg-gray-200 rounded" />

      {/* Text Skeleton */}
      <div>
        <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
        <div className="h-4 bg-gray-200 rounded mb-2" />
        <div className="h-4 bg-gray-200 rounded mb-2 w-5/6" />
        <div className="h-4 bg-gray-200 rounded mb-6 w-2/3" />

        <div className="h-6 bg-gray-200 rounded mb-6 w-24" />

        <div className="h-12 bg-gray-200 rounded w-full md:w-40" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
