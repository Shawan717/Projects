

const Category = ({category}) => {
    
    const{logo,category_name,availability}=category
    return (
        <div className="mt-6 text-center bg-[#eceaf0] p-5 w-[300px]">
            <img className="p-2 mx-auto bg-[#dcd6ec]" src={logo} alt="" />
            <h2 className="text-2xl">{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default Category;