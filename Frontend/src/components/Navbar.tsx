








// import React, { useState, useEffect } from 'react';
// import InstallPWAButton from './InstallPWAButton';
// // import { Link, useNavigate } from 'react-router-dom';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// import {
//   Search,
//   WashingMachine,
//   ShoppingCart,
//   User,
//   UserPlus,
//   Menu,
//   X,
// } from 'lucide-react';

// interface NavbarProps {
//   searchQuery: string;
//   onSearchChange: (query: string) => void;
//   cartItemCount?: number;
//   onCartClick?: () => void;
// }

// export default function Navbar({
//   searchQuery,
//   onSearchChange,
//   cartItemCount,
//   onCartClick,
// }: NavbarProps) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// const location = useLocation();

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   setIsLoggedIn(!!localStorage.getItem('token'));
//   // }, []);

// useEffect(() => {
//   setIsLoggedIn(!!localStorage.getItem('token'));
// }, [location]);

//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//   };

//   // const handleLogout = () => {
//   //   localStorage.removeItem("token");
//   //   setIsLoggedIn(false);
//   //   navigate("/");
//   // };

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   setIsLoggedIn(false);
//   window.location.href = "/"; // 🔁 Force full reload
// };

//   const navLinks = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About' },
//     { to: '/contact', label: 'Contact' },
//     { to: '/orders', label: 'Order' },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <WashingMachine className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
//             <h1 className="text-lg md:text-xl font-bold text-gray-900">DhobiXpress</h1>
//           </Link>

