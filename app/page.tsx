import ProjectSummary from '../components/ProjectSummary';

export default function Home() {
  	return (
		<main className="flex-grow bg-slate-700">
			<section className="px-48 py-16">
				<ul className="text-lg">
					<li>import {'{'} HTML, CSS, javascript {'}'} from 'front-end';</li>
					<li>import {'{'} javascript {'}'} from 'back-end';</li>
					<li>import {'{'} Next.js {'}'} from 'frameworks';</li>
					<li className="my-8 font-bold"> import {'{'} EverythingElse {'}'} from 'jordan-vink';</li>
				</ul>
			</section>
			<section className="px-64 py-16">
				<div className="mb-16 bg-gradient-to-r from-transparent via-white to-transparent py-px">
					<div className="py-4 w-full h-full bg-slate-700">
						<h1 className="text-center">Check Out What I Have Worked On Recently</h1>
					</div>
				</div>
				<div className="mb-8">
					<ProjectSummary title="Wamos Portugal Web Development Intern" image="/wamos-grupo-logo.png" imageWidth="238" imageHeight="77" summary="Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface." />
				</div>
				<div>
					<ProjectSummary title="Myxos and Musings Book Sale" image="/open-page-95.jpg" imageWidth="200" imageHeight="133" summary="Managed pricing and design for the sale of the Myxos and Musings book." />
				</div>
			</section>
		</main>
  	);
};
