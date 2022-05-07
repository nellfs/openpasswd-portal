import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <main className="flex-grow">
        <div className="text-center">
          <div className="px-4 py-6 text-3xl font-bold text-gray-900">
            OpenPasswd - Open Source Password Manager!
          </div>
          <div className="px-4 text-3xl font-bold text-gray-900">
            It's under construction, if you want to store your passwords safely
            this might be what you are looking for
          </div>
        </div>

        <div className="text-center pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-3">
          <div className="px-2 py-6">
            <div className=" text-3xl font-bold text-gray-900">Encrypted</div>
            <div className="pt-4 text-xl font-bold text-gray-900">
              Your password is encrypted
            </div>
          </div>
          <div className="px-2 py-6">
            <div className=" text-3xl font-bold text-gray-900">Self Hosted</div>
            <div className="pt-4 text-xl font-bold text-gray-900">
              You don't trust anyone with your passwords? You can use it
              localhost or deploy anyware you truste!
            </div>
          </div>
          <div className="px-2 py-6">
            <div className=" text-3xl font-bold text-gray-900">Open Source</div>
            <div className="pt-4 text-xl font-bold text-gray-900">
              The full source code is published under the terms of the GNU
              General Public License and made available on GitHub. Use, inspect,
              change, and share at will; contributions by everyone are welcome.
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
