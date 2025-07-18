@@ .. @@
     <header 
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
-        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
+        isScrolled ? 'bg-neutral-900/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
       }`}
     >
       <div className="container mx-auto px-4 flex justify-between items-center">
         <Link to="/" className="flex items-center space-x-2">
           <Logo />
-          <span className="text-xl font-bold text-primary-700">AuraFit AI</span>
+          <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>AuraFit AI</span>
         </Link>
 
         {/* Desktop Navigation */}
@@ -48,7 +48,7 @@
               className={`font-medium transition-colors duration-200 ${
                 location.pathname === link.path
                   ? 'text-primary-600'
-                  : 'text-neutral-700 hover:text-primary-500'
+                  : 'text-neutral-300 hover:text-primary-400'
               }`}
             >
               {link.title}
@@ -69,7 +69,7 @@
         {/* Mobile Menu Toggle */}
         <button
-          className="md:hidden text-neutral-800 focus:outline-none"
+          className="md:hidden text-white focus:outline-none"
           onClick={toggleMenu}
           aria-label="Toggle menu"
         >
@@ -79,7 +79,7 @@
 
       {/* Mobile Menu */}
       {isMenuOpen && (
-        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16">
+        <div className="md:hidden fixed inset-0 bg-neutral-900 z-40 pt-16">
           <nav className="container mx-auto px-4 py-4 flex flex-col">
             {navLinks.map((link) => (
               <Link
@@ -87,9 +87,9 @@
                 to={link.path}
                 className={`text-lg py-4 border-b border-neutral-100 ${
                   location.pathname === link.path
-                    ? 'text-primary-600 font-medium'
-                    : 'text-neutral-700'
+                    ? 'text-primary-400 font-medium'
+                    : 'text-neutral-300'
                 }`}
                 onClick={toggleMenu}
               >
                 {link.title}