import { Link } from 'react-router-dom'
import './navbar.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Navbar(props: any) {
    return (
        <div className='main'>
            <h1>LOGO</h1>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/product'} style={{ textDecoration: 'none' }}>
                        <li>Product</li>
                    </Link>
                    <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
                        <li>Dashboard</li>
                    </Link>
                    {props.user ?
                        <button onClick={props.logout} className='btn'>
                            Logout
                        </button>
                        :
                        <li onClick={props.login} className='cursor-pointer font-medium bg-green-600 px-4 py-'>
                            
                        </li>
                    }


                </ul>
            </div>
        </div>
    )
}

export default Navbar