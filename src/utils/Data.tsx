interface Company {
	img: string;
	alt: string;
}

interface dataInterface {
	MenuItems: string[];
	Header?: string;
	Subheader?: string;
	Getstarted_description?:string;
	Description?: string;
	List?: string[];
	Compnanytitle?:string;
	TermsandCondition?: string;
	FooterText?: string;
	companies: Company[];
}

export const data: dataInterface = {
	MenuItems: ['Home', 'Products', 'Resources', 'Pricing'],
	Header: 'Super. Simple. Banking.',
	Subheader: 'Banking technology that has your back.',
	Description: 'Simple, transparent banking. No hidden fees and free overdrafts.',
	Compnanytitle: 'Join 4,000+ companies already growing',
	companies: [
		{
			img: '/bolshift.png',
			alt: 'Company 1'
		},
		{
			img: '/lightbox.png',
			alt: 'Company 2'
		},
		{ img: '/fetaherdev.png', alt: 'Company 3' },
		{ img: '/spher.png', alt: 'Company 4' },
		{ img: '/globalbank.png', alt: 'Company 5' },
		{ img: '/nietz.png', alt: 'Company 6' },
	],
	Getstarted_description:"Join over 4,000+ startups already growing with Untitled.",
	// List: [
	// 	'Start growing your influence right away—no waiting required!',
	// 	'Create viral TikToks and Reels step by step with easy-to-follow lessons',
	// 	'Use a Personal AI Worker to boost your content',
	// 	'Learn from expert-led courses designed for aspiring influencers',
	// ],
	// TermsandCondition:
	// 	'By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms',

	// FooterText: 'Fametonic 2025 ©All Rights Reserved.',
};
