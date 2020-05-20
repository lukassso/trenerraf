import React from 'react';
// import { Link } from "gatsby"
import {
    withStyles,
    Typography,
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Badge,
    MenuItem,
    Menu,
    Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../pages/images/logo.svg';

const styles = (theme) => ({
    root: {
        background: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // display: "none",
        // [theme.breakpoints.up("sm")]: {
        //   display: "block"
        // },
        marginLeft: theme.spacing(5),
    },
    titleLink: {
        margin: '0 20px',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logoNavBar: {
        maxWidth: 140,
        height: 'auto',
    },
});

function PrimarySearchAppBar({ classes }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const Logo = () => {
        return (
            <Link
                underline="none"
                color="inherit"
                className={classes.titleLink}
                href="/"
            >
                <img src={logo} className={classes.logoNavBar} />
            </Link>
        );
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem 
             onClick={handleMobileMenuClose}
            component={Link} 
            href="/"
            > 
               Doświadczenie
            </MenuItem>
            <MenuItem>
                <p>Opinie</p>
            </MenuItem>
            <MenuItem>
                <p>Metamorfozy</p>
            </MenuItem>
            <MenuItem>
                <p>Kontakt</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Logo />
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            href="/#experience"
                        >
                            Doświadczenie
                        </Link>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            href="/#testimondials"
                        >
                            Opinie
                        </Link>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            href="/#successStories"
                        >
                            Metamorfozy
                        </Link>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            className={classes.titleLink}
                            href="/#contact"
                        >
                            Kontakt
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* {renderMenu} */}
        </div>
    );
}
export default withStyles(styles)(PrimarySearchAppBar);
