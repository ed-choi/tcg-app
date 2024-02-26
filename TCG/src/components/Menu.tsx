import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { skullOutline, libraryOutline, logOutOutline, constructOutline, peopleOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Play',
    url: '/Play',
    iosIcon: skullOutline,
    mdIcon: skullOutline
  },
  {
    title: 'Decks',
    url: '/Decks',
    iosIcon: constructOutline,
    mdIcon: constructOutline
  },
  {
    title: 'Collection',
    url: '/Collection',
    iosIcon: libraryOutline,
    mdIcon: libraryOutline
  },
  {
    title: 'Friends',
    url: '/Friends',
    iosIcon: peopleOutline,
    mdIcon: peopleOutline
  },
  {
    title: 'Logout',
    url: '/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menu-options">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>Hello, username</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
