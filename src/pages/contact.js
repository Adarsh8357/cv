export default function Contact() {
    return (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded p-6 md:p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg text-gray-700 mb-2">You can reach me at:</p>
            <a
                href="mailto:ashhh4456@gmail.com"
                style={{ color: 'blue', textDecoration: 'none' }}
                


                className="text-blue-600 underline break-all"
            >
                ashhh4456@gmail.com
            </a>
        </div>
    );
}
