
const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export interface Project {
    id: string;
    title: string;
    teaser: string;
    image: string;
    stack: string[];
    description: string;
    links?: {
        live?: string;
        source?: string;
        paper?: string;
        papers?: { title: string; url: string }[];
        posters?: { title: string; url: string }[];
        media?: { title: string; url: string }[];
    };
}

export const projects: Project[] = [
    {
        id: "waveguide-photodetectors",
        title: "Chip-Integrated Photonics",
        teaser: "Scalable 2D photodetector integration for next-gen photonic circuits",
        image: `${base}/excitons.jpg`,
        stack: ["Integrated Photonics", "PIC", "Optoelectronics", "2D Semiconductors", "Microfabrication", "Quantum Devices"],
        description: `To overcome the physical limitations of vertical light absorption in atomically thin materials, we engineered a device architecture that integrates monolayer MoS<sub>2</sub> directly onto SiN waveguides. This work was a collaborative effort, conducted as a joint project with a Master's student whom I mentored and supervised throughout the research process. By utilizing the evanescent field of light traveling through the waveguide, we achieved a dramatic increase in the overlapping area between the light and the semiconductor, leading to significantly enhanced photoresponsivity compared to traditional vertical illumination. This approach holds promise in optical interconnects for chip-to-chip optical communication and intra-chip electrical computation, providing a scalable path for 2D materials in practical optoelectronic circuits.<br/><br/>The project involved a comprehensive "from A to Z" development cycle:<br/><strong>Design & Simulation:</strong> We optimized SiN waveguide dimensions and diffraction gratings using numerical modeling (FDTD, Lumerical) to match the bandgap of MoS<sub>2</sub>.<br/><strong>Advanced Microfabrication:</strong> We employed LPCVD for SiN growth and dry etching for photonic structures, followed by KOH wet etching to smoothen sidewalls for high-quality flake transfer.<br/><strong>Performance Optimization:</strong> We integrated a graphene local gate and hexagonal boron nitride (h-BN) dielectric to achieve low-voltage operation and high-speed switching below 1 ms.`,
        links: {
            paper: "https://www.nature.com/articles/s41699-019-0096-4",
            posters: [{ title: "Photodetector Poster", url: `${base}/Posters/Photodetector.pdf` }]
        }
    },
    {
        id: "vertical-emitting-devices",
        title: "Vertically Emitting Devices",
        teaser: "Reconfigurable cavity-Integrated 2D LEDs for enhanced light-matter interaction",
        image: `${base}/laser-monolayer750.jpg`,
        stack: ["Quantum Optoelectronics", "2D LED", "Light-Matter Interaction", "Microfabrication", "2D Semiconductors"],
        description: `We developed a platform for reconfigurable vertical light-emitting diodes (LEDs) based on atomically thin 2D semiconductors, specifically monolayer WSe<sub>2</sub>. These devices utilize a split-gate architecture that allows for precise electrostatic tuning between transistor, p-n diode, and n-p diode functionalities. To enhance light-matter interaction, we integrated these emitters with high-Q Distributed Bragg Reflector (DBR) systems. While our initial objective was to achieve lasing, we observed even more curious behavior: the emergence of a strong light-matter coupling regime.<br/><br/>By embedding the 2D LED within a microcavity, we demonstrated room-temperature electrical control over the polarization and emission angle of the pulsed electroluminescence. The device architecture enables us to manipulate the excitonic properties and cavity modes simultaneously, establishing a scalable building block for future transparent, flexible, and quantum optoelectronic circuits.<br/><br/><h3 class="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-1">Project Technical Profile</h3><strong>Core Skills:</strong> Cleanroom Microfabrication (E-beam lithography, dry etching), Numerical simulations, van der Waals Heterostructure Assembly, High-Q Cavity Design, Free-space optics and Ultrafast Laser Spectroscopy.<br/><strong>Key Achievement:</strong> Realized the first room-temperature electrical control of emission angle and polarization in a cavity-integrated 2D pulsed LED.`,
        links: {
            paper: "https://www.nature.com/articles/s41467-022-32292-2",
            posters: [{ title: "LED Poster", url: `${base}/Posters/LED.pdf` }]
        }
    },
    {
        id: "excitonic-transistor",
        title: "Excitonic Transistor",
        teaser: "First demonstration of room-temperature excitonic transistor for next-gen optical interconnects and computing.",
        image: `${base}/IMG_6621_DxO.JPG`,
        stack: ["Excitonic Circuits", "Valleytronics", "2D Heterostructures", "Interlayer Excitons", "Optospintronics"],
        description: `We developed the first excitonic transistors capable of operating at room temperature by exploiting the unique properties of 2D van der Waals heterostructures. By utilizing a MoS<sub>2</sub>-WSe<sub>2</sub> stack, we created long-lived interlayer excitons with a permanent out-of-plane dipole moment. This architecture allowed us to demonstrate an effective excitonic switch where the flux of these neutral quasiparticles is controlled via an external electric field. We achieved an ON/OFF ratio exceeding 100 at room temperature, limited only by the measurement noise floor. Building on this platform, we also realized comprehensive electrical control over the valley-state of interlayer excitons. By resolving separate interlayer transitions with opposite helicities, we successfully demonstrated a gate-tunable polarization switch. This device can alternate between polarization-inverting and polarization-preserving regimes, providing a critical building block for encoding information in the valley degree of freedom—a field known as valleytronics. This research bridges the gap between traditional electronics and purely optical systems, offering a path toward integrated excitonic circuits that combine the high speed of optics with the scalability of solid-state devices.<br/><br/><h3 class="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-1">Project Technical Profile</h3><strong>Core Skills:</strong> Quantum Device Design, vdW Heterostructure Fabrication, Low-T/UHV Cryogenics, Valley-Polarized Spectroscopy.<br/><strong>Key Achievement:</strong> Demonstrated room-temperature exciton flux control (Nature, 2018) and the first gate-tunable valley polarization switch (Nature Photonics, 2019).`,
        links: {
            papers: [
                { title: "Nature (2018): Room-temperature electrical control...", url: "https://www.nature.com/articles/s41586-018-0357-y" },
                { title: "Nature Nano (2019): Valley-polarized exciton currents...", url: "https://www.nature.com/articles/s41565-019-0559-y" },
                { title: "Nature Photonics (2018): Polarization switching...", url: "https://www.nature.com/articles/s41566-018-0325-y" }
            ],
            posters: [
                { title: "IX Polarization switch", url: `${base}/Posters/IX Polarization switch.pdf` },
                { title: "IX RT exciton transport", url: `${base}/Posters/IX RT exciton transport.pdf` }
            ],
            media: [
                { title: "Le Temps", url: "https://www.letemps.ch/sciences/electronique-excitantes-promesses-excitons" },
                { title: "New Scientist (NL)", url: "https://www.newscientist.nl/nieuws/schijndeeltjes-maken-elektronica-efficienter/" },
                { title: "Science Daily", url: "https://www.sciencedaily.com/releases/2018/07/180726085809.htm" },
                { title: "Nanowerk", url: "https://www.nanowerk.com/nanotechnology-news2/newsid=50759.php" },
                { title: "20 Minutes", url: "https://www.20min.ch/fr/story/l-epfl-presente-l-exciton-l-electronique-du-futur-632360609026" },
                { title: "Enviscope", url: "https://www.enviscope.com/avec-lexciton-lepfl-lance-lexcitonique-electronique-du-futur/#more-63091" },
                { title: "Phys.org", url: "https://phys.org/news/2018-07-team-excitons-electronics-future.html" },
                { title: "EPFL News", url: "https://actu.epfl.ch/news/epfl-uses-excitons-to-take-electronics-into-the-fu/" },
                { title: "Nature Nano", url: "https://www.nature.com/articles/s41565-018-0301-1" },
                { title: "Tech Explorist", url: "https://www.techexplorist.com/excitons-pave-way-higher-performance-electronics/19877/?utm_source=rss&utm_medium=rss&utm_campaign=excitons-pave-way-higher-performance-electronics" },
                { title: "EPFL News (2019)", url: "https://actu.epfl.ch/news/excitons-pave-the-way-to-more-efficient-electronic/" },
                { title: "Phys.org (2019)", url: "https://phys.org/news/2019/01/excitons-pave-higher-performance-electronics.html" },
                { title: "UPI", url: "https://www.upi.com/Science_News/2019/01/04/By-controlling-exciton-flows-scientists-can-build-more-efficient-electronics/1471546631892/?ts_sn=16" },
                { title: "Naked Science", url: "https://naked-science.ru/article/physics/eksitony-povysyat-proizvo" },
                { title: "HighTech.fm", url: "https://hightech.fm/2019/01/07/exiton" },
                { title: "Futurism", url: "https://futurism.com/the-byte/physics-breakthrough-advanced-electronics-excitons" },
                { title: "EE World", url: "https://www.eeworldonline.com/excitons-pave-the-way-to-higher-performance-electronics/" },
                { title: "Android Robot", url: "https://android-robot.com/eksitony-prokladyvayut-put-k-bolee-proizvoditelnoj-elektronike/" },
                { title: "LiveJournal", url: "https://antony-w.livejournal.com/1827627.html" },
                { title: "Interesting Engineering", url: "https://interestingengineering.com/innovation/new-properties-of-excitons-discovered-that-can-lead-to-energy-efficient-electronics" },
                { title: "Digital Trends", url: "https://www.digitaltrends.com/cool-tech/exciton-transistor-efficiency-electronics/" },
                { title: "EE Times", url: "https://www.eetimes.com/excitons-show-potential-for-low-power-quantum-computing/?_ga" },
                { title: "EET Asia", url: "https://www.eetasia.com/19012101-excitons-pave-the-way-to-future-electronics/" }
            ]
        }
    },
    {
        id: "spintronic-devices",
        title: "Optospintronic Devices",
        teaser: "First demonstration of optical spin injection into graphene",
        image: `${base}/Device.jpg`,
        stack: ["Spintronics", "Quantum Devices", "Graphene", "Spin-Valley Locking", "Optical Spin Injection"],
        description: `We demonstrated the possibility of direct, nondestructive optical spin injection into graphene by utilizing the unique spin-valley physics of 2D semiconducting monolayers. Our approach used circularly polarized light to selectively address the carrier valley degree of freedom in a monolayer WSe<sub>2</sub> crystal. Due to the broken inversion symmetry and strong spin-orbit coupling, this process leads to a non-equilibrium spin concentration that tunnels into an adjacent graphene layer.<br/><br/>This work established a new functional regime for optospintronic devices, where spin information is generated optically and transported over long distances—up to 3.5 &mu;m—within the graphene channel. It also provides a scalable framework for 2D spintronic logic gates. This enables the seamless integration of optical communication with spin-based memory and computation, potentially leading to hybrid opto-electronic-spintronic processors that are immune to typical electronic interference and heat dissipation issues.<br/><br/><h3 class="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-1">Project Technical Profile</h3><strong>Core Skills:</strong> Spintronics, Optospintronics, Nonlocal Spin Transport, vdW Heterostructure Assembly.<br/><strong>Key Achievement:</strong> First demonstration of optical spin injection in graphene via proximity coupling with a 2D semiconductor.`,
        links: {
            paper: "https://pubs.acs.org/doi/10.1021/acsnano.7b06800",
            posters: [{ title: "Optospintronics Poster", url: `${base}/Posters/Optospintronics.pdf` }]
        }
    },
    {
        id: "transparent-photovoltaics",
        title: "Transparent Organic PV",
        teaser: "Optimized device architecture exceeding 15% transparency.",
        image: `${base}/OPV.jpg`,
        stack: ["PV", "Microfabrication", "Optoelectronics", "Semiconductors", "Renewable Energy"],
        description: "Developed transparent organic photovoltaics with optimized device architecture, materials, and fabrication processes. Achieved over 15% transparency with conversion efficiency above 3%, exceeding available reports at the time."
    },
    {
        id: "transparent-electrodes",
        title: "Ultra-transparent Electrodes",
        teaser: "High-performance transparent conductive electrodes.",
        image: `${base}/TCE.png`,
        stack: ["Thin Films", "Microfabrication", "Optics"],
        description: "Created transparent conductive electrodes based on an ultrathin layer of silver encapsulated between ITO and matching TiO2 layers. Achieved transparency above 90% and sheet resistance below 3 ohm/sq, exceeding commercially available state-of-the-art options."
    },
    {
        id: "concentrated-photovoltaics",
        title: "Concentrated Photovoltaics",
        teaser: "Ultracompact active sun-tracking device.",
        image: `${base}/CPV.png`,
        stack: ["PV", "Optical Design", "Semiconductors", "Embedded Systems", "Renewable Energy"],
        description: "Designed a planar and ultracompact active sun-tracking device with integrated III-V PV. Through innovative optical design, coherent algorithms, and embedded firmware, achieved optical efficiency exceeding 80% and conversion efficiency exceeding 35%."
    }
];
