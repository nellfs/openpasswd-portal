import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <main className="flex-grow">
        <div className="text-center">
          <div className="px-4 py-6 text-3xl font-bold text-gray-900">
            OpenPasswd - Open Source Password Manager!
          </div>
          <div className="px-4 py-6 text-3xl font-bold text-gray-900">
            It's under construction, if you want to store your passwords safely
            this might be what you are looking for
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
