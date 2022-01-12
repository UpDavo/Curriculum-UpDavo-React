import React from "react";
import Pagetitle from "../elements/Pagetitle";
import { ElfsightWidget } from "react-elfsight-widget";

function Instagram() {
  return (
    <section id="instagram">
      <div className="container">
        <Pagetitle title="Viajes y Hobbies" />
        <div className="row">
          <div className="col-12">
            <ElfsightWidget widgetID="436a04bc-8b3b-4839-85f6-1042c8594df8" />;
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
