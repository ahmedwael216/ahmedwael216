import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MainFeaturedPost from '../Blog/MainFeaturedPost';
import FeaturedPost from '../Blog/FeaturedPost';
import Main from '../Blog/Main';
import Sidebar from '../Blog/Sidebar';
import post1 from '../Blog/posts/blog-post.1.md';
import post2 from '../Blog/posts/blog-post.2.md';
import post3 from '../Blog/posts/blog-post.3.md';

const mainFeaturedPost = {
	title: 'Title of a longer featured blog post',
	description:
		"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	image: 'https://images.unsplash.com/photo-1495932574959-fa95bc3c4ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDUzMTkwMTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
	imageText: 'main image description',
	linkText: 'Continue reading…',
};

const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://images.unsplash.com/photo-1495932574959-fa95bc3c4ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDUzMTkwMTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
		imageLabel: 'Image Text',
	},
	{
		title: 'Post title',
		date: 'Nov 11',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://images.unsplash.com/photo-1495932574959-fa95bc3c4ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDUzMTkwMTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
		imageLabel: 'Image Text',
	},
];

const posts = [post1, post2, post3];

const sidebar = {
	title: 'About',
	description:
		'I am Ahmed Wael',
	archives: [
		{ title: 'March 2020', url: '#' },
		{ title: 'February 2020', url: '#' },
		{ title: 'January 2020', url: '#' },
		{ title: 'November 1999', url: '#' },
		{ title: 'October 1999', url: '#' },
		{ title: 'September 1999', url: '#' },
		{ title: 'August 1999', url: '#' },
		{ title: 'July 1999', url: '#' },
		{ title: 'June 1999', url: '#' },
		{ title: 'May 1999', url: '#' },
		{ title: 'April 1999', url: '#' },
	],
	social: [
		{ name: 'GitHub', icon: GitHubIcon },
		{ name: 'Twitter', icon: TwitterIcon },
		{ name: 'Facebook', icon: FacebookIcon },
	],
};

export default function Home() {
	return (
		<div >	
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Main title="From the firehose" posts={posts} />
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
		</div>
	);
}
