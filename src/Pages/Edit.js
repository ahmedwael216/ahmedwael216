import React, { useState } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { marked } from 'marked';
import markedBidi from "marked-bidi";

marked.use(markedBidi());
const HtmlTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: '#5a5b5b',
		color: 'rgba(255, 255, 255, 1)',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
	},
}));


export default function Home() {
	const [text, setText] = useState('');
	const handleTextChange = (event) => {
		const newText = event.target.value;
		setText(newText);
		//console.log("here", newText);
	};

	const getMarkdownText = () => {
		return { __html: marked(text) };
	};
	//TODO add mac height for paper and fix the visual bug when pasting text
	return (
		<div >
			<HtmlTooltip placement="bottom-start" TransitionComponent={Zoom}
				title={
					<React.Fragment>
						<div dir='rtl'>
							<p>كيف جئت هنا؟</p>
							<p>لم تقدك أي صفحة إلي هنا.. وهذا يعني أنك تختلس الجولات بين الصفحات..</p>
							<p>لا أمقت شيئاً في العالم قدر مجئ عدم المدعوين إلي أماكن لا تخصهم.. سواء كانوا من رفاقي أم من الذين لا اسم لهم..</p>
							<p>فعد ايها الغريب..</p>
							<p>عد من حيث جئت!</p>
							<p>د. رفعت إسماعيل - في كهوف دراجوسان صـ۱٥۳</p>

						</div>
					</React.Fragment>
				}
			>
				<p>Wait A minute, Who are you?</p>
			</HtmlTooltip>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Paper>
							<TextField
								id="outlined-multiline-static"
								fullWidth
								multiline
								rows={28}
								value={text}
								onChange={handleTextChange}
							/>
						</Paper>
					</Grid>
					<Grid xs={6}>
						<Paper  sx={{ minHeight: '570px' ,paddingLeft: '14px' }}>
							<div dangerouslySetInnerHTML={getMarkdownText()}>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</Box>
			<div>
			</div>
		</div >
	);
}
