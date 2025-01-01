
export default function Footer() {
    return(
        <footer className="bg-sky-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-3">
                <p className="text-center text-sm">
                    Psython © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}