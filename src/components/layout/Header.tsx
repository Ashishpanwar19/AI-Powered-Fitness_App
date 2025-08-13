const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Exercise Form', path: '/exercise' },
  { title: 'Workout Plans', path: '/workout' },
  { title: 'Nutrition', path: '/nutrition' },
  { title: 'Progress', path: '/progress' },
  { title: 'Community', path: '/community' },
  { title: 'AR Workout', path: '/ar-workout' },
  { title: 'Sync', path: '/sync' },
  { title: 'Profile', path: '/profile' },
];

    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
       isScrolled ? 'bg-neutral-900/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
         <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>AuraFit AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : 'text-neutral-300 hover:text-primary-400'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/get-started"
            className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-neutral-900 z-40 pt-16">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg py-4 border-b border-neutral-100 ${
                  location.pathname === link.path
                    ? 'text-primary-400 font-medium'
                    : 'text-neutral-300'
                }`}
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>