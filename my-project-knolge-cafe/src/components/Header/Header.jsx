import profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <div className='my-3 flex justify-between items-center'>
            <h2 className="text-4xl">Knowledge Cafe</h2>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;