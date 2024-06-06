import Categorie from "./Categorie/Categorie";


const Categories = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <h3 className="text-center my-5 text-2xl">All Categories Phones
            </h3>
            <div className="grid grid-cols-3 ">
                {
                    phones.map(phone=><Categorie key={phone.id} phone={phone}></Categorie>)
                }
            </div>
        </div>
    );
};

export default Categories;