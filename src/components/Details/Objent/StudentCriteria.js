import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../Details/details.scss';
import verify from '../../../assets/icons/verify.png';
import notVerified from '../../../assets/icons/remove.png';
import InputMask from 'react-input-mask';

const StudentCriteria = (props) => { debugger;
	const studentInfoData = props.apiData.StudentInfo;
	const communityInfo = props.apiData.CommunityInfo;
  const OtherInfo = props.apiData.OtherInfo;
  return (
    <>
		<div className='criteria'>
			<Row>
        <h5>General Details</h5>
				{
					studentInfoData && (
						Object.entries(studentInfoData).map(([key, value]) => {
						return (
							Object.entries(value).map(([key, val]) => {
								return (
									<Col md={3} key={key} className='detailsRows'>
										<h6>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</h6>
										<span>{val}</span>
									</Col>
								)
							})
						)
						})
					)
				}
			</Row>
		</div>
		<div className='criteria'>
			<Row>
				<h5>Community Details</h5>
				{
					communityInfo && (
						Object.entries(communityInfo).map(([key, value]) => {
						return (
							Object.entries(value).map(([key, val]) => {
								return (
									<Col md={3} key={key} className='detailsRows'>
										<h6>
											{
												key === 'CommunityCertificateNumber' 
												? 
												<span className='certificateNo'>
													{
														key.replace(/([a-z])([A-Z])/g, '$1 $2')
													}
													<img src={verify} alt='verified' />
												</span>
												:
												key.replace(/([a-z])([A-Z])/g, '$1 $2')
											}
										</h6>
										<span>{val}</span>
									</Col>
								)
							})
						)
						})
					)
				}
			</Row>
		</div>
    <div className='criteria'>
			<Row>
        <h5>Other Details</h5>
				{
					OtherInfo && (
						Object.entries(OtherInfo).map(([key, value]) => {
						return (
							Object.entries(value).map(([key, val]) => {
								return (
									<Col md={3} key={key} className='detailsRows'>
										<h6>
											{
												key === 'GraduateCertificateNumber'
												?
												<span className='certificateNo'>
													{
														key.replace(/([a-z])([A-Z])/g, '$1 $2')
													}
													<img src={notVerified} alt='verified' />
												</span>
												:
												key.replace(/([a-z])([A-Z])/g, '$1 $2')
											}
										</h6>
										<span>{val}</span>
									</Col>
								)
							})
						)
						})
					)
				}
			</Row>
		</div>
    </>
  )
}

export default StudentCriteria