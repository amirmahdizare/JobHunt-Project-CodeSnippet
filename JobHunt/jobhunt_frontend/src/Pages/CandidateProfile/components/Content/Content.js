import React from 'react'
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	makeStyles,
	Typography,
	InputBase,
	TextareaAutosize,
} from '@material-ui/core'
import { SkillsPercentage } from './components/SkillsPercentage'
import { WorkExperience } from './components/WorkExperience/WorkExperience'
import { Portfolio } from './components/Portfolio/Portfolio'
import { ProfessionalSkills } from './components/ProfessionalSkills/ProfessionalSkills'
import { CertificatesSection } from './components/CertificatesSection/CertificatesSection'
import { CandidateMenu } from '../../../../components/CandidateMenu'
import { UserAvatar } from '../../../../components/UserAvatar'
import { Jh_Card } from '../../../../components/Jh_Card'
const useClasses = makeStyles((theme) => ({
	browseBtn: {
		borderRadius: theme.spacing(2),
		width: '110px',
	},
}))
export const Content = () => {
	const classes = useClasses()
	return (
		<Container>
			<Grid container direction='row'>
				<Grid item xs={12} lg={3}>
					<CandidateMenu />
					<Divider light />
					<SkillsPercentage />
				</Grid>
				<Divider orientation='vertical' flexItem />
				<Grid item xs={12} lg={8}>
					<Box p={1}>
						<Typography variant='h5'>My Profile</Typography>
					</Box>
					<Box
						style={{ padding: '10px' }}
						direction='row'
						justifyContent='space-around'
						alignItems='center'
						display='flex'
					>
						<UserAvatar
							src='https://creativelayers.net/themes/jobhunt-html/images/resource/es1.jpg'
							size='big'
							name='ali tofan'
						/>
						<Box
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
							height={'80px'}
						>
							<Button
								className={classes.browseBtn}
								style={{
									borderColor: '#3f51b5',
									color: '#3f51b5',
								}}
								variant='outlined'
							>
								Browse
							</Button>
							<Typography
								variant='subtitle2'
								color='textSecondary'
								gutterBottom
							>
								Max file size is 1MB, Minimum dimension: 270*210 And Suitable
								files are .jpg & .png
							</Typography>
						</Box>
					</Box>
					<Grid container spacing='2' style={{ padding: '10px' }}>
						<Grid
							lg={6}
							item
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Full Name</p>
							<Jh_Card>
								<InputBase
									inputProps={{ 'aria-label': 'Select Location' }}
									fullWidth
									id='name'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
						<Grid
							item
							lg={6}
							display='flex'
							flexDirection='column'
							justifyContent='space-between'
						>
							<p>Job Title</p>
							<Jh_Card>
								<InputBase
									fullWidth
									width='full'
									id='job-title'
									labelWidth={70}
								/>
							</Jh_Card>
						</Grid>
					</Grid>
					<Box display='flex' flexDirection='column' padding={'10px'}>
						<p>Description</p>
						<TextareaAutosize
							style={{
								borderColor: '#e2e2e2',
								color: 'rgba(0, 0, 0, 0.54)',
								borderRadius: '5px',
								borderWidth: '2px',
								padding: '25px',
								lineHeight: '1.1rem',
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
							ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
							faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames
							ac ante ipsum primis in faucibus.
						</TextareaAutosize>
					</Box>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button
							className={classes.browseBtn}
							style={{
								borderColor: '#f50057',
								color: 'black',
								borderRadius: '8px',
							}}
							variant='outlined'
						>
							Update
						</Button>
					</div>
					<Divider light />

					<CertificatesSection />
				</Grid>
			</Grid>
		</Container>
	)
}
