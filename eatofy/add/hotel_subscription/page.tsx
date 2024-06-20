'use client'

import SideNav from "@/components/SideNavbar";
import Link from "next/link";
import { useState } from "react";

export default function HotelSubscription() {

	const [data, setdata] = useState([]);
	const [valid, setvalid] = useState(false);
	const [isvalid, setisvalid] = useState('');
	const [start_date, setstart_date] = useState('');
	const [start_time, setstart_time] = useState('');
	const [end_date, setend_date] = useState('');
	const [end_time, setend_time] = useState('');

	console.log(isvalid, " ", start_date, " ", end_date, " ", start_time, " ",end_time);

	async function handleSubmit(e: any) {
		e.preventDefault();

		if (isvalid === 'true') {
			setvalid(true);
		}else if (isvalid === 'false') {
			setvalid(false);
		}
			
		try {
			const response = await fetch('http://localhost:3001/api/eatofy/hotel_subscription/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					is_valid: valid,
					start_date: start_date,
					start_time: start_time,
					end_date: end_date,
					end_time: end_time
				})
			});

			if (response.ok) {
				const data = await response.json();
				setdata(data);
				console.log('Hotel created:', data);
			} else {
				console.error('Failed to create hotel');
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}

	}

	console.log(data);

	return (
		<>
			<SideNav />
			<section className="ml-[80px] flex justify-center items-center h-dvh">
				<form encType="multipart/form-data" onSubmit={handleSubmit} className="w-[80%] flex flex-col justify-center items-center gap-6">
					<div className="w-[60%]">
						<label>Valid or Not</label>
						<select 
							id="validation" 
							name="validation"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							onChange={
								(e) => {
									setisvalid(e.target.value);
								}
							}
						>
							<option value="true" defaultValue="true">true</option>
							<option value="false">false</option>
						</select>
					</div>
					<div className="w-[60%]">
						<label>Start date</label>
						<input
							type="date"
							id="start_date"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="start date"
							defaultValue={start_date}
							onChange={
								(e) => {
									setstart_date(e.target.value);
								}
							}
						/>
					</div>
					<div className="w-[60%]">
						<label>Start date</label>
						<input
							type="time"
							id="start_time"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="start time"
							defaultValue={start_time}
							onChange={
								(e) => {
									setstart_time(e.target.value);
								}
							}
						/>
					</div>
					<div className="w-[60%]">
						<label>End date</label>
						<input
							type="date"
							id="end_date"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="end date"
							defaultValue={end_date}
							onChange={
								(e) => {
									setend_date(e.target.value);
								}
							}
						/>
					</div>
					<div className="w-[60%]">
						<label>Start date</label>
						<input
							type="time"
							id="end_time"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="end time"
							defaultValue={end_time}
							onChange={
								(e) => {
									setend_time(e.target.value);
								}
							}
						/>
					</div>
					<div className="flex justify-between items-center w-[60%] px-3 py-6 ">
						<button type="submit" className="bg-red-400 text-white font-bold p-3 rounded-md shadow-md shadow-gray-400 border border-red-400">
							Add subscription
						</button>
						<Link href="/eatofy/add/hotel_subscription" className="text-red-400 w-[80px] font-bold p-3 border border-red-400 rounded-md">
							next -&gt;
						</Link>
					</div>
				</form>
			</section>
		</>
	)
}
