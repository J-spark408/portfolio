import { Mail, Phone, MapPin } from "lucide-react";

function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
        Contact Information
      </h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 transition-colors">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
              Email
            </h4>
            <a
              href="mailto:Parksungwook93@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Parksungwook93@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 transition-colors">
            <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
              Phone
            </h4>
            <a
              href="tel:+14084200706"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              +1 (408) 420-0706
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 transition-colors">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">
              Location
            </h4>
            <a
              href="https://www.google.com/maps/place/Buena+Park,+CA/@33.8527814,-118.0480046,13z/data=!3m1!4b1!4m6!3m5!1s0x80dd2bf413605d2b:0xcd9feee5cde8fe25!8m2!3d33.8674044!4d-117.9981387!16zL20vMHIyYmY?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Buena Park, CA
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors">
          Follow Me
        </h4>
        <div className="flex space-x-4">
          <a
            href="https://github.com/J-spark408"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub profile"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sungwook-park-b97a25116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn profile"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
