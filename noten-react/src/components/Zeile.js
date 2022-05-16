import React from "react";

function Zeile(props) {
    return (
        <div>
            <div className="zeile-content">
                <span className="punkte-zeile">{props.punkte}</span>
                <span className="note-zeile">{props.note}</span>
                <span className="leistung-zeile">{props.leistung}</span>
                <span className="datum-zeile">{props.datum}</span>
            </div>
            <div className="zeilen-divider"></div>
        </div>
    );
}
export default Zeile;