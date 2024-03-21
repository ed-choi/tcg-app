import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardContainer from "../components/CardContainer";
import Card from '../interfaces/Card_Interface';


const Collection: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Collections</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <CardContainer id='1' name='testCard' img='temp img' type='artiface' subType='' manaCost='3' rarity='rare' text='some text' power='0' toughness='2' />
      </IonContent>
    </IonPage>
  );
};

export default Collection;