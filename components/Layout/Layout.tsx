import React from 'react';
import BurguerMenu from '../SubpageMenu/SubpageMenu';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }: { children: any }) => {
	const [openMenu, setOpenMenu] = React.useState(false);

	return (
		<>
			<Navbar setOpenMenu={setOpenMenu} />
			<BurguerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
