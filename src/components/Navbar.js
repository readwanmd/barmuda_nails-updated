import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	Divider,
	Drawer,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ThemeProvider,
	Toolbar,
	Typography,
	createTheme,
} from '@mui/material';
import React, { useState } from 'react';
import logo from '../img/bermuda-logo.png';

const drawerWidth = 240;
const navItems = [
	{ to: '#home', name: 'Home' },
	{ to: '#about-us', name: 'Über uns' },
	{ to: '#service', name: 'Service' },
	{ to: '#reviews', name: 'Bewertung' },
	{ to: '#packages', name: 'Preise' },
	{ to: '#contact', name: 'Kontakt' },
];

const theme = createTheme({
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#2196F3',
		},
	},
});

theme.typography.h6 = {
	fontSize: '32px',
	fontFamily: "'Gabriela', serif",
	fontWeight: '400',
};

export default function NavBar(props) {
	const { window, fixNav } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography
				className="bermuda-name"
				variant="h6"
				sx={{
					my: 2,
				}}
			>
				Bermuda Nails
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton sx={{ textAlign: 'center', color: '#E59C5F' }}>
							<ListItemText
								primary={
									<Link underline="none" href={item.to}>
										<Typography
											sx={{
												fontFamily: "'Fira Sans', sans-serif",
												fontStyle: 'normal',
												color: '#4F4F4F',
												fontSize: '18px',
											}}
										>
											{item.name}
										</Typography>
									</Link>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar
					position={`${fixNav ? 'fixed' : 'sticky'}`}
					elevation={1}
					component="nav"
					sx={{ color: '#FFF' }}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ color: '#000', mr: 2, display: { md: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Grid container justifyContent="space-between" alignItems="center">
							<img className="logo" src={logo} alt="" />
							&nbsp; &nbsp; &nbsp; &nbsp;
							<Typography
								className="bermuda-name"
								variant="h6"
								sx={{
									flexGrow: 1,
									display: { xs: 'none', lg: 'block' },
								}}
							>
								Bermuda Nails
							</Typography>
							<Box
								sx={{
									display: { xs: 'none', md: 'block' },
								}}
							>
								{navItems.map((item) => (
									<Button
										href={item.to}
										key={item.name}
										className="navbar-button"
										size="small"
										sx={{
											fontFamily: "'Fira Sans', sans-serif",
											fontStyle: 'normal',
											color: '#4F4F4F',
											fontSize: '20px',
											mr: 2,
										}}
									>
										{item.name}
									</Button>
								))}
							</Box>
						</Grid>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', md: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</ThemeProvider>
		</Box>
	);
}