//           {/* Desktop Search */}
//           <div className="hidden md:flex flex-1 max-w-md ml-8">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search by product or Dhobi name..."
//                 value={searchQuery}
//                 onChange={(e) => onSearchChange(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="text-slate-700 hover:text-blue-600"
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {!isLoggedIn ? (
//               <>
//                 <Link to="/signin" className="flex items-center text-slate-700 hover:text-blue-600">
//                   <User className="w-4 h-4 mr-1" /> Sign In
//                 </Link>
//                 <Link to="/signup" className="flex items-center text-slate-700 hover:text-blue-600">
//                   <UserPlus className="w-4 h-4 mr-1" /> Sign Up
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link to="/customerdashboard" className="text-slate-700 hover:text-blue-600">
//                   Dashboard
//                 </Link>
//                 <button onClick={handleLogout} className="text-slate-700 hover:text-red-600">
//                   Logout
//                 </button>
//               </>
//             )}

//             {/* Cart */}
//             <button onClick={onCartClick} className="relative p-2 text-gray-700 hover:text-blue-600">
//               <ShoppingCart className="w-5 h-5" />
//               {cartItemCount && cartItemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   {cartItemCount}
//                 </span>
//               )}
//             </button>

//             <InstallPWAButton />
//           </div>

//           {/* Mobile menu toggle */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-gray-800"
//             aria-label="Toggle menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Search */}
//         <div className="md:hidden mt-2 mb-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//               placeholder="Search services or Dhobi..."
//               className="border rounded px-3 py-2 w-full"
//             />
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white p-4 shadow-lg rounded-md">
//             <ul className="space-y-4">
//               {navLinks.map((link) => (
//                 <li key={link.to}>
//                   <Link
//                     to={link.to}
//                     onClick={handleLinkClick}
//                     className="block text-slate-700 hover:text-blue-600"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}

//               {!isLoggedIn ? (
//                 <>
//                   <li><Link to="/signin" onClick={handleLinkClick} className="block text-slate-700 hover:text-blue-600">Sign In</Link></li>
//                   <li><Link to="/signup" onClick={handleLinkClick} className="block text-slate-700 hover:text-blue-600">Sign Up</Link></li>
//                 </>
//               ) : (
//                 <>
//                   <li><Link to="/customerdashboard" onClick={handleLinkClick} className="block text-slate-700 hover:text-blue-600">Dashboard</Link></li>
//                   <li><button onClick={handleLogout} className="block text-slate-700 hover:text-red-600">Logout</button></li>
//                 </>
//               )}

//               <li>
//                 <button
//                   onClick={() => {
//                     if (onCartClick) onCartClick();
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="relative flex items-center text-slate-700 hover:text-blue-600"
//                 >
//                   <ShoppingCart className="w-5 h-5 mr-1" /> Cart
//                   {cartItemCount && cartItemCount > 0 && (
//                     <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                       {cartItemCount}
//                     </span>
//                   )}
//                 </button>
//               </li>

//               <li>
// {/*                 <InstallPWAButton /> */}
// {/* <a
//   href="/app-debug.apk"
//   download
//   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// >
//   📲 Download Android App
// </a>
//  */}
// <a
//   href="/app-debug.apk"
//   download
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// >
//   📲 Download Android App
// </a>

//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }















import React, { useState, useEffect } from 'react';
import InstallPWAButton from './InstallPWAButton';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  WashingMachine,
  ShoppingCart,
  User,
  UserPlus,
  Menu,
  X,
} from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({
  searchQuery,
  onSearchChange,
  cartItemCount,
  onCartClick,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [isNativeAppInstalled, setIsNativeAppInstalled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location]);

  // ✅ Detect if PWA is installed
  useEffect(() => {
    const checkPWAInstalled = () => {
      const standalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true; // iOS
      setIsAppInstalled(standalone);
    };

    checkPWAInstalled();

    window.addEventListener('appinstalled', checkPWAInstalled);
    return () => {
      window.removeEventListener('appinstalled', checkPWAInstalled);
    };
  }, []);

  // ✅ Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Detect if Native App is Installed using Deep Link
  useEffect(() => {
    if (isMobile) {
      const deepLink = 'myapp://open'; // <-- Replace with your custom scheme or Android App Link
      let hiddenIframe: HTMLIFrameElement | null = document.createElement('iframe');
      hiddenIframe.style.display = 'none';
      hiddenIframe.src = deepLink;
      document.body.appendChild(hiddenIframe);

      let timeout = setTimeout(() => {
        setIsNativeAppInstalled(false); // If still on page after timeout, app is not installed
        document.body.removeChild(hiddenIframe!);
      }, 1500);

      window.addEventListener('blur', () => {
        clearTimeout(timeout);
        setIsNativeAppInstalled(true); // If user switched to app, assume installed
        if (hiddenIframe && document.body.contains(hiddenIframe)) {
          document.body.removeChild(hiddenIframe);
        }
      });

      return () => {
        clearTimeout(timeout);
        if (hiddenIframe && document.body.contains(hiddenIframe)) {
          document.body.removeChild(hiddenIframe);
        }
      };
    }
  }, [isMobile]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/'; // Full reload
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/orders', label: 'Order' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <WashingMachine className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <h1 className="text-lg md:text-xl font-bold text-gray-900">DhobiXpress</h1>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md ml-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by product or Dhobi name..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}

            {!isLoggedIn ? (
              <>
                <Link to="/signin" className="flex items-center text-slate-700 hover:text-blue-600">
                  <User className="w-4 h-4 mr-1" /> Sign In
                </Link>
                <Link to="/signup" className="flex items-center text-slate-700 hover:text-blue-600">
                  <UserPlus className="w-4 h-4 mr-1" /> Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/customerdashboard" className="text-slate-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-slate-700 hover:text-red-600">
                  Logout
                </button>
              </>
            )}

            {/* Cart */}
            <button onClick={onCartClick} className="relative p-2 text-gray-700 hover:text-blue-600">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount && cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <InstallPWAButton />
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-2 mb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search services or Dhobi..."
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg rounded-md">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className="block text-slate-700 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {!isLoggedIn ? (
                <>
                  <li><Link to="/signin" onClick={handleLinkClick} className="block text-slate-700 hover:text-blue-600">Sign In</Link></li>
                  <li><Link to="/signup" onClick={handleLinkClick} className="block text-slate-700 hover:text-blue-600">Sign Up</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/customerdashboard" onClick={handleLinkClick} className="block text-slate-700 hover:text-blue-600">Dashboard</Link></li>
                  <li><button onClick={handleLogout} className="block text-slate-700 hover:text-red-600">Logout</button></li>
                </>
              )}

              <li>
                <button
                  onClick={() => {
                    if (onCartClick) onCartClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative flex items-center text-slate-700 hover:text-blue-600"
                >
                  <ShoppingCart className="w-5 h-5 mr-1" /> Cart
                  {cartItemCount && cartItemCount > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </li>

              {/* ✅ Show Download Button ONLY on Mobile & if PWA NOT Installed & Native App NOT Installed */}
              {isMobile && !isAppInstalled && !isNativeAppInstalled && (
                <li>
                  <a
                    href="/app-debug.apk"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 block text-center"
                  >
                    📲 Download Android App
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}



