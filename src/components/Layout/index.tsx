import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ILayoutProps {
  children: JSX.Element
}

class Layout extends React.Component<ILayoutProps> {
  render() {
    return (
      <div className="flex flex-col h-screen">
        <nav className="bg-gray-800">
          <div className="px-6 md:px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link className="text-2xl font-bold text-white" to="/">
                OpenPasswd
              </Link>
              <div className="text-mg font-bold text-white">
                <a href="//console.openpasswd.com">Login</a>
              </div>
            </div>
          </div>
        </nav>

        {this.props.children}

        <footer className="min-w-full text-center lg:text-left bg-gray-100 text-gray-600">
          <div className="text-center p-6 bg-gray-200">
            <span>© 2022 Copyright:</span>
            <a
              className="text-gray-600 font-semibold"
              href="https://www.openpasswd.com/"
            >
              OpenPasswd
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
