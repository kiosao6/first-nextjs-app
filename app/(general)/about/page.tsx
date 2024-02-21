import type { Metadata } from 'next';



export const metadata: Metadata = {
 title: 'About',
 description: 'About us',
};


export default function AboutPage() {
    return(
            <span className="text-5xl">Hola mundo desde about</span>
    )
}