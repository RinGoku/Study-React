import * as React from 'react';
import './App.css';
import './App.scss';
interface ColorUnitProps {
  thisColor: string;
}
class ColorUnit extends React.Component<ColorUnitProps, {}> {
  public render() {
    return (
      <section className="color-unit" style={{backgroundColor: this.props.thisColor}}>
      </section>
    );
  }
}

class App extends React.Component {
  hexMap = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  };
  constructor(props: any) {
    super(props);
    this.state = {
      colors: this.createColors()
    }
  }
  createColors(): string[] {
    const colors = [];
    for(let i = 1; i < 256; i+=3) {
      for(let j = 1; j < 256; j+=3) {
        for(let k = 1; k < 256; k+=3) {
          colors.push(`rgb(${i},${j},${k})`);
        }
      }
    }
    return colors;
  }
  
  public render() {
   const colors = (this.state as any).colors.map((thisColor: any) => {
    return (
      <ColorUnit key={thisColor} thisColor={thisColor}/>
    );
   });
    return (
      <div className="App">
        <section className="colors-wrapper">
          {colors}
        </section>
      </div>
    );
  }
}

export default App;
