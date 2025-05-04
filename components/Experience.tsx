// import React from "react";

// const Experience = () => {
//   return (
//     <div>
//       <div>
//         <h1>Company name: First Penny pvt ltd</h1> <p> company logo</p>
//         <p>company linked in profile</p>
//         <p>company website</p>
//         <p>my joining date</p>
//         <p>role in this company</p>
//         <p>skills i am using in the company</p>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import { Link, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";


const Experience = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <Card className="max-w-3xl mx-auto p-6 shadow-xl rounded-2xl bg-white">
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 flex items-center justify-center">
            {/* Replace with actual logo */}
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              <Image src = "/bi-3.png" alt="company-logo" width={200} height={200}></Image>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-800">
              First Penny Pvt Ltd
            </h3>
            <div className="text-sm text-gray-500 mt-1">Joined: Nov 2024</div>
            <div className="mt-2">
              <span className="font-medium text-gray-700">Role:</span> Javascript developer
              Developer
            </div>
            <div className="mt-2 flex items-center gap-2 text-blue-600">
              <Link className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/company/first-penny-software-private-limited/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="mt-1 flex items-center gap-2 text-blue-600">
              <Globe className="w-4 h-4" />
              <a
                href="https://www.thefirstpenny.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Company Website
              </a>
            </div>
            <div className="mt-4">
              <span className="font-medium text-gray-700">Skills:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "JavaScript", "Tailwind CSS", "Node.js"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;

