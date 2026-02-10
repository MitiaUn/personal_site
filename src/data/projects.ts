
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
    };
}

export const projects: Project[] = [
    {
        id: "2d-led-integration",
        title: "2D LED Integration",
        teaser: "Integration of 2D LEDs with on-chip photonics.",
        image: `${base}/excitons.jpg`,
        stack: ["Quantum Devices", "Optoelectronics", "2D Semiconductors", "Microfabrication"],
        description: "Demonstrated the integration of 2D light-emitting diodes (LEDs) with on-chip photonic circuits. This work paves the way for scalable quantum photonic circuits based on 2D materials.",
        links: {
            paper: "https://www.nature.com/articles/s41699-019-0096-4"
        }
    },
    {
        id: "vertical-emitting-devices",
        title: "Vertically Emitting Devices",
        teaser: "Vertically emitting devices integrated with DBRs.",
        image: `${base}/laser-monolayer750.jpg`,
        stack: ["Quantum Devices", "Optoelectronics", "2D Semiconductors", "Microfabrication"],
        description: "Developed vertically emitting devices integrated with Distributed Bragg Reflectors (DBRs) to enhance light emission and control directionality, crucial for efficient optical interconnects.",
        links: {
            paper: "https://www.nature.com/articles/s41467-022-32292-2"
        }
    },
    {
        id: "excitonic-transistor",
        title: "Excitonic Transistor",
        teaser: "First room-temperature excitonic transistor.",
        image: `${base}/IMG_6621_DxO.JPG`,
        stack: ["Quantum Devices", "Excitons", "Optoelectronics", "2D Semiconductors", "Microfabrication"],
        description: "Demonstrated the first excitonic transistors operational at room temperature. This breakthrough enables the control of exciton flux for future excitonic circuits.",
        links: {
            paper: "https://www.nature.com/articles/s41586-018-0357-y"
        }
    },
    {
        id: "spintronic-devices",
        title: "Spintronic Devices",
        teaser: "Spintronic and opto-spintronic devices based on 2D materials.",
        image: `${base}/Device.jpg`,
        stack: ["Quantum Devices", "2D Semiconductors", "Spintronics"],
        description: "Investigated spin transport and manipulation in 2D heterostructures, demonstrating robust spin injection and detection, as well as opto-spintronic functionalities.",
        links: {
            paper: "https://pubs.acs.org/doi/10.1021/acsnano.7b06800"
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
