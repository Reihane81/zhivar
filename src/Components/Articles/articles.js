import wall from '../assets/bg/wall.jpg'
import brick1 from '../assets/bg/brick (1).jpg'
import brick2 from '../assets/bg/brick (2).jpg'

// Sample product data
const products = [
    {
        id: 1,
        name: "قیمت آجر",
        image: wall,
    },
    {
        id: 2,
        name: "چالش های حقوقی",
        image: brick1,
    },
    {
        id: 3,
        name: "جدیدترین نما",
        image: brick2,
    },
    {
        id: 4,
        name: "تولید کننده",
        image: wall,
    },
    {
        id: 5,
        name: "تولید کننده",
        image: brick1,
    },
    {
        id: 6,
        name: "تولید کننده",
        image: brick2,
    },
];

const ProductGallery = () => {
    return (
        <section className="relative py-12" style={{direction: 'rtl'}}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-right mt-14 mb-8">مقالات <span className='text-amber-600'>ژیوار</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-56 object-cover relative"
                            ></img>
                            <h3 className="absolute top-3/4 text-gray-300 right-1.5 text-xl font-semibold">{product.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
