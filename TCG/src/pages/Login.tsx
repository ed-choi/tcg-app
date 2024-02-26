import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
  
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push('/app', 'root', 'replace');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => doLogin()} expand="full">Login</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Login;