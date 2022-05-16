import { FaPlusCircle } from "react-icons/fa";
import Pencil from "./pencil.png"
import User from "./user.png"
import Zeile from "../components/Zeile";
import React from "react";
import { IconContext } from "react-icons";
import {FaUser} from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import NeueNoteOverlay from "../components/NeueNoteOverlay";
import TabelleZeile from "../components/TabelleZeile";
import { useState } from "react";

function HomePage() {

    const [overlay, openOverlay] = useState(false);

    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <span className="Kurs-Name">Infomatik GK</span>
                <div className="divider"></div>
                <span className="Klasse-Name">Klasse 11</span>
           </div>
           <div className="Lehrer-Semester">
                <div className="Key-LS">
                    <p className="Lehrkraft">Lehrkraft:</p>
                    <p className="Halbjahr">Halbjahr:</p>
                </div>
                <div className="Value-LS">
                    <p className="Schwarzbach">Herr Schwarzbach</p>
                    <p className="Q2">Q2</p>
                </div>
                <div className="circle">
                    <img className="pencil-icon" src={Pencil} alt="pencil-icon"></img>
                </div>
           </div>

           <div className="user-block">
                <FaUser className="UserIcon"/><span>username</span><span className="Teiler"/><span>abmelden</span>
           </div>
       </header>
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
          <button onClick={NeueNoteOverlay} className="NoteHinzufuegen">
            <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
          </button>
        </div>
           <div className="divider-lang"></div>
            <div className="tabelle">
                <div className="Kopfzeile">
                    <span className="punkte">Punkte</span>
                    <div className="spalte"></div>
                    <span className="note">Note</span>
                    <div className="spalte" style={{left: '375px'}}></div>
                    <span className="leistung">Leistung</span>
                    <div className="spalte" style={{left: '575px'}}></div>
                    <span className="datum">Datum</span>
                    <div className="kopfzeilen-divider"></div>
                </div>
                <Zeile punkte="15" note="1" leistung="test" datum="1.2.22"></Zeile>
                <Zeile punkte="14" note="1" leistung="klausur" datum="2.1.23"></Zeile>
                <Zeile punkte="13" note="1" leistung="test" datum="1.7.22"></Zeile>
                <Zeile punkte="12" note="2" leistung="Vortrag" datum="4.2.22"></Zeile>
                <Zeile punkte="11" note="2" leistung="test" datum="1.5.22"></Zeile>
                <Zeile punkte="10" note="2" leistung="Mündlich" datum="7.627.22"></Zeile>
                <Zeile punkte="9" note="3" leistung="test" datum="1.82.22"></Zeile>
                <Zeile punkte="8" note="3" leistung="Vortrag" datum="1.2.342"></Zeile>
                <Zeile punkte="7" note="3" leistung="test" datum="1.4.22"></Zeile>
            </div>
          {overlay && <NeueNoteOverlay/>}
          <button onClick={() => openOverlay(true)} className="NoteHinzufuegen">
            <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
          </button>
       </>
    );
}

export default HomePage;
