
const PlaceholderNoItems = ({ texto }) => {
  return (
    <div className="flex flex-row justify-center items-center mx-5 md:mx-12 mt-4 h-36 rounded-sm border-[2px] border-[#3d3d3d]">
        <p className="text-lg">{texto}</p>
    </div>
  );
};

export default PlaceholderNoItems;
