import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { marked } from 'marked';
import markedBidi from "marked-bidi";

marked.use(markedBidi());
function Main(props) {
	const { posts, title } = props;
	return (
		<Grid
			item
			xs={12}
			md={8}
			sx={{
				'& .markdown': {
					py: 3,
				},
			}}
		>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>
			<Divider />
			{posts.map((post) => (
				<div key={post.substring(0,40)} dangerouslySetInnerHTML={{ __html: marked(post) }}></div>
			))}
		</Grid>
	);
}

Main.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
};

export default Main;
