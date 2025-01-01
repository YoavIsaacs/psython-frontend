
export default function Header() {
    return(
        <header className="bg-slate-800 text-white">
            <div className="container mx-auto px-4 py3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold">Code Translator</h1>
                </div>
                <nav className="flex space-x-6">
                    <li><a href="#" className="hover:text-blue-300">Editor</a></li>
                    <li><a href="#" className="hover:text-blue-300">Configuration</a></li>
                    <li><a href="#" className="hover:text-blue-300">About</a></li>
                </nav>
            </div>
        </header>
    );
}
