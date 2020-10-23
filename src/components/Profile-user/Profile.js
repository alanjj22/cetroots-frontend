import React from 'react';
import './Profile.css';
import Namecard from'./../Namecard';
import Acard from './../Acard';

function Profile(){
return (<div>
  <Namecard name='Nihara R' sem="5th sem" />

  <Acard head="Infospica" content="i got it" color="con"  />
  <Acard head="Google" content="i am kewl" color="con1" />
  <Acard head="Anime" content="mass aanu" color="con" />
  <Acard head="Hentai" content="creativity at its peak" color="con1" />

</div>);

}

export default Profile;
