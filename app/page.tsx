import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

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
						<div className="mx-auto max-w-[512px] space-y-2">
							<h2 className="text-lg">Porfolio Website</h2>
							<p>The portfolio website is the website you are currently reading this on. Its design has gone through several iterations, and is still being updated.</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-around items-center gap-4">
							<div className="border-2 rounded-lg border-white p-3 w-fit">
								<Image src="/project/portfolio-website/home-page-1.png" alt="Portfolio website home page iteration 1" width={405} height={258} />
							</div>
							<GoArrowRight size={28} className="rotate-90 lg:rotate-0" />
							<div className="border-2 rounded-lg border-white p-3 w-fit">
								<Image src="/project/portfolio-website/home-page-2.png" alt="Portfolio website home page iteration 2" width={405} height={258} />
							</div>
							<GoArrowRight size={28} className="rotate-90 lg:rotate-0" />
							<div className="border-2 rounded-lg border-white p-3 w-fit">
								<Image src="/project/portfolio-website/home-page-3.png" alt="Portfolio website home page iteration 3" width={405} height={258} />
							</div>
							<GoArrowRight size={28} className="rotate-90 lg:rotate-0" />
							<div className="border-2 rounded-lg border-white p-3 w-fit">
								<Image src="/project/portfolio-website/home-page-4.png" alt="Portfolio website home page iteration 4" width={405} height={258} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
  	);
};
