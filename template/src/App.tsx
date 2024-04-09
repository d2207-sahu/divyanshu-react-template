import React from 'react';

interface MyAppProps {
  initialCount?: number;
}

const App: React.FC<MyAppProps> = (props?: MyAppProps) => {
  return (
    <center className="bg-pink my-12">
      <h1> React Divyanshu Template</h1>
      <div className="bg-blue-500 text-white p-4">Hello Tailwind CSS!</div>
    </center>
  );
}

export default App;
