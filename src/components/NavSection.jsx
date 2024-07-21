import Menubar from './other components/MenuBar';

const NavSection = () => {

    const menuOption = ["Home", "Skills", "Projects", "Timeline"];
    const id = ["#home", "#skills", "#projects", "#timeline"]

    const handleGetID = (index) => {
        const targetId = id[index];
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id ${targetId} not found.`);
        }
    }

    const getContact = () => {
        const getId = document.querySelector('#contact');
        getId.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className='nav_section'>
            <div className="avatar-logo">
                <h1>MbS.</h1>
            </div>
            <Menubar />
            <menu className='menuOption'>
                <ul>
                    {menuOption.map((item, index) => (
                        <li key={index} onClick={() => handleGetID(index)}>{item}</li>
                    ))}
                </ul>

                <p onClick={getContact}>Contact</p>
            </menu>
        </nav>
    )
}

export default NavSection