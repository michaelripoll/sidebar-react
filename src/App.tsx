import React from 'react';
import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcAdvertising } from 'react-icons/fc';
import profileImage from './person.jpg';

function App() {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "Hola",
      icon: FcAdvertising,
      url: '/'
    }
  ];

  const card: SideBarMenuCard = 
  {
    id: "card01",
    displayName: "Michael Ripoll",
    title: "Developer",
    photoUrl: profileImage,
    url: "/"
  }
  
  return (
    <div>
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
