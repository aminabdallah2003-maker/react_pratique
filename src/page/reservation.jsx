import { useState } from 'react'
import { Link } from 'react-router-dom';
import './../Appli.css'

function Reservation() {
 const CHAMBRES = [
  { id: 1, type: 'piece simple',prix:50000 },
  { id: 2, type: 'chambre salon',prix:80000 },
  { id: 3, type: '2 chambres salon',prix:150000 },
  {id:  4, type: 'suite',prix :200000},
 ];

  const [nomComplet, setNomComplet] = useState(''); 
  const [numero, setNumero] = useState('');
  const [numeroCNI, setNumeroCNI ] = useState('');
  const [duree, setDuree] = useState(0);
  const [chambreid, setChambreid] = useState('')


  const[reservations, setReservations] = useState([])

    function ajouter ({nomComplet,numero,numeroCNI,duree,chambreid}){
        let reservation = {
          id: Date.now(),
          date: Date.now(),
          nomComplet: nomComplet,
          numero: numero,
          numeroCNI: numeroCNI,
          duree: duree,
          statut: 'en attente',
          chambre : CHAMBRES.find((chambre) => chambre.id == chambreid),
        }
        setReservations([reservation, ...reservations])
    }
        function changerStatut ({id, nouvautatut}){
          const nouveauReservation = reservations.map(
            reservation => reservation.id == id ? {...reservation , statut:nouvautatut} : reservation
          );
          setReservations (nouveauReservation);
        }

        function supprimer(id) {
  const nouvelleListe = reservations.filter(reservation => reservation.id !== id);
  setReservations(nouvelleListe);
}

  return (
    <>
   
    <h2>formulaire de reservation</h2>
    <div className="formulaire">
      <label htmlFor="nom">Nom Complet</label><br />
      <input type="text" id="nom" placeholder="Nom complet" value={nomComplet} onChange={(event) => 
        setNomComplet(event.target.value)
        } required /> <br />
      <label htmlFor="numero">Votre contact</label> <br />
      <input type="number" id="numero" placeholder="Numéro de téléphone" value={numero} onChange={(event) => 
        setNumero(event.target.value)}
        /> <br />
        <label htmlFor="cni">N° de la carte d'identité</label>
        <br />
        <input type="text" id='cni' placeholder='n° de votre Carte identité' value={numeroCNI} onChange={(e) =>
           setNumeroCNI (e.target.value)
          }/> <br />
        <label htmlFor="duree">duree de sejour</label><br />
        <input type="number" id="duree" placeholder="Durée de séjour (en jours)" value={duree} onChange={(event) =>
         setDuree(event.target.value)
          }/>
            <br />
            <label htmlFor="chambres">selectioner la chambre</label>
            <br />
          <select name="chambreid" id="chambreid" value={chambreid} onChange={(e)=> setChambreid(e.target.value) } >
            <option value="">--</option>
            {
              CHAMBRES.map((chambre)=>{
                return(
                 <option  value={chambre.id}>{chambre.type} </option>
                )
              } )
            }
          </select>
          <br />
          <button className='btn_submit'onClick={()=>{ 
            if (nomComplet=='' || numero=='' || numeroCNI=='' || duree==0 || chambreid==''){
              alert ('veuillez remplir tous les champs');
              return;
            }

             ajouter ({nomComplet:nomComplet,numero:numero,numeroCNI:numeroCNI,duree:duree,chambreid:chambreid})

             setNomComplet('')
             setNumero('')
             setNumeroCNI('')
             setDuree(0)
             setChambreid('')


          } }>Reserver</button>
         </div>






    <div>
      {
        reservations.map((reservation)=>{
          return(
            <div key={reservation.id}>
              
              <p>votre reservation</p>
              
            <p> {reservation.nomComplet} </p>
            <p> {reservation.chambre && reservation.chambre.type} </p>
            <p> {reservation.numero} </p>
            <p> {reservation.numeroCNI} </p>
             <p> {reservation.statut} </p>
            <div>
              <button className='btn1' onClick={()=>{
                changerStatut({id: reservation.id, nouvautatut: 'confirmée'})
              }}>confirmer</button>
              <button className='btn2' onClick={()=>{
                 changerStatut({id: reservation.id, nouvautatut: 'annulée'})
              }}>Annuler</button>
              <button className='btn3' onClick={() => {
                if(confirm('Êtes-vous sûr ?')) supprimer(reservation.id)
                  }}>suprimer</button>
            </div>
            </div>

          )
        })
        }
      
    </div>
    </>
  )
}

export default Reservation

