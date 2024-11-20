
const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen"> {/* Full-height container */}
            <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div> {/* Spinner */}
        </div>
    );
};
export default Spinner;