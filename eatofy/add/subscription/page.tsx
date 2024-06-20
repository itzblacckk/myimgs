'use client'

import SideNav from "@/components/SideNavbar";
import Link from "next/link";
import { useState } from "react";

export default function Subscription() {

	const [data, setdata] = useState([]);
	const [subscription_name, setsubname] = useState('');
	const [price, setprice] = useState('');
	const [validity, setvalidity] = useState(0);

	console.log(subscription_name, " ", price, " ",typeof validity);

	async function handleSubmit(e: any) {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3001/api/eatofy/subscription/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					subscription_name: subscription_name,
					price: price,
					validity: validity
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
						<label>Subscription Name</label>
						<input
							type="text"
							id="subscription_name"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="Subscription"
							defaultValue={subscription_name}
							onChange={
								(e) => {
									setsubname(e.target.value);
								}
							}
						/>
					</div>
					<div className="w-[60%]">
						<label>Price</label>
						<input
							type="text"
							id="price"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="price"
							defaultValue={price}
							onChange={
								(e) => {
									setprice(e.target.value);
								}
							}
						/>
					</div>
					<div className="w-[60%]">
						<label>Validity</label>
						<input
							type="number"
							id="validity"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
							required
							placeholder="validity"
							defaultValue={validity}
							onChange={
								(e) => {
									setvalidity(e.target.valueAsNumber);
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
