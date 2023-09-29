import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const CoffeeFlavorsPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary"> {/* Brown header background color */}
          <IonTitle>Coffee Flavors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Your content for the Coffee Flavors page */}
      </IonContent>
    </IonPage>
  );
};

export default CoffeeFlavorsPage;
