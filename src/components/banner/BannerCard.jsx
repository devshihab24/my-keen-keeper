import "./banner-card.css"

const BannerCard = ({item}) => {
    const {type, count} = item
    return (
        <div className='p-5 md:p-8 lg:p-10 text-center bg-white rounded-lg banner-card space-y-2'>
            <p className="text-2xl font-bold text-gray-700">{count}</p>
            <h2 className="text-gray-400">{type}</h2>
        </div>
    );
};

export default BannerCard;