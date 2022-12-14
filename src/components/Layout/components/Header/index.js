import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullhorn,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: ' English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng việt' },
            ],
        },
    },
    {
        title: ' Feedback and help',
        icon: <FontAwesomeIcon icon={faBullhorn} />,
        to: '/feedback',
    },
    {
        title: ' Keybroad shotcurt',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
    },
];
function Header() {
    const currentUser = true;

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                console.log(MenuItem);
            default:
        }
    };

    const USER_MENU = [
        {
            title: ' View profile',
            icon: <FontAwesomeIcon icon={faUser} />,
            to: '/@vanquoc',
        },
        {
            title: 'Get Coins',
            icon: <FontAwesomeIcon icon={faCoins} />,
            to: '/feedback',
        },
        {
            title: ' Setting',
            icon: <FontAwesomeIcon icon={faGear} />,
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            title: ' Log out',
            icon: <FontAwesomeIcon icon={faSignOut} />,
            to: '/logout',
            saparate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}>
                        <img src={images.logo} alt="Titok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Tippy delay={(0, 200)} content="Upload">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 200)} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 200)} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button rounded primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666292400&x-signature=GIubOWFaHX78a63pT%2FyxrZ3aH0c%3Ds"
                                alt="Nguyen Van Quoc"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1666324800&x-signature=55stZ4lEN%2B3PkDuAuBOVMWvYEXE%3D"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
