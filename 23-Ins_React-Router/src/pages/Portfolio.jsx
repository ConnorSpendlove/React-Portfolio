import React from 'react';
import PortfolioItem from '../components/Project';
import DigitalDealHunt from "../assets/digitalDealHunt.png"
import PhysicsSandbox from "../assets/PhysicsSandbox.png"

const Portfolio = () => {
  return (
    <div style={styles.container}>
      <h1>Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      <PortfolioItem
    title="Digital Deal Hunt"
    description="Description of the project..."
    imageUrl={DigitalDealHunt}
  />
  <PortfolioItem
    title="Physics Sandbox"
    description="Description of the project..."
    imageUrl={PhysicsSandbox}
  />
    </div>
  
  
  );
};

const styles = {
  container: {
    backgroundColor: '#d0d6b5', // Background color matching the Portfolio tab
    padding: '20px', // Added padding for spacing
  },
};

export default Portfolio;
