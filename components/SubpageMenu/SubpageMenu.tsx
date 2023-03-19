import { FadeOutBackground as HideBackground, FadeInBackground as ShowBackground, ShowMenu, HideMenu } from '../MenuTransitions/MenuTransitions';

import { Button, Hidden } from '@mui/material';
import React from 'react';

const BurguerMenu = ({ openMenu, setOpenMenu }: { openMenu: boolean; setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const buttonStyle = { width: '100%', height: '62px', borderRadius: '0px', borderBottom: '1px solid black', color: 'black' };

	return (
		<div>
			<Hidden mdUp>
				<div
					onClick={() => setOpenMenu(false)}
					style={{
						...HideBackground(0),
						...(openMenu ? ShowBackground(1) : {}),
						position: 'fixed',
						width: '100vw',
						height: '100vh',
						backgroundColor: 'rgba(0,0,0,0.5)',
						zIndex: 10,
						top: 0,
					}}></div>
				<div
					style={{
						...HideMenu(101),
						...(openMenu ? ShowMenu(0) : {}),
						zIndex: 10,
						right: 0,
						top: 0,
						position: 'fixed',
						width: '70vw',
						maxWidth: '320px',
						height: '100%',
						backgroundColor: 'white',
						borderLeft: '4px solid #00567b',
					}}>
					<Button sx={buttonStyle} href="/ranking">
						Ranking
					</Button>
					<Button sx={buttonStyle} href="/sobre">
						Sobre
					</Button>
					<Button sx={buttonStyle} href="/comece-a-usar">
						Comece a usar
					</Button>
					<Button sx={buttonStyle} href="/minha-conta">
						Minha Conta
					</Button>
				</div>
			</Hidden>
		</div>
	);
};

export default BurguerMenu;
