import React from 'react';

import styles from './navbar.module.css';

import { Menu } from '@mui/icons-material';
import { Button, Collapse, Container, Hidden, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Navbar = ({ setOpenMenu }: { setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<>
			<div className={styles.divMain}>
				<div className={styles.divBottom}>
					<Container maxWidth={'xl'}>
						<div className={styles.divBottomContainer}>
							<Link href={'/'} as="image" rel="preload">
								{/* <Image
									priority={true}
									width={236}
									height={54.27}
									objectFit="contain"
									objectPosition="center"
									alt={"mycore"}
									src="/static/images/mycore-logo.png"
									loading="eager"
								/> */}
								<h1>Perguntas e Respostas</h1>
							</Link>

							<Hidden mdDown>
								<div className={styles.divActions}>
									<Button href="/ranking">Ranking</Button>
									<Button href="/sobre">Sobre</Button>
									<Button href="/comece-a-usar">Comece a usar</Button>
									<Button href="/minha-conta">Minha Conta</Button>
								</div>
							</Hidden>
							<Hidden mdUp>
								<IconButton onClick={() => setOpenMenu(true)}>
									<Menu />
								</IconButton>
							</Hidden>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Navbar;
