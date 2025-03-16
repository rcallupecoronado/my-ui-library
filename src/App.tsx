import React from 'react';
import Button from './Components/Button';
import Label from './Components/Label';
import Card from './Components/Card';
import Table from './Components/Table';
import Dropdown from './Components/Dropdown';
import HeroImage from './Components/HeroImage';
import RadioButton from './Components/RadioButton';
import Text from './Components/Text';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My UI Library</h1>

        {/* Button Component */}
        <Button label="Click Me" onClick={() => alert('Button clicked!')} />

        {/* Label Component */}
        <Label text="This is a Label" />

        {/* Card Component */}
        <Card
          title="Card Title"
          description="This is a simple card component."
          content="This is some example content inside the card."
        />

        {/* Table Component */}
        <Table
          headers={['Name', 'Age', 'Country']}
          rows={[
            ['John', 28, 'USA'],
            ['Alice', 25, 'Canada'],
            ['Bob', 30, 'UK'],
          ]}
        />

        <Dropdown
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          onChange={(e) => console.log('Selected:', e.target.value)}
          defaultValue=""
          disabled={false}
          backgroundColor="white"
          textColor="black"
        />

        {/* Hero Image Component */}
        <HeroImage src="https://via.placeholder.com/300" alt="Hero Image" />

        {/* Radio Button Component */}
        <RadioButton
          label="Option 1"
          name="radioGroup"
          value="option1"
          onChange={(e) => console.log(e.target.value)}
        />
        <RadioButton
          label="Option 2"
          name="radioGroup"
          value="option2"
          onChange={(e) => console.log(e.target.value)}
        />

        {/* Text Component */}
        <Text content="This is a sample text component." />
      </header>
    </div>
  );
};

export default App;
