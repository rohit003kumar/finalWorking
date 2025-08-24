








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
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);
  const [isNativeAppInstalled, setIsNativeAppInstalled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location]);

  useEffect(() => {
    // ✅ Detect if running as PWA
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsPWAInstalled(isStandalone);

    // ✅ Detect if mobile
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));

    // ✅ Detect if native app installed (deep link method)
    const checkNativeApp = () => {
      const timeout = setTimeout(() => {
        setIsNativeAppInstalled(false);
      }, 1500);

      const hiddenFrame = document.createElement('iframe');
      hiddenFrame.style.display = 'none';
      hiddenFrame.src = 'myapp://open'; // Change to your custom scheme
      document.body.appendChild(hiddenFrame);

      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timeout);
          setIsNativeAppInstalled(true);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange, { once: true });

      return () => {
        clearTimeout(timeout);
        document.body.removeChild(hiddenFrame);
      };
    };

    checkNativeApp();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const now = Date.now();

    // Attempt to open native app
    window.location.href = 'myapp://open';

    setTimeout(() => {
      if (Date.now() - now < 2000) {
        // Redirect to Play Store if app is not installed
        window.location.href = 'https://play.google.com/store/apps/details?id=com.yourapp';
      }
    }, 1500);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
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
            <h1 className="text-lg md:text-xl font-bold text-gray-900">
              DhobiXpress
            </h1>
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
                className="w-full pl-10 pr-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
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

            {/* ✅ Conditional Download Button */}
            {!isPWAInstalled && !isNativeAppInstalled && isMobile && (
              <a
                href="/app-debug.apk"
                onClick={handleDownloadClick}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                📲 Download App
              </a>
            )}
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
              className="border rounded pl-10 pr-3 py-2 w-full placeholder:text-gray-400"
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

              {/* ✅ Conditional Download Button on Mobile Menu */}
              {!isPWAInstalled && !isNativeAppInstalled && isMobile && (
                <li>
                  <a
                    href="/app-debug.apk"
                    onClick={handleDownloadClick}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 block text-center"
                  >
                    📲 Download App
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











