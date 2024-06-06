import Phone from "./Phone/Phone";


const Phones = ({ phones }) => {
    console.log(phones);
    return (
        <div>

            <h3 className="text-center my-5 text-2xl">All Categories Phones</h3>
            <div className="grid grid-cols-3 ">
                {
                    phones.map(phone=><Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;