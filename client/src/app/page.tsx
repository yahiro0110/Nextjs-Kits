import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="font-medium text-2xl">monipo SampleView with Next.js 🚀</h1>
                <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur vitae voluptatum similique voluptatibus dicta perspiciatis accusantium architecto? Asperiores, ipsum amet. Praesentium illo quo illum. Autem cumque quam minima aliquam!</p>
                <div className="flex gap-4 items-center">
                    <Button>OK</Button>
                    <Button className="bg-red-500 hover:bg-red-300">CANCEL</Button>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <p className="text-xs text-center sm:text-left">monipo sample view</p>
            </footer>
        </div>
    );
}
