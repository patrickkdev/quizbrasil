import { CSSProperties } from 'react';

type PointerEvents = CSSProperties['pointerEvents'];

export const HideMenu = (initialTransform: number) => {
	return {
		transform: `translateX(${initialTransform}%)`,
		transition: 'transform 0.35s ease-in-out',
		pointerEvents: 'none' as PointerEvents,
	};
};

export const ShowMenu = (finalTransform: number) => {
	return { transform: `translateX(${finalTransform}%)`, pointerEvents: 'all' as PointerEvents };
};

export const FadeOutBackground = (initialOpacity: number) => {
	return { opacity: initialOpacity, transition: 'opacity 0.35s ease-in-out', pointerEvents: 'none' as PointerEvents };
};

export const FadeInBackground = (finalOpacity: number) => {
	return { opacity: finalOpacity, pointerEvents: 'all' as PointerEvents };
};
