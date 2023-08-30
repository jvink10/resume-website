import ProjectSummary from '../components/ProjectSummary';

export default function Home() {
  	return (
		<main className="flex-grow bg-slate-700">
			<section className="px-8 md:px-16 lg:px-32 xl:px-48 py-16">
				<ul className="text-lg">
					<li>import {'{'} HTML, CSS, javascript {'}'} from &apos;front-end&apos;;</li>
					<li>import {'{'} javascript {'}'} from &apos;back-end&apos;;</li>
					<li>import {'{'} Next.js {'}'} from &apos;frameworks&apos;;</li>
					<li className="my-8 font-bold">import {'{'} EverythingElse {'}'} from &apos;jordan-vink&apos;;</li>
				</ul>
			</section>
			<section className="px-8 py-16">
				<div className="mx-8 md:mx-16 lg:mx-32 mb-16 bg-gradient-to-r from-transparent via-white to-transparent py-px">
					<div className="py-4 w-full h-full bg-slate-700">
						<h1 className="text-center">Check Out What I Have Worked On Recently</h1>
					</div>
				</div>
				<div className="space-y-8">
					<ProjectSummary title="Myxos and Musings Book Sale" image="/work/myxos-and-musings.jpg" imagePadding={false} imageWidth={512} imageHeight={192} summary="Managed pricing and design for the sale of the Myxos and Musings book." />
					<ProjectSummary title="Wamos Portugal Web Development Intern" image="/work/wamos-portugal.png" imagePadding={true} imageWidth={238} imageHeight={77} summary="Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface." />
				</div>
			</section>
		</main>
  	);
};
