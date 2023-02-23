import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

import { pink } from '@mui/material/colors';

const pages = ['Inspiration', 'Find Work', 'Learn Design', 'Go Pro', 'Hire Designers'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const inter = Inter({ subsets: ['latin'] })

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FFF',
    '&:hover': {
        backgroundColor: '#FFF',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
        backgroundColor: pink[700],
    },
}));

export default function Home() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ background: '#FFF', color: '#AAA' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <SportsSoccerIcon
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                mr: 1,
                                color: pink[500]
                            }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: pink[500]
                            }}
                        >
                            Dribbble
                        </Typography>
                        {/* Mobile */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <SportsSoccerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                color: pink[500]
                            }}
                        >
                            Dribbble
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#AAA', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box>
                            <Stack spacing={2} direction="row">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                                <Button color="inherit">Sign in</Button>
                                <ColorButton variant="contained">Sign up</ColorButton>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Manuel" src="/static/images/avatar/1.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.gray',
                    pt: 8,
                    pb: 8,
                }}
            >
                <Container maxWidth="sm">
                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={1}
                        sx={{
                            mb: 8,
                        }}
                    >
                        <Chip label="Discover" size="large" onClick={handleClick} />
                        <Chip label="Animation" variant="outlined" onClick={handleClick} />
                        <Chip label="Branding" variant="outlined" onClick={handleClick} />
                        <Chip label="Illustration" variant="outlined" onClick={handleClick} />
                        <Chip label="Mobile" variant="outlined" onClick={handleClick} />
                        <Chip label="Print" variant="outlined" onClick={handleClick} />
                        <Chip label="Product Design" variant="outlined" onClick={handleClick} />
                        <Chip label="Typography" variant="outlined" onClick={handleClick} />
                        <Chip label="Web Design" variant="outlined" onClick={handleClick} />
                    </Stack>
                    <Box>
                        <Typography
                            component="h3"
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Explore the world’s leading design portfolios
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph>
                            Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.
                        </Typography>
                    </Box>
                    <Search
                        sx={{
                            display: { xs: 'flex' },
                            alignItems: 'center',
                            pt: 2,
                            pb: 2,
                            pr: 2,
                            pl: 2,
                            mt: 8,
                            mb: 8,
                            borderRadius: 8,
                        }}
                    >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Stack direction="row" spacing={1} alignItems='center' justifyContent='center'>
                        <Typography variant="subtitle2" display="block" mr={1}>
                            Trending searches
                        </Typography>
                        <Chip label="landing page" component="a" href="#basic-chip" variant="outlined" clickable />
                        <Chip label="ios" component="a" href="#basic-chip" variant="outlined" clickable />
                        <Chip label="food" component="a" href="#basic-chip" variant="outlined" clickable />
                        <Chip label="landingpage" component="a" href="#basic-chip" variant="outlined" clickable />
                        <Chip label="uxdesign" component="a" href="#basic-chip" variant="outlined" clickable />
                        <Chip label="app design" component="a" href="#basic-chip" variant="outlined" clickable />
                    </Stack>
                </Container>
            </Box>
            {/* End hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 4,
                    pb: 4,
                }}>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}
