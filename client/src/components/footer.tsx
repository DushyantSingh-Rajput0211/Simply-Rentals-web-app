// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <div className="footer-element">
            <h4 className="text-lg font-bold mb-2">Privacy Portal</h4>
            {/* <p className="text-sm">Content for element 1</p> */}
          </div>
          <div className="footer-element">
            <h4 className="text-lg font-bold mb-2">Careers</h4>
            {/* <p className="text-sm">Content for element 2</p> */}
          </div>
          <div className="footer-element">
            <h4 className="text-lg font-bold mb-2">Help & Support</h4>
            {/* <p className="text-sm">Content for element 3</p> */}
          </div>
          <div className="footer-element">
            <h4 className="text-lg font-bold mb-2">Terms of use</h4>
            {/* <p className="text-sm">Content for element 4</p> */}
          </div>
        </div>
        <p className="mt-4 text-sm">&copy; 2023 Simply Space. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
