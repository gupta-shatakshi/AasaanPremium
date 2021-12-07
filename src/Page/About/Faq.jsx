import React from 'react';
import 'antd/dist/antd.css';
import classes from "./faq.module.css";
import { Collapse } from 'antd';
// import SubFaq from './SubFaq';

const { Panel } = Collapse;

const Faq = () => {

	// const ques = ["Why do I need business insurance?",
	// "What do Insurance Policy covers?",
	// "How much does business insurance cost?",
	// "Is business insurance tax deductible?",
	// "What happens if I don't pay my business insurance premiums on time?"];

	// const ans = ["Business insurance, also called commercial insurance, provides crucial protection for any small business. If there’s an accident at your business, you could face a lawsuit. The high cost of litigation, medical bills, and property damage claims is the primary reason businesses need insurance.The risks you face determine which policies you need. The policy most businesses purchase is general liability insurance, which protects against customer injuries and other common accidents. You may need additional policies if you have employees, own a building, own a business vehicle, or provide expert advice.", 
    // "No single insurance policy covers everything. In general, there are two broad areas of coverage: 1. Business liability insurance covers incidents in which someone holds your business responsible for damages, injury, or loss. 2. Commercial property insurance pays for repair or replacement of damaged or stolen business property. It also covers your building if you own it.", 
	// "Business insurance costs vary based on the policies you purchase and your coverage limits. Other factors include your industry, number of employees, revenue, and location. Small, low-risk businesses – especially those that qualify for a business owner’s policy (BOP) – pay less for insurance than larger companies.",
	// "Business insurance is considered one of the costs of doing business. That means you can deduct insurance premiums that serve a business purpose, such as your premium for general liability insurance or professional liability insurance.",
	// "It’s really important that you keep up to date with your premium payments. If you do not pay your premiums on time we may be entitled to reduce or refuse to pay a claim and cancel your policy in accordance with the Insurance Contracts Act 1984.",

	// ]

	const data = [{
		ques: 'Why do I need business insurance?',
		ans: 'Business insurance, also called commercial insurance, provides crucial protection for any small business. If there’s an accident at your business, you could face a lawsuit. The high cost of litigation, medical bills, and property damage claims is the primary reason businesses need insurance.The risks you face determine which policies you need. The policy most businesses purchase is general liability insurance, which protects against customer injuries and other common accidents. You may need additional policies if you have employees, own a building, own a business vehicle, or provide expert advice.',
	},{
		ques: 'What do Insurance Policy covers?',
		ans: 'No single insurance policy covers everything. In general, there are two broad areas of coverage: 1. Business liability insurance covers incidents in which someone holds your business responsible for damages, injury, or loss. 2. Commercial property insurance pays for repair or replacement of damaged or stolen business property. It also covers your building if you own it.',
	},{
		ques: 'How much does business insurance cost?',
		ans: 'Business insurance costs vary based on the policies you purchase and your coverage limits. Other factors include your industry, number of employees, revenue, and location. Small, low-risk businesses – especially those that qualify for a business owner’s policy (BOP) – pay less for insurance than larger companies.',
	},{
		ques: 'Is business insurance tax deductible?',
		ans: 'Business insurance is considered one of the costs of doing business. That means you can deduct insurance premiums that serve a business purpose, such as your premium for general liability insurance or professional liability insurance.',
	},{
		ques: "What happens if I don't pay my business insurance premiums on time?",
		ans: 'It’s really important that you keep up to date with your premium payments. If you do not pay your premiums on time we may be entitled to reduce or refuse to pay a claim and cancel your policy in accordance with the Insurance Contracts Act 1984.',
	}];

	return (
	
			<div className={classes.faqBlock}>
				<br /> <br />
				<Collapse accordion className={classes.container}>
					{/* {data.map((item, index)=>{
						return(
						<Panel header = {item.ques} key = {index} className={classes.panel}>
							{	
								data.map((elem, i)=>{
									data.filter((val) => {
										if(index === i){
											return(
												<p key = {i}>{item.ans}</p>
											)
										}
										
									})
									// return(
									// 	<p key = {i}>{elem.ans}</p>
									// )
								})
								// <SubFaq />
							}
						</Panel>
						)
						
					})} */}
					<Panel header={data[0].ques}>
						<p>{data[0].ans}</p>
					</Panel>
					<Panel header={data[1].ques}>
						<p>{data[1].ans}</p>
					</Panel>
					<Panel header={data[2].ques}>
						<p>{data[2].ans}</p>
					</Panel>
					<Panel header={data[3].ques}>
						<p>{data[3].ans}</p>
					</Panel>
					<Panel header={data[4].ques}>
						<p>{data[4].ans}</p>
					</Panel>
				</Collapse>
			</div>
	
		
	)
}

export default Faq;
