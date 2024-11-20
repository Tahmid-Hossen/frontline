import {Link} from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img width={460} height={280} className={" object-cover"}
           src={`/images/default/no-result-found.png`} alt={"no-result-found"}/>
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for does not exist or has been moved or removed.
      </p>
      <Link to="/" className="btn-large-rounded">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;