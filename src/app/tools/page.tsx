import type { Metadata } from "next"; import { Calculators } from "../../components/calculators";
export const metadata: Metadata={title:"Calculators",description:"Illustrative, client-side savings, loan and inflation calculators."};
export default function Tools(){return <><p className="eyebrow">INTERACTIVE TOOLS</p><h1 className="page-title">Explore the numbers.</h1><p className="intro">Illustrative calculations happen on this device. Enter non-negative values. Actual results vary.</p><Calculators/></>}
