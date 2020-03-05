import fallbackPic from '../images/pilotPics/fallbackPic.png';
import {RANKS_ENUM, SEASONS_ENUM} from "./enums";
import pollinger from '../images/pilotPics/Pollinger.jpeg';

const PILOTS = [
	{
		id: 1,
		callsign: 'Midorr',
		name: 'Robert Stach',
		displayRealName: true,
		quarterToAir: SEASONS_ENUM.WINTER,
		yearToAir: '2015',
		rank: RANKS_ENUM.ONE,
		svAdelsried: true,
		profilePicURL: fallbackPic,
		flightStyle: 'Hart - Tief - Ausbaufähig. Jedes Hinderniss wird mitgenommen :)',
		multiGpURL: 'https://www.multigp.com/pilots/view/?pilot=Midorr',
		socialLinks:
			[
				{
					id: 'home',
					link: '',
				},
				{
					id: 'youtube',
					link: 'https://www.youtube.com/channel/UCxM2LrACbNfsgjwE3KcDtjA',
				},
				{
					id: 'facebook',
					link: '',
				},
				{
					id: 'instagram',
					link: '',
				},
				{
					id: 'snapchat',
					link: '',
				},
				{
					id: 'twitter',
					link: '',
				}
			],
		sponsors: [],
		equipment: {
			statedEquipment: true,
			goggles: 'Fatshark HD2',
			radio: 'TBS Tango 2',
			controlLink: 'TBS Crossfire',
			raceKwad: {
				names: 'Hilde, Tilde und Milde',
				frame: 'Floss 3',
				motors: 'Emax Eco 1700Kv',
				escs: 'T-Motor F55A Pro II',
				fc: 'FuriousFpv F4 FPV-Racepit',
				rx: 'TBS Nano Rx',
				cam: 'Runcam Racer 2',
				vtx: 'TBS Unify Pro32 Nano',
				props: 'HQProp R32',
				antenna: 'Lumenier AXII',
				lipo: 'GensAce Tattu',
				auw: 'Zu Hoch'
			}
		}
	},
	{
		id: 2,
		callsign: 'mr_Ho',
		name: 'Tin Ho',
		displayRealName: true,
		quarterToAir: SEASONS_ENUM.SUMMER,
		yearToAir: '2015',
		rank: RANKS_ENUM.TWO,
		svAdelsried: true,
		profilePicURL: fallbackPic,
		flightStyle: '117: Fried flow with a side of RICE, €12.90',
		multiGpURL: 'https://www.multigp.com/pilots/view/?pilot=Kus4n4gi',
		socialLinks: [
			{
				id: 'home',
				link: '',
			},
			{
				id: 'youtube',
				link: 'https://www.youtube.com/channel/UCl2NQxFQkQf1ztuWdrlg9rg',
			},
			{
				id: 'facebook',
				link: '',
			},
			{
				id: 'instagram',
				link: '',
			},
			{
				id: 'snapchat',
				link: '',
			},
			{
				id: 'twitter',
				link: '',
			}
		],
		sponsors: [],
		equipment: {
			statedEquipment: true,
			goggles: 'Fatshark HD2',
			radio: 'Jumper T12',
			controlLink: 'TBS Crossfire',
			raceKwad: {
				names: 'Blossom, Buttercup und Bubbles',
				frame: 'Gatehunter RS5',
				motors: 'Emax LS2207 2550Kv',
				escs: 'Mamba F40 40A',
				fc: 'Mamba F405 II',
				rx: 'TBS Nano Rx',
				cam: 'Runcam Micro Swift 2',
				vtx: 'TBS Unify Race 2',
				props: 'Gemfan Hurricane 51499x3',
				antenna: 'Linear',
				lipo: 'SLS, GensAce Tattu',
				auw: '318g'
			}
		}
	},
	{
		id: 3,
		callsign: 'Valitos',
		name: 'Valentin Kitanov',
		displayRealName: true,
		quarterToAir: '',
		yearToAir: '',
		rank: RANKS_ENUM.TWO,
		svAdelsried: false,
		profilePicURL: fallbackPic,
		flightStyle: 'Kompromisslos - Push it!',
		multiGpURL: '',
		socialLinks: [],
		sponsors: [],
		equipment: {
			statedEquipment: false,
			goggles: '',
			radio: '',
			controlLink: '',
			raceKwad: {
				names: '',
				frame: '',
				motors: '',
				escs: '',
				fc: '',
				rx: '',
				cam: '',
				vtx: '',
				props: '',
				antenna: '',
				lipo: '',
				auw: ''
			}
		}
	},
	{
		id: 4,
		callsign: 'ALX',
		name: 'Alexander Schlabschi',
		displayRealName: false,
		quarterToAir: SEASONS_ENUM.SUMMER,
		yearToAir: '2015',
		rank: RANKS_ENUM.THREE,
		svAdelsried: false,
		profilePicURL: fallbackPic,
		flightStyle: 'Chillig',
		multiGpURL: 'https://www.multigp.com/pilots/view/?pilot=Alxx',
		socialLinks: [],
		sponsors: [],
		equipment: {
			statedEquipment: false,
			goggles: 'Fatshark HD2',
			radio: 'Graupner MX-16',
			controlLink: 'Graupner',
			raceKwad: {
				names: '',
				frame: '',
				motors: '',
				escs: '',
				fc: '',
				rx: '',
				cam: '',
				vtx: '',
				props: '',
				antenna: '',
				lipo: '',
				auw: ''
			}
		}
	},
	{
		id: 5,
		callsign: 'Mic',
		name: 'Michael Kneifl',
		displayRealName: true,
		quarterToAir: '',
		yearToAir: '',
		rank: RANKS_ENUM.TWO,
		svAdelsried: false,
		profilePicURL: fallbackPic,
		flightStyle: '',
		multiGpURL: '',
		socialLinks: [],
		sponsors: [],
		equipment: {
			statedEquipment: false,
			goggles: '',
			radio: '',
			controlLink: '',
			raceKwad: {
				names: '',
				frame: '',
				motors: '',
				escs: '',
				fc: '',
				rx: '',
				cam: '',
				vtx: '',
				props: '',
				antenna: '',
				lipo: '',
				auw: ''
			}
		}
	},
	{
		id: 6,
		callsign: 'BEN',
		name: 'Benjamin Lorenz',
		displayRealName: false,
		quarterToAir: SEASONS_ENUM.SPRING,
		yearToAir: '2015',
		rank: RANKS_ENUM.TWO,
		svAdelsried: true,
		profilePicURL: fallbackPic,
		flightStyle: 'Fullsend ist bei mir Idle!',
		multiGpURL: '',
		socialLinks: [
			{
				id: 'instagram',
				link: 'https://www.instagram.com/liquidexpo_fpv'
			}
		],
		sponsors: [],
		equipment: {
			statedEquipment: true,
			goggles: 'Fatshark HDO',
			radio: 'FrSky Horus X10s',
			controlLink: 'FrSky',
			raceKwad: {
				names: '',
				frame: 'CherryCraft Stamina, Staccato',
				motors: 'iFlight Xing 2207 2450Kv',
				escs: 'iFlight Succex',
				fc: 'iFlight Succex F7 Twin G',
				rx: 'FrSky R-XSR',
				cam: 'Runcam Racer',
				vtx: 'TBS Unify Nano 32',
				props: 'Gemfan Hurricane 51466',
				antenna: 'TBS Triumph Nano',
				lipo: 'SLS',
				auw: '550g - 600g'
			}
		}
	},
	{
		id: 7,
		callsign: 'UpsidedownFPV',
		name: 'Niklas Solle',
		displayRealName: true,
		quarterToAir: '',
		yearToAir: '',
		rank: RANKS_ENUM.FIVE,
		svAdelsried: false,
		profilePicURL: fallbackPic,
		flightStyle: '',
		multiGpURL: '',
		socialLinks: [
			{
				id: 'home',
				link: 'https://www.9gag.com',
			},
			{
				id: 'youtube',
				link: 'https://www.youtube.com/user/LipoTV',
			},
			{
				id: 'facebook',
				link: 'https://www.facebook.com/BavarianMultiRotor/',
			},
			{
				id: 'instagram',
				link: 'https://www.instagram.com/bavarianmultirotor/',
			},
			{
				id: 'snapchat',
				link: 'https://www.snapchat.com/l/en-gb/',
			},
			{
				id: 'twitter',
				link: 'https://twitter.com/hashtag/upsidedown?lang=en',
			}
		],
		sponsors: [
			{
				name: 'GensAce - Tattu',
				link: 'https://www.gensace.de/',
			},
		],
		equipment: {
			statedEquipment: true,
			goggles: '',
			radio: '',
			controlLink: '',
			raceKwad: {
				names: '',
				frame: '',
				motors: '',
				escs: '',
				fc: '',
				rx: '',
				cam: '',
				vtx: '',
				props: '',
				antenna: '',
				lipo: '',
				auw: ''
			}
		}
	},
	{
		id: 7,
		callsign: 'Alex Akra Fpv',
		name: 'Alexander Pollinger',
		displayRealName: true,
		quarterToAir: SEASONS_ENUM.FALL,
		yearToAir: '2018',
		rank: RANKS_ENUM.SIX,
		svAdelsried: true,
		profilePicURL: pollinger,
		flightStyle: 'Brandgefahr!',
		multiGpURL: '',
		socialLinks: [
			{
				id: 'facebook',
				link: 'https://www.facebook.com/alex.a.pollinger',
			},
			{
				id: 'instagram',
				link: 'https://www.instagram.com/alexakrapollinger/',
			},
		],
		sponsors: [
			{
				name: 'Foxeer',
				link: 'http://www.foxeer.com/',
			},
			{
				name: 'DalProp',
				link: 'http://www.dalprop.com/',
			},
			{
				name: 'ChinaHobbyLine',
				link: 'https://chinahobbyline.com/',
			},
			{
				name: 'RedBee',
				link: 'https://redbee.de/de/',
			},
		],
		equipment: {
			statedEquipment: true,
			goggles: 'Fatshark HDO',
			radio: 'Futaba T16SZ',
			controlLink: 'TBS Crossfire',
			raceKwad: {
				names: '',
				frame: 'Xbee MCK V2',
				motors: 'T-Motor 2207 1950Kv MCK',
				escs: 'Diatone F50 50A',
				fc: 'Diatone F7',
				rx: 'TBS Nano Rx',
				cam: 'Foxeer Predator Nano V4',
				vtx: 'TBS Race HV',
				props: 'DalProp Spitfire 5147.5',
				antenna: 'Linear',
				lipo: 'ChinaHobbyLine',
				auw: 'geheim :P'
			}
		}
	},
];

export default PILOTS;



