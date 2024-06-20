'use client';

import { Bar, Line, Pie } from "react-chartjs-2";
import 'chart.js/auto';
import SideNav from "@/components/SideNavbar";
import { useState } from "react";
import Link from "next/link";

export default function DashBoard() {

	const [datainput, setInput] = useState('');

	console.log(datainput)
	
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Appniche Bar Chart',
				data: [65, 59, 80, 81, 56],
				fill: false,
				borderColor: '#cc6666',
				tension: 0.1,
				backgroundColor: [
					'#de935f',
					'#b294bb',
					'#81a2be',
					'#b5bd68',
					'#8abeb7',
				],

			},
		],
	};

	const dataPie = {
		labels: ['January', 'February', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Appniche Pie Chart',
				data: [65, 59, 80, 81, 56],
				fill: false,
				borderColor: [
					'#81a2be',
					'#b294bb',
					'#8abeb7',
					'#b5bd68',
					'#de935f',
				],
				tension: 0.1,
				backgroundColor: [
					'#81a2be',
					'#b294bb',
					'#8abeb7',
					'#b5bd68',
					'#de935f',
				],
			},
		],
	};
	return (
		<>
			<SideNav />
			<section className="">
				<div className="ml-[80px]">
					<header className="flex justify-between items-center gap-6 mb-6 p-4">
						<div className="flex-1">
							<h1 className="text-5xl font-bold text-black">Dashboard</h1>
						</div>
						<div className="flex items-center space-x-4">
							<input
								list="search-options"
								type="text"
								placeholder="Search"
								className="p-2 text-black border rounded"
								onChange={(e) => {
									setInput(e.target.value);
								}}
								defaultValue={datainput}
							/>
							<datalist id="search-options">
								<option value="7 days" />
								<option value="30 days" />
								<option value="90 days" />
								<option value="1 year" />
							</datalist>
							<button className="material-icons bg-red-500 p-2 rounded-md">View</button>
						</div>
						<div className="border border-red-500 p-2 rounded-md">
							<Link href="/eatofy/add/hotels">Add hotels</Link>
						</div>
					</header>

					<div className="grid grid-cols-1 md:grid-cols-2 text-black lg:grid-cols-4 gap-4 my-9 px-6">
						<div className="bg-zinc-200 p-4 shadow-md shadow-gray-500 rounded">
							<h2 className="text-lg font-bold">Total Hotels</h2>
							<p className="text-2xl">10,475</p>
							<p className="text-green-500">+11.01%</p>
						</div>
						<div className="bg-zinc-200 p-4 shadow-md shadow-gray-500 rounded">
							<h2 className="text-lg font-bold">Lucro Total</h2>
							<p className="text-2xl">367</p>
							<p className="text-green-500">+9.15%</p>
						</div>
						<div className="bg-zinc-200 p-4 shadow-md shadow-gray-500 rounded">
							<h2 className="text-lg font-bold">Quantidade de Vendas</h2>
							<p className="text-2xl">1,156</p>
							<p className="text-red-500">-0.56%</p>
						</div>
						<div className="bg-zinc-200 p-4 shadow-md shadow-gray-500 rounded">
							<h2 className="text-lg font-bold">Itens Vendidos</h2>
							<p className="text-2xl">239</p>
							<p className="text-red-500">-1.48%</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row justify-center items-center px-4">
					<div className="ml-[80px] w-[40%] flex justify-center items-center p-4 shadow-md shadow-gray-400">
						<Pie data={dataPie} />
					</div>
					<div className="ml-[80px] w-[80%] flex justify-center items-center p-4 shadow-md shadow-gray-400">
						<Bar data={data} />
					</div>
				</div>
			</section>
		</>
	)
}
