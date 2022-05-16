import React from "react";
import { IconContext } from "react-icons";
import {FaUser} from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import {FaPlusCircle} from "react-icons/fa";
import NeueNoteOverlay from "../components/NeueNoteOverlay";
import TabelleZeile from "../components/TabelleZeile";
import { useState } from "react";

function HomePage() {

    const [overlay, openOverlay] = useState(false);

    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <span>Kurs/Klasse</span><span className="Teiler"/><span>Jahrgang</span>
           </div>
           <div className="Lehrer-Semester">
              <b>Lehrkraft: </b>
              <span>LehrerVariabel</span><br/>
              <b>Halbjahr: </b>
              <span>Zeitraum</span>
              <RiPencilFill className="PencilIcon" size="1.5em"/>
          </div>
           <div className="user-block">
                <FaUser className="UserIcon"/><span>username</span><span className="Teiler"/><span>abmelden</span>
           </div>
       </header>
       <body>
       {/*Rechte Seite unten Statistiken*/}
        <div className="Uebersicht">
          <div className="UebersichtBox">
            Durchschnitt: <span className="Variablen">1,1 </span>
          </div>
          <div className="UebersichtBox">
            Note: <span className="Variablen">123456 </span>
          </div>
          <div className="UebersichtBox">
            Punkte Tendenz: <span className="Variablen">1,12 </span>
          </div>
          {overlay && <NeueNoteOverlay/>}
          <button onClick={() => openOverlay(true)} className="NoteHinzufuegen">
            <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
          </button>
        </div>
      {/*Tabelle*/}
        <table className="Tabelle">
          <tr>
            <th>Punkte</th>
            <th>Note</th>
            <th>Leistung</th>
            <th>Datum</th>
          </tr>
          <TabelleZeile/>
          <TabelleZeile/>
          <TabelleZeile/>
          <TabelleZeile/>
          <TabelleZeile/>
        </table>
       </body>
       </>
    );
}

export default HomePage;
