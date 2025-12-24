import { GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              Norte<span className="text-yellow-400">JS</span>
            </h2>
            <p className="text-gray-400">Expandindo o horizonte do desenvolvimento web no Norte</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/nortejs"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <GithubIcon />
            </a>
            {/* <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <TwitterIcon />
            </a> */}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} NorteJS. Todos os direitos reservados à comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
