import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

import WorkCard from '../components/WorkCard';
import AboutCard from '../components/AboutCard';
import HeadingBox from '../components/HeadingBox';

export default function Home() {
  	return (
		<main className="flex-grow bg-malibu-900">
			<section className="flex flex-col lg:flex-row justify-evenly my-16">
				<div className="mx-8 my-auto py-8 text-center">
					<div className="pb-8">
						<Image src="/brand/logo-transparent.png" alt="Vink Web Development logo" width={400} height={153} className="inline-block" />
					</div>
					<div className="mx-auto max-w-[512px] space-y-4">
						<p>Vink Web Development offers professional web development and design services, specialising in &apos;Crafting Digital Nests&apos; for individuals and businesses in Australia</p>
						<p>Led by Jordan Vink, a full stack web developer</p>
					</div>
				</div>
				<div className="mx-8 my-auto py-8">
					<div className="space-y-8">
						<WorkCard
							title="Myxos and Musings Book Sale"
							image="/work/myxos-and-musings/myxos-and-musings.jpg"
							imagePadding={false}
							imageWidth={512}
							imageHeight={192}
							summary="Developed the front end, back end, and payment system for the sale of the Myxos and Musings book."
							linkId="/work#myxos-and-musings" />
						<WorkCard
							title="Wamos Portugal Web Development Intern"
							image="/work/wamos-portugal/wamos-portugal.png"
							imagePadding={true}
							imageWidth={238}
							imageHeight={77}
							summary="Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface."
							linkId="/work#wamos-portugal" />
					</div>
				</div>
			</section>
			<section className="my-16 py-16 bg-white">
				<div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start space-y-8 lg:space-y-0">
					<div>
						<AboutCard
							title="Education"
							summary="Find out about what steps Jordan has taken to get here."
							linkId="/about#background" />
					</div>
					<div>
						<AboutCard
							title="Future Plans"
							summary="See his plans for how to push his skills further."
							linkId="/about#improvement" />
					</div>
					<div>
						<AboutCard
							title="Interests"
							summary="Interested in what Jordan does in his spare time?"
							linkId="/about#interests" />
					</div>
				</div>
			</section>
			<section className="my-16">
				<div className="my-16">
					<HeadingBox text="Here Are Some Of My Personal Projects" />
				</div>
				<div>
					<div className="mx-4 lg:mx-8 space-y-8">
						<div>
							<div className="mx-auto px-8 max-w-[512px] space-y-2">
								<div className="flex flex-row justify-between">
									<h2 className="my-2 text-lg">Room View</h2>
									<Link href="https://room-view-iota.vercel.app" target="_blank" className="my-2 hover:opacity-50 active:opacity-25">
										<GoArrowUpRight size={28} />
									</Link>
								</div>
								<p>Room View embodies my passion for photospheres, designed for the displaying of interior spaces. You simply add a background image, such as an architect&apos;s floor plan or an image from google maps, and insert photospheres over top.</p>
							</div>
							<Image src="/project/room-view/room-page.png" alt="Room view&apos;s Room page" height={1010} width={1817} className="mx-auto p-8 lg:w-2/3" />
							<div className="mx-auto px-8 max-w-[512px]">
								<h2 className="my-2 text-lg text-center">Current Features</h2>
								<ul className="list-disc">
									<li>Add a background image from your computer.</li>
									<li>Inlcude photospheres in your camera roll.</li>
									<li>Determine photosphere position on the map.</li>
								</ul>
								<h2 className="my-2 text-lg text-center">Planned Features</h2>
								<ul className="list-disc">
									<li>Advanced photosphere grouping, based on date, time of day, or weather.</li>
									<li>Layered Background for multistory buildings.</li>
									<li>Accounts and database storage.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
  	);
};
